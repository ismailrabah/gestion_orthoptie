<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Status:</template>
            <div class="flex">
                <infinite-select v-if="model.status" class="w-full flex-1" :per-page="15" :api-url="route('api.rendez-vous-statuses.index')"
                    id="status" name="status" v-model="model.status" label="name"
                ></infinite-select>
                <inertia-button class="px-4 text-white bg-indigo ml-2" @click="statusChanged"><i class="fas fa-save"></i></inertia-button>
            </div>
        </jig-dd>
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
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowRendezVousForm",
        props: {
            model: Object,
        },
        components: {
            InertiaButton,
            JigDd,
            InfiniteSelect,
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
        methods: {
            async statusChanged(){
                const vm = this;
                axios.put(route(`api.rendez-vouses.update`,this.model.id),{
                    status: this.model.status
                }).then(res => {
                    vm.$emit('success',vm.flash.success);
                })
            }
        }
    });
</script>

<style scoped>

</style>
