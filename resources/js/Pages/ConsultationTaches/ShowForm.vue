<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Commentaire:</template>
            {{ model.commentaire }}
        </jig-dd>
        <jig-dd>
            <template #dt>Remises:</template>
            {{ model.remises }}
        </jig-dd>
        <jig-dd>
            <template #dt>Pourcentage Remises:</template>
            {{ model.pourcentage_remises }}
        </jig-dd>
            <jig-dd>
            <template #dt>Consultation:</template>
            {{ model.consultation ? model.consultation.note : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Tache:</template>
            {{ model.tache ? model.tache.name : '-' }}
        </jig-dd>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowConsultationTachesForm",
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
