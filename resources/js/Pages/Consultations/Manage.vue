<template>
    <jig-layout>
        <template #header>
            <div class="flex flex-wrap items-center justify-between w-full px-4">
                <inertia-link :href="route('admin.consultations.index')" class="text-xl font-black text-white"><i class="fas fa-arrow-left"></i> Retour</inertia-link>
                <div class="flex gap-x-2">
                    <inertia-button v-if="can.create" @click="AddTache" classes="bg-green-100 hover:bg-green-200 text-primary"><i class="fas fa-plus"></i> Ajouter une tâche </inertia-button>
                    <!-- <inertia-button @click.native="$refreshDt(tableId)" classes="bg-indigo-100 hover:bg-green-200 text-indigo"><i class="fas fa-redo"></i> Refresh</inertia-button> -->
                </div>
            </div>
        </template>
        <div v-if="can.viewAny" class="flex flex-wrap px-4">
            <div class="z-10 flex-auto bg-white md:rounded-md md:shadow-md">
                <h3 class="w-full p-4 text-lg font-black sm:rounded-t-lg bg-primary-200"><i class="mr-2 fas fa-briefcase-medical text-black"></i>
                    <inertia-link v-if="consultation" :href="route('admin.consultations.show' , consultation.id)"  class="text-xl font-black text-primary">Gestion de Consultation </inertia-link>
                    <button  v-if="consultation" style="margin-top: -5px;" type="button" @click="expandInfo()"
                        class="pl-2 pt-1 pb-1 pr-1  transition duration-150 ease-in-out" >
                        <i v-if="!extends_info" class="fas fa-angle-down"></i>
                        <i v-if="extends_info" class="fas fa-angle-up"></i>
                    </button>
                </h3>
                <dl class="gap-4 p-4 " v-if="consultation && extends_info">
                    <show-consultations-form :model="consultation"></show-consultations-form>
                </dl>
                <h3 class="w-full p-4 text-lg font-black bg-info-100">
                    <i class="mr-2 fas fa-tasks"></i> 
                    List des tâches
                    <button @click="extends_taches = !extends_taches"
                        class="pl-2 pt-1 pb-1 pr-1 transition duration-150 ease-in-out" >
                        <i v-if="!extends_taches" class="fas fa-angle-down"></i>
                        <i v-if="extends_taches" class="fas fa-angle-up"></i>
                    </button>
                </h3>

                <div class="p-4" v-if="extends_taches">
                    <dt-component
                        :table-id="tachesTableId"
                        :ajax-url="tachesAjaxUrl"
                        :columns="tachesColumns"
                        :ajax-params="tachesTableParams"
                        @show-model="showTacheModel"
                        @edit-model="editTacheModel"
                        @delete-model="confirmTacheDeletion"
                        @print-invoice="printInvoice"
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

                        <template #title>Show Consultation Tach #{{currentTacheModel.id}}</template>
                        <show-consultation-taches-form :model="currentTacheModel"></show-consultation-taches-form>
                        <template #footer>
                            <inertia-button class="px-4 text-white bg-primary" @click="showTacheModal = false; currentTacheModel = null">Close</inertia-button>
                        </template>
                    </jig-modal>
                </div>
                
                <div v-if="showEditTacheModal && currentTacheModel">
                    <jig-modal
                        :show="showEditTacheModal"
                        corner-class="rounded-lg"
                        position-class="align-middle"
                        @close="currentTacheModel = null; showEditTacheModal = false">
                        <template #title>Edit Consultation Tach #{{currentTacheModel.consultation_id}} / {{currentTacheModel.tache_id}}</template>
                        <edit-consultation-tach-form :model="currentTacheModel"  @success="onSuccessEditTache" @error="onErrorEditTache" ></edit-consultation-tach-form>
                    </jig-modal>
                </div>

                <div v-if="showAddTacheModal && consultation">
                    <jig-modal
                        :show="showAddTacheModal"
                        corner-class="rounded-lg"
                        position-class="align-middle"
                        @close="showAddTacheModal = false">
                        <template #title>Ajouter une tâche </template>
                        <create-consultation-taches-form :consultation="consultation"  @success="onAddTacheSuccess" @error="onAddTacheError"></create-consultation-taches-form>
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
    import ShowConsultationTachesForm from "@/Pages/ConsultationTaches/ShowForm.vue";
    import { defineComponent } from "vue";
    import JigDd from "@/JigComponents/JigDd.vue";
    import ShowConsultationsForm from "@/Pages/Consultations/ShowForm.vue";
    import CreateConsultationTachesForm from "@/Pages/ConsultationTaches/CreateForm.vue";
    import EditConsultationTachForm from "@/Pages/ConsultationTaches/EditForm.vue";

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
            ShowConsultationTachesForm,
            JigDd,
            ShowConsultationsForm,
            CreateConsultationTachesForm,
            EditConsultationTachForm,
        },
        props: {
            can: Object,
            tachesColumns: Array,
            consultation: Object,
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
                showAddTacheModal: false,
                showEditTacheModal: false,
                extends_info: false,
                extends_taches: true,
            }
        },
        mixins: [
            DisplayMixin,
        ],
        mounted() {
        },
        computed: {
            tachesAjaxUrl() {
                const url = new URL(this.route('api.consultation-taches.dt'));
                if (this.consultation) {
                    url.searchParams.append('consultation_id',this.consultation.id);
                }
                return url.href;
            }
        },
        methods: {
            showTacheModel(model) {
                axios.get(route('api.consultation-taches.show',model)).then(res => {
                    this.currentTacheModel = res.data.payload;
                    this.showTacheModal = true;
                })
            },
            editTacheModel(model) {
                axios.get(route('api.consultation-taches.show',model.id)).then(res => {
                    this.currentTacheModel = res.data.payload;
                    this.showEditTacheModal = true;
                })
            },
            AddTache(){
                this.showAddTacheModal = true;
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
                    this.$inertia.delete(route('admin.consultation-taches.destroy', vm.currentTacheModel),{
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
                axios.put(route(`api.consultation-taches.update`,model.id),{
                    enabled: enabled
                }).then(res => {
                    this.displayNotification('success', res.data.message);
                    this.$refreshDt(this.tachesTableId);
                })
            },
            onAddTacheSuccess(msg) {
                this.displayNotification('success',msg);
                this.showAddTacheModal = false;
                this.$refreshDt(this.tachesTableId);
            },
            onAddTacheError(msg) {
                this.displayNotification('error',msg);
            },
            onSuccessEditTache(msg) {
                this.displayNotification('success',msg);
                this.showEditTacheModal = false;
                this.$refreshDt(this.tachesTableId);
            },
            onErrorEditTache(msg) {
                this.displayNotification('error',msg);
            },
            async printInvoice(model){
                await axios.get(this.route('api.consultation-taches.print',{'consultation_tache_id': model.id}), { responseType: "blob" }).then(res => {
                    this.displayNotification('success', "Consultation Tache Printed");
                    const blob = new Blob([res.data], { type: "application/pdf" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = 'consultation-tache.pdf';
                    link.click();
                    URL.revokeObjectURL(link.href);
                }).catch(err => {
                    this.displayNotification('error', err.response?.data?.message || err.message || err);
                }).finally(res => {
                    // this.displayNotification('success', "finally");
                });
            },
        }
    });
</script>

<style scoped>

</style>
