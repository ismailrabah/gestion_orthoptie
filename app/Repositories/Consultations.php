<?php
namespace App\Repositories;

use App\Models\Consultation;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;

class Consultations
{
    private Consultation $model;
    public static function init(Consultation $model): Consultations
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): Consultation
    {
        $model = new Consultation((array) $data);
        // Save Relationships
            

        if (isset($data->orthoptiste)) {
            $model->orthoptiste()
                ->associate($data->orthoptiste->id);
        }
        if (isset($data->fichier)) {
            $model->fichier()
                ->associate($data->fichier->id);
        }
        if (isset($data->salle)) {
            $model->salle()
                ->associate($data->salle->id);
        }
                    

        $model->saveOrFail();
        return $model;
    }

    public function show(Request $request): Consultation {
        //Fetch relationships
        $this->model->load([
            'orthoptiste',
            'fichier',
            'fichier.patient',
            'salle',
        ]);
    return $this->model;
    }
    public function update(object $data): Consultation
    {
        $this->model->update((array) $data);
        
        // Save Relationships
                

        if (isset($data->orthoptiste)) {
            $this->model->orthoptiste()
                ->associate($data->orthoptiste->id);
        }


        if (isset($data->fichier)) {
            $this->model->fichier()
                ->associate($data->fichier->id);
        }


        if (isset($data->salle)) {
            $this->model->salle()
                ->associate($data->salle->id);
        }
                

        $this->model->saveOrFail();
        return $this->model;
    }

    public function destroy(): bool
    {
        return !!$this->model->delete();
    }
    public static function dtColumns($patient_id) {
        $columns_ext = [];
        if(!$patient_id){
            $columns_ext = [
                Column::make("patient")->className('all min-desktop-lg')->title('Fichier de patient')->orderable(false)->searchable(false),
            ];
        }
        $columns = [
            // Column::make('id')->title('ID')->className('all text-right'),
            Column::make("orthoptiste")->className('min-desktop-lg'),
            Column::make("note")->className('all min-desktop-lg'),
            Column::make("date")->className('all min-desktop-lg'),
            Column::make("salle")->className('all min-desktop-lg'),
            // Column::make("created_at")->className('min-tv'),
            // Column::make("updated_at")->className('min-tv'),
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        
        if(!$patient_id){
            $columns = array_merge($columns_ext , $columns);
        }

        return $columns;
    }
    public static function dt($query) {
        return DataTables::of($query)
            ->editColumn('patient' , function(Consultation $model){
                if($model->fichier){
                    if($model->fichier->patient){
                        $link = '<a href="'.route('admin.fichiers.show', $model->fichier->patient).'" class="bg-primary-100 hover:bg-primary-200 focus:ring-0 focus:outline-none action-button" ><i class="mr-2 fas fa-file-alt"></i>'.$model->fichier->patient->title.' </a>';
                    }
                }else{
                    $link = "#";
                }
                return $link;
            })
            ->editColumn('orthoptiste' , function(Consultation $model){
                return $model->orthoptiste ? $model->orthoptiste->name . " " . $model->orthoptiste->last_name: "";
            })
            ->editColumn('salle' , function(Consultation $model){
                return $model->salle ? $model->salle->name : "";
            })
            ->editColumn('actions', function (Consultation $model) {
                $actions = '';
                if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-purple-500 hover:bg-purple-500 p-2 px-3 focus:ring-0 text-white focus:outline-none action-button" title="Gérer les taches et prestations" data-action="manage-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-briefcase-medical"></i></button>';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-primary hover:bg-primary-600 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View Details" data-action="show-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-eye"></i></button>';
                if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-secondary hover:bg-secondary-600 p-2 px-3 focus:ring-0 focus:outline-none action-button text-white" title="Edit Record" data-action="edit-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-edit"></i></button>';
                if (\Auth::user()->can('delete',$model)) $actions .= '<button class="bg-danger hover:bg-danger-600 p-2 px-3 text-white focus:ring-0 focus:outline-none action-button" title="Delete Record" data-action="delete-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-trash"></i></button>';
                return "<div class='gap-x-1 flex w-full justify-end'>".$actions."</div>";
            })
            ->rawColumns(['actions','patient'])
            ->make();
    }
}
