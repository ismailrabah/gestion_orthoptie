<?php
namespace App\Repositories;

use App\Models\RendezVousStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;

class RendezVousStatuses
{
    private RendezVousStatus $model;
    public static function init(RendezVousStatus $model): RendezVousStatuses
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): RendezVousStatus
    {
        $model = new RendezVousStatus((array) $data);
        // Save Relationships
        if($model->is_default){
            $old_is_de = RendezVousStatus::where('is_default' , '=',1)->get();
            if($old_is_de){
                foreach( $old_is_de as $rvs){
                    $rvs->is_default = false;
                    $rvs->saveOrFail();
                }
            }
        }

        $model->saveOrFail();
        return $model;
    }

    public function show(Request $request): RendezVousStatus {
        //Fetch relationships
            return $this->model;
    }
    public function update(object $data): RendezVousStatus
    {
        $this->model->update((array) $data);
        
        // Save Relationships
        if($this->model->is_default){
            $old_is_de = RendezVousStatus::where('is_default' , '=',1)->where('id' , '<>' , $this->model->id)->get();
            if($old_is_de){
                foreach( $old_is_de as $rvs){
                    $rvs->is_default = false;
                    $rvs->saveOrFail();
                }
            }
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
            Column::make("name")->className('all'),
            Column::make("color")->className('all min-desktop-lg'),
            Column::make("is_default")->className('all min-desktop-lg'),
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        return $columns;
    }
    public static function dt($query) {
        return DataTables::of($query)
            ->editColumn('color' , function (RendezVousStatus $model){
                if($model->color){
                    return '<span class="border-gray-300 border p-2 px-3 focus:ring-0 focus:outline-none text-white" style="background-color:'.$model->color.'" title="color" >'.$model->color.'</span>';
                }
            })
            ->editColumn('actions', function (RendezVousStatus $model) {
                $actions = '';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-primary hover:bg-primary-600 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View Details" data-action="show-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-eye"></i></button>';
                if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-secondary hover:bg-secondary-600 p-2 px-3 focus:ring-0 focus:outline-none action-button" title="Edit Record" data-action="edit-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-edit"></i></button>';
                if (\Auth::user()->can('delete',$model)) $actions .= '<button class="bg-danger hover:bg-danger-600 p-2 px-3 text-white focus:ring-0 focus:outline-none action-button" title="Delete Record" data-action="delete-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-trash"></i></button>';
                return "<div class='gap-x-1 flex w-full justify-end'>".$actions."</div>";
            })
            ->rawColumns(['actions','color'])
            ->make();
    }
}
