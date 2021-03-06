<?php
namespace App\Repositories;

use App\Models\ConsultationTach;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;

class ConsultationTaches
{
    private ConsultationTach $model;
    public static function init(ConsultationTach $model): ConsultationTaches
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): ConsultationTach
    {
        $model = new ConsultationTach((array) $data);
        // Save Relationships
            

        if (isset($data->consultation)) {
            $model->consultation()->associate($data->consultation->id);
        }
        if (isset($data->tache)) {
            $model->tache()->associate($data->tache->id);
        }
                    

        $model->saveOrFail();
        return $model;
    }

    public function show(Request $request): ConsultationTach {
        //Fetch relationships
        $this->model->load([
            'consultation',
            'tache',
        ]);
        return $this->model;
    }

    public function update(object $data): ConsultationTach{
        $this->model->update((array) $data);
        
        // Save Relationships
        if (isset($data->consultation)) {
            $this->model->consultation()->associate($data->consultation->id);
        }


        if (isset($data->tache)) {
            $this->model->tache()->associate($data->tache->id);
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
            Column::make("tache")->className('all min-desktop-lg')->orderable(false)->searchable(false),
            Column::make("price")->className('all min-desktop-lg')->title('Prix')->orderable(false)->searchable(false),
            Column::make("remises")->className('all min-desktop-lg'),
            Column::make("pourcentage_remises")->className('min-desktop-lg')->title('Type de remises'),
            // Column::make("created_at")->className('min-tv'),
            // Column::make("updated_at")->className('min-tv'),
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        return $columns;
    }
    public static function dt($query) {
        return DataTables::of($query)
            ->editColumn('pourcentage_remises', function (ConsultationTach $model) {
                return $model->pourcentage_remises ? "Pourcentage": "Montant";
            }) ->editColumn('tache', function (ConsultationTach $model) {
                return $model->tache->name;
            })->editColumn('price', function (ConsultationTach $model) {
                return $model->tache->price;
            })
            ->editColumn('actions', function (ConsultationTach $model) {
                $actions = '';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-indigo-600 hover:bg-indigo-500 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="Imprimer la facture" data-action="print-invoice" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-file-invoice-dollar"></i></button>';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-indigo-600 hover:bg-indigo-500 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="Imprimer le compte rendu" data-action="print-report" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-print"></i></button>';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-primary hover:bg-primary-600 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View Details" data-action="show-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-eye"></i></button>';
                if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-secondary hover:bg-secondary-600 p-2 px-3 focus:ring-0 focus:outline-none action-button" title="Edit Record" data-action="edit-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-edit"></i></button>';
                if (\Auth::user()->can('delete',$model)) $actions .= '<button class="bg-danger hover:bg-danger-600 p-2 px-3 text-white focus:ring-0 focus:outline-none action-button" title="Delete Record" data-action="delete-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-trash"></i></button>';
                return "<div class='gap-x-1 flex w-full justify-end'>".$actions."</div>";
            })
            ->rawColumns(['actions'])
            ->make();
    }
}
