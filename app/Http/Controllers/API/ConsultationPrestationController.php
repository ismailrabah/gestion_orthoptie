<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\ConsultationPrestation\IndexConsultationPrestation;
use App\Http\Requests\ConsultationPrestation\StoreConsultationPrestation;
use App\Http\Requests\ConsultationPrestation\UpdateConsultationPrestation;
use App\Http\Requests\ConsultationPrestation\DestroyConsultationPrestation;
use App\Models\ConsultationPrestation;
use App\Repositories\ConsultationPrestations;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class ConsultationPrestationController  extends Controller
{
    private ApiResponse $api;
    private ConsultationPrestations $repo;
    public function __construct(ApiResponse $apiResponse, ConsultationPrestations $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexConsultationPrestation $request)
    {
        $query = ConsultationPrestation::query(); // You can extend this however you want.
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('updated_at')->title('Updated At')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of ConsultationPrestations")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = ConsultationPrestation::query()->select(ConsultationPrestation::getModel()->getTable().'.*'); // You can extend this however you want.
        $consultation_id = $request->get('consultation_id');
        if($consultation_id){
            $query->where('consultation_id' , "=" , $consultation_id);
        }
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreConsultationPrestation $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreConsultationPrestation $request)
    {
        try {
            $data = $request->sanitizedObject();
            $consultationPrestation = $this->repo::store($data);
            return $this->api->success()->message('Consultation Prestation Created')->payload($consultationPrestation)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param ConsultationPrestation $consultationPrestation
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, ConsultationPrestation $consultationPrestation)
    {
        try {
            $payload = $this->repo::init($consultationPrestation)->show($request);
            return $this->api->success()
                        ->message("Consultation Prestation $consultationPrestation->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateConsultationPrestation $request
     * @param {$modelBaseName} $consultationPrestation
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateConsultationPrestation $request, ConsultationPrestation $consultationPrestation)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($consultationPrestation)->update($data);
            return $this->api->success()->message("Consultation Prestation has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param ConsultationPrestation $consultationPrestation
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyConsultationPrestation $request, ConsultationPrestation $consultationPrestation)
    {
        $res = $this->repo::init($consultationPrestation)->destroy();
        return $this->api->success()->message("Consultation Prestation has been deleted")->payload($res)->code(200)->send();
    }

}
