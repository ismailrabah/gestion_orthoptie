<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\Fichier\IndexFichier;
use App\Http\Requests\Fichier\StoreFichier;
use App\Http\Requests\Fichier\UpdateFichier;
use App\Http\Requests\Fichier\DestroyFichier;
use App\Models\Fichier;
use App\Repositories\Fichiers;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class FichierController  extends Controller
{
    private ApiResponse $api;
    private Fichiers $repo;
    public function __construct(ApiResponse $apiResponse, Fichiers $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexFichier $request)
    {
        $query = Fichier::query(); // You can extend this however you want.
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('medcin_traitant')->title('Medcin Traitant')->sort()->searchable(),
            Column::name('titre')->title('Titre')->sort()->searchable(),
            Column::name('updated_at')->title('Updated At')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of Fichiers")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = Fichier::query()->select(Fichier::getModel()->getTable().'.*'); // You can extend this however you want.
        $patient_id = $request->get('patient_id');
        if($patient_id)
            $query->where('patient_id' ,"=",$patient_id);
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreFichier $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreFichier $request)
    {
        try {
            $data = $request->sanitizedObject();
            $fichier = $this->repo::store($data);
            return $this->api->success()->message('Fichier Created')->payload($fichier)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Fichier $fichier
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, Fichier $fichier)
    {
        try {
            $payload = $this->repo::init($fichier)->show($request);
            return $this->api->success()
                        ->message("Fichier $fichier->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateFichier $request
     * @param {$modelBaseName} $fichier
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateFichier $request, Fichier $fichier)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($fichier)->update($data);
            return $this->api->success()->message("Fichier has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Fichier $fichier
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyFichier $request, Fichier $fichier)
    {
        $res = $this->repo::init($fichier)->destroy();
        return $this->api->success()->message("Fichier has been deleted")->payload($res)->code(200)->send();
    }

}
