<template>
    <form class="w-full" @submit.prevent="storeModel">
            
        <div v-if="!patient" class=" sm:col-span-4">
            <jet-label for="patient" value="Patient" />
            <infinite-select :per-page="15" :api-url="route('api.patients.index')"
                             id="patient" name="patient"
                             v-model="form.patient" label="title"
                             :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.patient}"
            ></infinite-select>
            <jet-input-error :message="form.errors.patient" class="mt-2" />
        </div>

        <div class=" sm:col-span-4">
            <jet-label for="titre" value="Titre" />
            <jet-input class="w-full" type="text" id="titre" name="titre" v-model="form.titre"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.titre}"
            ></jet-input>
            <jet-input-error :message="form.errors.titre" class="mt-2" />
        </div>

        <div class=" sm:col-span-4">
            <jet-label for="motif_de_bilan" value="Motif De Bilan" />
            <jig-textarea class="w-full" id="motif_de_bilan" name="motif_de_bilan" v-model="form.motif_de_bilan"
                          :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.motif_de_bilan}"
            ></jig-textarea>
            <jet-input-error :message="form.errors.motif_de_bilan" class="mt-2" />
        </div>

        <div class=" sm:col-span-4">
            <jet-label for="atcd" value="Atcd" />
            <jig-textarea class="w-full" id="atcd" name="atcd" v-model="form.atcd"
                          :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.atcd}"
            ></jig-textarea>
            <jet-input-error :message="form.errors.atcd" class="mt-2" />
        </div>

        <div class=" sm:col-span-4">
            <jet-label for="medcin_traitant" value="Medcin Traitant" />
            <jet-input class="w-full" type="text" id="medcin_traitant" name="medcin_traitant" v-model="form.medcin_traitant"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.medcin_traitant}"
            ></jet-input>
            <jet-input-error :message="form.errors.medcin_traitant" class="mt-2" />
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
    import JetInput from "@/Jetstream/Input.vue";
    import JigTextarea from "@/JigComponents/JigTextarea.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';
    import JetLabel from "@/Jetstream/Label.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JetInputError from "@/Jetstream/InputError.vue"
    import {useForm} from "@inertiajs/inertia-vue3";
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "CreateFichiersForm",
        components: {
            InertiaButton,
            JetInputError,
            JetLabel,
            JetInput,
            JigTextarea,
            InfiniteSelect,
        },
        props: {
            patient: Object,
        },
        data() {
            return {
                form: useForm({
                    medcin_traitant: null,
                    titre: null,
                    atcd: null,
                    commentaire: null,
                    motif_de_bilan: null,
                    "patient": this.patient,
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
                this.form.post(this.route('admin.fichiers.store'),{
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
