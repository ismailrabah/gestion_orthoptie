<template>
    <form class="w-full" @submit.prevent="storeModel">
        
        <div class=" sm:col-span-4">
            <jet-label for="nom" value="Nom" />
            <jet-input class="w-full" type="text" id="nom" name="nom" v-model="form.nom"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.nom}"
            ></jet-input>
            <jet-input-error :message="form.errors.nom" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="prenom" value="Prenom" />
            <jet-input class="w-full" type="text" id="prenom" name="prenom" v-model="form.prenom"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.prenom}"
            ></jet-input>
            <jet-input-error :message="form.errors.prenom" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="adresse" value="Adresse" />
            <jet-input class="w-full" type="text" id="adresse" name="adresse" v-model="form.adresse"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.adresse}"
            ></jet-input>
            <jet-input-error :message="form.errors.adresse" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="cin" value="Cin" />
            <jet-input class="w-full" type="text" id="cin" name="cin" v-model="form.cin"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.cin}"
            ></jet-input>
            <jet-input-error :message="form.errors.cin" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="phone" value="Phone" />
            <jet-input class="w-full" type="text" id="phone" name="phone" v-model="form.phone"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.phone}"
            ></jet-input>
            <jet-input-error :message="form.errors.phone" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="email" value="Email" />
            <jet-input class="w-full" type="text" id="email" name="email" v-model="form.email"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.email}"
            ></jet-input>
            <jet-input-error :message="form.errors.email" class="mt-2" />
        </div>
                
        <div class=" sm:col-span-4">
            <jet-label for="ddn" value="Ddn" />
            <jig-datepicker
                class="w-full"
                id="ddn"
                name="ddn"
                v-model="form.ddn"
                data-date-format="Y-m-d"
                :data-alt-input="true"
                data-alt-format="l M J, Y"
                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.ddn}"
            ></jig-datepicker>
            <jet-input-error :message="form.errors.ddn" class="mt-2" />
        </div>
                
        <div class="mt-2 text-right">
            <inertia-button type="submit" class="font-semibold bg-success disabled:opacity-25" :disabled="form.processing">Submit</inertia-button>
        </div>
    </form>
</template>

<script>
    import JigDatepicker from "@/JigComponents/JigDatepicker.vue";
    import JetInput from "@/Jetstream/Input.vue";
    import JetLabel from "@/Jetstream/Label.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JetInputError from "@/Jetstream/InputError.vue"
    import {useForm} from "@inertiajs/inertia-vue3";
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "CreatePatientsForm",
        components: {
            InertiaButton,
            JetInputError,
            JetLabel,
             JigDatepicker,
             JetInput,
                                    
        },
        data() {
            return {
                form: useForm({
                    nom: null,
                    prenom: null,
                    adresse: null,
                    cin: null,
                    phone: null,
                    email: null,
                    ddn: null,
                                                            
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
                this.form.post(this.route('admin.patients.store'),{
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
