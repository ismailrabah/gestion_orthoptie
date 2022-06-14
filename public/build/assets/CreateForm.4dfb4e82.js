import{J as p}from"./Checkbox.978793da.js";import{J as c}from"./Input.3ded2763.js";import{J as b}from"./Label.933dc508.js";import{I as h}from"./InertiaButton.8127fa1b.js";import{J as _}from"./InputError.5454eee4.js";import{j,K as v,e as t,o as C,k as g,g as a,x as s,n as m,w as k,C as V,i as $}from"./vendor.f8a6287f.js";import{C as I}from"./style.98bceb8b.js";import{_ as J}from"./plugin-vue_export-helper.5a098b48.js";const w=j({name:"CreateRendezVousStatusesForm",components:{InertiaButton:h,JetInputError:_,JetLabel:b,JetInput:c,JetCheckbox:p,ColorPicker:I},data(){return{form:v({name:null,color:null,is_default:!1},{remember:!1})}},setup(){},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.rendez-vous-statuses.store"),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),y={class:"sm:col-span-4"},S={class:"sm:col-span-4"},B={class:"sm:col-span-4"},z={class:"mt-2 text-right"},E=$("Submit");function M(e,o,N,U,F,L){const l=t("jet-label"),i=t("jet-input"),n=t("jet-input-error"),u=t("jet-checkbox"),d=t("color-picker"),f=t("inertia-button");return C(),g("form",{class:"w-full",onSubmit:o[3]||(o[3]=V((...r)=>e.storeModel&&e.storeModel(...r),["prevent"]))},[a("div",y,[s(l,{for:"name",value:"Name"}),s(i,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=r=>e.form.name=r)},null,8,["modelValue","class"]),s(n,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),a("div",S,[s(l,{for:"is_default",value:"Is Default"}),s(u,{class:m(["p-2",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.is_default}]),type:"checkbox",id:"is_default",name:"is_default",modelValue:e.form.is_default,"onUpdate:modelValue":o[1]||(o[1]=r=>e.form.is_default=r)},null,8,["modelValue","class"]),s(n,{message:e.form.errors.is_default,class:"mt-2"},null,8,["message"])]),a("div",B,[s(l,{for:"color",value:"Color"}),s(d,{pureColor:e.form.color,"onUpdate:pureColor":o[2]||(o[2]=r=>e.form.color=r),format:"hex"},null,8,["pureColor"]),s(n,{message:e.form.errors.color,class:"mt-2"},null,8,["message"])]),a("div",z,[s(f,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:k(()=>[E]),_:1},8,["disabled"])])],32)}var G=J(w,[["render",M]]);export{G as default};
