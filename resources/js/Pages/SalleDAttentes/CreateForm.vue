<template>
    <form class="w-full" @submit.prevent="storeModel">
        
        <div class=" sm:col-span-4">
            <jet-label for="name" value="Name" />
            <jet-input class="w-full" type="text" id="name" name="name" v-model="form.name"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.name}"
            ></jet-input>
            <jet-input-error :message="form.errors.name" class="mt-2" />
        </div>

        <div class=" sm:col-span-4">
            <jet-label for="status" value="Status" />
            <jet-input class="w-full" type="text" id="status" name="status" v-model="form.status"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.status}"
            ></jet-input>
            <jet-input-error :message="form.errors.status" class="mt-2" />
        </div>
            

        <div class=" sm:col-span-4">
            <jet-label for="start_time" value="Start Time" />
            <jig-datepicker class="w-full"
                            data-date-format="H:i"
                            :data-alt-input="true"
                            data-alt-format="h:i K"
                            data-default-hour="9"
                            :data-enable-time="true"
                            :data-no-calendar="true"
                            name="start_time"
                            v-model="form.start_time"
                            id="start_time"
                            :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.start_time}"
            ></jig-datepicker>
            <jet-input-error :message="form.errors.start_time" class="mt-2" />
        </div>
            

        <div class=" sm:col-span-4">
            <jet-label for="end_time" value="End Time" />
            <jig-datepicker class="w-full"
                            data-date-format="H:i"
                            :data-alt-input="true"
                            data-alt-format="h:i K"
                            data-default-hour="9"
                            :data-enable-time="true"
                            :data-no-calendar="true"
                            name="end_time"
                            v-model="form.end_time"
                            id="end_time"
                            :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.end_time}"
            ></jig-datepicker>
            <jet-input-error :message="form.errors.end_time" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="max_numbers" value="Max Numbers" />
            <jet-input class="w-full" type="number" id="max_numbers" name="max_numbers" v-model="form.max_numbers"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.max_numbers}"
            ></jet-input>
            <jet-input-error :message="form.errors.max_numbers" class="mt-2" />
        </div>
        <div class=" sm:col-span-4">
            <jet-label for="assaistante" value="Assaistante" />
            <infinite-select :per-page="15" :api-url="route('api.users.index')" :queryParams="{'role' : 'assistante'}"
                             id="assaistante" name="assaistante"
                             v-model="form.assaistante" label="name"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.assaistante}"
            ></infinite-select>
            <jet-input-error :message="form.errors.assaistante" class="mt-2" />
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
        name: "CreateSalleDAttentesForm",
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
                    name: null,
                    status: null,
                    start_time: null,
                    end_time: null,
                    max_numbers: null,
                    "assaistante": null,
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
                this.form.post(this.route('admin.salle-d-attentes.store'),{
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
