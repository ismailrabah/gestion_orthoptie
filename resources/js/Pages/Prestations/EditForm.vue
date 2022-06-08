<template>
    <form @submit.prevent="updateModel">
                 <div class=" sm:col-span-4">
            <jet-label for="note" value="Note" />
            <jet-input class="w-full" type="text" id="note" name="note" v-model="form.note"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.note}"
            ></jet-input>
            <jet-input-error :message="form.errors.note" class="mt-2" />
        </div>
                 <div class=" sm:col-span-4">
            <jet-label for="traitement" value="Traitement" />
            <jet-input class="w-full" type="text" id="traitement" name="traitement" v-model="form.traitement"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.traitement}"
            ></jet-input>
            <jet-input-error :message="form.errors.traitement" class="mt-2" />
        </div>
                <div class=" sm:col-span-4">
            <jet-label for="diagnostique" value="Diagnostique" />
            <jig-textarea class="w-full" id="diagnostique" name="diagnostique" v-model="form.diagnostique"
                          :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.diagnostique}"
            ></jig-textarea>
            <jet-input-error :message="form.errors.diagnostique" class="mt-2" />
        </div>
                <div class=" sm:col-span-4">
            <jet-label for="montant" value="Montant" />
            <jet-input class="w-full" type="number" id="montant" name="montant" v-model="form.montant"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.montant}"
            ></jet-input>
            <jet-input-error :message="form.errors.montant" class="mt-2" />
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
        import JetInput from "@/Jetstream/Input.vue";
    import JigTextarea from "@/JigComponents/JigTextarea.vue";
    
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "EditPrestationForm",
        props: {
            model: Object,
        },
        components: {
            InertiaButton,
            JetLabel,
            JetInputError,
            JetInput,
                                    JigTextarea,
            
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
                this.form.put(this.route('admin.prestations.update',this.form.id),
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
