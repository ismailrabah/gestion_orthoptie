import{J as v}from"./JigLayout.473189ee.js";import{J as D}from"./ConfirmationModal.bfd904bd.js";import{J as C}from"./DialogModal.c74b5b77.js";import{I as k}from"./InertiaButton.b06aab18.js";import{J as x}from"./JigToggle.39822736.js";import{D as $,J}from"./DtComponent.fb3d5ecf.js";import{D as I}from"./DisplayMixin.328c366f.js";import N from"./ShowForm.c67b7ae7.js";import{j as S,e as r,o as i,f as h,w as t,g as a,x as s,z as c,k as f,i as o,y as l,C as g}from"./vendor.bec00c62.js";import{J as A}from"./JigDd.6b7b5a1f.js";import{_ as B}from"./plugin-vue_export-helper.5a098b48.js";import"./ApplicationLogo.0294935d.js";import"./main.89672d61.js";import"./ShowForm.bc40c19e.js";import"./ShowForm.503bfef2.js";const F=S({name:"Index",components:{DtComponent:$,JigToggle:x,InertiaButton:k,JetConfirmationModal:D,JetDialogModal:C,JigModal:J,JigLayout:v,ShowConsultationsForm:N,JigDd:A},props:{can:Object,columns:Array,patient:Object},inject:["$refreshDt","$dayjs"],data(){return{tableId:"consultations-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1,extends_info:!1}},mixins:[I],mounted(){},computed:{ajaxUrl(){const e=new URL(this.route("api.consultations.dt"));return this.patient&&e.searchParams.append("patient_id",this.patient.id),e.href}},methods:{showModel(e){axios.get(route("api.consultations.show",e)).then(n=>{this.currentModel=n.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.consultations.edit",e.id))},manageModel(e){this.$inertia.visit(this.route("admin.consultations.manage",e.id))},expandInfo(){this.extends_info=!this.extends_info},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.consultations.destroy",e.currentModel),{onFinish:n=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:n=>{console.log(n),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,n){console.log(e),axios.put(route("api.consultations.update",n.id),{enabled:e}).then(p=>{this.displayNotification("success",p.data.message),this.$refreshDt(this.tableId)})}}}),E={class:"flex flex-wrap items-center justify-between w-full px-4"},L=a("i",{class:"fas fa-arrow-left"},null,-1),P=o(" Retour"),T={class:"flex gap-x-2"},V=a("i",{class:"fas fa-plus"},null,-1),z=o(" Nouveau Consultation"),R=a("i",{class:"fas fa-redo"},null,-1),U=o(" Refresh"),O={key:0,class:"flex flex-wrap px-4"},Y={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},W={class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},q=a("i",{class:"mr-2 fas fa-bars"},null,-1),G=o(" List Des Consultations "),H={key:0,class:"fas fa-angle-down"},K={key:1,class:"fas fa-angle-up"},Q={key:0,class:"gap-4 p-4"},X={class:"flex"},Z=o("Nom:"),ee=o("Prenom:"),te={class:"flex"},oe=o("Phone:"),se=o("Email:"),ne={class:"flex"},ae=o("Cin:"),ie=o("Ddn:"),le={class:"flex"},de=o("Adresse:"),re=o("Fichiers:"),ce={class:"p-4"},fe=a("div",null,"Are you sure you want to delete this record?",-1),ue={class:"flex justify-end gap-x-2"},me=o("Cancel"),he=o("Yes, Delete"),pe={key:1},_e=o("Close"),ge={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function be(e,n,p,we,Me,ye){const _=r("inertia-link"),u=r("inertia-button"),d=r("jig-dd"),b=r("dt-component"),w=r("jet-confirmation-modal"),M=r("show-consultations-form"),y=r("jig-modal"),j=r("jig-layout");return i(),h(j,null,{header:t(()=>[a("div",E,[s(_,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:t(()=>[L,P]),_:1},8,["href"]),a("div",T,[e.can.create?(i(),h(u,{key:0,href:e.route("admin.consultations.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:t(()=>[V,z]),_:1},8,["href"])):c("",!0),s(u,{onClick:n[0]||(n[0]=m=>e.$refreshDt(e.tableId)),classes:"bg-indigo-100 hover:bg-green-200 text-indigo"},{default:t(()=>[R,U]),_:1})])])]),default:t(()=>[e.can.viewAny?(i(),f("div",O,[a("div",Y,[a("h3",W,[q,G,e.patient?(i(),h(_,{key:0,href:e.route("admin.patients.show",e.patient.id),class:"text-xl font-black text-primary"},{default:t(()=>[o(" : "+l(e.patient.title),1)]),_:1},8,["href"])):c("",!0),e.patient?(i(),f("button",{key:1,style:{"margin-top":"-5px"},type:"button",onClick:n[1]||(n[1]=m=>e.expandInfo()),class:"pl-2 pt-1 pb-1 pr-1 transition duration-150 ease-in-out"},[e.extends_info?c("",!0):(i(),f("i",H)),e.extends_info?(i(),f("i",K)):c("",!0)])):c("",!0)]),e.patient&&e.extends_info?(i(),f("dl",Q,[a("div",X,[s(d,{class:"flex-1"},{dt:t(()=>[Z]),default:t(()=>[o(" "+l(e.patient.nom),1)]),_:1}),s(d,{class:"flex-1"},{dt:t(()=>[ee]),default:t(()=>[o(" "+l(e.patient.prenom),1)]),_:1})]),a("div",te,[s(d,{class:"flex-1"},{dt:t(()=>[oe]),default:t(()=>[o(" "+l(e.patient.phone),1)]),_:1}),s(d,{class:"flex-1"},{dt:t(()=>[se]),default:t(()=>[o(" "+l(e.patient.email),1)]),_:1})]),a("div",ne,[s(d,{class:"flex-1"},{dt:t(()=>[ae]),default:t(()=>[o(" "+l(e.patient.cin),1)]),_:1}),s(d,{class:"flex-1"},{dt:t(()=>[ie]),default:t(()=>[o(" "+l(e.patient.ddn),1)]),_:1})]),a("div",le,[s(d,{class:"flex-1"},{dt:t(()=>[de]),default:t(()=>[o(" "+l(e.patient.adresse),1)]),_:1}),s(d,{class:"flex-1"},{dt:t(()=>[re]),default:t(()=>[o(" "+l(e.patient.count_fichiers),1)]),_:1})])])):c("",!0),a("div",ce,[s(b,{"table-id":e.tableId,"ajax-url":e.ajaxUrl,columns:e.columns,"ajax-params":e.tableParams,onShowModel:e.showModel,onEditModel:e.editModel,onDeleteModel:e.confirmDeletion,onManageModel:e.manageModel},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel","onManageModel"])]),s(w,{title:"Confirm Deletion",show:e.confirmDelete},{content:t(()=>[fe]),footer:t(()=>[a("div",ue,[s(u,{as:"button",type:"button",onClick:g(e.cancelDelete,["stop"]),class:"bg-red-500"},{default:t(()=>[me]),_:1},8,["onClick"]),s(u,{as:"button",type:"button",onClick:g(e.deleteModel,["prevent"]),class:"bg-green-500"},{default:t(()=>[he]),_:1},8,["onClick"])])]),_:1},8,["show"]),e.showModal&&e.currentModel?(i(),f("div",pe,[s(y,{show:e.showModal,maxWidthClass:"max-w-7xl","corner-class":"rounded-lg","position-class":"align-middle",onClose:n[3]||(n[3]=m=>{e.currentModel=null,e.showModal=!1})},{title:t(()=>[o("Show Consultation #"+l(e.currentModel.id),1)]),footer:t(()=>[s(u,{class:"px-4 text-white bg-primary",onClick:n[2]||(n[2]=m=>{e.showModal=!1,e.currentModel=null})},{default:t(()=>[_e]),_:1})]),default:t(()=>[s(M,{model:e.currentModel},null,8,["model"])]),_:1},8,["show"])])):c("",!0)])])):(i(),f("div",ge," You are not authorized to view a list of Consultations "))]),_:1})}var Le=B(F,[["render",be]]);export{Le as default};