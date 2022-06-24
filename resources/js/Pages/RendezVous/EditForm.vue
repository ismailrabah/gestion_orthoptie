<template>
    <form @submit.prevent="updateModel">
        
        <div class=" sm:col-span-4">
            <jet-label for="date" value="Date" />
            <jig-datepicker class="w-full"
                            data-date-format="Y-m-d H:i:s"
                            :data-alt-input="true"
                            data-alt-format="l M J, Y at h:i K"
                            data-default-hour="9"
                            :data-enable-time="true"
                            name="date"
                            v-model="form.date"
                            id="date"
                            :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.date}"
            ></jig-datepicker>
            <jet-input-error :message="form.errors.date" class="mt-2" />
        </div>
                                            
        <div class=" sm:col-span-4">
            <jet-label for="patient" value="Patient" />
            <infinite-select class="w-full" :per-page="15" :api-url="route('api.patients.index')"
                                id="patient" name="patient"
                                v-model="form.patient" label="nom"
                                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.patient}"
            ></infinite-select>
            <jet-input-error :message="form.errors.patient" class="mt-2" />
        </div>
        
        <div class=" sm:col-span-4">
            <jet-label for="salle_d_attente" value="Salle d'attente" />
            <infinite-select class="w-full" :per-page="15" :api-url="route('api.salle-d-attentes.index')"
                                id="salle_d_attente" name="salle_d_attente"
                                v-model="form.salle_d_attente" label="name"
                                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.salle_d_attente}"
            ></infinite-select>
            <jet-input-error :message="form.errors.salle_d_attente" class="mt-2" />
        </div>
        
        <div class=" sm:col-span-4">
            <jet-label for="status" value="Status" />
            <infinite-select class="w-full" :per-page="15" :api-url="route('api.rendez-vous-statuses.index')"
                                id="status" name="status"
                                v-model="form.status" label="name"
                                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.status}"
            ></infinite-select>
            <jet-input-error :message="form.errors.status" class="mt-2" />
        </div>
                                    
        <div class="mt-2 text-right">
            <inertia-button type="submit" class="font-semibold text-white bg-primary" :disabled="form.processing">Submit</inertia-button>
        </div>
    </form>
</template>

<script>
    import JetLabel from "@/Jetstream/Label.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JetInputError from "@/Jetstream/InputError.vue";
    import {useForm} from "@inertiajs/inertia-vue3";
    import JigDatepicker from "@/JigComponents/JigDatepicker.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "EditRendezVouForm",
        props: {
            model: Object,
        },
        components: {
            InertiaButton,
            JetLabel,
            JetInputError,
            JigDatepicker,
            InfiniteSelect,
        },
        data() {
            return {
                form: useForm({
                    ...this.model,
                },{remember:false}),
            }
        },
        mounted() {
        },
        computed: {
            flash() {
                return this.$page.props.flash || {}
            }
        },
        methods: {
            async updateModel() {
                this.form.put(this.route('admin.rendez-vouses.update',this.form.id),
                    {
                        onSuccess: res => {
                            if (this.flash.success) {
                                this.$emit('success',this.flash.success);
                            } else if (this.flash.error) {
                                this.$emit('error',this.flash.error);
                            } else {
                                this.$emit('error',"Unknown server error.")
                            }
                        },
                        onError: res => {
                            this.$emit('error',"A server error occurred");
                        }
                    },{remember: false, preserveState: true})
            }
        }
    });
</script>

<style scoped>

</style>
