<?php
namespace App\Policies;

use App\Models\ConsultationPrestation;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ConsultationPrestationPolicy
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
        return $user->hasPermissionTo('consultation-prestations.index');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param    \App\Models\User  $user
     * @param    ConsultationPrestation  $consultationPrestation
     * @return  mixed
     */
    public function view(User $user, ConsultationPrestation $consultationPrestation)
    {
        return $user->hasPermissionTo('consultation-prestations.show');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('consultation-prestations.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param    \App\Models\User  $user
     * @param    ConsultationPrestation  $consultationPrestation
     * @return  mixed
     */
    public function update(User $user, ConsultationPrestation $consultationPrestation)
    {
        return $user->hasPermissionTo('consultation-prestations.edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    ConsultationPrestation  $consultationPrestation
     * @return  mixed
     */
    public function delete(User $user, ConsultationPrestation $consultationPrestation)
    {
        return $user->hasPermissionTo('consultation-prestations.delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param    \App\Models\User  $user
     * @param    ConsultationPrestation  $consultationPrestation
     * @return  mixed
     */
    public function restore(User $user, ConsultationPrestation $consultationPrestation)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    ConsultationPrestation  $consultationPrestation
     * @return  mixed
     */
    public function forceDelete(User $user, ConsultationPrestation $consultationPrestation)
    {
        return $user->hasPermissionTo('consultation-prestations.delete');
    }
}
