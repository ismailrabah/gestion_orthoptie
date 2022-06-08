<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\RendezVou\IndexRendezVou;
use App\Http\Requests\RendezVou\StoreRendezVou;
use App\Http\Requests\RendezVou\UpdateRendezVou;
use App\Http\Requests\RendezVou\DestroyRendezVou;
use App\Models\Patient;
use App\Models\RendezVou;
use App\Repositories\RendezVouses;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class RendezVouController  extends Controller
{
    private RendezVouses $repo;
    public function __construct(RendezVouses $repo)
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
        
        $patient_id = $request->get('patient_id');
        if($patient_id){
            $patient = Patient::findOrFail($patient_id);
        }else{
            $patient = null; 
        }

        $this->authorize('viewAny', RendezVou::class);
        return Inertia::render('RendezVous/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', RendezVou::class),
                "create" => \Auth::user()->can('create', RendezVou::class),
            ],
            "columns" => $this->repo::dtColumns(),
            'patient' => $patient,
        ]);
    }

    /**
    * Show the form for creating a new resource.
    *
    * @return  \Inertia\Response
    */
    public function create()
    {
        $this->authorize('create', RendezVou::class);
        return Inertia::render("RendezVous/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', RendezVou::class),
            "create" => \Auth::user()->can('create', RendezVou::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreRendezVou $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreRendezVou $request)
    {
        try {
            $data = $request->sanitizedObject();
            $rendezVou = $this->repo::store($data);
            return back()->with(['success' => "The Rendez Vou was created succesfully."]);
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
    * @param RendezVou $rendezVou
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, RendezVou $rendezVou)
    {
        try {
            $this->authorize('view', $rendezVou);
            $model = $this->repo::init($rendezVou)->show($request);
            return Inertia::render("RendezVous/Show", ["model" => $model]);
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
    * @param RendezVou $rendezVou
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, RendezVou $rendezVou)
    {
        try {
            $this->authorize('update', $rendezVou);
            //Fetch relationships
            



        $rendezVou->load([
            'patient',
            'salleDAttente',
            'status',
        ]);
                        return Inertia::render("RendezVous/Edit", ["model" => $rendezVou]);
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
    * @param UpdateRendezVou $request
    * @param {$modelBaseName} $rendezVou
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateRendezVou $request, RendezVou $rendezVou)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($rendezVou)->update($data);
            return back()->with(['success' => "The RendezVou was updated succesfully."]);
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
    * @param RendezVou $rendezVou
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyRendezVou $request, RendezVou $rendezVou)
    {
        $res = $this->repo::init($rendezVou)->destroy();
        if ($res) {
            return back()->with(['success' => "The RendezVou was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The RendezVou could not be deleted."]);
        }
    }
}
