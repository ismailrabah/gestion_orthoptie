<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Nom:</template>
            {{ model.nom }}
        </jig-dd>
        <jig-dd>
            <template #dt>Prenom:</template>
            {{ model.prenom }}
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
