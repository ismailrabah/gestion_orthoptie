<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Prestation\IndexPrestation;
use App\Http\Requests\Prestation\StorePrestation;
use App\Http\Requests\Prestation\UpdatePrestation;
use App\Http\Requests\Prestation\DestroyPrestation;
use App\Models\Prestation;
use App\Repositories\Prestations;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class PrestationController  extends Controller
{
    private Prestations $repo;
    public function __construct(Prestations $repo)
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
        $this->authorize('viewAny', Prestation::class);
        return Inertia::render('Prestations/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', Prestation::class),
                "create" => \Auth::user()->can('create', Prestation::class),
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
        $this->authorize('create', Prestation::class);
        return Inertia::render("Prestations/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', Prestation::class),
            "create" => \Auth::user()->can('create', Prestation::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StorePrestation $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StorePrestation $request)
    {
        try {
            $data = $request->sanitizedObject();
            $prestation = $this->repo::store($data);
            return back()->with(['success' => "The Prestation was created succesfully."]);
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
    * @param Prestation $prestation
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, Prestation $prestation)
    {
        try {
            $this->authorize('view', $prestation);
            $model = $this->repo::init($prestation)->show($request);
            return Inertia::render("Prestations/Show", ["model" => $model]);
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
    * @param Prestation $prestation
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, Prestation $prestation)
    {
        try {
            $this->authorize('update', $prestation);
            //Fetch relationships
            

                        return Inertia::render("Prestations/Edit", ["model" => $prestation]);
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
    * @param UpdatePrestation $request
    * @param {$modelBaseName} $prestation
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdatePrestation $request, Prestation $prestation)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($prestation)->update($data);
            return back()->with(['success' => "The Prestation was updated succesfully."]);
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
    * @param Prestation $prestation
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyPrestation $request, Prestation $prestation)
    {
        $res = $this->repo::init($prestation)->destroy();
        if ($res) {
            return back()->with(['success' => "The Prestation was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The Prestation could not be deleted."]);
        }
    }
}
