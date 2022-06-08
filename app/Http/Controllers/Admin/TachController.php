<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Tach\IndexTach;
use App\Http\Requests\Tach\StoreTach;
use App\Http\Requests\Tach\UpdateTach;
use App\Http\Requests\Tach\DestroyTach;
use App\Models\Tach;
use App\Repositories\Taches;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class TachController  extends Controller
{
    private Taches $repo;
    public function __construct(Taches $repo)
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
        $this->authorize('viewAny', Tach::class);
        return Inertia::render('Taches/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', Tach::class),
                "create" => \Auth::user()->can('create', Tach::class),
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
        $this->authorize('create', Tach::class);
        return Inertia::render("Taches/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', Tach::class),
            "create" => \Auth::user()->can('create', Tach::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreTach $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreTach $request)
    {
        try {
            $data = $request->sanitizedObject();
            $tach = $this->repo::store($data);
            return back()->with(['success' => "The Tach was created succesfully."]);
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
    * @param Tach $tach
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, Tach $tach)
    {
        try {
            $this->authorize('view', $tach);
            $model = $this->repo::init($tach)->show($request);
            return Inertia::render("Taches/Show", ["model" => $model]);
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
    * @param Tach $tach
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, Tach $tach)
    {
        try {
            $this->authorize('update', $tach);
            //Fetch relationships
            

                        return Inertia::render("Taches/Edit", ["model" => $tach]);
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
    * @param UpdateTach $request
    * @param {$modelBaseName} $tach
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateTach $request, Tach $tach)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($tach)->update($data);
            return back()->with(['success' => "The Tach was updated succesfully."]);
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
    * @param Tach $tach
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyTach $request, Tach $tach)
    {
        $res = $this->repo::init($tach)->destroy();
        if ($res) {
            return back()->with(['success' => "The Tach was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The Tach could not be deleted."]);
        }
    }
}
