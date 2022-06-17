<?php
namespace App\Repositories;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;
use Carbon\Carbon;

class Patients
{
    private Patient $model;
    public static function init(Patient $model): Patients
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): Patient
    {
        $model = new Patient((array) $data);
                // Save Relationships
                    

        $model->saveOrFail();
        return $model;
    }

    public function show(Request $request): Patient {
        //Fetch relationships
            return $this->model;
    }
    public function update(object $data): Patient
    {
        $this->model->update((array) $data);
        
        // Save Relationships
                        

        $this->model->saveOrFail();
        return $this->model;
    }

    public function destroy(): bool
    {
        return !!$this->model->delete();
    }
    public static function dtColumns() {
        $columns = [
            // Column::make('id')->title('ID')->className('min-desktop-lg text-right'),
            Column::make("nom")->className('all min-desktop-lg'),
            Column::make("prenom")->className('all min-desktop-lg'),
            Column::make("ddn")->className('all min-desktop-lg')->title("Age"),
            Column::make("cin")->className(' min-desktop-lg'),
            Column::make("phone")->className('all min-desktop-lg'),
            Column::make("email")->className(' min-desktop-lg'),
            Column::make("adresse")->className('min-desktop-lg'),
            Column::make("count_fichiers")->className('min-desktop-lg')->title('Fichiers'),
            // Column::make("created_at")->className('min-tv'),
            // Column::make("updated_at")->className('min-tv'),
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        return $columns;
    }
    public static function dt($query) {
        return DataTables::of($query)
            ->editColumn('ddn' , function(Patient $model){
                return Carbon::parse($model->ddn)->age;
            })
            ->editColumn('count_fichiers' , function(Patient $model){
                return '<button class="bg-purple-500 hover:bg-purple-500 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="Fichiers" data-action="show-fichiers" data-tag="button" data-id="'.$model->id.'"> '.$model->count_fichiers.' <i class="fas fa-file-alt"></i></button>';
            })
            ->editColumn('actions', function (Patient $model) {
                $actions = '';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-primary hover:bg-primary-600 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View Details" data-action="show-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-eye"></i></button>';
                if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-secondary hover:bg-secondary-600 p-2 px-3 focus:ring-0 focus:outline-none action-button" title="Edit Record" data-action="edit-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-edit"></i></button>';
                if (\Auth::user()->can('delete',$model)) $actions .= '<button class="bg-danger hover:bg-danger-600 p-2 px-3 text-white focus:ring-0 focus:outline-none action-button" title="Delete Record" data-action="delete-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-trash"></i></button>';
                return "<div class='gap-x-1 flex w-full justify-end'>".$actions."</div>";
            })
            ->rawColumns(['actions' , 'count_fichiers'])
            ->make();
    }
}
