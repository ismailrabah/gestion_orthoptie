<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Nom et Prenom:</template>
            {{ model.nom }} {{ model.prenom }}
        </jig-dd>
        <jig-dd>
            <template #dt>Adresse:</template>
            {{ model.adresse }}
        </jig-dd>
        <jig-dd>
            <template #dt>Cin:</template>
            {{ model.cin }}
        </jig-dd>
        <jig-dd>
            <template #dt>Phone:</template>
            {{ model.phone }}
        </jig-dd>
        <jig-dd>
            <template #dt>Email:</template>
            {{ model.email }}
        </jig-dd>
        <jig-dd>
            <template #dt>Ddn:</template>
            {{ model.ddn }}
        </jig-dd>
        <jig-dd v-if="!is_consul">
            <template #dt>Fichiers:</template>
            {{ model.count_fichiers }}
        </jig-dd>
        <jig-dd v-if="!is_consul">
            <template #dt>Created at:</template>
            {{ model.created_at }}
        </jig-dd>
        <jig-dd v-if="!is_consul">
            <template #dt>Updated at:</template>
            {{ model.updated_at }}
        </jig-dd>
        <div class="pt-2 my-2"  v-if="!is_consul">
            
            <inertia-button :href="route('admin.fichiers.index',{'patient_id' : model ? model.id : null })" classes="bg-green-100 hover:bg-green-200 text-primary mr-7"><i class="mr-2 fas fa-file-alt"></i>List des fichiers</inertia-button>

            <inertia-button :href="route('admin.rendez-vouses.index',{'patient_id' : model ? model.id : null })" classes="bg-green-100 hover:bg-green-200 text-primary mr-7"><i class="mr-2 fas fa-calendar-check"></i>List des rendez-vous</inertia-button>

            <inertia-button :href="route('admin.consultations.index',{'patient_id' : model ? model.id : null })" classes="bg-green-100 hover:bg-green-200 text-primary mr-7"><i class="mr-2 fas fa-stethoscope"></i>List des consultations</inertia-button>

        </div>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowPatientsForm",
        props: {
            model: Object,
            is_consul: false,
        },
        components: {
            InertiaButton,
            JigDd,
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
        methods: {}
    });
</script>

<style scoped>

</style>
