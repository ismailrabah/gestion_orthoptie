<?php

namespace App\Models;
/* Imports */
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RendezVou extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'patient_id',
        'salle_d_attente_id',
        'status_id',
    ];
    
    
    
    protected $dates = [
        'date',
        'created_at',
        'updated_at',
    ];

    protected $appends = ["api_route", "can"];

    /* ************************ ACCESSOR ************************* */

    public function getApiRouteAttribute() {
        return route("api.rendez-vouses.index");
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
    * Many to One Relationship to \App\Models\Patient::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function patient() {
        return $this->belongsTo(\App\Models\Patient::class,"patient_id","id");
    }
    /**
    * Many to One Relationship to \App\Models\SalleDAttente::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function salleDAttente() {
        return $this->belongsTo(\App\Models\SalleDAttente::class,"salle_d_attente_id","id");
    }
    /**
    * Many to One Relationship to \App\Models\RendezVousStatus::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function status() {
        return $this->belongsTo(\App\Models\RendezVousStatus::class,"status_id","id");
    }
}
