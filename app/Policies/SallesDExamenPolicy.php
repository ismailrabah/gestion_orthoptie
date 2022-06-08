<?php
namespace App\Policies;

use App\Models\SallesDExamen;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SallesDExamenPolicy
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
        return $user->hasPermissionTo('salles-d-examens.index');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param    \App\Models\User  $user
     * @param    SallesDExamen  $sallesDExaman
     * @return  mixed
     */
    public function view(User $user, SallesDExamen $sallesDExaman)
    {
        return $user->hasPermissionTo('salles-d-examens.show');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('salles-d-examens.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param    \App\Models\User  $user
     * @param    SallesDExamen  $sallesDExaman
     * @return  mixed
     */
    public function update(User $user, SallesDExamen $sallesDExaman)
    {
        return $user->hasPermissionTo('salles-d-examens.edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    SallesDExamen  $sallesDExaman
     * @return  mixed
     */
    public function delete(User $user, SallesDExamen $sallesDExaman)
    {
        return $user->hasPermissionTo('salles-d-examens.delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param    \App\Models\User  $user
     * @param    SallesDExamen  $sallesDExaman
     * @return  mixed
     */
    public function restore(User $user, SallesDExamen $sallesDExaman)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    SallesDExamen  $sallesDExaman
     * @return  mixed
     */
    public function forceDelete(User $user, SallesDExamen $sallesDExaman)
    {
        return $user->hasPermissionTo('salles-d-examens.delete');
    }
}
