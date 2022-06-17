<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


/* users api routes */
Route::group(["middleware"=>['auth:sanctum', 'verified'],'as' => 'api.'], function () {
    Route::post('/users/{user}/assign-role', [\App\Http\Controllers\API\UserController::class,'assignRole'])->name('users.assign-role');
    Route::get('/users/dt', [\App\Http\Controllers\API\UserController::class,'dt'])->name('users.dt');
    Route::apiResource('/users', \App\Http\Controllers\API\UserController::class)->parameters(["users" => "user"]);
    Route::post('users-photo/{id}' ,[\App\Http\Controllers\API\UserController::class , 'photoUpdate'])->name('users-photo.update');

    /* permissions api routes */
    Route::get('/permissions/dt', [\App\Http\Controllers\API\PermissionController::class,'dt'])->name('permissions.dt');
    Route::apiResource('/permissions', \App\Http\Controllers\API\PermissionController::class)->parameters(["permissions" => "permission"]);

    /* roles api routes */
    Route::post('/roles/{role}/assign-permission', [\App\Http\Controllers\API\RoleController::class,'assignPermission'])->name('roles.assign-permission');
    Route::get('/roles/dt', [\App\Http\Controllers\API\RoleController::class,'dt'])->name('roles.dt');
    Route::apiResource('/roles', \App\Http\Controllers\API\RoleController::class)->parameters(["roles" => "role"]);

    /* salle-d-attentes api routes */
    Route::get('/salle-d-attentes/dt', [\App\Http\Controllers\API\SalleDAttenteController::class,'dt'])->name('salle-d-attentes.dt');
    Route::apiResource('/salle-d-attentes', \App\Http\Controllers\API\SalleDAttenteController::class)->parameters(["salle-d-attentes" => "salleDAttente"]);

    /* rendez-vous-statuses api routes */
    Route::get('/rendez-vous-statuses/dt', [\App\Http\Controllers\API\RendezVousStatusController::class,'dt'])->name('rendez-vous-statuses.dt');
    Route::apiResource('/rendez-vous-statuses', \App\Http\Controllers\API\RendezVousStatusController::class)->parameters(["rendez-vous-statuses" => "rendezVousStatus"]);

    /* patients api routes */
    Route::get('/patients/dt', [\App\Http\Controllers\API\PatientController::class,'dt'])->name('patients.dt');
    Route::apiResource('/patients', \App\Http\Controllers\API\PatientController::class)->parameters(["patients" => "patient"]);

    /* rendez-vouses api routes */
    Route::get('/rendez-vouses/dt', [\App\Http\Controllers\API\RendezVouController::class,'dt'])->name('rendez-vouses.dt');
    Route::apiResource('/rendez-vouses', \App\Http\Controllers\API\RendezVouController::class)->parameters(["rendez-vouses" => "rendezVou"]);
    Route::get('/agenda', [\App\Http\Controllers\API\RendezVouController::class , 'agenda' ] )->name('agenda');

    /* fichiers api routes */
    Route::get('/fichiers/dt', [\App\Http\Controllers\API\FichierController::class,'dt'])->name('fichiers.dt');
    Route::apiResource('/fichiers', \App\Http\Controllers\API\FichierController::class)->parameters(["fichiers" => "fichier"]);

    /* prestations api routes */
    Route::get('/prestations/dt', [\App\Http\Controllers\API\PrestationController::class,'dt'])->name('prestations.dt');
    Route::apiResource('/prestations', \App\Http\Controllers\API\PrestationController::class)->parameters(["prestations" => "prestation"]);

    /* salles-d-examens api routes */
    Route::get('/salles-d-examens/dt', [\App\Http\Controllers\API\SallesDExamenController::class,'dt'])->name('salles-d-examens.dt');
    Route::apiResource('/salles-d-examens', \App\Http\Controllers\API\SallesDExamenController::class)->parameters(["salles-d-examens" => "sallesDExaman"]);

    /* taches api routes */
    Route::get('/taches/dt', [\App\Http\Controllers\API\TachController::class,'dt'])->name('taches.dt');
    Route::apiResource('/taches', \App\Http\Controllers\API\TachController::class)->parameters(["taches" => "tach"]);

    /* consultations api routes */
    Route::get('/consultations/dt', [\App\Http\Controllers\API\ConsultationController::class,'dt'])->name('consultations.dt');
    Route::apiResource('/consultations', \App\Http\Controllers\API\ConsultationController::class)->parameters(["consultations" => "consultation"]);
    Route::get('/consultations-print', [\App\Http\Controllers\API\ConsultationController::class,'print'])->name('consultations.print');


    /* consultation-taches api routes */
    Route::get('/consultation-taches/dt', [\App\Http\Controllers\API\ConsultationTachController::class,'dt'])->name('consultation-taches.dt');
    Route::apiResource('/consultation-taches', \App\Http\Controllers\API\ConsultationTachController::class)->parameters(["consultation-taches" => "consultationTach"]);
    Route::get('/consultation-taches-print', [\App\Http\Controllers\API\ConsultationTachController::class,'print'])->name('consultation-taches.print');

    /* consultation-prestations api routes */
    Route::get('/consultation-prestations/dt', [\App\Http\Controllers\API\ConsultationPrestationController::class,'dt'])->name('consultation-prestations.dt');
    Route::apiResource('/consultation-prestations', \App\Http\Controllers\API\ConsultationPrestationController::class)->parameters(["consultation-prestations" => "consultationPrestation"]);
});