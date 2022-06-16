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
        Schema::create('consultation_taches', function (Blueprint $table) {
            $table->id();
            $table->double('remises' , 15 , 2)->default(0);
            $table->boolean('pourcentage_remises')->default(false);   
            $table->text('commentaire')->nullable();

            $table->unsignedBigInteger('consultation_id');
            $table->foreign('consultation_id')->references('id')->on('consultations');

            $table->unsignedBigInteger('tache_id');
            $table->foreign('tache_id')->references('id')->on('taches');

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
        Schema::dropIfExists('consultation_taches');
    }
};
