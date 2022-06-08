<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Name:</template>
            {{ model.name }}
        </jig-dd>
        <jig-dd>
            <template #dt>Status:</template>
            {{ model.status }}
        </jig-dd>
        <jig-dd>
            <template #dt>Start Time:</template>
            {{ model.start_time }}
        </jig-dd>
        <jig-dd>
            <template #dt>End Time:</template>
            {{ model.end_time }}
        </jig-dd>
        <jig-dd>
            <template #dt>Max Numbers:</template>
            {{ model.max_numbers }}
        </jig-dd>
            <jig-dd>
            <template #dt>Assaistante:</template>
            {{ model.assaistante ? model.assaistante.name : '-' }}
        </jig-dd>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowSalleDAttentesForm",
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
