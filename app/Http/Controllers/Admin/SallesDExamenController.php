<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\SallesDExamen\IndexSallesDExamen;
use App\Http\Requests\SallesDExamen\StoreSallesDExamen;
use App\Http\Requests\SallesDExamen\UpdateSallesDExamen;
use App\Http\Requests\SallesDExamen\DestroySallesDExamen;
use App\Models\SallesDExamen;
use App\Repositories\SallesDExamens;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class SallesDExamenController  extends Controller
{
    private SallesDExamens $repo;
    public function __construct(SallesDExamens $repo)
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
        $this->authorize('viewAny', SallesDExamen::class);
        return Inertia::render('SallesDExamens/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', SallesDExamen::class),
                "create" => \Auth::user()->can('create', SallesDExamen::class),
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
        $this->authorize('create', SallesDExamen::class);
        return Inertia::render("SallesDExamens/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', SallesDExamen::class),
            "create" => \Auth::user()->can('create', SallesDExamen::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreSallesDExamen $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreSallesDExamen $request)
    {
        try {
            $data = $request->sanitizedObject();
            $sallesDExaman = $this->repo::store($data);
            return back()->with(['success' => "The Salles D Examen was created succesfully."]);
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
    * @param SallesDExamen $sallesDExaman
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, SallesDExamen $sallesDExaman)
    {
        try {
            $this->authorize('view', $sallesDExaman);
            $model = $this->repo::init($sallesDExaman)->show($request);
            return Inertia::render("SallesDExamens/Show", ["model" => $model]);
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
    * @param SallesDExamen $sallesDExaman
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, SallesDExamen $sallesDExaman)
    {
        try {
            $this->authorize('update', $sallesDExaman);
            //Fetch relationships
            

                        return Inertia::render("SallesDExamens/Edit", ["model" => $sallesDExaman]);
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
    * @param UpdateSallesDExamen $request
    * @param {$modelBaseName} $sallesDExaman
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateSallesDExamen $request, SallesDExamen $sallesDExaman)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($sallesDExaman)->update($data);
            return back()->with(['success' => "The SallesDExamen was updated succesfully."]);
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
    * @param SallesDExamen $sallesDExaman
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroySallesDExamen $request, SallesDExamen $sallesDExaman)
    {
        $res = $this->repo::init($sallesDExaman)->destroy();
        if ($res) {
            return back()->with(['success' => "The SallesDExamen was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The SallesDExamen could not be deleted."]);
        }
    }
}
