<template>
    <inertia-link :href="href" :class="classes">
        <slot></slot>
    </inertia-link>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    props: ["href", "active"],

    computed: {
        classes() {
            return this.active
                ? "text-green-500 hover:text-green-600 bg-green-50 hover:bg-green-100 border-l-4 border-green-500 text-md py-3 font-bold block"
                : "text-gray-800 hover:text-gray-600 hover:bg-green-100 py-3 font-bold block";
        },
    },
});
</script>
