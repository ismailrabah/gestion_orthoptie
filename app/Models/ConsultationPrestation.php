<?php

namespace App\Models;
/* Imports */
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConsultationPrestation extends Model
{
    use HasFactory;

    protected $fillable = [
        'commentaire',
        'consultation_id',
        'prestation_id',
    
    ];
    
    
    
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    protected $appends = ["api_route", "can"];

    /* ************************ ACCESSOR ************************* */

    public function getApiRouteAttribute() {
        return route("api.consultation-prestations.index");
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
    * Many to One Relationship to \App\Models\Consultation::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function consultation() {
        return $this->belongsTo(\App\Models\Consultation::class,"consultation_id","id");
    }
    /**
    * Many to One Relationship to \App\Models\Prestation::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function prestation() {
        return $this->belongsTo(\App\Models\Prestation::class,"prestation_id","id");
    }
}
