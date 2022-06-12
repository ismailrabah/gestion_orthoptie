<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Date:</template>
            {{ model.date }}
        </jig-dd>
            <jig-dd>
            <template #dt>Patient:</template>
            {{ model.patient ? model.patient.nom : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Salle d'attente:</template>
            {{ model.salle_d_attente ? model.salle_d_attente.name : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Status:</template>
            {{ model.status ? model.status.name : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Created at:</template>
            {{ model.created_at }}
        </jig-dd>
        <jig-dd>
            <template #dt>Updated at:</template>
            {{ model.updated_at }}
        </jig-dd>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowRendezVousForm",
        props: {
            model: Object,
        },
        components: {
            InertiaButton,
            JigDd,
        },
        data() {
            return {}
        },
        mounted() {
            console.log('ShowRendezVousForm mounted')
        },
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
