<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Patient:</template>
            {{ model.patient ? model.patient.title : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Orthoptiste:</template>
            {{ model.orthoptiste ? model.orthoptiste.name : '-' }} {{ model.orthoptiste ? model.orthoptiste.last_name : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Note:</template>
            {{ model.note }}
        </jig-dd>
        <jig-dd>
            <template #dt>Date:</template>
            {{ model.date }}
        </jig-dd>
        <jig-dd>
            <template #dt>Salle:</template>
            {{ model.salle ? model.salle.name : '-' }}
        </jig-dd>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowConsultationsForm",
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
