<?php

namespace App\Models;
/* Imports */
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'prenom',
        'adresse',
        'cin',
        'phone',
        'email',
        'ddn',
    
    ];
    
    
    protected $dates = [
        'ddn' => 'Y-m-d',
        'created_at',
        'updated_at',
    ];

    protected $appends = ["api_route", "can" , "title" , "count_fichiers" , "count_rendez_vous"];

    /* ************************ ACCESSOR ************************* */

    public function getTitleAttribute() {
        return $this->nom .' '. $this->prenom;
    }

    public function getCountFichiersAttribute(){
        return $this->fichiers->count();
    }

    public function getCountRendezVousAttribute(){
        return $this->RendezVous->count();
    }

    public function getApiRouteAttribute() {
        return route("api.patients.index");
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

    public function fichiers(){
        return $this->hasMany(\App\Models\Fichier::class , 'patient_id' , 'id');
    }

    public function RendezVous(){
        return $this->hasMany(\App\Models\RendezVou::class , 'patient_id' , 'id');
    }
    
}
