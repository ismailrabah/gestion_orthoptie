<template>
    <form @submit.prevent="updateModel">
                 <div class=" sm:col-span-4">
            <jet-label for="name" value="Name" />
            <jet-input class="w-full" type="text" id="name" name="name" v-model="form.name"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.name}"
            ></jet-input>
            <jet-input-error :message="form.errors.name" class="mt-2" />
        </div>
                <div class=" sm:col-span-4">
            <jet-label for="is_default" value="Is Default" />
            <jet-checkbox class="p-2" type="checkbox" id="is_default" name="is_default" :checked="form.is_default" v-model="form.is_default"
                          :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.is_default}"
            ></jet-checkbox>
            <jet-input-error :message="form.errors.is_default" class="mt-2" />
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
    import JetCheckbox from "@/Jetstream/Checkbox.vue";
    import JetInput from "@/Jetstream/Input.vue";
        
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "EditRendezVousStatusForm",
        props: {
            model: Object,
        },
        components: {
            InertiaButton,
            JetLabel,
            JetInputError,
            JetInput,
                        JetCheckbox,
                        
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
                this.form.put(this.route('admin.rendez-vous-statuses.update',this.form.id),
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
