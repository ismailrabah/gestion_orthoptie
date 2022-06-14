<?php
namespace App\Policies;

use App\Models\ConsultationTach;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ConsultationTachPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('consultation-taches.index');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param    \App\Models\User  $user
     * @param    ConsultationTach  $consultationTach
     * @return  mixed
     */
    public function view(User $user, ConsultationTach $consultationTach)
    {
        return $user->hasPermissionTo('consultation-taches.show');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('consultation-taches.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param    \App\Models\User  $user
     * @param    ConsultationTach  $consultationTach
     * @return  mixed
     */
    public function update(User $user, ConsultationTach $consultationTach)
    {
        return $user->hasPermissionTo('consultation-taches.edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    ConsultationTach  $consultationTach
     * @return  mixed
     */
    public function delete(User $user, ConsultationTach $consultationTach)
    {
        return $user->hasPermissionTo('consultation-taches.delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param    \App\Models\User  $user
     * @param    ConsultationTach  $consultationTach
     * @return  mixed
     */
    public function restore(User $user, ConsultationTach $consultationTach)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    ConsultationTach  $consultationTach
     * @return  mixed
     */
    public function forceDelete(User $user, ConsultationTach $consultationTach)
    {
        return $user->hasPermissionTo('consultation-taches.delete');
    }
}
