<template>
    <jig-layout>
        <template #header>
            <div class="flex flex-wrap items-center justify-between w-full px-4">
                <inertia-link :href="route('admin.consultations.index')" class="text-xl font-black text-white">
                    <i class="fas fa-arrow-left"></i> 
                    Retour| Nouveau Consultation 
                </inertia-link>
                <div v-if="fichier">
                    <inertia-link v-if="fichier.patient" :href="route('admin.patients.show' , fichier.patient.id)"  class="text-xl font-black text-white"><i class="fas fa-user-injured"></i> {{fichier.patient.title}}</inertia-link>
                </div>
            </div>
        </template>
        <div class="flex flex-wrap px-4">
            <div class="z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md">
                <create-consultations-form :fichier="fichier" @success="onSuccess" @error="onError"/>
            </div>
        </div>
    </jig-layout>
</template>

<script>
    import JigLayout from "@/Layouts/JigLayout.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import CreateConsultationsForm from "./CreateForm.vue";
    import DisplayMixin from "@/Mixins/DisplayMixin.js";
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "CreateConsultations",
        components: {
            InertiaButton,
            JigLayout,
            CreateConsultationsForm,
        },
        props: {
            fichier: Object,
        },
        data() {
            return {}
        },
        mixins: [DisplayMixin],
        mounted() {},
        computed: {
            flash() {
                return this.$page.props.flash || {}
            }
        },
        methods: {
            onSuccess(msg) {
                this.displayNotification('success',msg);
                this.$inertia.visit(route('admin.consultations.index'));
            },
            onError(msg) {
                this.displayNotification('error',msg);
            }
        }
    });
</script>

<style scoped>

</style>
