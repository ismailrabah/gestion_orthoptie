<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\RendezVou\IndexRendezVou;
use App\Http\Requests\RendezVou\StoreRendezVou;
use App\Http\Requests\RendezVou\UpdateRendezVou;
use App\Http\Requests\RendezVou\DestroyRendezVou;
use App\Models\RendezVou;
use App\Repositories\RendezVouses;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class RendezVouController  extends Controller
{
    private ApiResponse $api;
    private RendezVouses $repo;
    public function __construct(ApiResponse $apiResponse, RendezVouses $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexRendezVou $request)
    {
        $query = RendezVou::query(); // You can extend this however you want.
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('date')->title('Date')->sort()->searchable(),
            Column::name('updated_at')->title('Updated At')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of RendezVous")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = RendezVou::query()->select(RendezVou::getModel()->getTable().'.*'); // You can extend this however you want.
        $patient_id = $request->get('patient_id');
        if($patient_id)
            $query->where('patient_id' ,"=",$patient_id);
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRendezVou $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreRendezVou $request)
    {
        try {
            $data = $request->sanitizedObject();
            $rendezVou = $this->repo::store($data);
            return $this->api->success()->message('Rendez Vou Created')->payload($rendezVou)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param RendezVou $rendezVou
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, RendezVou $rendezVou)
    {
        try {
            $payload = $this->repo::init($rendezVou)->show($request);
            return $this->api->success()
                        ->message("Rendez Vou $rendezVou->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRendezVou $request
     * @param {$modelBaseName} $rendezVou
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateRendezVou $request, RendezVou $rendezVou)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($rendezVou)->update($data);
            return $this->api->success()->message("Rendez Vou has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param RendezVou $rendezVou
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyRendezVou $request, RendezVou $rendezVou)
    {
        $res = $this->repo::init($rendezVou)->destroy();
        return $this->api->success()->message("Rendez Vou has been deleted")->payload($res)->code(200)->send();
    }

}
