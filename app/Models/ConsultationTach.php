<?php

namespace App\Models;
/* Imports */
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConsultationTach extends Model
{
    use HasFactory;

    protected $fillable = [
        'commentaire',
        'remises',
        'pourcentage_remises',
        'consultation_id',
        'tache_id',
    ];
    
    
    protected $casts = [
        'pourcentage_remises' => 'boolean',
    ];
    
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    protected $appends = ["api_route", "can"];

    /* ************************ ACCESSOR ************************* */

    public function getApiRouteAttribute() {
        return route("api.consultation-taches.index");
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
    * Many to One Relationship to \App\Models\Tach::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function tache() {
        return $this->belongsTo(\App\Models\Tach::class,"tache_id","id");
    }
}
