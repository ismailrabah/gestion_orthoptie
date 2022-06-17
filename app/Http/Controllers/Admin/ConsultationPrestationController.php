<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\ConsultationPrestation\IndexConsultationPrestation;
use App\Http\Requests\ConsultationPrestation\StoreConsultationPrestation;
use App\Http\Requests\ConsultationPrestation\UpdateConsultationPrestation;
use App\Http\Requests\ConsultationPrestation\DestroyConsultationPrestation;
use App\Models\ConsultationPrestation;
use App\Repositories\ConsultationPrestations;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class ConsultationPrestationController  extends Controller
{
    private ConsultationPrestations $repo;
    public function __construct(ConsultationPrestations $repo)
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
        $this->authorize('viewAny', ConsultationPrestation::class);
        return Inertia::render('ConsultationPrestations/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', ConsultationPrestation::class),
                "create" => \Auth::user()->can('create', ConsultationPrestation::class),
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
        $this->authorize('create', ConsultationPrestation::class);
        return Inertia::render("ConsultationPrestations/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', ConsultationPrestation::class),
            "create" => \Auth::user()->can('create', ConsultationPrestation::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreConsultationPrestation $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreConsultationPrestation $request)
    {
        try {
            $data = $request->sanitizedObject();
            $consultationPrestation = $this->repo::store($data);
            return back()->with(['success' => "The Consultation Prestation was created succesfully."]);
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
    * @param ConsultationPrestation $consultationPrestation
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, ConsultationPrestation $consultationPrestation)
    {
        try {
            $this->authorize('view', $consultationPrestation);
            $model = $this->repo::init($consultationPrestation)->show($request);
            return Inertia::render("ConsultationPrestations/Show", ["model" => $model]);
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
    * @param ConsultationPrestation $consultationPrestation
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, ConsultationPrestation $consultationPrestation)
    {
        try {
            $this->authorize('update', $consultationPrestation);
            //Fetch relationships
            



        $consultationPrestation->load([
            'consultation',
            'prestation',
        ]);
                        return Inertia::render("ConsultationPrestations/Edit", ["model" => $consultationPrestation]);
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
    * @param UpdateConsultationPrestation $request
    * @param {$modelBaseName} $consultationPrestation
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateConsultationPrestation $request, ConsultationPrestation $consultationPrestation)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($consultationPrestation)->update($data);
            return back()->with(['success' => "The ConsultationPrestation was updated succesfully."]);
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
    * @param ConsultationPrestation $consultationPrestation
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyConsultationPrestation $request, ConsultationPrestation $consultationPrestation)
    {
        $res = $this->repo::init($consultationPrestation)->destroy();
        if ($res) {
            return back()->with(['success' => "The ConsultationPrestation was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The ConsultationPrestation could not be deleted."]);
        }
    }
}
