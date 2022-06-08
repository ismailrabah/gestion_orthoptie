<template>
    <dl class="gap-4">
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
            <template #dt>Commentaire:</template>
            {{ model.commentaire }}
        </jig-dd>
        <jig-dd>
            <template #dt>Medcin Traitant:</template>
            {{ model.medcin_traitant }}
        </jig-dd>
        <jig-dd>
            <template #dt>Patient:</template>
            {{ model.patient ? model.patient.title : '-' }}
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
        name: "ShowFichiersForm",
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
