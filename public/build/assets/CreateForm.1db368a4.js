import{J as h}from"./Checkbox.af44e9b7.js";import{J as g}from"./Input.a6112c10.js";import{J as j}from"./JigTextarea.b8a999f8.js";import{I as v}from"./InfiniteSelect.744baeaa.js";import{J as V}from"./Label.be169a38.js";import{I as _}from"./InertiaButton.b06aab18.js";import{J as C}from"./InputError.aee3d62e.js";import{j as J,K as k,e as t,o as u,k as c,x as s,n as m,z as I,g as l,w as $,C as w,i as y}from"./vendor.bec00c62.js";import{_ as S}from"./plugin-vue_export-helper.5a098b48.js";const T=J({name:"CreateConsultationTachesForm",components:{InertiaButton:_,JetInputError:C,JetLabel:V,JetInput:g,JetCheckbox:h,JigTextarea:j,InfiniteSelect:v},props:{consultation:Object},data(){return{form:k({commentaire:null,remises:null,pourcentage_remises:!1,consultation:this.consultation,tache:null},{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.consultation-taches.store"),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),U={key:0,class:"sm:col-span-4"},B={class:"sm:col-span-4"},E={class:"sm:col-span-4"},M={class:"sm:col-span-4"},N={class:"sm:col-span-4"},F={class:"mt-2 text-right"},z=y("Submit");function L(e,o,R,A,K,O){const a=t("jet-label"),i=t("infinite-select"),n=t("jet-input-error"),d=t("jet-input"),p=t("jet-checkbox"),f=t("jig-textarea"),b=t("inertia-button");return u(),c("form",{class:"w-full",onSubmit:o[5]||(o[5]=w((...r)=>e.storeModel&&e.storeModel(...r),["prevent"]))},[e.consultation?I("",!0):(u(),c("div",U,[s(a,{for:"consultation",value:"Consultation"}),s(i,{"per-page":15,"api-url":e.route("api.consultations.index"),id:"consultation",name:"consultation",modelValue:e.form.consultation,"onUpdate:modelValue":o[0]||(o[0]=r=>e.form.consultation=r),label:"note",class:m({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.consultation})},null,8,["api-url","modelValue","class"]),s(n,{message:e.form.errors.consultation,class:"mt-2"},null,8,["message"])])),l("div",B,[s(a,{for:"tache",value:"Tache"}),s(i,{"per-page":15,"api-url":e.route("api.taches.index"),id:"tache",name:"tache",modelValue:e.form.tache,"onUpdate:modelValue":o[1]||(o[1]=r=>e.form.tache=r),label:"name",class:m({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.tache})},null,8,["api-url","modelValue","class"]),s(n,{message:e.form.errors.tache,class:"mt-2"},null,8,["message"])]),l("div",E,[s(a,{for:"remises",value:"Remises"}),s(d,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.remises}]),type:"text",id:"remises",name:"remises",modelValue:e.form.remises,"onUpdate:modelValue":o[2]||(o[2]=r=>e.form.remises=r)},null,8,["modelValue","class"]),s(n,{message:e.form.errors.remises,class:"mt-2"},null,8,["message"])]),l("div",M,[s(a,{for:"pourcentage_remises",value:"Pourcentage Remises"}),s(p,{class:m(["p-2",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.pourcentage_remises}]),type:"checkbox",id:"pourcentage_remises",name:"pourcentage_remises",modelValue:e.form.pourcentage_remises,"onUpdate:modelValue":o[3]||(o[3]=r=>e.form.pourcentage_remises=r)},null,8,["modelValue","class"]),s(n,{message:e.form.errors.pourcentage_remises,class:"mt-2"},null,8,["message"])]),l("div",N,[s(a,{for:"commentaire",value:"Commentaire"}),s(f,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.commentaire}]),id:"commentaire",name:"commentaire",modelValue:e.form.commentaire,"onUpdate:modelValue":o[4]||(o[4]=r=>e.form.commentaire=r)},null,8,["modelValue","class"]),s(n,{message:e.form.errors.commentaire,class:"mt-2"},null,8,["message"])]),l("div",F,[s(b,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:$(()=>[z]),_:1},8,["disabled"])])],32)}var Z=S(T,[["render",L]]);export{Z as default};
