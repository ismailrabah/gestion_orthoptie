<?php
namespace App\Policies;

use App\Models\RendezVousStatus;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RendezVousStatusPolicy
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
        return $user->hasPermissionTo('rendez-vous-statuses.index');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param    \App\Models\User  $user
     * @param    RendezVousStatus  $rendezVousStatus
     * @return  mixed
     */
    public function view(User $user, RendezVousStatus $rendezVousStatus)
    {
        return $user->hasPermissionTo('rendez-vous-statuses.show');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('rendez-vous-statuses.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param    \App\Models\User  $user
     * @param    RendezVousStatus  $rendezVousStatus
     * @return  mixed
     */
    public function update(User $user, RendezVousStatus $rendezVousStatus)
    {
        return $user->hasPermissionTo('rendez-vous-statuses.edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    RendezVousStatus  $rendezVousStatus
     * @return  mixed
     */
    public function delete(User $user, RendezVousStatus $rendezVousStatus)
    {
        return $user->hasPermissionTo('rendez-vous-statuses.delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param    \App\Models\User  $user
     * @param    RendezVousStatus  $rendezVousStatus
     * @return  mixed
     */
    public function restore(User $user, RendezVousStatus $rendezVousStatus)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    RendezVousStatus  $rendezVousStatus
     * @return  mixed
     */
    public function forceDelete(User $user, RendezVousStatus $rendezVousStatus)
    {
        return $user->hasPermissionTo('rendez-vous-statuses.delete');
    }
}
