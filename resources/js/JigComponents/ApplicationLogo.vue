<template>
    <inertia-link :href="$page.props.app.url">
        <!-- <img
            :alt="$page.props.app.name"
            class="max-h-full text-white"
            :src="logoUrl"
        /> -->
        <h1 class="mt-3 text-sm font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-2xl lg:text-3xl">
            <span class="inline ">Gestion </span> 
            <span class="relative  text-transparent bg-clip-text bg-gradient-to-br from-secondary to-primary-400 ">Orthoptie</span>
        </h1>
    </inertia-link>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            logoUrl: `${this.$page.props.app.url}/vendor/jig/images/savannabits-banner.png`,
        };
    },
});
</script>
