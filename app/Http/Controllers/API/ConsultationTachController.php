<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\ConsultationTach\IndexConsultationTach;
use App\Http\Requests\ConsultationTach\StoreConsultationTach;
use App\Http\Requests\ConsultationTach\UpdateConsultationTach;
use App\Http\Requests\ConsultationTach\DestroyConsultationTach;
use App\Models\ConsultationTach;
use App\Repositories\ConsultationTaches;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;
use Barryvdh\DomPDF\Facade\Pdf;

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
    public function index(IndexConsultationTach $request){
        $query = ConsultationTach::query(); // You can extend this however you want.
        $consultation_id = $request->get('consultation_id');
        if($consultation_id){
            $query->where('consultation_id' , "=" , $consultation_id);
        }
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
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
        $consultation_id = $request->get('consultation_id');
        if($consultation_id){
            $query->where('consultation_id' , "=" , $consultation_id);
        }
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
    public function show(Request $request, ConsultationTach $consultationTach)
    {
        try {
            $payload = $this->repo::init($consultationTach)->show($request);
            return $this->api->success()
                        ->message("Consultation Tach $consultationTach->id")
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
    public function update(UpdateConsultationTach $request, ConsultationTach $consultationTach)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($consultationTach)->update($data);
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
    public function destroy(DestroyConsultationTach $request, ConsultationTach $consultationTach)
    {
        $res = $this->repo::init($consultationTach)->destroy();
        return $this->api->success()->message("Consultation Tach has been deleted")->payload($res)->code(200)->send();
    }

    /**
     * Print Stock
     */
    public function printInvoice(Request $request){
        try {
            $consultation_tache_id = $request->get('consultation_tache_id');
            $consultation_tache = ConsultationTach::findOrFail($consultation_tache_id);
            if($consultation_tache){
                $consultation_tache->load([
                    'consultation',
                    'consultation.orthoptiste',
                    'tache',
                    'consultation.fichier',
                    'consultation.fichier.patient',
                ]);
                $data = ['ct' => $consultation_tache];
                $pdf = PDF::loadView('pdf.consultation-tache-invoice', $data);
                $pdf->setPaper('a4')->setWarnings(true);
                return $pdf->stream('ConsultationTachInvoice.pdf');
            }else{
                return $this->api->failed()->message("Consultation Tache not found!")->payload([])->code(500)->send();
            }
           
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    
    /**
     * Print Stock
     */
    public function printReport(Request $request){
        try {
            $consultation_tache_id = $request->get('consultation_tache_id');
            $consultation_tache = ConsultationTach::findOrFail($consultation_tache_id);
            if($consultation_tache){
                $consultation_tache->load([
                    'consultation',
                    'consultation.orthoptiste',
                    'tache',
                    'consultation.fichier',
                    'consultation.fichier.patient',
                ]);
                $data = ['ct' => $consultation_tache];
                $pdf = PDF::loadView('pdf.consultation-tache-report', $data);
                $pdf->setPaper('a4')->setWarnings(true);
                return $pdf->stream('ConsultationTachReport.pdf');
            }else{
                return $this->api->failed()->message("Consultation Tache not found!")->payload([])->code(500)->send();
            }
           
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

}
