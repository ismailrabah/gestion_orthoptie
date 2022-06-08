<template>
    <form class="w-full" @submit.prevent="storeModel">
        
        <div class=" sm:col-span-4">
            <jet-label for="name" value="First Name" />
            <jet-input class="w-full" type="text" id="name" name="name" v-model="form.name"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.name}"
            ></jet-input>
            <jet-input-error :message="form.errors.name" class="mt-2" />
        </div>

        <div class=" sm:col-span-4">
            <jet-label for="last_name" value="First Name" />
            <jet-input class="w-full" type="text" id="last_name" name="last_name" v-model="form.last_name"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.last_name}"
            ></jet-input>
            <jet-input-error :message="form.errors.last_name" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="email" value="Email" />
            <jet-input class="w-full" type="text" id="email" name="email" v-model="form.email"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.email}"
            ></jet-input>
            <jet-input-error :message="form.errors.email" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="phone" value="Phone" />
            <jet-input class="w-full" type="text" id="phone" name="phone" v-model="form.phone"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.phone}"
            ></jet-input>
            <jet-input-error :message="form.errors.phone" class="mt-2" />
        </div>
            
        <div class=" sm:col-span-4">
            <jet-label for="password" value="Password" />
            <jet-input type="password" id="password" name="password" v-model="form.password"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.password}"
            ></jet-input>
            <jet-input-error :message="form.errors.password" class="mt-2" />
        </div>

        <div class=" sm:col-span-4">
            <jet-label for="password_confirmation" value="Repeat Password" />
            <jet-input type="password" id="password_confirmation" name="password_confirmation" v-model="form.password_confirmation"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.password_confirmation}"
            ></jet-input>
        </div>
                  
        <div class="sm:col-span-4">
            <jet-label for="roles" value="Role" />
            <select class="w-full cost_select" v-model="form.role"  id="type" name="type"
                :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.role}">
                <option v-for="(role, idx) of roles" :key="idx" :value="role.id">{{role.name}}</option>
            </select>
        </div>

        <div class=" sm:col-span-4">
             <!-- Profile Photo File Input -->
            <input type="file" class="hidden" ref="photo" @change="updatePhotoPreview">

            <jet-label for="photo" value="Photo" />

            <!-- Current Profile Photo -->
            <div class="mt-2" v-show="! photoPreview">
                <img :src="form.profile_photo_path" :alt="form.name" class="rounded-full h-20 w-20 object-cover">
            </div>
            <!-- New Profile Photo Preview -->
            <div class="mt-2" v-show="photoPreview">
                <span class="block rounded-full w-20 h-20"
                        :style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + photoPreview + '\');'">
                </span>
            </div>

            <jet-secondary-button class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
                Select A New Photo
            </jet-secondary-button>

            <jet-secondary-button type="button" class="mt-2" @click.prevent="deletePhoto" v-if="form.profile_photo_path">
                Remove Photo
            </jet-secondary-button>

            <jet-input-error :message="form.errors.photo" class="mt-2" />
        </div>
                
            
        <!-- <div class=" sm:col-span-4">
            <jet-label for="profile_photo_path" value="Profile Photo Path" />
            <jet-input class="w-full" type="text" id="profile_photo_path" name="profile_photo_path" v-model="form.profile_photo_path"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.profile_photo_path}"
            ></jet-input>
            <jet-input-error :message="form.errors.profile_photo_path" class="mt-2" />
        </div> -->
            
        <!-- <div class=" sm:col-span-4">
            <jet-label for="two_factor_secret" value="Two Factor Secret" />
            <jig-textarea class="w-full" id="two_factor_secret" name="two_factor_secret" v-model="form.two_factor_secret"
                          :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.two_factor_secret}"
            ></jig-textarea>
            <jet-input-error :message="form.errors.two_factor_secret" class="mt-2" />
        </div> -->
            
        <!-- <div class=" sm:col-span-4">
            <jet-label for="two_factor_recovery_codes" value="Two Factor Recovery Codes" />
            <jig-textarea class="w-full" id="two_factor_recovery_codes" name="two_factor_recovery_codes" v-model="form.two_factor_recovery_codes"
                          :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.two_factor_recovery_codes}"
            ></jig-textarea>
            <jet-input-error :message="form.errors.two_factor_recovery_codes" class="mt-2" />
        </div> -->
            
        <!-- <div class=" sm:col-span-4">
            <jet-label for="email_verified_at" value="Email Verified At" />
            <jig-datepicker class="w-full"
                            data-date-format="Y-m-d H:i:s"
                            :data-alt-input="true"
                            data-alt-format="l M J, Y at h:i K"
                            data-default-hour="9"
                            :data-enable-time="true"
                            name="email_verified_at"
                            v-model="form.email_verified_at"
                            id="email_verified_at"
                            :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.email_verified_at}"
            ></jig-datepicker>
            <jet-input-error :message="form.errors.email_verified_at" class="mt-2" />
        </div> -->
            
        <!-- <div class=" sm:col-span-4">
            <jet-label for="current_team_id" value="Current Team Id" />
            <jet-input class="w-full" type="text" id="current_team_id" name="current_team_id" v-model="form.current_team_id"
                       :class="{'border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100': form.errors.current_team_id}"
            ></jet-input>
            <jet-input-error :message="form.errors.current_team_id" class="mt-2" />
        </div> -->
                
        <div class="mt-2 text-right">
            <inertia-button type="submit" class="font-semibold bg-success disabled:opacity-25" :disabled="form.processing">Submit</inertia-button>
        </div>
    </form>
</template>

<script>
    import JigDatepicker from "@/JigComponents/JigDatepicker.vue";
    import JetInput from "@/Jetstream/Input.vue";
    import JigTextarea from "@/JigComponents/JigTextarea.vue";
    import JetLabel from "@/Jetstream/Label.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JetInputError from "@/Jetstream/InputError.vue"
    import {useForm} from "@inertiajs/inertia-vue3";
    
    import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue'
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';

    export default {
        name: "CreateUsersForm",
        props: {
            roles: Array,
        },
        components: {
            InertiaButton,
            JetInputError,
            JetLabel,
            JigDatepicker,
            JetInput,
            JigTextarea,
            JetSecondaryButton,
            InfiniteSelect,
        },
        data() {
            return {
                form: useForm({
                    name: null,
                    last_name: null,
                    email: null,
                    phone: null,
                    password: null,
                    password_confirmation: null,
                    profile_photo_path: null,
                    two_factor_secret: null,
                    two_factor_recovery_codes: null,
                    email_verified_at: null,
                    current_team_id: null,
                    photo: null,
                    role: null,                           
                }, {remember: false}),
                photoPreview: null,
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
                if (this.$refs.photo) {
                    this.form.photo = this.$refs.photo.files[0]
                }
                this.form.post(this.route('admin.users.store'),{
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
            },
            
            selectNewPhoto() {
                this.$refs.photo.click();
            },

            updatePhotoPreview() {
                const photo = this.$refs.photo.files[0];

                if (! photo) return;

                const reader = new FileReader();

                reader.onload = (e) => {
                    this.photoPreview = e.target.result;
                };

                reader.readAsDataURL(photo);
            },

            deletePhoto() {
                this.$inertia.delete(route('current-user-photo.destroy'), {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.photoPreview = null;
                        this.clearPhotoFileInput();
                    },
                });
            },

            clearPhotoFileInput() {
                if (this.$refs.photo?.value) {
                    this.$refs.photo.value = null;
                }
            }
        }
    }
</script>

<style scoped>
    .cost_select{
        border-color: #e5e7eb;
        background: #f9fafb;
    }
</style>
