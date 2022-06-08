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

            $table->string('note' , 255)->nullable();
            $table->date('date')->require();
            
            $table->unsignedBigInteger('patient_id')->nullable();
            $table->foreign('patient_id')->references('id')->on('patients')->onDelete('set null');
            
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
