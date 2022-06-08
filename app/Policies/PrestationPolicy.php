<?php
namespace App\Policies;

use App\Models\Prestation;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PrestationPolicy
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
        return $user->hasPermissionTo('prestations.index');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param    \App\Models\User  $user
     * @param    Prestation  $prestation
     * @return  mixed
     */
    public function view(User $user, Prestation $prestation)
    {
        return $user->hasPermissionTo('prestations.show');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('prestations.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param    \App\Models\User  $user
     * @param    Prestation  $prestation
     * @return  mixed
     */
    public function update(User $user, Prestation $prestation)
    {
        return $user->hasPermissionTo('prestations.edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    Prestation  $prestation
     * @return  mixed
     */
    public function delete(User $user, Prestation $prestation)
    {
        return $user->hasPermissionTo('prestations.delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param    \App\Models\User  $user
     * @param    Prestation  $prestation
     * @return  mixed
     */
    public function restore(User $user, Prestation $prestation)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    Prestation  $prestation
     * @return  mixed
     */
    public function forceDelete(User $user, Prestation $prestation)
    {
        return $user->hasPermissionTo('prestations.delete');
    }
}
