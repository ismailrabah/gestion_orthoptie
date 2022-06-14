<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Fichier\IndexFichier;
use App\Http\Requests\Fichier\StoreFichier;
use App\Http\Requests\Fichier\UpdateFichier;
use App\Http\Requests\Fichier\DestroyFichier;
use App\Models\Fichier;
use App\Models\Patient;
use App\Repositories\Fichiers;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class FichierController  extends Controller
{
    private Fichiers $repo;
    public function __construct(Fichiers $repo)
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
        $this->authorize('viewAny', Fichier::class);
        return Inertia::render('Fichiers/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', Fichier::class),
                "create" => \Auth::user()->can('create', Fichier::class),
            ],
            "columns" => $this->repo::dtColumns($patient_id),
            "patient" => $patient
        ]);
    }

    /**
    * Show the form for creating a new resource.
    *
    * @return  \Inertia\Response
    */
    public function create()
    {
        $this->authorize('create', Fichier::class);
        return Inertia::render("Fichiers/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', Fichier::class),
            "create" => \Auth::user()->can('create', Fichier::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreFichier $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreFichier $request)
    {
        try {
            $data = $request->sanitizedObject();
            $fichier = $this->repo::store($data);
            return back()->with(['success' => "The Fichier was created succesfully."]);
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
    * @param Fichier $fichier
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, Fichier $fichier)
    {
        try {
            $this->authorize('view', $fichier);
            $model = $this->repo::init($fichier)->show($request);
            return Inertia::render("Fichiers/Show", ["model" => $model]);
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
    * @param Fichier $fichier
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, Fichier $fichier)
    {
        try {
            $this->authorize('update', $fichier);
            //Fetch relationships
            



        $fichier->load([
            'patient',
        ]);
                        return Inertia::render("Fichiers/Edit", ["model" => $fichier]);
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
    * @param UpdateFichier $request
    * @param {$modelBaseName} $fichier
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateFichier $request, Fichier $fichier)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($fichier)->update($data);
            return back()->with(['success' => "The Fichier was updated succesfully."]);
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
    * @param Fichier $fichier
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyFichier $request, Fichier $fichier)
    {
        $res = $this->repo::init($fichier)->destroy();
        if ($res) {
            return back()->with(['success' => "The Fichier was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The Fichier could not be deleted."]);
        }
    }
}
