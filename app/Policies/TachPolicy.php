<?php
namespace App\Policies;

use App\Models\Tach;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TachPolicy
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
        return $user->hasPermissionTo('taches.index');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param    \App\Models\User  $user
     * @param    Tach  $tach
     * @return  mixed
     */
    public function view(User $user, Tach $tach)
    {
        return $user->hasPermissionTo('taches.show');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('taches.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param    \App\Models\User  $user
     * @param    Tach  $tach
     * @return  mixed
     */
    public function update(User $user, Tach $tach)
    {
        return $user->hasPermissionTo('taches.edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    Tach  $tach
     * @return  mixed
     */
    public function delete(User $user, Tach $tach)
    {
        return $user->hasPermissionTo('taches.delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param    \App\Models\User  $user
     * @param    Tach  $tach
     * @return  mixed
     */
    public function restore(User $user, Tach $tach)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    Tach  $tach
     * @return  mixed
     */
    public function forceDelete(User $user, Tach $tach)
    {
        return $user->hasPermissionTo('taches.delete');
    }
}
