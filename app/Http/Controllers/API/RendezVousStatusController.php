<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\RendezVousStatus\IndexRendezVousStatus;
use App\Http\Requests\RendezVousStatus\StoreRendezVousStatus;
use App\Http\Requests\RendezVousStatus\UpdateRendezVousStatus;
use App\Http\Requests\RendezVousStatus\DestroyRendezVousStatus;
use App\Models\RendezVousStatus;
use App\Repositories\RendezVousStatuses;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class RendezVousStatusController  extends Controller
{
    private ApiResponse $api;
    private RendezVousStatuses $repo;
    public function __construct(ApiResponse $apiResponse, RendezVousStatuses $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexRendezVousStatus $request)
    {
        $query = RendezVousStatus::query(); // You can extend this however you want.
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('name')->title('Name')->sort()->searchable(),
            Column::name('is_default')->title('Is Default')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of RendezVousStatuses")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = RendezVousStatus::query()->select(RendezVousStatus::getModel()->getTable().'.*'); // You can extend this however you want.
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRendezVousStatus $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreRendezVousStatus $request)
    {
        try {
            $data = $request->sanitizedObject();
            $rendezVousStatus = $this->repo::store($data);
            return $this->api->success()->message('Rendez Vous Status Created')->payload($rendezVousStatus)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param RendezVousStatus $rendezVousStatus
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, RendezVousStatus $rendezVousStatus)
    {
        try {
            $payload = $this->repo::init($rendezVousStatus)->show($request);
            return $this->api->success()
                        ->message("Rendez Vous Status $rendezVousStatus->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRendezVousStatus $request
     * @param {$modelBaseName} $rendezVousStatus
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateRendezVousStatus $request, RendezVousStatus $rendezVousStatus)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($rendezVousStatus)->update($data);
            return $this->api->success()->message("Rendez Vous Status has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param RendezVousStatus $rendezVousStatus
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyRendezVousStatus $request, RendezVousStatus $rendezVousStatus)
    {
        $res = $this->repo::init($rendezVousStatus)->destroy();
        return $this->api->success()->message("Rendez Vous Status has been deleted")->payload($res)->code(200)->send();
    }

}
