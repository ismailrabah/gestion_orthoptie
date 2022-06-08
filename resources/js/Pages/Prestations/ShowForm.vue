<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Note:</template>
            {{ model.note }}
        </jig-dd>
        <jig-dd>
            <template #dt>Traitement:</template>
            {{ model.traitement }}
        </jig-dd>
        <jig-dd>
            <template #dt>Diagnostique:</template>
            {{ model.diagnostique }}
        </jig-dd>
        <jig-dd>
            <template #dt>Montant:</template>
            {{ model.montant }}
        </jig-dd>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowPrestationsForm",
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
