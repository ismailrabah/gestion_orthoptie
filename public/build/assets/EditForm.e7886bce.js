var c=Object.defineProperty;var n=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var m=(e,r,s)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,i=(e,r)=>{for(var s in r||(r={}))h.call(r,s)&&m(e,s,r[s]);if(n)for(var s of n(r))b.call(r,s)&&m(e,s,r[s]);return e};import{J as _}from"./Label.be169a38.js";import{I as j}from"./InertiaButton.b06aab18.js";import{J as v}from"./InputError.aee3d62e.js";import{j as g,K as $,e as t,o as E,k as I,g as l,x as o,n as w,w as x,C as J,i as S}from"./vendor.bec00c62.js";import{J as V}from"./Input.a6112c10.js";import{_ as B}from"./plugin-vue_export-helper.5a098b48.js";const C=g({name:"EditSallesDExamenForm",props:{model:Object},components:{InertiaButton:j,JetLabel:_,JetInputError:v,JetInput:V},data(){return{form:$(i({},this.model),{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.salles-d-examens.update",this.form.id),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),k={class:"sm:col-span-4"},y={class:"mt-2 text-right"},M=S("Submit");function N(e,r,s,F,D,L){const d=t("jet-label"),p=t("jet-input"),u=t("jet-input-error"),f=t("inertia-button");return E(),I("form",{onSubmit:r[1]||(r[1]=J((...a)=>e.updateModel&&e.updateModel(...a),["prevent"]))},[l("div",k,[o(d,{for:"name",value:"Name"}),o(p,{class:w(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":r[0]||(r[0]=a=>e.form.name=a)},null,8,["modelValue","class"]),o(u,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),l("div",y,[o(f,{type:"submit",class:"font-semibold text-white bg-primary",disabled:e.form.processing},{default:x(()=>[M]),_:1},8,["disabled"])])],32)}var G=B(C,[["render",N]]);export{G as default};
