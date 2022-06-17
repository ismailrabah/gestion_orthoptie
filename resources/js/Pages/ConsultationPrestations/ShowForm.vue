<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Commentaire:</template>
            {{ model.commentaire }}
        </jig-dd>
            <jig-dd>
            <template #dt>Consultation:</template>
            {{ model.consultation ? model.consultation.note : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Prestation:</template>
            {{ model.prestation ? model.prestation.note : '-' }}
        </jig-dd>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowConsultationPrestationsForm",
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
