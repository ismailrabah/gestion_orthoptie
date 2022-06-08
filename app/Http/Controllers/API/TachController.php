<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\Tach\IndexTach;
use App\Http\Requests\Tach\StoreTach;
use App\Http\Requests\Tach\UpdateTach;
use App\Http\Requests\Tach\DestroyTach;
use App\Models\Tach;
use App\Repositories\Taches;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class TachController  extends Controller
{
    private ApiResponse $api;
    private Taches $repo;
    public function __construct(ApiResponse $apiResponse, Taches $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexTach $request)
    {
        $query = Tach::query(); // You can extend this however you want.
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('name')->title('Name')->sort()->searchable(),
            Column::name('price')->title('Price')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of Taches")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = Tach::query()->select(Tach::getModel()->getTable().'.*'); // You can extend this however you want.
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreTach $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreTach $request)
    {
        try {
            $data = $request->sanitizedObject();
            $tach = $this->repo::store($data);
            return $this->api->success()->message('Tach Created')->payload($tach)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Tach $tach
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, Tach $tach)
    {
        try {
            $payload = $this->repo::init($tach)->show($request);
            return $this->api->success()
                        ->message("Tach $tach->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateTach $request
     * @param {$modelBaseName} $tach
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateTach $request, Tach $tach)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($tach)->update($data);
            return $this->api->success()->message("Tach has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Tach $tach
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyTach $request, Tach $tach)
    {
        $res = $this->repo::init($tach)->destroy();
        return $this->api->success()->message("Tach has been deleted")->payload($res)->code(200)->send();
    }

}
