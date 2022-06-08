<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\SalleDAttente\IndexSalleDAttente;
use App\Http\Requests\SalleDAttente\StoreSalleDAttente;
use App\Http\Requests\SalleDAttente\UpdateSalleDAttente;
use App\Http\Requests\SalleDAttente\DestroySalleDAttente;
use App\Models\SalleDAttente;
use App\Repositories\SalleDAttentes;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class SalleDAttenteController  extends Controller
{
    private SalleDAttentes $repo;
    public function __construct(SalleDAttentes $repo)
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
        $this->authorize('viewAny', SalleDAttente::class);
        return Inertia::render('SalleDAttentes/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', SalleDAttente::class),
                "create" => \Auth::user()->can('create', SalleDAttente::class),
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
        $this->authorize('create', SalleDAttente::class);
        return Inertia::render("SalleDAttentes/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', SalleDAttente::class),
            "create" => \Auth::user()->can('create', SalleDAttente::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreSalleDAttente $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreSalleDAttente $request)
    {
        try {
            $data = $request->sanitizedObject();
            $salleDAttente = $this->repo::store($data);
            return back()->with(['success' => "The Salle D Attente was created succesfully."]);
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
    * @param SalleDAttente $salleDAttente
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, SalleDAttente $salleDAttente)
    {
        try {
            $this->authorize('view', $salleDAttente);
            $model = $this->repo::init($salleDAttente)->show($request);
            return Inertia::render("SalleDAttentes/Show", ["model" => $model]);
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
    * @param SalleDAttente $salleDAttente
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, SalleDAttente $salleDAttente)
    {
        try {
            $this->authorize('update', $salleDAttente);
            //Fetch relationships
            



        $salleDAttente->load([
            'assaistante',
        ]);
                        return Inertia::render("SalleDAttentes/Edit", ["model" => $salleDAttente]);
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
    * @param UpdateSalleDAttente $request
    * @param {$modelBaseName} $salleDAttente
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateSalleDAttente $request, SalleDAttente $salleDAttente)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($salleDAttente)->update($data);
            return back()->with(['success' => "The SalleDAttente was updated succesfully."]);
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
    * @param SalleDAttente $salleDAttente
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroySalleDAttente $request, SalleDAttente $salleDAttente)
    {
        $res = $this->repo::init($salleDAttente)->destroy();
        if ($res) {
            return back()->with(['success' => "The SalleDAttente was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The SalleDAttente could not be deleted."]);
        }
    }
}
