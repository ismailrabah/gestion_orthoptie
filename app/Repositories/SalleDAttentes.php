<?php
namespace App\Repositories;

use App\Models\SalleDAttente;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;

class SalleDAttentes
{
    private SalleDAttente $model;
    public static function init(SalleDAttente $model): SalleDAttentes
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): SalleDAttente{
        $model = new SalleDAttente((array) $data);
                // Save Relationships
            

        if (isset($data->assaistante)) {
            $model->assaistante()
                ->associate($data->assaistante->id);
        }
                    
        $model->saveOrFail();
        return $model;
    }

    public function show(Request $request): SalleDAttente {
        //Fetch relationships
        $this->model->load([
            'assaistante',
        ]);
        return $this->model;
    }

    public function update(object $data): SalleDAttente{
        $this->model->update((array) $data);
        
        // Save Relationships

        if (isset($data->assaistante)) {
            $this->model->assaistante()
                ->associate($data->assaistante->id);
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
            Column::make("name")->className('min-desktop-lg'),
            Column::make("status")->className('min-desktop-lg'),
            Column::make("start_time")->className('min-desktop-lg'),
            Column::make("end_time")->className('min-desktop-lg'),
            Column::make("max_numbers")->className('min-desktop-lg'),
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        return $columns;
    }

    public static function dt($query) {
        return DataTables::of($query)
            ->editColumn('start_time' , function(SalleDAttente $model){
                return Carbon::createFromFormat('H:i:s',$model->start_time)->format('H:i');
            })
            ->editColumn('end_time' , function(SalleDAttente $model){
                return Carbon::createFromFormat('H:i:s',$model->end_time)->format('H:i');
            })
            ->editColumn('actions', function (SalleDAttente $model) {
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
