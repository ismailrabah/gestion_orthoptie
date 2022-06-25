import{J as b}from"./Checkbox.4dcf8749.js";import{J as g}from"./Input.6a7016f4.js";import{J as V}from"./JigTextarea.5922ebb2.js";import{I as v}from"./InfiniteSelect.35ef3c17.js";import{J as _}from"./Label.6bff53fc.js";import{I as C}from"./InertiaButton.9718c36b.js";import{J as j}from"./InputError.96d9f536.js";import{d as J,z as $,r as t,o as u,e as c,l as s,n as m,m as k,a as l,w,q as y,b as I}from"./main.227f4171.js";import{_ as U}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.a8a3989e.js";const S=J({name:"CreateConsultationTachesForm",components:{InertiaButton:C,JetInputError:j,JetLabel:_,JetInput:g,JetCheckbox:b,JigTextarea:V,InfiniteSelect:v},props:{consultation:Object},data(){return{form:$({commentaire:null,remises:null,pourcentage_remises:!1,consultation:this.consultation,tache:null},{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.consultation-taches.store"),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),T={key:0,class:"sm:col-span-4"},B={class:"sm:col-span-4"},M={class:"sm:col-span-4"},N={class:"sm:col-span-4"},E={class:"sm:col-span-4"},F={class:"mt-2 text-right"},z=I("Submit");function R(e,o,q,A,L,O){const a=t("jet-label"),i=t("infinite-select"),n=t("jet-input-error"),d=t("jet-input"),p=t("jet-checkbox"),f=t("jig-textarea"),h=t("inertia-button");return u(),c("form",{class:"w-full",onSubmit:o[5]||(o[5]=y((...r)=>e.storeModel&&e.storeModel(...r),["prevent"]))},[e.consultation?k("",!0):(u(),c("div",T,[s(a,{for:"consultation",value:"Consultation"}),s(i,{"per-page":15,"api-url":e.route("api.consultations.index"),id:"consultation",name:"consultation",modelValue:e.form.consultation,"onUpdate:modelValue":o[0]||(o[0]=r=>e.form.consultation=r),label:"note",class:m({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.consultation})},null,8,["api-url","modelValue","class"]),s(n,{message:e.form.errors.consultation,class:"mt-2"},null,8,["message"])])),l("div",B,[s(a,{for:"tache",value:"Tache"}),s(i,{"per-page":15,"api-url":e.route("api.taches.index"),id:"tache",name:"tache",modelValue:e.form.tache,"onUpdate:modelValue":o[1]||(o[1]=r=>e.form.tache=r),label:"name",class:m({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.tache})},null,8,["api-url","modelValue","class"]),s(n,{message:e.form.errors.tache,class:"mt-2"},null,8,["message"])]),l("div",M,[s(a,{for:"remises",value:"Remises"}),s(d,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.remises}]),type:"text",id:"remises",name:"remises",modelValue:e.form.remises,"onUpdate:modelValue":o[2]||(o[2]=r=>e.form.remises=r)},null,8,["modelValue","class"]),s(n,{message:e.form.errors.remises,class:"mt-2"},null,8,["message"])]),l("div",N,[s(a,{for:"pourcentage_remises",value:"Pourcentage Remises"}),s(p,{class:m(["p-2",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.pourcentage_remises}]),type:"checkbox",id:"pourcentage_remises",name:"pourcentage_remises",modelValue:e.form.pourcentage_remises,"onUpdate:modelValue":o[3]||(o[3]=r=>e.form.pourcentage_remises=r)},null,8,["modelValue","class"]),s(n,{message:e.form.errors.pourcentage_remises,class:"mt-2"},null,8,["message"])]),l("div",E,[s(a,{for:"commentaire",value:"Commentaire"}),s(f,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.commentaire}]),id:"commentaire",name:"commentaire",modelValue:e.form.commentaire,"onUpdate:modelValue":o[4]||(o[4]=r=>e.form.commentaire=r)},null,8,["modelValue","class"]),s(n,{message:e.form.errors.commentaire,class:"mt-2"},null,8,["message"])]),l("div",F,[s(h,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:w(()=>[z]),_:1},8,["disabled"])])],32)}var x=U(S,[["render",R]]);export{x as default};
