<?php
namespace App\Repositories;

use App\Models\RendezVou;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;

class RendezVouses
{
    private RendezVou $model;
    public static function init(RendezVou $model): RendezVouses
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): RendezVou
    {
        $model = new RendezVou((array) $data);
        // Save Relationships

        if (isset($data->patient)) {
            $model->patient()
                ->associate($data->patient->id);
        }
        if (isset($data->salle_d_attente)) {
            $model->salleDAttente()
                ->associate($data->salle_d_attente->id);
        }
        if (isset($data->status)) {
            $model->status()
                ->associate($data->status->id);
        }
                    

        $model->saveOrFail();
        return $model;
    }

    public function show(Request $request): RendezVou {
        //Fetch relationships
        $this->model->load([
            'patient',
            'salleDAttente',
            'status',
        ]);
    return $this->model;
    }
    public function update(object $data): RendezVou
    {
        $this->model->update((array) $data);
        
        // Save Relationships
                

        if (isset($data->patient)) {
            $this->model->patient()
                ->associate($data->patient->id);
        }


        if (isset($data->salle_d_attente)) {
            $this->model->salleDAttente()
                ->associate($data->salle_d_attente->id);
        }


        if (isset($data->status)) {
            $this->model->status()
                ->associate($data->status->id);
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
            Column::make("date")->className('min-desktop-lg'),
            Column::make("patient")->className('min-desktop-lg'),
            Column::make("salle_d_attente")->className('min-desktop-lg')->title("salle d'attente"),
            Column::make("status")->className('min-desktop-lg'),
            Column::make("created_at")->className('min-tv'),
            Column::make("updated_at")->className('min-tv'),
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        return $columns;
    }
    public static function dt($query) {
        return DataTables::of($query)
            ->editColumn('status' , function(RendezVou $model){
                return $model->status ? $model->status->name : "";
            })
            ->editColumn('patient' , function(RendezVou $model){
                return $model->patient ? $model->patient->nom." ".$model->patient->prenom : "";
            })
            ->editColumn('salle_d_attente' , function(RendezVou $model){
                return $model->salleDAttente ? $model->salleDAttente->name : "";
            })
            ->editColumn('actions', function (RendezVou $model) {
                $actions = '';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-primary hover:bg-primary-600 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View Details" data-action="show-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-eye"></i></button>';
                if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-secondary hover:bg-secondary-600 p-2 px-3 focus:ring-0 focus:outline-none action-button" title="Edit Record" data-action="edit-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-edit"></i></button>';
                if (\Auth::user()->can('delete',$model)) $actions .= '<button class="bg-danger hover:bg-danger-600 p-2 px-3 text-white focus:ring-0 focus:outline-none action-button" title="Delete Record" data-action="delete-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-trash"></i></button>';
                return "<div class='gap-x-1 flex w-full justify-end'>".$actions."</div>";
            })
            ->rawColumns(['actions'])
            ->make();
    }
}
