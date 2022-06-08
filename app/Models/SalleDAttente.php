<?php

namespace App\Models;
/* Imports */
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalleDAttente extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'status',
        'start_time',
        'end_time',
        'max_numbers',
        'assaistante_id',
    ];
    
    
    
    protected $dates = [
        ];
    public $timestamps = false;
    
    protected $appends = ["api_route", "can"];

    /* ************************ ACCESSOR ************************* */

    public function getApiRouteAttribute() {
        return route("api.salle-d-attentes.index");
    }
    
    public function getCanAttribute() {
        return [
            "view" => \Auth::check() && \Auth::user()->can("view", $this),
            "update" => \Auth::check() && \Auth::user()->can("update", $this),
            "delete" => \Auth::check() && \Auth::user()->can("delete", $this),
            "restore" => \Auth::check() && \Auth::user()->can("restore", $this),
            "forceDelete" => \Auth::check() && \Auth::user()->can("forceDelete", $this),
        ];
    }

    protected function serializeDate(DateTimeInterface $date) {
        return $date->format('Y-m-d H:i:s');
    }

    /* ************************ RELATIONS ************************ */
    /**
    * Many to One Relationship to \App\Models\User::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function assaistante() {
        return $this->belongsTo(\App\Models\User::class,"assaistante_id","id");
    }
}
