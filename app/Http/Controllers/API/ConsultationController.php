<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\Consultation\IndexConsultation;
use App\Http\Requests\Consultation\StoreConsultation;
use App\Http\Requests\Consultation\UpdateConsultation;
use App\Http\Requests\Consultation\DestroyConsultation;
use App\Models\Consultation;
use App\Repositories\Consultations;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;
use Barryvdh\DomPDF\Facade\Pdf;

class ConsultationController  extends Controller
{
    private ApiResponse $api;
    private Consultations $repo;
    public function __construct(ApiResponse $apiResponse, Consultations $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexConsultation $request)
    {
        $query = Consultation::query(); // You can extend this however you want.
        $fichier = $request->get('fichier');
        if($fichier){
            $query->with('fichier')->where('fichier.fichier_id' ,"=",$fichier);
        }
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('note')->title('Note')->sort()->searchable(),
            Column::name('date')->title('Date')->sort()->searchable(),
            Column::name('updated_at')->title('Updated At')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of Consultations")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = Consultation::query()->select(Consultation::getModel()->getTable().'.*'); // You can extend this however you want.
        $fichier_id = $request->get('fichier_id');
        if($fichier_id){
            $query->where('fichier_id' ,"=",$fichier_id);
        }
        return $this->repo::dt($query);
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreConsultation $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreConsultation $request){
        try {
            $data = $request->sanitizedObject();
            $consultation = $this->repo::store($data);
            return $this->api->success()->message('Consultation Created')->payload($consultation)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Consultation $consultation
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, Consultation $consultation)
    {
        try {
            $payload = $this->repo::init($consultation)->show($request);
            return $this->api->success()
                        ->message("Consultation $consultation->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateConsultation $request
     * @param {$modelBaseName} $consultation
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateConsultation $request, Consultation $consultation)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($consultation)->update($data);
            return $this->api->success()->message("Consultation has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Consultation $consultation
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyConsultation $request, Consultation $consultation)
    {
        $res = $this->repo::init($consultation)->destroy();
        return $this->api->success()->message("Consultation has been deleted")->payload($res)->code(200)->send();
    }

    
    /**
     * Print Stock
     */
    public function print(Request $request){
        try {
            $consultation_id = $request->get('consultation_id');
            $consultation = Consultation::findOrFail($consultation_id);
            if($consultation){
                $consultation->load([
                    // 'taches',
                    // 'prestations',
                    'fichier',
                    'fichier.patient',
                ]);
                $data = ['consultation' => $consultation];
                $pdf = PDF::loadView('pdf.consultation', $data);
                $pdf->setPaper('a4')->setWarnings(true);
                return $pdf->stream('Consultation.pdf');
            }else{
                return $this->api->failed()->message("Consultation not found!")->payload([])->code(500)->send();
            }
           
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }
}
