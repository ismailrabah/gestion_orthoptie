<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\RendezVousStatus\IndexRendezVousStatus;
use App\Http\Requests\RendezVousStatus\StoreRendezVousStatus;
use App\Http\Requests\RendezVousStatus\UpdateRendezVousStatus;
use App\Http\Requests\RendezVousStatus\DestroyRendezVousStatus;
use App\Models\RendezVousStatus;
use App\Repositories\RendezVousStatuses;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class RendezVousStatusController  extends Controller
{
    private RendezVousStatuses $repo;
    public function __construct(RendezVousStatuses $repo)
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
        $this->authorize('viewAny', RendezVousStatus::class);
        return Inertia::render('RendezVousStatuses/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', RendezVousStatus::class),
                "create" => \Auth::user()->can('create', RendezVousStatus::class),
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
        $this->authorize('create', RendezVousStatus::class);
        return Inertia::render("RendezVousStatuses/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', RendezVousStatus::class),
            "create" => \Auth::user()->can('create', RendezVousStatus::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreRendezVousStatus $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreRendezVousStatus $request)
    {
        try {
            $data = $request->sanitizedObject();
            $rendezVousStatus = $this->repo::store($data);
            return back()->with(['success' => "The Rendez Vous Status was created succesfully."]);
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
    * @param RendezVousStatus $rendezVousStatus
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, RendezVousStatus $rendezVousStatus)
    {
        try {
            $this->authorize('view', $rendezVousStatus);
            $model = $this->repo::init($rendezVousStatus)->show($request);
            return Inertia::render("RendezVousStatuses/Show", ["model" => $model]);
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
    * @param RendezVousStatus $rendezVousStatus
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, RendezVousStatus $rendezVousStatus)
    {
        try {
            $this->authorize('update', $rendezVousStatus);
            //Fetch relationships
            

                        return Inertia::render("RendezVousStatuses/Edit", ["model" => $rendezVousStatus]);
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
    * @param UpdateRendezVousStatus $request
    * @param {$modelBaseName} $rendezVousStatus
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateRendezVousStatus $request, RendezVousStatus $rendezVousStatus)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($rendezVousStatus)->update($data);
            return back()->with(['success' => "The RendezVousStatus was updated succesfully."]);
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
    * @param RendezVousStatus $rendezVousStatus
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyRendezVousStatus $request, RendezVousStatus $rendezVousStatus)
    {
        $res = $this->repo::init($rendezVousStatus)->destroy();
        if ($res) {
            return back()->with(['success' => "The RendezVousStatus was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The RendezVousStatus could not be deleted."]);
        }
    }
}
