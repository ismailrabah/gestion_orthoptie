<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string("nom", 255)->require();
            $table->string("prenom", 255)->nullable();
            $table->string("adresse")->nullable();
            $table->date("ddn")->nullable();
            $table->string("cin" , 25)->nullable();
            $table->string("phone" , 25)->nullable();
            $table->string("email" , 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
};
