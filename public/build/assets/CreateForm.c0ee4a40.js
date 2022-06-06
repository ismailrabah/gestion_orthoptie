import{J as p,a as w}from"./JigTextarea.b7507d0e.js";import{J as v}from"./Input.81968ebc.js";import{J as b}from"./Label.fb57189b.js";import{I as g}from"./InertiaButton.8ae24674.js";import{J as h}from"./InputError.c5ba6892.js";import{K as V,e as n,o as j,k as y,g as t,x as r,n as m,w as x,C as U,i as J}from"./vendor.07ccac9c.js";import{_ as k}from"./plugin-vue_export-helper.5a098b48.js";import"./vue-flatpickr.min.52f9a78a.js";import"./main.f117162e.js";const C={name:"CreateUsersForm",components:{InertiaButton:g,JetInputError:h,JetLabel:b,JigDatepicker:p,JetInput:v,JigTextarea:w},data(){return{form:V({name:null,email:null,password:null,profile_photo_path:null,two_factor_secret:null,two_factor_recovery_codes:null,email_verified_at:null,current_team_id:null},{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.users.store"),{onSuccess:d=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:d=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}},I={class:"sm:col-span-4"},E={class:"sm:col-span-4"},T={class:"sm:col-span-4"},B={class:"sm:col-span-4"},F={class:"sm:col-span-4"},M={class:"sm:col-span-4"},P={class:"sm:col-span-4"},S={class:"sm:col-span-4"},N={class:"sm:col-span-4"},A={class:"mt-2 text-right"},K=J("Submit");function L(d,o,R,Y,e,c){const l=n("jet-label"),i=n("jet-input"),a=n("jet-input-error"),f=n("jig-textarea"),u=n("jig-datepicker"),_=n("inertia-button");return j(),y("form",{class:"w-full",onSubmit:o[9]||(o[9]=U((...s)=>c.storeModel&&c.storeModel(...s),["prevent"]))},[t("div",I,[r(l,{for:"name",value:"Name"}),r(i,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form.name=s)},null,8,["modelValue","class"]),r(a,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),t("div",E,[r(l,{for:"email",value:"Email"}),r(i,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.email}]),type:"text",id:"email",name:"email",modelValue:e.form.email,"onUpdate:modelValue":o[1]||(o[1]=s=>e.form.email=s)},null,8,["modelValue","class"]),r(a,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])]),t("div",T,[r(l,{for:"password",value:"Password"}),r(i,{type:"time",id:"password",name:"password",modelValue:e.form.password,"onUpdate:modelValue":o[2]||(o[2]=s=>e.form.password=s),class:m({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.password})},null,8,["modelValue","class"]),r(a,{message:e.form.errors.password,class:"mt-2"},null,8,["message"])]),t("div",B,[r(l,{for:"password_confirmation",value:"Repeat Password"}),r(i,{type:"time",id:"password_confirmation",name:"password_confirmation",modelValue:e.form.password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=s=>e.form.password_confirmation=s),class:m({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.password_confirmation})},null,8,["modelValue","class"])]),t("div",F,[r(l,{for:"profile_photo_path",value:"Profile Photo Path"}),r(i,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.profile_photo_path}]),type:"text",id:"profile_photo_path",name:"profile_photo_path",modelValue:e.form.profile_photo_path,"onUpdate:modelValue":o[4]||(o[4]=s=>e.form.profile_photo_path=s)},null,8,["modelValue","class"]),r(a,{message:e.form.errors.profile_photo_path,class:"mt-2"},null,8,["message"])]),t("div",M,[r(l,{for:"two_factor_secret",value:"Two Factor Secret"}),r(f,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.two_factor_secret}]),id:"two_factor_secret",name:"two_factor_secret",modelValue:e.form.two_factor_secret,"onUpdate:modelValue":o[5]||(o[5]=s=>e.form.two_factor_secret=s)},null,8,["modelValue","class"]),r(a,{message:e.form.errors.two_factor_secret,class:"mt-2"},null,8,["message"])]),t("div",P,[r(l,{for:"two_factor_recovery_codes",value:"Two Factor Recovery Codes"}),r(f,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.two_factor_recovery_codes}]),id:"two_factor_recovery_codes",name:"two_factor_recovery_codes",modelValue:e.form.two_factor_recovery_codes,"onUpdate:modelValue":o[6]||(o[6]=s=>e.form.two_factor_recovery_codes=s)},null,8,["modelValue","class"]),r(a,{message:e.form.errors.two_factor_recovery_codes,class:"mt-2"},null,8,["message"])]),t("div",S,[r(l,{for:"email_verified_at",value:"Email Verified At"}),r(u,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.email_verified_at}]),"data-date-format":"Y-m-d H:i:s","data-alt-input":!0,"data-alt-format":"l M J, Y at h:i K","data-default-hour":"9","data-enable-time":!0,name:"email_verified_at",modelValue:e.form.email_verified_at,"onUpdate:modelValue":o[7]||(o[7]=s=>e.form.email_verified_at=s),id:"email_verified_at"},null,8,["modelValue","class"]),r(a,{message:e.form.errors.email_verified_at,class:"mt-2"},null,8,["message"])]),t("div",N,[r(l,{for:"current_team_id",value:"Current Team Id"}),r(i,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.current_team_id}]),type:"text",id:"current_team_id",name:"current_team_id",modelValue:e.form.current_team_id,"onUpdate:modelValue":o[8]||(o[8]=s=>e.form.current_team_id=s)},null,8,["modelValue","class"]),r(a,{message:e.form.errors.current_team_id,class:"mt-2"},null,8,["message"])]),t("div",A,[r(_,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:x(()=>[K]),_:1},8,["disabled"])])],32)}var Z=k(C,[["render",L]]);export{Z as default};
