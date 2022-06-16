<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth:sanctum', 'verified'])->get('/admin', function () {
    return Inertia::render('AdminDashboard');
})->name('admin.dashboard');


/* users admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('users', \App\Http\Controllers\Admin\UserController::class)->parameters(["users" => "user"]);

    /* permissions admin routes */
    Route::resource('permissions', \App\Http\Controllers\Admin\PermissionController::class)->parameters(["permissions" => "permission"]);

    /* roles admin routes */
    Route::resource('roles', \App\Http\Controllers\Admin\RoleController::class)->parameters(["roles" => "role"]);

    /* salle-d-attentes admin routes */
    Route::resource('salle-d-attentes', \App\Http\Controllers\Admin\SalleDAttenteController::class)->parameters(["salle-d-attentes" => "salleDAttente"]);

    /* rendez-vous-statuses admin routes */
    Route::resource('rendez-vous-statuses', \App\Http\Controllers\Admin\RendezVousStatusController::class)->parameters(["rendez-vous-statuses" => "rendezVousStatus"]);

    /* patients admin routes */
    Route::resource('patients', \App\Http\Controllers\Admin\PatientController::class)->parameters(["patients" => "patient"]);

    /* rendez-vouses admin routes */
    Route::resource('rendez-vouses', \App\Http\Controllers\Admin\RendezVouController::class)->parameters(["rendez-vouses" => "rendezVou"]);
    Route::get('/agenda', [\App\Http\Controllers\Admin\RendezVouController::class,'agenda'])->name('agenda');

    /* fichiers admin routes */
    Route::resource('fichiers', \App\Http\Controllers\Admin\FichierController::class)->parameters(["fichiers" => "fichier"]);

    /* prestations admin routes */
    Route::resource('prestations', \App\Http\Controllers\Admin\PrestationController::class)->parameters(["prestations" => "prestation"]);

    /* salles-d-examens admin routes */
    Route::resource('salles-d-examens', \App\Http\Controllers\Admin\SallesDExamenController::class)->parameters(["salles-d-examens" => "sallesDExaman"]);

    /* taches admin routes */
    Route::resource('taches', \App\Http\Controllers\Admin\TachController::class)->parameters(["taches" => "tach"]);

    /* consultations admin routes */
    Route::resource('consultations', \App\Http\Controllers\Admin\ConsultationController::class)->parameters(["consultations" => "consultation"]);
    Route::get('consultations/manage/{consultation}', [\App\Http\Controllers\Admin\ConsultationController::class,'manage'])->name('consultations.manage');
});


/* Auto-generated consultation-taches admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('consultation-taches', \App\Http\Controllers\Admin\ConsultationTachController::class)->parameters(["consultation-taches" => "consultationTach"]);
});
