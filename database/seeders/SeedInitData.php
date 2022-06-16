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

        $taches = DB::table('taches')->insertGetId([ "name" => "tache 01", "price" => 100]);

        $rendez_vous_status = DB::table('rendez_vous_status')->insertGetId([ "name" => "New", "color" => "#fc7", "is_default" => true]);
        
        

    }
}
