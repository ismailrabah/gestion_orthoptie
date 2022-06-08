<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\SalleDAttente\IndexSalleDAttente;
use App\Http\Requests\SalleDAttente\StoreSalleDAttente;
use App\Http\Requests\SalleDAttente\UpdateSalleDAttente;
use App\Http\Requests\SalleDAttente\DestroySalleDAttente;
use App\Models\SalleDAttente;
use App\Repositories\SalleDAttentes;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class SalleDAttenteController  extends Controller
{
    private ApiResponse $api;
    private SalleDAttentes $repo;
    public function __construct(ApiResponse $apiResponse, SalleDAttentes $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexSalleDAttente $request)
    {
        $query = SalleDAttente::query(); // You can extend this however you want.
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('status')->title('Status')->sort()->searchable(),
            Column::name('start_time')->title('Start Time')->sort()->searchable(),
            Column::name('end_time')->title('End Time')->sort()->searchable(),
            Column::name('max_numbers')->title('Max Numbers')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of SalleDAttentes")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = SalleDAttente::query()->select(SalleDAttente::getModel()->getTable().'.*'); // You can extend this however you want.
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreSalleDAttente $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreSalleDAttente $request)
    {
        try {
            $data = $request->sanitizedObject();
            $salleDAttente = $this->repo::store($data);
            return $this->api->success()->message('Salle D Attente Created')->payload($salleDAttente)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param SalleDAttente $salleDAttente
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, SalleDAttente $salleDAttente)
    {
        try {
            $payload = $this->repo::init($salleDAttente)->show($request);
            return $this->api->success()
                        ->message("Salle D Attente $salleDAttente->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateSalleDAttente $request
     * @param {$modelBaseName} $salleDAttente
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateSalleDAttente $request, SalleDAttente $salleDAttente)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($salleDAttente)->update($data);
            return $this->api->success()->message("Salle D Attente has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param SalleDAttente $salleDAttente
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroySalleDAttente $request, SalleDAttente $salleDAttente)
    {
        $res = $this->repo::init($salleDAttente)->destroy();
        return $this->api->success()->message("Salle D Attente has been deleted")->payload($res)->code(200)->send();
    }

}
