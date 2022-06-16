<template>
    <form class="w-full" @submit.prevent="storeModel">
        
        <div v-if="!consultation" class=" sm:col-span-4">
            <jet-label for="consultation" value="Consultation" />
            <infinite-select :per-page="15" :api-url="route('api.consultations.index')"
                             id="consultation" name="consultation"
                             v-model="form.consultation" label="note"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.consultation}"
            ></infinite-select>
            <jet-input-error :message="form.errors.consultation" class="mt-2" />
        </div>

        <div class=" sm:col-span-4">
            <jet-label for="tache" value="Tache" />
            <infinite-select :per-page="15" :api-url="route('api.taches.index')"
                             id="tache" name="tache"
                             v-model="form.tache" label="name"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.tache}"
            ></infinite-select>
            <jet-input-error :message="form.errors.tache" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="remises" value="Remises" />
            <jet-input class="w-full" type="text" id="remises" name="remises" v-model="form.remises"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.remises}"
            ></jet-input>
            <jet-input-error :message="form.errors.remises" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="pourcentage_remises" value="Pourcentage Remises" />
            <jet-checkbox class="p-2" type="checkbox" id="pourcentage_remises" name="pourcentage_remises" v-model="form.pourcentage_remises"
                          :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.pourcentage_remises}"
            ></jet-checkbox>
            <jet-input-error :message="form.errors.pourcentage_remises" class="mt-2" />
        </div>

        <div class=" sm:col-span-4">
            <jet-label for="commentaire" value="Commentaire" />
            <jig-textarea class="w-full" id="commentaire" name="commentaire" v-model="form.commentaire"
                          :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.commentaire}"
            ></jig-textarea>
            <jet-input-error :message="form.errors.commentaire" class="mt-2" />
        </div>

        <div class="mt-2 text-right">
            <inertia-button type="submit" class="font-semibold bg-success disabled:opacity-25" :disabled="form.processing">Submit</inertia-button>
        </div>
    </form>
</template>

<script>
    import JetCheckbox from "@/Jetstream/Checkbox.vue";
    import JetInput from "@/Jetstream/Input.vue";
    import JigTextarea from "@/JigComponents/JigTextarea.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';
    import JetLabel from "@/Jetstream/Label.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JetInputError from "@/Jetstream/InputError.vue"
    import {useForm} from "@inertiajs/inertia-vue3";
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "CreateConsultationTachesForm",
        components: {
            InertiaButton,
            JetInputError,
            JetLabel,
            JetInput,
            JetCheckbox,
            JigTextarea,
            InfiniteSelect,
        },
        props: {
            consultation: Object,
        },
        data() {
            return {
                form: useForm({
                    commentaire: null,
                    remises: null,
                    pourcentage_remises: false,
                    "consultation": this.consultation,
                    "tache": null,
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
                this.form.post(this.route('admin.consultation-taches.store'),{
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
