<?php
namespace App\Repositories;

use App\Models\Fichier;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;

class Fichiers
{
    private Fichier $model;
    public static function init(Fichier $model): Fichiers
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): Fichier
    {
        $model = new Fichier((array) $data);
        // Save Relationships
            
        if (isset($data->patient)) {
            $model->patient()
                ->associate($data->patient->id);
        }
                    
        $model->saveOrFail();
        return $model;
    }

    public function show(Request $request): Fichier {
        //Fetch relationships
        $this->model->load([
            'patient',
        ]);
    return $this->model;
    }
    public function update(object $data): Fichier
    {
        $this->model->update((array) $data);
        
        // Save Relationships

        if (isset($data->patient)) {
            $this->model->patient()
                ->associate($data->patient->id);
        }
                
        $this->model->saveOrFail();
        return $this->model;
    }

    public function destroy(): bool
    {
        return !!$this->model->delete();
    }
    public static function dtColumns() {
        $columns = [
            Column::make('id')->title('ID')->className('all text-right'),
            Column::make("patient")->className('min-desktop-lg'),
            Column::make("titre")->className('min-desktop-lg'),
            Column::make("medcin_traitant")->className('min-desktop-lg'),
            Column::make("atcd")->className('min-desktop-lg'),
            Column::make("commentaire")->className('min-desktop-lg'),
            Column::make("motif_de_bilan")->className('min-desktop-lg'),
            // Column::make("created_at")->className('min-tv'),
            // Column::make("updated_at")->className('min-tv'),
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        return $columns;
    }
    public static function dt($query) {
        return DataTables::of($query)
            ->editColumn('medcin_traitant' , function(Fichier $model){
                return substr($model->medcin_traitant, 0, 20) . "...";
            })
            ->editColumn('atcd' , function(Fichier $model){
                return substr($model->atcd, 0, 20) . "...";
            })
            ->editColumn('commentaire' , function(Fichier $model){
                return substr($model->commentaire, 0, 20) . "...";
            })
            ->editColumn('motif_de_bilan' , function(Fichier $model){
                return substr($model->motif_de_bilan, 0, 20) . "...";
            })
            ->editColumn('patient' , function(Fichier $model){
                if($model->patient){
                    $link = '<a href="'.route('admin.patients.show', $model->patient).'" class="bg-primary-100 hover:bg-primary-200 focus:ring-0 focus:outline-none action-button" >'.$model->patient->title.' </a>';
                }else{
                    $link = "#";
                }
                return $link;
            })
            ->editColumn('actions', function (Fichier $model) {
                $actions = '';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-primary hover:bg-primary-600 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View Details" data-action="show-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-eye"></i></button>';
                if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-secondary hover:bg-secondary-600 p-2 px-3 focus:ring-0 focus:outline-none action-button" title="Edit Record" data-action="edit-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-edit"></i></button>';
                if (\Auth::user()->can('delete',$model)) $actions .= '<button class="bg-danger hover:bg-danger-600 p-2 px-3 text-white focus:ring-0 focus:outline-none action-button" title="Delete Record" data-action="delete-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-trash"></i></button>';
                return "<div class='gap-x-1 flex w-full justify-end'>".$actions."</div>";
            })
            ->rawColumns(['actions' , 'patient'])
            ->make();
    }
}
