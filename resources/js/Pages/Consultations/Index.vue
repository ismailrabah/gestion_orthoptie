<template>
    <jig-layout>
        <template #header>
            <div class="flex flex-wrap items-center justify-between w-full px-4">
                <inertia-link :href="route('admin.dashboard')" class="text-xl font-black text-white"><i class="fas fa-arrow-left"></i> Retour</inertia-link>
                <div class="flex gap-x-2">
                    <inertia-button v-if="can.create" @click="addConsultation" classes="bg-green-100 hover:bg-green-200 text-primary"><i class="fas fa-plus"></i> Nouveau Consultation</inertia-button>
                    <inertia-button @click.native="$refreshDt(tableId)" classes="bg-indigo-100 hover:bg-green-200 text-indigo"><i class="fas fa-redo"></i> Refresh</inertia-button>
                </div>
            </div>
        </template>
        <div v-if="can.viewAny" class="flex flex-wrap px-4">
            <div class="z-10 flex-auto bg-white md:rounded-md md:shadow-md">
                <h3 class="w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"><i class="mr-2 fas fa-bars"></i> List Des Consultations
                    <div class="inline-block" v-if="fichier">
                        <inertia-link v-if="fichier.patient" :href="route('admin.patients.show' , fichier.patient.id)"  class="text-xl font-black text-primary"> : {{fichier.patient.title}}</inertia-link>
                        <button  v-if="fichier.patient" style="margin-top: -5px;"     type="button" @click="expandInfo()"
                            class="pl-2 pt-1 pb-1 pr-1  transition duration-150 ease-in-out" >
                            <i v-if="!extends_info" class="fas fa-angle-down"></i>
                            <i v-if="extends_info" class="fas fa-angle-up"></i>
                        </button>
                    </div>
                </h3>
                <dl class="gap-4 p-4" v-if="fichier && extends_info" >
                    <div class="flex" v-if="fichier.patient">
                        <jig-dd class="flex-1">
                            <template #dt>Nom:</template>
                            {{ fichier.patient.nom }}
                        </jig-dd>
                        <jig-dd class="flex-1">
                            <template #dt>Prenom:</template>
                            {{ fichier.patient.prenom }}
                        </jig-dd>
                    </div>
                    <div class="flex">
                        <jig-dd class="flex-1">
                            <template #dt>Phone:</template>
                            {{ fichier.patient.phone }}
                        </jig-dd>
                        <jig-dd class="flex-1">
                            <template #dt>Email:</template>
                            {{ fichier.patient.email }}
                        </jig-dd>
                    </div>
                    <div class="flex">
                        <jig-dd class="flex-1">
                            <template #dt>Cin:</template>
                            {{ fichier.patient.cin }}
                        </jig-dd>
                        <jig-dd class="flex-1">
                            <template #dt>Ddn:</template>
                            {{ fichier.patient.ddn }}
                        </jig-dd>
                    </div>
                    <div class="flex">
                        <jig-dd class="flex-1">
                            <template #dt>Adresse:</template>
                            {{ fichier.patient.adresse }}
                        </jig-dd>
                        <jig-dd class="flex-1">
                            <template #dt>Fichiers:</template>
                            {{ fichier.patient.count_fichiers }}
                        </jig-dd>
                    </div>
                </dl>
                <div class="p-4">
                    <dt-component
                        :table-id="tableId"
                        :ajax-url="ajaxUrl"
                        :columns="columns"
                        :ajax-params="tableParams"
                        @show-model="showModel"
                        @edit-model="editModel"
                        @delete-model="confirmDeletion"
                        @manage-model="manageModel"
                        @print-report="printReport"
                    />
                </div>
                <jet-confirmation-modal title="Confirm Deletion" :show="confirmDelete">
                    <template v-slot:content>
                        <div>Are you sure you want to delete this record?</div>
                    </template>
                    <template v-slot:footer>
                        <div class="flex justify-end gap-x-2">
                            <inertia-button as="button" type="button" @click.native.stop="cancelDelete" class="bg-red-500">Cancel</inertia-button>
                            <inertia-button as="button" type="button" @click.native.prevent="deleteModel" class="bg-green-500">Yes, Delete</inertia-button>
                        </div>
                    </template>
                </jet-confirmation-modal>
                <div v-if="showModal && currentModel">
                    <jig-modal
                        :show="showModal"
                        maxWidthClass="max-w-7xl"
                        corner-class="rounded-lg"
                        position-class="align-middle"
                        @close="currentModel = null; showModal = false">

                        <template #title>Show Consultation #{{currentModel.id}}</template>
                        <show-consultations-form :model="currentModel"></show-consultations-form>
                        <template #footer>
                            <inertia-button class="px-4 text-white bg-primary" @click="showModal = false; currentModel = null">Close</inertia-button>
                        </template>
                    </jig-modal>
                </div>
                
                <div v-if="addConsultationModal">
                    <jig-modal
                        :show="addConsultationModal"
                        corner-class="rounded-lg"
                        position-class="align-middle"
                        @close="addConsultationModal = false">
                        <template #title>Nouveau Consultation</template>
                        <create-consultations-form :fichier="fichier" @success="onSuccess" @error="onError"/>
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
    import CreateConsultationsForm from "./CreateForm.vue";

    export default defineComponent({
        name: "Index",
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
            CreateConsultationsForm,
        },
        props: {
            can: Object,
            columns: Array,
            fichier: Object,
        },
        inject: ["$refreshDt","$dayjs"],
        data() {
            return {
                tableId: 'consultations-dt',
                tableParams: {},
                datatable: null,
                confirmDelete: false,
                currentModel: null,
                withDisabled: false,
                showModal: false,
                extends_info: false,
                addConsultationModal:false,
            }
        },
        mixins: [
            DisplayMixin,
        ],
        mounted() {
        },
        computed: {
            ajaxUrl() {
                const url = new URL(this.route('api.consultations.dt'));
                /*if (this.withDisabled) {
                    url.searchParams.append('include-disabled',true);
                }*/
                if (this.fichier) {
                    url.searchParams.append('fichier_id',this.fichier.id);
                }
                return url.href;
            }
        },
        methods: {
            addConsultation(){
                this.addConsultationModal = true;
            },
            showModel(model) {
                axios.get(route('api.consultations.show',model)).then(res => {
                    this.currentModel = res.data.payload;
                    this.showModal = true;
                })
                // this.$inertia.visit(this.route('admin.consultations.show',model.id));
            },
            editModel(model) {
                this.$inertia.visit(this.route('admin.consultations.edit',model.id));
            },
            manageModel(model){
                this.$inertia.visit(this.route('admin.consultations.manage',model.id));
            },
            expandInfo(){
                this.extends_info = ! this.extends_info;
            },
            confirmDeletion(model) {
                this.currentModel = model;
                this.confirmDelete = true;
            },
            cancelDelete() {
                this.currentModel = false;
                this.confirmDelete = false;
            },
            addSuccess(){
                this.displayNotification('success',msg);
                this.addConsultationModal = false;
                this.$refreshDt(this.tableId);
            },
            addError(msg){
                this.displayNotification('error',msg);
            },
            async deleteModel() {
                const vm = this;
                this.confirmDelete = false;
                if (this.currentModel) {
                    this.$inertia.delete(route('admin.consultations.destroy', vm.currentModel),{
                        onFinish: res => {
                            this.displayNotification('success', "Item deleted.");
                            vm.$refreshDt(vm.tableId);
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
                    this.$refreshDt(this.tableId);
                })
            },            
            async printReport(model){
                await axios.get(this.route('api.consultations.print',{'consultation_id': model.id}), { responseType: "blob" }).then(res => {
                    this.displayNotification('success', "Consultation Report Printed");
                    const blob = new Blob([res.data], { type: "application/pdf" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = 'Consultation.pdf';
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
