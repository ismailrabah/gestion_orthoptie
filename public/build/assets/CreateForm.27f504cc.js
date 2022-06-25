import{J as p}from"./Input.6a7016f4.js";import{J as u}from"./Label.6bff53fc.js";import{I as c}from"./InertiaButton.9718c36b.js";import{J as f}from"./InputError.96d9f536.js";import{d as h,z as b,r as t,o as _,e as v,a,l as r,n as i,w as g,q as V,b as $}from"./main.227f4171.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.a8a3989e.js";const j=h({name:"CreateTachesForm",components:{InertiaButton:c,JetInputError:f,JetLabel:u,JetInput:p},data(){return{form:b({name:null,price:null},{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.taches.store"),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),C={class:"sm:col-span-4"},J={class:"sm:col-span-4"},y={class:"mt-2 text-right"},B=$("Submit");function I(e,s,M,N,S,k){const m=t("jet-label"),n=t("jet-input"),l=t("jet-input-error"),d=t("inertia-button");return _(),v("form",{class:"w-full",onSubmit:s[2]||(s[2]=V((...o)=>e.storeModel&&e.storeModel(...o),["prevent"]))},[a("div",C,[r(m,{for:"name",value:"Name"}),r(n,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":s[0]||(s[0]=o=>e.form.name=o)},null,8,["modelValue","class"]),r(l,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),a("div",J,[r(m,{for:"price",value:"Price"}),r(n,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.price}]),type:"text",id:"price",name:"price",modelValue:e.form.price,"onUpdate:modelValue":s[1]||(s[1]=o=>e.form.price=o)},null,8,["modelValue","class"]),r(l,{message:e.form.errors.price,class:"mt-2"},null,8,["message"])]),a("div",y,[r(d,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:g(()=>[B]),_:1},8,["disabled"])])],32)}var L=w(j,[["render",I]]);export{L as default};
