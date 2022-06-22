<template>
    <dl class="gap-4">
        <div class="flex">
            <div class="flex-1">
                <div class="w-full p-3  text-lg font-black border-r bg-primary-100">
                    <span>Détails du patient :</span>
                </div>
                <show-patients-form  v-if="model.fichier" :model="model.fichier.patient" :is_consul="true" ></show-patients-form>
            </div>
            <div class="flex-1">
                <div class="w-full p-3  text-lg font-black bg-primary-100">
                    <span>Détails du fichier :</span>
                </div>
                <show-fichiers-form  v-if="model.fichier" :model="model.fichier" :is_consul="true" ></show-fichiers-form>
            </div>
        </div>
        <div class="w-full p-3  text-lg font-black bg-primary-100">
            <span>Details Du Consultation :</span>
        </div>
        <jig-dd>
            <template #dt>Orthoptiste:</template>
            {{ model.orthoptiste ? model.orthoptiste.name : '-' }} {{ model.orthoptiste ? model.orthoptiste.last_name : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Date:</template>
            {{ model.date }}
        </jig-dd>
        <jig-dd>
            <template #dt>Salle:</template>
            {{ model.salle ? model.salle.name : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Diagnostique:</template>
            {{ model.diagnostique }}
        </jig-dd>
        <jig-dd>
            <template #dt>Traitement:</template>
            {{ model.traitement }}
        </jig-dd>
        <jig-dd>
            <template #dt>Note:</template>
            {{ model.note }}
        </jig-dd>
        <jig-dd>
            <template #dt>Commentaire:</template>
            {{ model.commentaire }}
        </jig-dd>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import { defineComponent } from "vue";
    import ShowFichiersForm from "@/Pages/Fichiers/ShowForm.vue";
    import ShowPatientsForm from "@/Pages/Patients/ShowForm.vue";
    export default defineComponent({
        name: "ShowConsultationsForm",
        props: {
            model: Object,
        },
        components: {
            InertiaButton,
            JigDd,
            ShowFichiersForm,
            ShowPatientsForm,
        },
        data() {
            return {}
        },
        mounted() {},
        computed: {
            flash() {
                return this.$page.props.flash || {}
            }
        },
        methods: {
            print(){

            }
        }
    });
</script>

<style scoped>

</style>
