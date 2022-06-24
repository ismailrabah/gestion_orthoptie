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
        $user = DB::table('users')->where("email", "=", "admin@gestion-orthoptie.com")->first();

        //TODO add initial data seeders for remaining tables

        $taches = DB::table('taches')->insertGetId([ "name" => "Bilan Orthoptique", "price" => 200]);
        $taches = DB::table('taches')->insertGetId([ "name" => "Bilan Orthoptique preoperatoir", "price" => 300]);
        $taches = DB::table('taches')->insertGetId([ "name" => "Lancaster", "price" => 200]);
        $taches = DB::table('taches')->insertGetId([ "name" => "Seance Orthotique", "price" => 100]);
        $taches = DB::table('taches')->insertGetId([ "name" => "Seance Traitement Amblyopie", "price" => 100]);
        $taches = DB::table('taches')->insertGetId([ "name" => "PEV", "price" => 500]);
        $taches = DB::table('taches')->insertGetId([ "name" => "ERG", "price" => 500]);
        $taches = DB::table('taches')->insertGetId([ "name" => "Refraction", "price" => 100]);


        $rendez_vous_status = DB::table('rendez_vous_status')->insertGetId([ "name" => "Pas encore arrive", "color" => "#05a045", "is_default" =>true]);
        $rendez_vous_status = DB::table('rendez_vous_status')->insertGetId([ "name" => "Arrive", "color" => "#1f87e8", "is_default" => false]);
        $rendez_vous_status = DB::table('rendez_vous_status')->insertGetId([ "name" => "En retard", "color" => "#f67c01", "is_default" => false]);
        $rendez_vous_status = DB::table('rendez_vous_status')->insertGetId([ "name" => "Annule", "color" => "#d81b43", "is_default" => false]);
        $rendez_vous_status = DB::table('rendez_vous_status')->insertGetId([ "name" => "Vu", "color" => "#9c28b1", "is_default" => false]);

        $salle_d_attentes = DB::table('salle_d_attentes')->insertGetId([ "name" => "SALLE 1", "start_time" => "09:00:00", "end_time" => "18:00:00",
         "max_numbers" => 25 , "status" => "Open" , "assaistante_id" => 2 ]);
         
        $taches = DB::table('salles_d_examens')->insertGetId([ "name" => "salles d'examens 01"]);
        $taches = DB::table('salles_d_examens')->insertGetId([ "name" => "salles d'examens 02"]);

    }
}
