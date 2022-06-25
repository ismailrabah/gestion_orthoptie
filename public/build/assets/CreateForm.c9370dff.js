import{J as c}from"./Input.6a7016f4.js";import{J as p}from"./Label.6bff53fc.js";import{I as _}from"./InertiaButton.9718c36b.js";import{J as b}from"./InputError.96d9f536.js";import{z as g,r as t,o as h,e as v,a as m,l as r,n as i,w as V,q as x,b as w}from"./main.227f4171.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.a8a3989e.js";const y={name:"CreatePermissionsForm",components:{InertiaButton:_,JetInputError:b,JetLabel:p,JetInput:c},data(){return{form:g({name:null,title:null,guard_name:null},{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.permissions.store"),{onSuccess:u=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:u=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}},J={class:"sm:col-span-4"},C={class:"sm:col-span-4"},N={class:"sm:col-span-4"},B={class:"mt-2 text-right"},I=w("Submit");function M(u,s,S,U,e,d){const l=t("jet-label"),n=t("jet-input"),a=t("jet-input-error"),f=t("inertia-button");return h(),v("form",{class:"w-full",onSubmit:s[3]||(s[3]=x((...o)=>d.storeModel&&d.storeModel(...o),["prevent"]))},[m("div",J,[r(l,{for:"name",value:"Name"}),r(n,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":s[0]||(s[0]=o=>e.form.name=o)},null,8,["modelValue","class"]),r(a,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),m("div",C,[r(l,{for:"title",value:"Title"}),r(n,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.title}]),type:"text",id:"title",name:"title",modelValue:e.form.title,"onUpdate:modelValue":s[1]||(s[1]=o=>e.form.title=o)},null,8,["modelValue","class"]),r(a,{message:e.form.errors.title,class:"mt-2"},null,8,["message"])]),m("div",N,[r(l,{for:"guard_name",value:"Guard Name"}),r(n,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.guard_name}]),type:"text",id:"guard_name",name:"guard_name",modelValue:e.form.guard_name,"onUpdate:modelValue":s[2]||(s[2]=o=>e.form.guard_name=o)},null,8,["modelValue","class"]),r(a,{message:e.form.errors.guard_name,class:"mt-2"},null,8,["message"])]),m("div",B,[r(f,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:V(()=>[I]),_:1},8,["disabled"])])],32)}var A=j(y,[["render",M]]);export{A as default};