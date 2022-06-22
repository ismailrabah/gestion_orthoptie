var h=Object.defineProperty;var f=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var c=(o,e,s)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,_=(o,e)=>{for(var s in e||(e={}))g.call(e,s)&&c(o,s,e[s]);if(f)for(var s of f(e))v.call(e,s)&&c(o,s,e[s]);return o};import{J as j}from"./Label.be169a38.js";import{I as x}from"./InertiaButton.b06aab18.js";import{J as V}from"./InputError.aee3d62e.js";import{K as w,e as n,o as I,k as y,g as l,x as t,n as d,w as E,C as J,i as B}from"./vendor.bec00c62.js";import{J as N}from"./Input.a6112c10.js";import{_ as k}from"./plugin-vue_export-helper.5a098b48.js";const C={name:"EditPermissionsForm",props:{model:Object},components:{InertiaButton:x,JetLabel:j,JetInputError:V,JetInput:N},data(){return{form:w(_({},this.model),{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.permissions.update",this.form.id),{onSuccess:o=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:o=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}},M={class:"sm:col-span-4"},S={class:"sm:col-span-4"},U={class:"sm:col-span-4"},F={class:"mt-2 text-right"},L=B("Submit");function P(o,e,s,T,r,p){const a=n("jet-label"),i=n("jet-input"),u=n("jet-input-error"),b=n("inertia-button");return I(),y("form",{onSubmit:e[3]||(e[3]=J((...m)=>p.updateModel&&p.updateModel(...m),["prevent"]))},[l("div",M,[t(a,{for:"name",value:"Name"}),t(i,{class:d(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":r.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:r.form.name,"onUpdate:modelValue":e[0]||(e[0]=m=>r.form.name=m)},null,8,["modelValue","class"]),t(u,{message:r.form.errors.name,class:"mt-2"},null,8,["message"])]),l("div",S,[t(a,{for:"title",value:"Title"}),t(i,{class:d(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":r.form.errors.title}]),type:"text",id:"title",name:"title",modelValue:r.form.title,"onUpdate:modelValue":e[1]||(e[1]=m=>r.form.title=m)},null,8,["modelValue","class"]),t(u,{message:r.form.errors.title,class:"mt-2"},null,8,["message"])]),l("div",U,[t(a,{for:"guard_name",value:"Guard Name"}),t(i,{class:d(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":r.form.errors.guard_name}]),type:"text",id:"guard_name",name:"guard_name",modelValue:r.form.guard_name,"onUpdate:modelValue":e[2]||(e[2]=m=>r.form.guard_name=m)},null,8,["modelValue","class"]),t(u,{message:r.form.errors.guard_name,class:"mt-2"},null,8,["message"])]),l("div",F,[t(b,{type:"submit",class:"bg-primary font-semibold text-white",disabled:r.form.processing},{default:E(()=>[L]),_:1},8,["disabled"])])],32)}var H=k(C,[["render",P]]);export{H as default};
