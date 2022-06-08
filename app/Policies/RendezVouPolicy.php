<?php
namespace App\Policies;

use App\Models\RendezVou;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RendezVouPolicy
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
        return $user->hasPermissionTo('rendez-vous.index');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param    \App\Models\User  $user
     * @param    RendezVou  $rendezVou
     * @return  mixed
     */
    public function view(User $user, RendezVou $rendezVou)
    {
        return $user->hasPermissionTo('rendez-vous.show');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('rendez-vous.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param    \App\Models\User  $user
     * @param    RendezVou  $rendezVou
     * @return  mixed
     */
    public function update(User $user, RendezVou $rendezVou)
    {
        return $user->hasPermissionTo('rendez-vous.edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    RendezVou  $rendezVou
     * @return  mixed
     */
    public function delete(User $user, RendezVou $rendezVou)
    {
        return $user->hasPermissionTo('rendez-vous.delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param    \App\Models\User  $user
     * @param    RendezVou  $rendezVou
     * @return  mixed
     */
    public function restore(User $user, RendezVou $rendezVou)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    RendezVou  $rendezVou
     * @return  mixed
     */
    public function forceDelete(User $user, RendezVou $rendezVou)
    {
        return $user->hasPermissionTo('rendez-vous.delete');
    }
}
