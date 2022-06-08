<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\SallesDExamen\IndexSallesDExamen;
use App\Http\Requests\SallesDExamen\StoreSallesDExamen;
use App\Http\Requests\SallesDExamen\UpdateSallesDExamen;
use App\Http\Requests\SallesDExamen\DestroySallesDExamen;
use App\Models\SallesDExamen;
use App\Repositories\SallesDExamens;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class SallesDExamenController  extends Controller
{
    private ApiResponse $api;
    private SallesDExamens $repo;
    public function __construct(ApiResponse $apiResponse, SallesDExamens $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexSallesDExamen $request)
    {
        $query = SallesDExamen::query(); // You can extend this however you want.
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('name')->title('Name')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of SallesDExamens")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = SallesDExamen::query()->select(SallesDExamen::getModel()->getTable().'.*'); // You can extend this however you want.
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreSallesDExamen $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreSallesDExamen $request)
    {
        try {
            $data = $request->sanitizedObject();
            $sallesDExaman = $this->repo::store($data);
            return $this->api->success()->message('Salles D Examen Created')->payload($sallesDExaman)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param SallesDExamen $sallesDExaman
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, SallesDExamen $sallesDExaman)
    {
        try {
            $payload = $this->repo::init($sallesDExaman)->show($request);
            return $this->api->success()
                        ->message("Salles D Examen $sallesDExaman->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateSallesDExamen $request
     * @param {$modelBaseName} $sallesDExaman
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateSallesDExamen $request, SallesDExamen $sallesDExaman)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($sallesDExaman)->update($data);
            return $this->api->success()->message("Salles D Examen has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param SallesDExamen $sallesDExaman
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroySallesDExamen $request, SallesDExamen $sallesDExaman)
    {
        $res = $this->repo::init($sallesDExaman)->destroy();
        return $this->api->success()->message("Salles D Examen has been deleted")->payload($res)->code(200)->send();
    }

}
