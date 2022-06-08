<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\Prestation\IndexPrestation;
use App\Http\Requests\Prestation\StorePrestation;
use App\Http\Requests\Prestation\UpdatePrestation;
use App\Http\Requests\Prestation\DestroyPrestation;
use App\Models\Prestation;
use App\Repositories\Prestations;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class PrestationController  extends Controller
{
    private ApiResponse $api;
    private Prestations $repo;
    public function __construct(ApiResponse $apiResponse, Prestations $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexPrestation $request)
    {
        $query = Prestation::query(); // You can extend this however you want.
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('note')->title('Note')->sort()->searchable(),
            Column::name('traitement')->title('Traitement')->sort()->searchable(),
            Column::name('montant')->title('Montant')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of Prestations")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = Prestation::query()->select(Prestation::getModel()->getTable().'.*'); // You can extend this however you want.
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StorePrestation $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StorePrestation $request)
    {
        try {
            $data = $request->sanitizedObject();
            $prestation = $this->repo::store($data);
            return $this->api->success()->message('Prestation Created')->payload($prestation)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Prestation $prestation
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, Prestation $prestation)
    {
        try {
            $payload = $this->repo::init($prestation)->show($request);
            return $this->api->success()
                        ->message("Prestation $prestation->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdatePrestation $request
     * @param {$modelBaseName} $prestation
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdatePrestation $request, Prestation $prestation)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($prestation)->update($data);
            return $this->api->success()->message("Prestation has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Prestation $prestation
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyPrestation $request, Prestation $prestation)
    {
        $res = $this->repo::init($prestation)->destroy();
        return $this->api->success()->message("Prestation has been deleted")->payload($res)->code(200)->send();
    }

}
