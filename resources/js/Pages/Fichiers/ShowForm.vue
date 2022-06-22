<template>
    <dl class="gap-4">
        <jig-dd v-if="model.patient && !is_consul">
            <template #dt>Patient:</template>
            <inertia-button :href="route('admin.patients.show', model.patient.id)" classes=" mb-6 bg-green-100 hover:bg-green-200 text-primary"><i class="mr-2 fas fa-user-injured"></i>{{model.patient.title}}</inertia-button>
        </jig-dd>
        <jig-dd>
            <template #dt>Titre:</template>
            {{ model.titre }}
        </jig-dd>
        <jig-dd>
            <template #dt>Motif De Bilan:</template>
            {{ model.motif_de_bilan }}
        </jig-dd>
        <jig-dd>
            <template #dt>Atcd:</template>
            {{ model.atcd }}
        </jig-dd>
        <jig-dd>
            <template #dt>Medcin Traitant:</template>
            {{ model.medcin_traitant }}
        </jig-dd>
        <jig-dd>
            <template #dt>Commentaire:</template>
            {{ model.commentaire }}
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
            
            <inertia-button :href="route('admin.consultations.index',{'patient_id' : model.patient ? model.patient.id : null })" classes="bg-green-100 hover:bg-green-200 text-primary mr-7"><i class="mr-2 fas fa-stethoscope"></i>List des consultations</inertia-button>

        </div>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowFichiersForm",
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
