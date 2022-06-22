import{J as f}from"./JigDatepicker.db423e32.js";import{J as p}from"./Input.a6112c10.js";import{J as c}from"./Label.be169a38.js";import{I as b}from"./InertiaButton.b06aab18.js";import{J as g}from"./InputError.aee3d62e.js";import{j as h,K as v,e as d,o as V,k as j,g as l,x as s,n,w,C as J,i as k}from"./vendor.bec00c62.js";import{_ as y}from"./plugin-vue_export-helper.5a098b48.js";import"./vue-flatpickr.min.9065625b.js";import"./main.e85b79d9.js";const $=h({name:"CreatePatientsForm",components:{InertiaButton:b,JetInputError:g,JetLabel:c,JigDatepicker:f,JetInput:p},data(){return{form:v({nom:null,prenom:null,adresse:null,cin:null,phone:null,email:null,ddn:null},{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.patients.store"),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),C={class:"sm:col-span-4"},U={class:"sm:col-span-4"},I={class:"sm:col-span-4"},B={class:"sm:col-span-4"},E={class:"sm:col-span-4"},M={class:"sm:col-span-4"},N={class:"sm:col-span-4"},P={class:"mt-2 text-right"},S=k("Submit");function D(e,r,F,A,L,Y){const a=d("jet-label"),t=d("jet-input"),m=d("jet-input-error"),i=d("jig-datepicker"),u=d("inertia-button");return V(),j("form",{class:"w-full",onSubmit:r[7]||(r[7]=J((...o)=>e.storeModel&&e.storeModel(...o),["prevent"]))},[l("div",C,[s(a,{for:"nom",value:"Nom"}),s(t,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.nom}]),type:"text",id:"nom",name:"nom",modelValue:e.form.nom,"onUpdate:modelValue":r[0]||(r[0]=o=>e.form.nom=o)},null,8,["modelValue","class"]),s(m,{message:e.form.errors.nom,class:"mt-2"},null,8,["message"])]),l("div",U,[s(a,{for:"prenom",value:"Prenom"}),s(t,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.prenom}]),type:"text",id:"prenom",name:"prenom",modelValue:e.form.prenom,"onUpdate:modelValue":r[1]||(r[1]=o=>e.form.prenom=o)},null,8,["modelValue","class"]),s(m,{message:e.form.errors.prenom,class:"mt-2"},null,8,["message"])]),l("div",I,[s(a,{for:"adresse",value:"Adresse"}),s(t,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.adresse}]),type:"text",id:"adresse",name:"adresse",modelValue:e.form.adresse,"onUpdate:modelValue":r[2]||(r[2]=o=>e.form.adresse=o)},null,8,["modelValue","class"]),s(m,{message:e.form.errors.adresse,class:"mt-2"},null,8,["message"])]),l("div",B,[s(a,{for:"cin",value:"Cin"}),s(t,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.cin}]),type:"text",id:"cin",name:"cin",modelValue:e.form.cin,"onUpdate:modelValue":r[3]||(r[3]=o=>e.form.cin=o)},null,8,["modelValue","class"]),s(m,{message:e.form.errors.cin,class:"mt-2"},null,8,["message"])]),l("div",E,[s(a,{for:"phone",value:"Phone"}),s(t,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.phone}]),type:"text",id:"phone",name:"phone",modelValue:e.form.phone,"onUpdate:modelValue":r[4]||(r[4]=o=>e.form.phone=o)},null,8,["modelValue","class"]),s(m,{message:e.form.errors.phone,class:"mt-2"},null,8,["message"])]),l("div",M,[s(a,{for:"email",value:"Email"}),s(t,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.email}]),type:"text",id:"email",name:"email",modelValue:e.form.email,"onUpdate:modelValue":r[5]||(r[5]=o=>e.form.email=o)},null,8,["modelValue","class"]),s(m,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])]),l("div",N,[s(a,{for:"ddn",value:"Ddn"}),s(i,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.ddn}]),id:"ddn",name:"ddn",modelValue:e.form.ddn,"onUpdate:modelValue":r[6]||(r[6]=o=>e.form.ddn=o),"data-date-format":"Y-m-d","data-alt-input":!0,"data-alt-format":"l M J, Y"},null,8,["modelValue","class"]),s(m,{message:e.form.errors.ddn,class:"mt-2"},null,8,["message"])]),l("div",P,[s(u,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:w(()=>[S]),_:1},8,["disabled"])])],32)}var W=y($,[["render",D]]);export{W as default};
