<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class SeedInitData extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        //TODO add initial data seeders for remaining tables

        $taches = DB::table('taches')->insertGetId([ "name" => "Bilan Orthoptique", "price" => 200]);
        $taches = DB::table('taches')->insertGetId([ "name" => "Bilan Orthoptique preoperatoir", "price" => 300]);
        $taches = DB::table('taches')->insertGetId([ "name" => "Lancaster", "price" => 200]);
        $taches = DB::table('taches')->insertGetId([ "name" => "Seance Orthotique", "price" => 100]);
        $taches = DB::table('taches')->insertGetId([ "name" => "Seance Traitement Amblyopie", "price" => 100]);
        $taches = DB::table('taches')->insertGetId([ "name" => "PEV", "price" => 500]);
        $taches = DB::table('taches')->insertGetId([ "name" => "ERG", "price" => 500]);
        $taches = DB::table('taches')->insertGetId([ "name" => "Refraction", "price" => 100]);


        $rendez_vous_status = DB::table('rendez_vous_status')->insertGetId([ "name" => "Pas encore arrive", "color" => "#fc7", "is_default" =>true]);
        $rendez_vous_status = DB::table('rendez_vous_status')->insertGetId([ "name" => "Arrive", "color" => "#1f87e8", "is_default" => false]);
        $rendez_vous_status = DB::table('rendez_vous_status')->insertGetId([ "name" => "En retard", "color" => "#f67c01", "is_default" => false]);
        $rendez_vous_status = DB::table('rendez_vous_status')->insertGetId([ "name" => "Annule", "color" => "#000000", "is_default" => false]);
        $rendez_vous_status = DB::table('rendez_vous_status')->insertGetId([ "name" => "Vu", "color" => "#05a045", "is_default" => false]);

        $patients = DB::table('patients')->insertGetId([ 
            "nom" => "nejjari",
            "prenom" => "hajar",
            "adresse" =>"tikwine agadir",
            "ddn"=> "1995-06-21",
            "cin"=>  "c 25532",
            "phone"=> "06333333" ,
            "email"=> "nejjari@nejjari.com" 
        ]);
        $patients = DB::table('patients')->insertGetId([ 
            "nom" => "Hamdi",
            "prenom" => "Ahmed",
            "adresse" =>"Salam Agadir",
            "ddn"=> "1990-06-21",
            "cin"=>  "i 2109",
            "phone"=> "063336543" ,
            "email"=> " hamdi@hamdi.com" 
        ]);
        
        $patients = DB::table('patients')->insertGetId([ 
            "nom" => "Dadi",
            "prenom" => "fatema",
            "adresse" =>"Biogra",
            "ddn"=> "1996-06-21",
            "cin"=>  "p 8129",
            "phone"=> "030803654", 
            "email"=> " dadi@dadi.com" 
        ]);

        $patients = DB::table('patients')->insertGetId([ 
            "nom" => "rami",
            "prenom" => "najat",
            "adresse" =>"Ait melloul",
            "ddn"=> "1991-06-21",
            "cin"=>  "T 93819",
            "phone"=> "038123654" ,
            "email"=> " rami@rami.com" 
        ]);

        $patients = DB::table('patients')->insertGetId([ 
            "nom" => "Rebbah",
            "prenom" => "ismail",
            "adresse" =>"Tikiwine",
            "ddn"=> "1990-06-21",
            "cin"=>  "T 10093",
            "phone"=> "038123654",
            "email"=> "rabbah@rabbah.com" 
        ]);
        $salle_d_attentes = DB::table('salle_d_attentes')->insertGetId([ "name" => "SALLE 1", "start_time" => "09:00:00", "end_time" => "18:00:00",
         "max_numbers" => 25 , "status" => "Open" , "assaistante_id" => 2 ]);
         
        $taches = DB::table('salles_d_examens')->insertGetId([ "name" => "salles d'examens 01"]);
        $taches = DB::table('salles_d_examens')->insertGetId([ "name" => "salles d'examens 02"]);

    
    }
}
