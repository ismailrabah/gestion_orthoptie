import{J as u}from"./Input.a6112c10.js";import{J as d}from"./Label.be169a38.js";import{I as p}from"./InertiaButton.b06aab18.js";import{J as c}from"./InputError.aee3d62e.js";import{j as f,K as b,e as r,o as h,k as _,g as a,x as o,n as j,w as v,C as g,i as $}from"./vendor.bec00c62.js";import{_ as C}from"./plugin-vue_export-helper.5a098b48.js";const I=f({name:"CreateSallesDExamensForm",components:{InertiaButton:p,JetInputError:c,JetLabel:d,JetInput:u},data(){return{form:b({name:null},{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.salles-d-examens.store"),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),w={class:"sm:col-span-4"},E={class:"mt-2 text-right"},J=$("Submit");function S(e,s,V,x,B,k){const n=r("jet-label"),m=r("jet-input"),l=r("jet-input-error"),i=r("inertia-button");return h(),_("form",{class:"w-full",onSubmit:s[1]||(s[1]=g((...t)=>e.storeModel&&e.storeModel(...t),["prevent"]))},[a("div",w,[o(n,{for:"name",value:"Name"}),o(m,{class:j(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":s[0]||(s[0]=t=>e.form.name=t)},null,8,["modelValue","class"]),o(l,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),a("div",E,[o(i,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:v(()=>[J]),_:1},8,["disabled"])])],32)}var U=C(I,[["render",S]]);export{U as default};
