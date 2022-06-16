import{J as j}from"./JigLayout.473189ee.js";import{J as D}from"./ConfirmationModal.bfd904bd.js";import{J as k}from"./DialogModal.c74b5b77.js";import{I as x}from"./InertiaButton.b06aab18.js";import{J as C}from"./JigToggle.39822736.js";import{D as z,J}from"./DtComponent.fb3d5ecf.js";import{D as $}from"./DisplayMixin.328c366f.js";import I from"./ShowForm.5926d582.js";import{j as N,e as r,o as a,f as m,w as t,g as i,x as s,z as f,k as u,i as o,y as l,C as g}from"./vendor.bec00c62.js";import{J as V}from"./JigDd.6b7b5a1f.js";import{_ as R}from"./plugin-vue_export-helper.5a098b48.js";import"./ApplicationLogo.0294935d.js";import"./main.89672d61.js";const A=N({name:"Index",components:{DtComponent:z,JigToggle:C,InertiaButton:x,JetConfirmationModal:D,JetDialogModal:k,JigModal:J,JigLayout:j,ShowRendezVousForm:I,JigDd:V},props:{can:Object,columns:Array,patient:Object},inject:["$refreshDt","$dayjs"],data(){return{tableId:"rendez-vouses-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1,extends_info:!1}},mixins:[$],mounted(){},computed:{ajaxUrl(){const e=new URL(this.route("api.rendez-vouses.dt"));return this.patient&&e.searchParams.append("patient_id",this.patient.id),e.href}},methods:{showModel(e){axios.get(route("api.rendez-vouses.show",e)).then(n=>{this.currentModel=n.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.rendez-vouses.edit",e.id))},expandInfo(){this.extends_info=!this.extends_info},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.rendez-vouses.destroy",e.currentModel),{onFinish:n=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:n=>{console.log(n),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,n){console.log(e),axios.put(route("api.rendez-vouses.update",n.id),{enabled:e}).then(p=>{this.displayNotification("success",p.data.message),this.$refreshDt(this.tableId)})}}}),B={class:"flex flex-wrap items-center justify-between w-full px-4"},S=i("i",{class:"fas fa-arrow-left"},null,-1),E=o(" Retour"),L={class:"flex gap-x-2"},P=i("i",{class:"fas fa-plus"},null,-1),F=o(" Nouveau Rendez Vou"),T=i("i",{class:"fas fa-redo"},null,-1),U=o(" Refresh"),O={key:0,class:"flex flex-wrap px-4"},Y={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},q={class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},G=i("i",{class:"mr-2 fas fa-bars"},null,-1),H=o(" List Des Rendez Vous "),K={key:0,class:"fas fa-angle-down"},Q={key:1,class:"fas fa-angle-up"},W={key:0,class:"gap-4 p-4"},X={class:"flex"},Z=o("Nom:"),ee=o("Prenom:"),te={class:"flex"},oe=o("Phone:"),se=o("Email:"),ne={class:"flex"},ie=o("Cin:"),ae=o("Ddn:"),le={class:"flex"},de=o("Adresse:"),re=o("Fichiers:"),fe={class:"p-4"},ue=i("div",null,"Are you sure you want to delete this record?",-1),ce={class:"flex justify-end gap-x-2"},he=o("Cancel"),me=o("Yes, Delete"),pe={key:1},_e=o("Close"),ge={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function be(e,n,p,we,ve,ye){const _=r("inertia-link"),c=r("inertia-button"),d=r("jig-dd"),b=r("dt-component"),w=r("jet-confirmation-modal"),v=r("show-rendez-vous-form"),y=r("jig-modal"),M=r("jig-layout");return a(),m(M,null,{header:t(()=>[i("div",B,[s(_,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:t(()=>[S,E]),_:1},8,["href"]),i("div",L,[e.can.create?(a(),m(c,{key:0,href:e.route("admin.rendez-vouses.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:t(()=>[P,F]),_:1},8,["href"])):f("",!0),s(c,{onClick:n[0]||(n[0]=h=>e.$refreshDt(e.tableId)),classes:"bg-indigo-100 hover:bg-green-200 text-indigo"},{default:t(()=>[T,U]),_:1})])])]),default:t(()=>[e.can.viewAny?(a(),u("div",O,[i("div",Y,[i("h3",q,[G,H,e.patient?(a(),m(_,{key:0,href:e.route("admin.patients.show",e.patient.id),class:"text-xl font-black text-primary"},{default:t(()=>[o(" : "+l(e.patient.title),1)]),_:1},8,["href"])):f("",!0),e.patient?(a(),u("button",{key:1,style:{"margin-top":"-5px"},type:"button",onClick:n[1]||(n[1]=h=>e.expandInfo()),class:"pl-2 pt-1 pb-1 pr-1 transition duration-150 ease-in-out"},[e.extends_info?f("",!0):(a(),u("i",K)),e.extends_info?(a(),u("i",Q)):f("",!0)])):f("",!0)]),e.patient&&e.extends_info?(a(),u("dl",W,[i("div",X,[s(d,{class:"flex-1"},{dt:t(()=>[Z]),default:t(()=>[o(" "+l(e.patient.nom),1)]),_:1}),s(d,{class:"flex-1"},{dt:t(()=>[ee]),default:t(()=>[o(" "+l(e.patient.prenom),1)]),_:1})]),i("div",te,[s(d,{class:"flex-1"},{dt:t(()=>[oe]),default:t(()=>[o(" "+l(e.patient.phone),1)]),_:1}),s(d,{class:"flex-1"},{dt:t(()=>[se]),default:t(()=>[o(" "+l(e.patient.email),1)]),_:1})]),i("div",ne,[s(d,{class:"flex-1"},{dt:t(()=>[ie]),default:t(()=>[o(" "+l(e.patient.cin),1)]),_:1}),s(d,{class:"flex-1"},{dt:t(()=>[ae]),default:t(()=>[o(" "+l(e.patient.ddn),1)]),_:1})]),i("div",le,[s(d,{class:"flex-1"},{dt:t(()=>[de]),default:t(()=>[o(" "+l(e.patient.adresse),1)]),_:1}),s(d,{class:"flex-1"},{dt:t(()=>[re]),default:t(()=>[o(" "+l(e.patient.count_fichiers),1)]),_:1})])])):f("",!0),i("div",fe,[s(b,{"table-id":e.tableId,"ajax-url":e.ajaxUrl,columns:e.columns,"ajax-params":e.tableParams,onShowModel:e.showModel,onEditModel:e.editModel,onDeleteModel:e.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel"])]),s(w,{title:"Confirm Deletion",show:e.confirmDelete},{content:t(()=>[ue]),footer:t(()=>[i("div",ce,[s(c,{as:"button",type:"button",onClick:g(e.cancelDelete,["stop"]),class:"bg-red-500"},{default:t(()=>[he]),_:1},8,["onClick"]),s(c,{as:"button",type:"button",onClick:g(e.deleteModel,["prevent"]),class:"bg-green-500"},{default:t(()=>[me]),_:1},8,["onClick"])])]),_:1},8,["show"]),e.showModal&&e.currentModel?(a(),u("div",pe,[s(y,{show:e.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:n[3]||(n[3]=h=>{e.currentModel=null,e.showModal=!1})},{title:t(()=>[o("Show Rendez Vou #"+l(e.currentModel.id),1)]),footer:t(()=>[s(c,{class:"px-4 text-white bg-primary",onClick:n[2]||(n[2]=h=>{e.showModal=!1,e.currentModel=null})},{default:t(()=>[_e]),_:1})]),default:t(()=>[s(v,{model:e.currentModel},null,8,["model"])]),_:1},8,["show"])])):f("",!0)])])):(a(),u("div",ge," You are not authorized to view a list of Rendez Vous "))]),_:1})}var Ae=R(A,[["render",be]]);export{Ae as default};