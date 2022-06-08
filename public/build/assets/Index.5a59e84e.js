import{J as y}from"./JigLayout.f7fb3eec.js";import{J as D}from"./ConfirmationModal.8638169e.js";import{J as j}from"./DialogModal.5c215a75.js";import{I as x}from"./InertiaButton.19f70872.js";import{D as v,J as k,a as C}from"./DtComponent.e585cd4e.js";import{D as $}from"./DisplayMixin.328c366f.js";import I from"./ShowForm.ab20f07e.js";import{j as J,e as n,o as r,f,w as t,g as s,x as a,z as u,k as d,C as h,i as l,y as S}from"./vendor.76a4f2da.js";import{_ as N}from"./plugin-vue_export-helper.5a098b48.js";import"./main.336b76f7.js";import"./JigDd.2089e2da.js";const B=J({name:"Index",components:{DtComponent:v,JigToggle:k,InertiaButton:x,JetConfirmationModal:D,JetDialogModal:j,JigModal:C,JigLayout:y,ShowSallesDExamensForm:I},props:{can:Object,columns:Array},inject:["$refreshDt","$dayjs"],data(){return{tableId:"salles-d-examens-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1}},mixins:[$],mounted(){},computed:{ajaxUrl(){return new URL(this.route("api.salles-d-examens.dt")).href}},methods:{showModel(e){axios.get(route("api.salles-d-examens.show",e)).then(o=>{this.currentModel=o.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.salles-d-examens.edit",e.id))},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.salles-d-examens.destroy",e.currentModel),{onFinish:o=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:o=>{console.log(o),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,o){console.log(e),axios.put(route("api.salles-d-examens.update",o.id),{enabled:e}).then(m=>{this.displayNotification("success",m.data.message),this.$refreshDt(this.tableId)})}}}),E={class:"flex flex-wrap items-center justify-between w-full px-4"},A=s("i",{class:"fas fa-arrow-left"},null,-1),L=l(" Back"),V={class:"flex gap-x-2"},z=s("i",{class:"fas fa-plus"},null,-1),F=l(" New Salle d'examen"),T=s("i",{class:"fas fa-redo"},null,-1),U=l(" Refresh"),P={key:0,class:"flex flex-wrap px-4"},R={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},Y=s("h3",{class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},[s("i",{class:"mr-2 fas fa-bars"}),l(" List des Salles d'examen")],-1),O={class:"p-4"},q=s("div",null,"Are you sure you want to delete this record?",-1),G={class:"flex justify-end gap-x-2"},H=l("Cancel"),K=l("Yes, Delete"),Q={key:0},W=l("Close"),X={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function Z(e,o,m,ee,oe,te){const p=n("inertia-link"),i=n("inertia-button"),_=n("dt-component"),g=n("jet-confirmation-modal"),w=n("show-salles-d-examens-form"),b=n("jig-modal"),M=n("jig-layout");return r(),f(M,null,{header:t(()=>[s("div",E,[a(p,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:t(()=>[A,L]),_:1},8,["href"]),s("div",V,[e.can.create?(r(),f(i,{key:0,href:e.route("admin.salles-d-examens.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:t(()=>[z,F]),_:1},8,["href"])):u("",!0),a(i,{onClick:o[0]||(o[0]=c=>e.$refreshDt(e.tableId)),classes:"bg-indigo-100 hover:bg-green-200 text-indigo"},{default:t(()=>[T,U]),_:1})])])]),default:t(()=>[e.can.viewAny?(r(),d("div",P,[s("div",R,[Y,s("div",O,[a(_,{"table-id":e.tableId,"ajax-url":e.ajaxUrl,columns:e.columns,"ajax-params":e.tableParams,onShowModel:e.showModel,onEditModel:e.editModel,onDeleteModel:e.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel"])]),a(g,{title:"Confirm Deletion",show:e.confirmDelete},{content:t(()=>[q]),footer:t(()=>[s("div",G,[a(i,{as:"button",type:"button",onClick:h(e.cancelDelete,["stop"]),class:"bg-red-500"},{default:t(()=>[H]),_:1},8,["onClick"]),a(i,{as:"button",type:"button",onClick:h(e.deleteModel,["prevent"]),class:"bg-green-500"},{default:t(()=>[K]),_:1},8,["onClick"])])]),_:1},8,["show"]),e.showModal&&e.currentModel?(r(),d("div",Q,[a(b,{show:e.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:o[2]||(o[2]=c=>{e.currentModel=null,e.showModal=!1})},{title:t(()=>[l("Show Salles d'examen #"+S(e.currentModel.id),1)]),footer:t(()=>[a(i,{class:"px-4 text-white bg-primary",onClick:o[1]||(o[1]=c=>{e.showModal=!1,e.currentModel=null})},{default:t(()=>[W]),_:1})]),default:t(()=>[a(w,{model:e.currentModel},null,8,["model"])]),_:1},8,["show"])])):u("",!0)])])):(r(),d("div",X," You are not authorized to view a list of Salles D Examens "))]),_:1})}var he=N(B,[["render",Z]]);export{he as default};
