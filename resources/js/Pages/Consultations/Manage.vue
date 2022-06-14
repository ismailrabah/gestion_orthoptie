<template>
    <jig-layout>
        <template #header>
            <div class="flex flex-wrap items-center justify-between w-full px-4">
                <inertia-link :href="route('admin.consultations.index')" class="text-xl font-black text-white"><i class="fas fa-arrow-left"></i> Retour</inertia-link>
                <div class="flex gap-x-2">
                    <inertia-button v-if="can.create" @click="AddTache" classes="bg-green-100 hover:bg-green-200 text-primary"><i class="fas fa-plus"></i>Ajouter une tâche</inertia-button>
                    <inertia-button v-if="can.create" @click="AddPrestation" classes="bg-green-100 hover:bg-green-200 text-primary"><i class="fas fa-plus"></i>Ajouter une prestation</inertia-button>
                    <!-- <inertia-button @click.native="$refreshDt(tableId)" classes="bg-indigo-100 hover:bg-green-200 text-indigo"><i class="fas fa-redo"></i> Refresh</inertia-button> -->
                </div>
            </div>
        </template>
        <div v-if="can.viewAny" class="flex flex-wrap px-4">
            <div class="z-10 flex-auto bg-white md:rounded-md md:shadow-md">
                <h3 class="w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"><i class="mr-2 fas fa-bars"></i> List Des Taches
                    <inertia-link v-if="patient" :href="route('admin.patients.show' , patient.id)"  class="text-xl font-black text-primary"> : {{patient.title}}</inertia-link>
                    <button  v-if="patient" style="margin-top: -5px;" type="button" @click="expandInfo()"
                        class="pl-2 pt-1 pb-1 pr-1  transition duration-150 ease-in-out" >
                        <i v-if="!extends_info" class="fas fa-angle-down"></i>
                        <i v-if="extends_info" class="fas fa-angle-up"></i>
                    </button>
                </h3>
                <dl class="gap-4 p-4 " v-if="patient && extends_info">
                    <div class="flex">
                        <jig-dd class="flex-1">
                            <template #dt>Nom:</template>
                            {{ patient.nom }}
                        </jig-dd>
                        <jig-dd class="flex-1">
                            <template #dt>Prenom:</template>
                            {{ patient.prenom }}
                        </jig-dd>
                    </div>
                    <div class="flex">
                        <jig-dd class="flex-1">
                            <template #dt>Phone:</template>
                            {{ patient.phone }}
                        </jig-dd>
                        <jig-dd class="flex-1">
                            <template #dt>Email:</template>
                            {{ patient.email }}
                        </jig-dd>
                    </div>
                    <div class="flex">
                        <jig-dd class="flex-1">
                            <template #dt>Cin:</template>
                            {{ patient.cin }}
                        </jig-dd>
                        <jig-dd class="flex-1">
                            <template #dt>Ddn:</template>
                            {{ patient.ddn }}
                        </jig-dd>
                    </div>
                    <div class="flex">
                        <jig-dd class="flex-1">
                            <template #dt>Adresse:</template>
                            {{ patient.adresse }}
                        </jig-dd>
                        <jig-dd class="flex-1">
                            <template #dt>Fichiers:</template>
                            {{ patient.count_fichiers }}
                        </jig-dd>
                    </div>
                </dl>
                <div class="p-4">
                    <dt-component
                        :table-id="tachesTableId"
                        :ajax-url="tachesAjaxUrl"
                        :columns="tachesColumns"
                        :ajax-params="tachesTableParams"
                        @show-model="showTacheModel"
                        @edit-model="editTacheModel"
                        @delete-model="confirmTacheDeletion"
                    />
                </div>
                <jet-confirmation-modal title="Confirm Deletion" :show="confirmTacheDelete">
                    <template v-slot:content>
                        <div>Are you sure you want to delete this record?</div>
                    </template>
                    <template v-slot:footer>
                        <div class="flex justify-end gap-x-2">
                            <inertia-button as="button" type="button" @click.native.stop="cancelTacheDelete" class="bg-red-500">Cancel</inertia-button>
                            <inertia-button as="button" type="button" @click.native.prevent="deleteTacheModel" class="bg-green-500">Yes, Delete</inertia-button>
                        </div>
                    </template>
                </jet-confirmation-modal>
                <div v-if="showTacheModal && currentTacheModel">
                    <jig-modal
                        :show="showTacheModal"
                        maxWidthClass="max-w-7xl"
                        corner-class="rounded-lg"
                        position-class="align-middle"
                        @close="currentTacheModel = null; showTacheModal = false">

                        <template #title>Show Consultation #{{currentTacheModel.id}}</template>
                        <show-consultations-form :model="currentTacheModel"></show-consultations-form>
                        <template #footer>
                            <inertia-button class="px-4 text-white bg-primary" @click="showTacheModal = false; currentTacheModel = null">Close</inertia-button>
                        </template>
                    </jig-modal>
                </div>
            </div>
        </div>
        <div v-else class="p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md ">
            You are not authorized to view a list of Consultations
        </div>
    </jig-layout>
</template>

<script>
    import JigLayout from "@/Layouts/JigLayout.vue";
    import JetConfirmationModal from "@/Jetstream/ConfirmationModal.vue";
    import JetDialogModal from "@/Jetstream/DialogModal.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JigToggle from "@/JigComponents/JigToggle.vue";
    import JigModal from "@/JigComponents/JigModal.vue";
    import DtComponent from "@/JigComponents/DtComponent.vue";
    import DisplayMixin from "@/Mixins/DisplayMixin.js";
    import ShowConsultationsForm from "@/Pages/Consultations/ShowForm.vue";
    import { defineComponent } from "vue";
    import JigDd from "@/JigComponents/JigDd.vue";

    export default defineComponent({
        name: "Manage",
        components: {
            DtComponent,
            JigToggle,
            InertiaButton,
            JetConfirmationModal,
            JetDialogModal,
            JigModal,
            JigLayout,
            ShowConsultationsForm,
            JigDd,
        },
        props: {
            can: Object,
            tachesColumns: Array,
            patient: Object,
        },
        inject: ["$refreshDt","$dayjs"],
        data() {
            return {
                tachesTableId: 'consultation-taches-dt',
                tachesTableParams: {},
                datatable: null,
                confirmTacheDelete: false,
                currentTacheModel: null,
                withDisabled: false,
                showTacheModal: false,
                extends_info: false,
            }
        },
        mixins: [
            DisplayMixin,
        ],
        mounted() {
        },
        computed: {
            tachesAjaxUrl() {
                const url = new URL(this.route('api.consultations.dt'));
                /*if (this.withDisabled) {
                    url.searchParams.append('include-disabled',true);
                }*/
                if (this.patient) {
                    url.searchParams.append('patient_id',this.patient.id);
                }
                return url.href;
            }
        },
        methods: {
            showTacheModel(model) {
                axios.get(route('api.consultations.show',model)).then(res => {
                    this.currentTacheModel = res.data.payload;
                    this.showTacheModal = true;
                })
                // this.$inertia.visit(this.route('admin.consultations.show',model.id));
            },
            editTacheModel(model) {
                this.$inertia.visit(this.route('admin.consultations.edit',model.id));
            },
            AddTache(model){
               
            },
            AddPrestation(model){
                
            },
            expandInfo(){
                this.extends_info = ! this.extends_info;
            },
            confirmTacheDeletion(model) {
                this.currentTacheModel = model;
                this.confirmTacheDelete = true;
            },
            cancelTacheDelete() {
                this.currentTacheModel = false;
                this.confirmTacheDelete = false;
            },
            async deleteTacheModel() {
                const vm = this;
                this.confirmTacheDelete = false;
                if (this.currentTacheModel) {
                    this.$inertia.delete(route('admin.consultations.destroy', vm.currentTacheModel),{
                        onFinish: res => {
                            this.displayNotification('success', "Item deleted.");
                            vm.$refreshDt(vm.tachesTableId);
                        },
                        onError: err => {
                            console.log(err);
                            this.displayNotification('error', "There was an error while deleting the item.");
                        }
                    });
                }
            },
            async toggleActivation(enabled,model) {
                const vm = this;
                console.log(enabled);
                axios.put(route(`api.consultations.update`,model.id),{
                    enabled: enabled
                }).then(res => {
                    this.displayNotification('success', res.data.message);
                    this.$refreshDt(this.tachesTableId);
                })
            }
        }
    });
</script>

<style scoped>

</style>
