<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Consultation\IndexConsultation;
use App\Http\Requests\Consultation\StoreConsultation;
use App\Http\Requests\Consultation\UpdateConsultation;
use App\Http\Requests\Consultation\DestroyConsultation;
use App\Models\Consultation;
use App\Models\Patient;
use App\Repositories\Consultations;
use App\Repositories\ConsultationTaches;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class ConsultationController  extends Controller
{
    private Consultations $repo;
    private ConsultationTaches $consultation_taches;
    public function __construct(Consultations $repo , ConsultationTaches $consultation_taches)
    {
        $this->repo = $repo;
        $this->consultation_taches = $consultation_taches;
    }

    /**
    * Display a listing of the resource.
    *
    * @param  Request $request
    * @return    \Inertia\Response
    * @throws  \Illuminate\Auth\Access\AuthorizationException
    */
    public function index(Request $request): \Inertia\Response
    {
        $patient_id = $request->get('patient_id');
        if($patient_id){
            $patient = Patient::findOrFail($patient_id);
        }else{
            $patient = null; 
        }
        $this->authorize('viewAny', Consultation::class);
        return Inertia::render('Consultations/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', Consultation::class),
                "create" => \Auth::user()->can('create', Consultation::class),
            ],
            "columns" => $this->repo::dtColumns($patient_id),
            "patient" => $patient
        ]);
    }

    /**
    * Display a listing of the resource.
    *
    * @param  Request $request
    * @return    \Inertia\Response
    * @throws  \Illuminate\Auth\Access\AuthorizationException
    */
    public function manage(Request $request , Consultation $consultation): \Inertia\Response
    {
        $consultation->load([
            'orthoptiste',
            'fichier',
            'fichier.patient',
            'salle',
        ]);
        $this->authorize('viewAny', Consultation::class);
        return Inertia::render('Consultations/Manage',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', Consultation::class),
                "create" => \Auth::user()->can('create', Consultation::class),
            ],
            "tachesColumns" => $this->consultation_taches::dtColumns(),
            "consultation" => $consultation
        ]);
    }

    /**
    * Show the form for creating a new resource.
    *
    * @return  \Inertia\Response
    */
    public function create()
    {
        $this->authorize('create', Consultation::class);
        return Inertia::render("Consultations/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', Consultation::class),
            "create" => \Auth::user()->can('create', Consultation::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreConsultation $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreConsultation $request)
    {
        try {
            $data = $request->sanitizedObject();
            $consultation = $this->repo::store($data);
            return back()->with(['success' => "The Consultation was created succesfully."]);
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return back()->with([
                'error' => $exception->getMessage(),
            ]);
        }
    }

    /**
    * Display the specified resource.
    *
    * @param Request $request
    * @param Consultation $consultation
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, Consultation $consultation)
    {
        try {
            $this->authorize('view', $consultation);
            $model = $this->repo::init($consultation)->show($request);
            return Inertia::render("Consultations/Show", ["model" => $model]);
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return back()->with([
                'error' => $exception->getMessage(),
            ]);
        }
    }

    /**
    * Show Edit Form for the specified resource.
    *
    * @param Request $request
    * @param Consultation $consultation
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, Consultation $consultation)
    {
        try {
            $this->authorize('update', $consultation);
            //Fetch relationships

            $consultation->load([
                'orthoptiste',
                'fichier',
                'fichier.patient',
                'salle',
            ]);
            return Inertia::render("Consultations/Edit", ["model" => $consultation]);
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return back()->with([
                'error' => $exception->getMessage(),
            ]);
        }
    }

    /**
    * Update the specified resource in storage.
    *
    * @param UpdateConsultation $request
    * @param {$modelBaseName} $consultation
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateConsultation $request, Consultation $consultation)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($consultation)->update($data);
            return back()->with(['success' => "The Consultation was updated succesfully."]);
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return back()->with([
                'error' => $exception->getMessage(),
            ]);
        }
    }

    /**
    * Remove the specified resource from storage.
    *
    * @param Consultation $consultation
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyConsultation $request, Consultation $consultation)
    {
        $res = $this->repo::init($consultation)->destroy();
        if ($res) {
            return back()->with(['success' => "The Consultation was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The Consultation could not be deleted."]);
        }
    }
}
