<template>
    <form class="w-full" @submit.prevent="storeModel">
        
        <div class=" sm:col-span-4">
            <jet-label for="patient" value="Patient" />
            <infinite-select :per-page="15" :api-url="route('api.patients.index')"
                             id="patient" name="patient"
                             v-model="form.patient" label="title"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.patient}"
            ></infinite-select>
            <jet-input-error :message="form.errors.patient" class="mt-2" />
        </div>
        
        <div class=" sm:col-span-4">
            <jet-label for="orthoptiste" value="Orthoptiste" />
            <infinite-select :per-page="15" :api-url="route('api.users.index')" :queryParams="{'role' : 'orthoptiste'}"
                             id="orthoptiste" name="orthoptiste"
                             v-model="form.orthoptiste" label="name"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.orthoptiste}"
            ></infinite-select>
            <jet-input-error :message="form.errors.orthoptiste" class="mt-2" />
        </div>
        
        <div class=" sm:col-span-4">
            <jet-label for="note" value="Note" />
            <jet-input class="w-full" type="text" id="note" name="note" v-model="form.note"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.note}"
            ></jet-input>
            <jet-input-error :message="form.errors.note" class="mt-2" />
        </div>
                
        <div class=" sm:col-span-4">
            <jet-label for="date" value="Date" />
            <jig-datepicker
                class="w-full"
                id="date"
                name="date"
                v-model="form.date"
                data-date-format="Y-m-d"
                :data-alt-input="true"
                data-alt-format="l M J, Y"
                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.date}"
            ></jig-datepicker>
            <jet-input-error :message="form.errors.date" class="mt-2" />
        </div>

        <div class=" sm:col-span-4">
            <jet-label for="salle" value="Salle" />
            <infinite-select :per-page="15" :api-url="route('api.salles-d-examens.index')"
                             id="salle" name="salle"
                             v-model="form.salle" label="name"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.salle}"
            ></infinite-select>
            <jet-input-error :message="form.errors.salle" class="mt-2" />
        </div>

        <div class="mt-2 text-right">
            <inertia-button type="submit" class="font-semibold bg-success disabled:opacity-25" :disabled="form.processing">Submit</inertia-button>
        </div>
    </form>
</template>

<script>
    import JigDatepicker from "@/JigComponents/JigDatepicker.vue";
    import JetInput from "@/Jetstream/Input.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';
    import JetLabel from "@/Jetstream/Label.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JetInputError from "@/Jetstream/InputError.vue"
    import {useForm} from "@inertiajs/inertia-vue3";
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "CreateConsultationsForm",
        components: {
            InertiaButton,
            JetInputError,
            JetLabel,
             JigDatepicker,
             JetInput,
                                     InfiniteSelect,
        },
        data() {
            return {
                form: useForm({
                    note: null,
                    date: null,
                                        "orthoptiste": null,
"patient": null,
"salle": null,
                    
                }, {remember: false}),
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
            async storeModel() {
                this.form.post(this.route('admin.consultations.store'),{
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
