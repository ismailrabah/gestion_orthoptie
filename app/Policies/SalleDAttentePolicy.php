<?php
namespace App\Policies;

use App\Models\SalleDAttente;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SalleDAttentePolicy
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
        return $user->hasPermissionTo('salle-d-attentes.index');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param    \App\Models\User  $user
     * @param    SalleDAttente  $salleDAttente
     * @return  mixed
     */
    public function view(User $user, SalleDAttente $salleDAttente)
    {
        return $user->hasPermissionTo('salle-d-attentes.show');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('salle-d-attentes.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param    \App\Models\User  $user
     * @param    SalleDAttente  $salleDAttente
     * @return  mixed
     */
    public function update(User $user, SalleDAttente $salleDAttente)
    {
        return $user->hasPermissionTo('salle-d-attentes.edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    SalleDAttente  $salleDAttente
     * @return  mixed
     */
    public function delete(User $user, SalleDAttente $salleDAttente)
    {
        return $user->hasPermissionTo('salle-d-attentes.delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param    \App\Models\User  $user
     * @param    SalleDAttente  $salleDAttente
     * @return  mixed
     */
    public function restore(User $user, SalleDAttente $salleDAttente)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    SalleDAttente  $salleDAttente
     * @return  mixed
     */
    public function forceDelete(User $user, SalleDAttente $salleDAttente)
    {
        return $user->hasPermissionTo('salle-d-attentes.delete');
    }
}
