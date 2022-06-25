var _=Object.defineProperty;var i=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var d=(e,o,r)=>o in e?_(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,u=(e,o)=>{for(var r in o||(o={}))v.call(o,r)&&d(e,r,o[r]);if(i)for(var r of i(o))g.call(o,r)&&d(e,r,o[r]);return e};import{J as k}from"./Label.6bff53fc.js";import{I as C}from"./InertiaButton.9718c36b.js";import{J as V}from"./InputError.96d9f536.js";import{d as j,z as $,r as a,o as J,e as w,a as m,l as s,n as f,w as S,q as y,b as z}from"./main.227f4171.js";import{J as E}from"./Checkbox.4dcf8749.js";import{J as I}from"./Input.6a7016f4.js";import{C as B}from"./style.79b4253e.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.a8a3989e.js";const N=j({name:"EditRendezVousStatusForm",props:{model:Object},components:{InertiaButton:C,JetLabel:k,JetInputError:V,JetInput:I,JetCheckbox:E,ColorPicker:B},data(){return{form:$(u({},this.model),{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.rendez-vous-statuses.update",this.form.id),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),U={class:"sm:col-span-4"},F={class:"sm:col-span-4"},R={class:"sm:col-span-4"},q={class:"mt-2 text-right"},A=z("Submit");function D(e,o,r,L,O,P){const l=a("jet-label"),p=a("jet-input"),n=a("jet-input-error"),c=a("jet-checkbox"),h=a("color-picker"),b=a("inertia-button");return J(),w("form",{onSubmit:o[3]||(o[3]=y((...t)=>e.updateModel&&e.updateModel(...t),["prevent"]))},[m("div",U,[s(l,{for:"name",value:"Name"}),s(p,{class:f(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.name=t)},null,8,["modelValue","class"]),s(n,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),m("div",F,[s(l,{for:"is_default",value:"Is Default"}),s(c,{class:f(["p-2",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.is_default}]),type:"checkbox",id:"is_default",name:"is_default",checked:e.form.is_default,modelValue:e.form.is_default,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.is_default=t)},null,8,["checked","modelValue","class"]),s(n,{message:e.form.errors.is_default,class:"mt-2"},null,8,["message"])]),m("div",R,[s(l,{for:"color",value:"Color"}),s(h,{pureColor:e.form.color,"onUpdate:pureColor":o[2]||(o[2]=t=>e.form.color=t),format:"hex"},null,8,["pureColor"]),s(n,{message:e.form.errors.color,class:"mt-2"},null,8,["message"])]),m("div",q,[s(b,{type:"submit",class:"font-semibold text-white bg-primary",disabled:e.form.processing},{default:S(()=>[A]),_:1},8,["disabled"])])],32)}var ee=M(N,[["render",D]]);export{ee as default};
