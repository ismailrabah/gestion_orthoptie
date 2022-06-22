<?php

namespace App\Models;
/* Imports */

use App\Repositories\Taches;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    use HasFactory;

    protected $fillable = [
        'note',
        'date',
        'orthoptiste_id',
        'fichier_id',
        'salle_id',
        'commentaire',
        'traitement',
        'diagnostique',
    ];
    
    
    protected $dates = [
        'date' => 'Y-m-d',
        'created_at',
        'updated_at',
    ];

    protected $appends = ["api_route", "can"];

    /* ************************ ACCESSOR ************************* */

    public function getApiRouteAttribute() {
        return route("api.consultations.index");
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
    public function orthoptiste() {
        return $this->belongsTo(\App\Models\User::class,"orthoptiste_id","id");
    }

    /**
    * Many to One Relationship to \App\Models\Fichier::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function fichier() {
        return $this->belongsTo(\App\Models\Fichier::class,"fichier_id","id");
    }

    /**
    * Many to One Relationship to \App\Models\SallesDExamen::class
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function salle() {
        return $this->belongsTo(\App\Models\SallesDExamen::class,"salle_id","id");
    }

    public function taches(){
        return $this->belongsToMany(Tach::class, 'consultation_taches', 'tache_id', 'consultation_id')->withPivot('commentaire' , 'remises' , 'pourcentage_remises');
    }
}
