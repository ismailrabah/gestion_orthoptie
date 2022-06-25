import{J as f}from"./Input.6a7016f4.js";import{J as p}from"./Label.6bff53fc.js";import{I as d}from"./InertiaButton.9718c36b.js";import{J as _}from"./InputError.96d9f536.js";import{z as h,r as t,o as b,e as v,a as n,l as s,n as g,w as x,q as j,b as w}from"./main.227f4171.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.a8a3989e.js";const V={name:"CreateRolesForm",components:{InertiaButton:d,JetInputError:_,JetLabel:p,JetInput:f},data(){return{form:h({title:null},{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.roles.store"),{onSuccess:l=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:l=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}},C={class:"sm:col-span-4"},y={class:"mt-2 text-right"},B=w("Submit");function I(l,r,M,S,e,i){const a=t("jet-label"),m=t("jet-input"),c=t("jet-input-error"),u=t("inertia-button");return b(),v("form",{class:"w-full",onSubmit:r[1]||(r[1]=j((...o)=>i.storeModel&&i.storeModel(...o),["prevent"]))},[n("div",C,[s(a,{class:"required",for:"title",value:"Title"}),s(m,{class:g(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.title}]),type:"text",id:"title",name:"title",modelValue:e.form.title,"onUpdate:modelValue":r[0]||(r[0]=o=>e.form.title=o)},null,8,["modelValue","class"]),s(c,{message:e.form.errors.title,class:"mt-2"},null,8,["message"])]),n("div",y,[s(u,{type:"submit",class:"bg-success font-semibold disabled:opacity-25",disabled:e.form.processing},{default:x(()=>[B]),_:1},8,["disabled"])])],32)}var T=J(V,[["render",I]]);export{T as default};
