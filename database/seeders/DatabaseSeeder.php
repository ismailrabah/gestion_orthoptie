<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(SeedAdminRoleAndUser::class);
        $this->call(GrantAllPermsToAdmin::class);
        $this->call(SeedAssistanteRoleAndUser::class);
        $this->call(GrantPermsToAssistanteRole::class);
        $this->call(SeedOrthoptisteRoleAndUser::class);
        $this->call(GrantPermsToOrthoptisteRole::class);

        
        $this->call(SeedStagiaireRoleAndUser::class);
        $this->call(GrantPermsToStagiaireRole::class);

        $this->call(SeedInitData::class);
    }
}
