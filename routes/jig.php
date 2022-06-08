<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth:sanctum', 'verified'])->get('/admin', function () {
    return Inertia::render('AdminDashboard');
})->name('admin.dashboard');


/* Auto-generated users admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('users', \App\Http\Controllers\Admin\UserController::class)->parameters(["users" => "user"]);
});


/* Auto-generated permissions admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('permissions', \App\Http\Controllers\Admin\PermissionController::class)->parameters(["permissions" => "permission"]);
});


/* Auto-generated roles admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('roles', \App\Http\Controllers\Admin\RoleController::class)->parameters(["roles" => "role"]);
});


/* Auto-generated salle-d-attentes admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('salle-d-attentes', \App\Http\Controllers\Admin\SalleDAttenteController::class)->parameters(["salle-d-attentes" => "salleDAttente"]);
});


/* Auto-generated rendez-vous-statuses admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('rendez-vous-statuses', \App\Http\Controllers\Admin\RendezVousStatusController::class)->parameters(["rendez-vous-statuses" => "rendezVousStatus"]);
});


/* Auto-generated patients admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('patients', \App\Http\Controllers\Admin\PatientController::class)->parameters(["patients" => "patient"]);
});


/* Auto-generated rendez-vouses admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('rendez-vouses', \App\Http\Controllers\Admin\RendezVouController::class)->parameters(["rendez-vouses" => "rendezVou"]);
});


/* Auto-generated fichiers admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('fichiers', \App\Http\Controllers\Admin\FichierController::class)->parameters(["fichiers" => "fichier"]);
});
