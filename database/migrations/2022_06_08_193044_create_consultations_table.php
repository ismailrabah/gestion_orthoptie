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
        Schema::create('consultations', function (Blueprint $table) {
            $table->id();

            $table->string('note' , 500)->nullable();
            $table->text('commentaire')->nullable();
            $table->date('date')->require();
            
            $table->text('traitement')->nullable();
            $table->text('diagnostique')->nullable();
            
            $table->unsignedBigInteger('fichier_id')->nullable();
            $table->foreign('fichier_id')->references('id')->on('fichiers')->onDelete('set null');
            
            $table->unsignedBigInteger('orthoptiste_id')->nullable();
            $table->foreign('orthoptiste_id')->references('id')->on('users')->onDelete('set null');

            $table->unsignedBigInteger('salle_id')->nullable();
            $table->foreign('salle_id')->references('id')->on('salles_d_examens')->onDelete('set null');
            
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
        Schema::dropIfExists('consultations');
    }
};
