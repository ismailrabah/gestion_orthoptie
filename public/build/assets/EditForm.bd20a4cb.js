var _=Object.defineProperty;var p=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var c=(e,r,t)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))V.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))v.call(r,t)&&c(e,t,r[t]);return e};import{J as w}from"./Label.5467a800.js";import{I as j}from"./InertiaButton.f95f8f59.js";import{J as $}from"./InputError.ef575259.js";import{d as y,z as J,r as l,o as U,e as I,a,l as s,w as g,b as h,t as M,n,q as S}from"./main.8d02089a.js";import{J as B}from"./Input.12512e43.js";import{J as C}from"./JigTextarea.93f58f67.js";import{I as E}from"./InfiniteSelect.05c26939.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.a8a3989e.js";const T=y({name:"EditFichierForm",props:{model:Object},components:{InertiaButton:j,JetLabel:w,JetInputError:$,JetInput:B,JigTextarea:C,InfiniteSelect:E},data(){return{form:J(b({},this.model),{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.fichiers.update",this.form.id),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),k={class:"sm:col-span-4"},N=a("i",{class:"mr-2 fas fa-user-injured"},null,-1),z={class:"sm:col-span-4 mt-2"},A={class:"sm:col-span-4"},D={class:"sm:col-span-4"},q={class:"sm:col-span-4"},L={class:"sm:col-span-4"},O={class:"mt-2 text-right"},P=h("Submit");function G(e,r,t,H,K,Q){const m=l("jet-label"),u=l("inertia-button"),d=l("jet-input"),i=l("jet-input-error"),f=l("jig-textarea");return U(),I("form",{onSubmit:r[6]||(r[6]=S((...o)=>e.updateModel&&e.updateModel(...o),["prevent"]))},[a("div",k,[s(m,{for:"patient",value:"Patient",class:"mb-2"}),s(u,{href:e.route("admin.patients.show",e.form.patient.id),classes:" mb-6 bg-green-100 hover:bg-green-200 text-primary"},{default:g(()=>[N,h(M(e.form.patient.title),1)]),_:1},8,["href"]),s(d,{class:"w-full",type:"hidden",id:"patient",name:"patient",modelValue:e.form.patient,"onUpdate:modelValue":r[0]||(r[0]=o=>e.form.patient=o)},null,8,["modelValue"]),s(i,{message:e.form.errors.patient,class:"mt-2"},null,8,["message"])]),a("div",z,[s(m,{for:"titre",value:"Titre"}),s(d,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.titre}]),type:"text",id:"titre",name:"titre",modelValue:e.form.titre,"onUpdate:modelValue":r[1]||(r[1]=o=>e.form.titre=o)},null,8,["modelValue","class"]),s(i,{message:e.form.errors.titre,class:"mt-2"},null,8,["message"])]),a("div",A,[s(m,{for:"motif_de_bilan",value:"Motif De Bilan"}),s(f,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.motif_de_bilan}]),id:"motif_de_bilan",name:"motif_de_bilan",modelValue:e.form.motif_de_bilan,"onUpdate:modelValue":r[2]||(r[2]=o=>e.form.motif_de_bilan=o)},null,8,["modelValue","class"]),s(i,{message:e.form.errors.motif_de_bilan,class:"mt-2"},null,8,["message"])]),a("div",D,[s(m,{for:"atcd",value:"Atcd"}),s(f,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.atcd}]),id:"atcd",name:"atcd",modelValue:e.form.atcd,"onUpdate:modelValue":r[3]||(r[3]=o=>e.form.atcd=o)},null,8,["modelValue","class"]),s(i,{message:e.form.errors.atcd,class:"mt-2"},null,8,["message"])]),a("div",q,[s(m,{for:"medcin_traitant",value:"Medcin Traitant"}),s(d,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.medcin_traitant}]),type:"text",id:"medcin_traitant",name:"medcin_traitant",modelValue:e.form.medcin_traitant,"onUpdate:modelValue":r[4]||(r[4]=o=>e.form.medcin_traitant=o)},null,8,["modelValue","class"]),s(i,{message:e.form.errors.medcin_traitant,class:"mt-2"},null,8,["message"])]),a("div",L,[s(m,{for:"commentaire",value:"Commentaire"}),s(f,{class:n(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.commentaire}]),id:"commentaire",name:"commentaire",modelValue:e.form.commentaire,"onUpdate:modelValue":r[5]||(r[5]=o=>e.form.commentaire=o)},null,8,["modelValue","class"]),s(i,{message:e.form.errors.commentaire,class:"mt-2"},null,8,["message"])]),a("div",O,[s(u,{type:"submit",class:"font-semibold text-white bg-primary",disabled:e.form.processing},{default:g(()=>[P]),_:1},8,["disabled"])])],32)}var te=F(T,[["render",G]]);export{te as default};