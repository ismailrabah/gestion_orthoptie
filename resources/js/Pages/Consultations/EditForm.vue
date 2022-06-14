<template>
    <form @submit.prevent="updateModel">
       
        <div class=" sm:col-span-4" >
            <jet-label for="fichier" value="Fichier De Patient" class="mb-2"/>
            <inertia-button :href="route('admin.fichiers.show', form.fichier.id)" classes=" mb-6 bg-green-100 hover:bg-green-200 text-primary"><i class="mr-2 fas fa-file-alt"></i>{{form.fichier.patient.title}}</inertia-button>
            <jet-input class="w-full" type="hidden" id="fichier" name="fichier" v-model="form.fichier"></jet-input>
            <jet-input-error :message="form.errors.fichier" class="mt-2" />
        </div>

        <div class=" sm:col-span-4 mt-2">
            <jet-label for="orthoptiste" value="Orthoptiste" />
            <infinite-select class="w-full" :per-page="15" :api-url="route('api.users.index')" :queryParams="{'role' : 'orthoptiste'}"
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
            <infinite-select class="w-full" :per-page="15" :api-url="route('api.salles-d-examens.index')"
                            id="salle" name="salle"
                            v-model="form.salle" label="name"
                            :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.salle}"
            ></infinite-select>
            <jet-input-error :message="form.errors.salle" class="mt-2" />
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
    import JigDatepicker from "@/JigComponents/JigDatepicker.vue";
    import JetInput from "@/Jetstream/Input.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';
    import { defineComponent } from "vue";
    import JigTextarea from "@/JigComponents/JigTextarea.vue";

    export default defineComponent({
        name: "EditConsultationForm",
        props: {
            model: Object,
        },
        components: {
            InertiaButton,
            JetLabel,
            JetInputError,
            JetInput,
            JigDatepicker,
            InfiniteSelect,
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
                this.form.put(this.route('admin.consultations.update',this.form.id),
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
