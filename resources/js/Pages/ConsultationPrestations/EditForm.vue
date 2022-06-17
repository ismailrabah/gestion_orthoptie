<template>
    <form @submit.prevent="updateModel">
                             
        <div class=" sm:col-span-4">
            <jet-label for="consultation" value="Consultation" />
            <infinite-select class="w-full" :per-page="15" :api-url="route('api.consultations.index')"
                                id="consultation" name="consultation"
                                v-model="form.consultation" label="note"
                                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.consultation}"
            ></infinite-select>
            <jet-input-error :message="form.errors.consultation" class="mt-2" />
        </div>
        
        <div class=" sm:col-span-4">
            <jet-label for="prestation" value="Prestation" />
            <infinite-select class="w-full" :per-page="15" :api-url="route('api.prestations.index')"
                                id="prestation" name="prestation"
                                v-model="form.prestation" label="note"
                                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.prestation}"
            ></infinite-select>
            <jet-input-error :message="form.errors.prestation" class="mt-2" />
        </div>
                
        <div class=" sm:col-span-4">
            <jet-label for="commentaire" value="Commentaire" />
            <jig-textarea class="w-full" id="commentaire" name="commentaire" v-model="form.commentaire"
                          :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.commentaire}"
            ></jig-textarea>
            <jet-input-error :message="form.errors.commentaire" class="mt-2" />
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
            import JigTextarea from "@/JigComponents/JigTextarea.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "EditConsultationPrestationForm",
        props: {
            model: Object,
        },
        components: {
            InertiaButton,
            JetLabel,
            JetInputError,
                                                JigTextarea,
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
                this.form.put(this.route('admin.consultation-prestations.update',this.form.id),
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
