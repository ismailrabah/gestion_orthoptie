<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\ConsultationTach\IndexConsultationTach;
use App\Http\Requests\ConsultationTach\StoreConsultationTach;
use App\Http\Requests\ConsultationTach\UpdateConsultationTach;
use App\Http\Requests\ConsultationTach\DestroyConsultationTach;
use App\Models\ConsultationTach;
use App\Repositories\ConsultationTaches;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class ConsultationTachController  extends Controller
{
    private ConsultationTaches $repo;
    public function __construct(ConsultationTaches $repo)
    {
        $this->repo = $repo;
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
        $this->authorize('viewAny', ConsultationTach::class);
        return Inertia::render('ConsultationTaches/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', ConsultationTach::class),
                "create" => \Auth::user()->can('create', ConsultationTach::class),
            ],
            "columns" => $this->repo::dtColumns(),
        ]);
    }

    /**
    * Show the form for creating a new resource.
    *
    * @return  \Inertia\Response
    */
    public function create()
    {
        $this->authorize('create', ConsultationTach::class);
        return Inertia::render("ConsultationTaches/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', ConsultationTach::class),
            "create" => \Auth::user()->can('create', ConsultationTach::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreConsultationTach $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreConsultationTach $request)
    {
        try {
            $data = $request->sanitizedObject();
            $consultationTach = $this->repo::store($data);
            return back()->with(['success' => "The Consultation Tach was created succesfully."]);
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
    * @param ConsultationTach $consultationTach
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, $consultation , $tache)
    {
        try {
            $consultationTach = $this->repo::init($consultation , $tache)->model;
            $this->authorize('view', $consultationTach);
            $ct = ConsultationTach::where('consultation_id' , '=' , $consultation )->where('tache_id' , '=' , $tache )->first();
            $model = $this->repo::init($ct)->show($request);
            return Inertia::render("ConsultationTaches/Show", ["model" => $model]);
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
    * @param ConsultationTach $consultationTach
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, $consultation , $tache)
    {
        try {
            $ct = ConsultationTach::where('consultation_id' , '=' , $consultation )->where('tache_id' , '=' , $tache )->first();
            $consultationTach = $this->repo::init($ct)->model;
            $this->authorize('update', $consultationTach);
            //Fetch relationships
            $consultationTach->load([
                'consultation',
                'tache',
            ]);
            return Inertia::render("ConsultationTaches/Edit", ["model" => $consultationTach]);
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
    * @param UpdateConsultationTach $request
    * @param {$modelBaseName} $consultationTach
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateConsultationTach $request, $consultation , $tache)
    {
        try {
            $data = $request->sanitizedObject();
            $ct = ConsultationTach::where('consultation_id' , '=' , $consultation )->where('tache_id' , '=' , $tache )->first();
            $res = $this->repo::init($ct)->update($data);
            return back()->with(['success' => "The ConsultationTach was updated succesfully."]);
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
    * @param ConsultationTach $consultationTach
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyConsultationTach $request, $consultation , $tache)
    {
        $ct = ConsultationTach::where('consultation_id' , '=' , $consultation )->where('tache_id' , '=' , $tache )->first();
        $res = $this->repo::init( $ct)->destroy();
        if ($res) {
            return back()->with(['success' => "The ConsultationTach was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The ConsultationTach could not be deleted."]);
        }
    }
}
