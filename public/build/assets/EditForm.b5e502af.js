var g=Object.defineProperty;var p=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(e,s,o)=>s in e?g(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,f=(e,s)=>{for(var o in s||(s={}))j.call(s,o)&&u(e,o,s[o]);if(p)for(var o of p(s))v.call(s,o)&&u(e,o,s[o]);return e};import{J as V}from"./Label.738327b5.js";import{I as w}from"./InertiaButton.19f70872.js";import{J as I}from"./InputError.a46be50d.js";import{j as J,K as k,e as a,o as $,k as C,g as l,x as r,n as m,w as S,C as E,i as U}from"./vendor.76a4f2da.js";import{J as _}from"./JigDatepicker.5f70c1da.js";import{J as y}from"./Input.3d816876.js";import{I as B}from"./InfiniteSelect.41f0c37f.js";import{_ as M}from"./plugin-vue_export-helper.5a098b48.js";import"./vue-flatpickr.min.6d2e761a.js";import"./main.336b76f7.js";const N=J({name:"EditConsultationForm",props:{model:Object},components:{InertiaButton:w,JetLabel:V,JetInputError:I,JetInput:y,JigDatepicker:_,InfiniteSelect:B},data(){return{form:k(f({},this.model),{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.consultations.update",this.form.id),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),D={class:"sm:col-span-4"},F={class:"sm:col-span-4"},L={class:"sm:col-span-4"},O={class:"sm:col-span-4"},P={class:"sm:col-span-4"},Y={class:"mt-2 text-right"},q=U("Submit");function z(e,s,o,A,K,T){const n=a("jet-label"),d=a("infinite-select"),i=a("jet-input-error"),c=a("jet-input"),b=a("jig-datepicker"),h=a("inertia-button");return $(),C("form",{onSubmit:s[5]||(s[5]=E((...t)=>e.updateModel&&e.updateModel(...t),["prevent"]))},[l("div",D,[r(n,{for:"patient",value:"Patient"}),r(d,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.patient}]),"per-page":15,"api-url":e.route("api.patients.index"),id:"patient",name:"patient",modelValue:e.form.patient,"onUpdate:modelValue":s[0]||(s[0]=t=>e.form.patient=t),label:"title"},null,8,["api-url","modelValue","class"]),r(i,{message:e.form.errors.patient,class:"mt-2"},null,8,["message"])]),l("div",F,[r(n,{for:"orthoptiste",value:"Orthoptiste"}),r(d,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.orthoptiste}]),"per-page":15,"api-url":e.route("api.users.index"),queryParams:{role:"orthoptiste"},id:"orthoptiste",name:"orthoptiste",modelValue:e.form.orthoptiste,"onUpdate:modelValue":s[1]||(s[1]=t=>e.form.orthoptiste=t),label:"name"},null,8,["api-url","modelValue","class"]),r(i,{message:e.form.errors.orthoptiste,class:"mt-2"},null,8,["message"])]),l("div",L,[r(n,{for:"note",value:"Note"}),r(c,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.note}]),type:"text",id:"note",name:"note",modelValue:e.form.note,"onUpdate:modelValue":s[2]||(s[2]=t=>e.form.note=t)},null,8,["modelValue","class"]),r(i,{message:e.form.errors.note,class:"mt-2"},null,8,["message"])]),l("div",O,[r(n,{for:"date",value:"Date"}),r(b,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.date}]),id:"date",name:"date",modelValue:e.form.date,"onUpdate:modelValue":s[3]||(s[3]=t=>e.form.date=t),"data-date-format":"Y-m-d","data-alt-input":!0,"data-alt-format":"l M J, Y"},null,8,["modelValue","class"]),r(i,{message:e.form.errors.date,class:"mt-2"},null,8,["message"])]),l("div",P,[r(n,{for:"salle",value:"Salle"}),r(d,{class:m(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.salle}]),"per-page":15,"api-url":e.route("api.salles-d-examens.index"),id:"salle",name:"salle",modelValue:e.form.salle,"onUpdate:modelValue":s[4]||(s[4]=t=>e.form.salle=t),label:"name"},null,8,["api-url","modelValue","class"]),r(i,{message:e.form.errors.salle,class:"mt-2"},null,8,["message"])]),l("div",Y,[r(h,{type:"submit",class:"font-semibold text-white bg-primary",disabled:e.form.processing},{default:S(()=>[q]),_:1},8,["disabled"])])],32)}var oe=M(N,[["render",z]]);export{oe as default};
