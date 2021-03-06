<?php

namespace App\Models;
/* Imports */
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fichier extends Model
{
    use HasFactory;

    protected $fillable = [
        'medcin_traitant',
        'titre',
        'atcd',
        'commentaire',
        'motif_de_bilan',
        'patient_id',
    ];
    
    
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    protected $appends = ["api_route", "can","count_consultations" ];

    /* ************************ ACCESSOR ************************* */
    
    public function getCountConsultationsAttribute(){
        return $this->consultations->count();
    }

    public function getApiRouteAttribute() {
        return route("api.fichiers.index");
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

    public function consultations(){
        return $this->hasMany(\App\Models\Consultation::class , 'fichier_id' , 'id');
    }

}
