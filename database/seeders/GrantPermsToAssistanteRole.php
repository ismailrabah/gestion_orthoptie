<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class GrantPermsToAssistanteRole extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Role::query()->where("name","=", "assistante")->first();
        if ($admin) {
            $admin->givePermissionTo(Permission::where('id' ,'>' , 18)->whereNotIn('id' , [
               37,
                ])->get());
        }
    }
}
