<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\ConsultationTach\IndexConsultationTach;
use App\Http\Requests\ConsultationTach\StoreConsultationTach;
use App\Http\Requests\ConsultationTach\UpdateConsultationTach;
use App\Http\Requests\ConsultationTach\DestroyConsultationTach;
use App\Models\Consultation;
use App\Models\ConsultationTach;
use App\Repositories\ConsultationTaches;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class ConsultationTachController  extends Controller
{
    private ApiResponse $api;
    private ConsultationTaches $repo;
    public function __construct(ApiResponse $apiResponse, ConsultationTaches $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexConsultationTach $request)
    {
        $query = ConsultationTach::query(); // You can extend this however you want.
        $cols = [
            Column::name('remises')->title('Remises')->sort()->searchable(),
            Column::name('pourcentage_remises')->title('Pourcentage Remises')->sort()->searchable(),
            Column::name('updated_at')->title('Updated At')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of ConsultationTaches")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = ConsultationTach::query()->select(ConsultationTach::getModel()->getTable().'.*'); // You can extend this however you want.
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreConsultationTach $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreConsultationTach $request)
    {
        try {
            $data = $request->sanitizedObject();
            $consultationTach = $this->repo::store($data);
            return $this->api->success()->message('Consultation Tach Created')->payload($consultationTach)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param ConsultationTach $consultationTach
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, $consultation , $tache)
    {
        try {
            $ct = ConsultationTach::where('consultation_id' , '=' , $consultation )->where('tache_id' , '=' , $tache )->first();
            $payload = $this->repo::init($ct)->show($request);
            return $this->api->success()
                        ->message("Consultation Tach $consultation / $tache")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateConsultationTach $request
     * @param {$modelBaseName} $consultationTach
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateConsultationTach $request, $consultation , $tache)
    {
        try {
            $data = $request->sanitizedObject();
            $ct = ConsultationTach::where('consultation_id' , '=' , $consultation )->where('tache_id' , '=' , $tache )->first();
            $res = $this->repo::init($ct)->update($data);
            return $this->api->success()->message("Consultation Tach has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param ConsultationTach $consultationTach
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyConsultationTach $request, $consultation , $tache)
    {
        $ct = ConsultationTach::where('consultation_id' , '=' , $consultation )->where('tache_id' , '=' , $tache )->first();
        $res = $this->repo::init($ct)->destroy();
        return $this->api->success()->message("Consultation Tach has been deleted")->payload($res)->code(200)->send();
    }

}
