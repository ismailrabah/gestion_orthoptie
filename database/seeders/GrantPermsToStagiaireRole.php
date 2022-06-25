<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class GrantPermsToStagiaireRole extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $stage = Role::query()->where("name","=", "stagiaire")->first();
        if ($stage) {
            $stage->givePermissionTo(Permission::where('id' ,'>' , 18)->whereNotIn('id' , 
            [
               19,20,21,22,23,24,25,37,       ]
            )->get());
        }
    }
}
