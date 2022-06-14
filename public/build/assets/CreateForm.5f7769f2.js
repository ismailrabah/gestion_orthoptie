import{J as f}from"./Checkbox.af44e9b7.js";import{J as b}from"./Input.a6112c10.js";import{J as h}from"./JigTextarea.b8a999f8.js";import{I as g}from"./InfiniteSelect.744baeaa.js";import{J as _}from"./Label.be169a38.js";import{I as j}from"./InertiaButton.b06aab18.js";import{J as v}from"./InputError.aee3d62e.js";import{j as V,K as C,e as t,o as J,k as I,g as a,x as s,n as i,w as k,C as $,i as w}from"./vendor.bec00c62.js";import{_ as S}from"./plugin-vue_export-helper.5a098b48.js";const T=V({name:"CreateConsultationTachesForm",components:{InertiaButton:j,JetInputError:v,JetLabel:_,JetInput:b,JetCheckbox:f,JigTextarea:h,InfiniteSelect:g},props:{consultation:Object},data(){return{form:C({commentaire:null,remises:null,pourcentage_remises:!1,consultation:this.consultation,tache:null},{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.consultation-taches.store"),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),y={class:"sm:col-span-4"},B={class:"sm:col-span-4"},U={class:"sm:col-span-4"},E={class:"sm:col-span-4"},M={class:"mt-2 text-right"},F=w("Submit");function N(e,r,L,R,z,A){const m=t("jet-label"),l=t("infinite-select"),n=t("jet-input-error"),c=t("jig-textarea"),u=t("jet-input"),d=t("jet-checkbox"),p=t("inertia-button");return J(),I("form",{class:"w-full",onSubmit:r[4]||(r[4]=$((...o)=>e.storeModel&&e.storeModel(...o),["prevent"]))},[a("div",y,[s(m,{for:"tache",value:"Tache"}),s(l,{"per-page":15,"api-url":e.route("api.taches.index"),id:"tache",name:"tache",modelValue:e.form.tache,"onUpdate:modelValue":r[0]||(r[0]=o=>e.form.tache=o),label:"title",class:i({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.tache})},null,8,["api-url","modelValue","class"]),s(n,{message:e.form.errors.tache,class:"mt-2"},null,8,["message"])]),a("div",B,[s(m,{for:"commentaire",value:"Commentaire"}),s(c,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.commentaire}]),id:"commentaire",name:"commentaire",modelValue:e.form.commentaire,"onUpdate:modelValue":r[1]||(r[1]=o=>e.form.commentaire=o)},null,8,["modelValue","class"]),s(n,{message:e.form.errors.commentaire,class:"mt-2"},null,8,["message"])]),a("div",U,[s(m,{for:"remises",value:"Remises"}),s(u,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.remises}]),type:"text",id:"remises",name:"remises",modelValue:e.form.remises,"onUpdate:modelValue":r[2]||(r[2]=o=>e.form.remises=o)},null,8,["modelValue","class"]),s(n,{message:e.form.errors.remises,class:"mt-2"},null,8,["message"])]),a("div",E,[s(m,{for:"pourcentage_remises",value:"Pourcentage Remises"}),s(d,{class:i(["p-2",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.pourcentage_remises}]),type:"checkbox",id:"pourcentage_remises",name:"pourcentage_remises",modelValue:e.form.pourcentage_remises,"onUpdate:modelValue":r[3]||(r[3]=o=>e.form.pourcentage_remises=o)},null,8,["modelValue","class"]),s(n,{message:e.form.errors.pourcentage_remises,class:"mt-2"},null,8,["message"])]),a("div",M,[s(p,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:k(()=>[F]),_:1},8,["disabled"])])],32)}var X=S(T,[["render",N]]);export{X as default};