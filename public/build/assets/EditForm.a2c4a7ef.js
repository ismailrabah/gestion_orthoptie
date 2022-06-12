var g=Object.defineProperty;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var f=(e,s,m)=>s in e?g(e,s,{enumerable:!0,configurable:!0,writable:!0,value:m}):e[s]=m,p=(e,s)=>{for(var m in s||(s={}))h.call(s,m)&&f(e,m,s[m]);if(u)for(var m of u(s))v.call(s,m)&&f(e,m,s[m]);return e};import{J as V}from"./Label.6a56508f.js";import{I as j}from"./InertiaButton.d4eeaf43.js";import{J as w}from"./InputError.8fba5cb1.js";import{j as J,K as k,e as i,o as y,k as $,g as a,x as r,n as t,w as U,C as E,i as I}from"./vendor.0e2d33d8.js";import{J as C}from"./JigDatepicker.27151b7c.js";import{J as B}from"./Input.268af2b6.js";import{_ as M}from"./plugin-vue_export-helper.5a098b48.js";import"./vue-flatpickr.min.3ea540b1.js";import"./main.011ecaf6.js";const N=J({name:"EditPatientForm",props:{model:Object},components:{InertiaButton:j,JetLabel:V,JetInputError:w,JetInput:B,JigDatepicker:C},data(){return{form:k(p({},this.model),{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.patients.update",this.form.id),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),P={class:"sm:col-span-4"},S={class:"sm:col-span-4"},D={class:"sm:col-span-4"},F={class:"sm:col-span-4"},A={class:"sm:col-span-4"},L={class:"sm:col-span-4"},Y={class:"sm:col-span-4"},z={class:"mt-2 text-right"},K=I("Submit");function O(e,s,m,T,q,G){const l=i("jet-label"),d=i("jet-input"),n=i("jet-input-error"),c=i("jig-datepicker"),b=i("inertia-button");return y(),$("form",{onSubmit:s[7]||(s[7]=E((...o)=>e.updateModel&&e.updateModel(...o),["prevent"]))},[a("div",P,[r(l,{for:"nom",value:"Nom"}),r(d,{class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.nom}]),type:"text",id:"nom",name:"nom",modelValue:e.form.nom,"onUpdate:modelValue":s[0]||(s[0]=o=>e.form.nom=o)},null,8,["modelValue","class"]),r(n,{message:e.form.errors.nom,class:"mt-2"},null,8,["message"])]),a("div",S,[r(l,{for:"prenom",value:"Prenom"}),r(d,{class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.prenom}]),type:"text",id:"prenom",name:"prenom",modelValue:e.form.prenom,"onUpdate:modelValue":s[1]||(s[1]=o=>e.form.prenom=o)},null,8,["modelValue","class"]),r(n,{message:e.form.errors.prenom,class:"mt-2"},null,8,["message"])]),a("div",D,[r(l,{for:"adresse",value:"Adresse"}),r(d,{class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.adresse}]),type:"text",id:"adresse",name:"adresse",modelValue:e.form.adresse,"onUpdate:modelValue":s[2]||(s[2]=o=>e.form.adresse=o)},null,8,["modelValue","class"]),r(n,{message:e.form.errors.adresse,class:"mt-2"},null,8,["message"])]),a("div",F,[r(l,{for:"cin",value:"Cin"}),r(d,{class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.cin}]),type:"text",id:"cin",name:"cin",modelValue:e.form.cin,"onUpdate:modelValue":s[3]||(s[3]=o=>e.form.cin=o)},null,8,["modelValue","class"]),r(n,{message:e.form.errors.cin,class:"mt-2"},null,8,["message"])]),a("div",A,[r(l,{for:"phone",value:"Phone"}),r(d,{class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.phone}]),type:"text",id:"phone",name:"phone",modelValue:e.form.phone,"onUpdate:modelValue":s[4]||(s[4]=o=>e.form.phone=o)},null,8,["modelValue","class"]),r(n,{message:e.form.errors.phone,class:"mt-2"},null,8,["message"])]),a("div",L,[r(l,{for:"email",value:"Email"}),r(d,{class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.email}]),type:"text",id:"email",name:"email",modelValue:e.form.email,"onUpdate:modelValue":s[5]||(s[5]=o=>e.form.email=o)},null,8,["modelValue","class"]),r(n,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])]),a("div",Y,[r(l,{for:"ddn",value:"Ddn"}),r(c,{class:t(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.ddn}]),id:"ddn",name:"ddn",modelValue:e.form.ddn,"onUpdate:modelValue":s[6]||(s[6]=o=>e.form.ddn=o),"data-date-format":"Y-m-d","data-alt-input":!0,"data-alt-format":"l M J, Y"},null,8,["modelValue","class"]),r(n,{message:e.form.errors.ddn,class:"mt-2"},null,8,["message"])]),a("div",z,[r(b,{type:"submit",class:"font-semibold text-white bg-primary",disabled:e.form.processing},{default:U(()=>[K]),_:1},8,["disabled"])])],32)}var re=M(N,[["render",O]]);export{re as default};