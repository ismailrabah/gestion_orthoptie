import{J as j}from"./JigLayout.332e7c83.js";import{J as D}from"./ConfirmationModal.a26c62b3.js";import{J as v}from"./DialogModal.cf2ee799.js";import{I as k}from"./InertiaButton.b4c5ddff.js";import{D as C,J as x,a as $}from"./DtComponent.309940d4.js";import{D as I}from"./DisplayMixin.328c366f.js";import J from"./ShowForm.b2861efc.js";import{j as F,e as n,o as l,f as d,w as t,g as s,x as i,z as c,k as f,i as a,y as p,C as _}from"./vendor.6d78f1ed.js";import{_ as N}from"./plugin-vue_export-helper.5a098b48.js";import"./main.28e06522.js";import"./JigDd.38169f2a.js";const B=F({name:"Index",components:{DtComponent:C,JigToggle:x,InertiaButton:k,JetConfirmationModal:D,JetDialogModal:v,JigModal:$,JigLayout:j,ShowFichiersForm:J},props:{can:Object,columns:Array,patient:Object},inject:["$refreshDt","$dayjs"],data(){return{tableId:"fichiers-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1}},mixins:[I],mounted(){},computed:{ajaxUrl(){const e=new URL(this.route("api.fichiers.dt"));return this.patient&&e.searchParams.append("patient_id",this.patient.id),e.href}},methods:{showModel(e){axios.get(route("api.fichiers.show",e)).then(o=>{this.currentModel=o.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.fichiers.edit",e.id))},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.fichiers.destroy",e.currentModel),{onFinish:o=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:o=>{console.log(o),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,o){console.log(e),axios.put(route("api.fichiers.update",o.id),{enabled:e}).then(h=>{this.displayNotification("success",h.data.message),this.$refreshDt(this.tableId)})}}}),S={class:"flex flex-wrap items-center justify-between w-full px-4"},A=s("i",{class:"fas fa-arrow-left"},null,-1),E=a(" Back"),L={class:"flex gap-x-2"},V=s("i",{class:"fas fa-plus"},null,-1),z=a(" New Fichier"),P=s("i",{class:"fas fa-redo"},null,-1),T=a(" Refresh"),U={key:0,class:"flex flex-wrap px-4"},O={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},R={class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},Y=s("i",{class:"mr-2 fas fa-bars"},null,-1),q=a(" List of All Fichiers "),G={class:"p-4"},H=s("div",null,"Are you sure you want to delete this record?",-1),K={class:"flex justify-end gap-x-2"},Q=a("Cancel"),W=a("Yes, Delete"),X={key:0},Z=a("Close"),ee={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function te(e,o,h,oe,se,ie){const m=n("inertia-link"),r=n("inertia-button"),g=n("dt-component"),w=n("jet-confirmation-modal"),b=n("show-fichiers-form"),M=n("jig-modal"),y=n("jig-layout");return l(),d(y,null,{header:t(()=>[s("div",S,[i(m,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:t(()=>[A,E]),_:1},8,["href"]),s("div",L,[e.can.create?(l(),d(r,{key:0,href:e.route("admin.fichiers.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:t(()=>[V,z]),_:1},8,["href"])):c("",!0),i(r,{onClick:o[0]||(o[0]=u=>e.$refreshDt(e.tableId)),classes:"bg-indigo-100 hover:bg-green-200 text-indigo"},{default:t(()=>[P,T]),_:1})])])]),default:t(()=>[e.can.viewAny?(l(),f("div",U,[s("div",O,[s("h3",R,[Y,q,e.patient?(l(),d(m,{key:0,href:e.route("admin.patients.show",e.patient.id),class:"text-xl font-black text-primary"},{default:t(()=>[a(" > "+p(e.patient.title),1)]),_:1},8,["href"])):c("",!0)]),s("div",G,[i(g,{"table-id":e.tableId,"ajax-url":e.ajaxUrl,columns:e.columns,"ajax-params":e.tableParams,onShowModel:e.showModel,onEditModel:e.editModel,onDeleteModel:e.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel"])]),i(w,{title:"Confirm Deletion",show:e.confirmDelete},{content:t(()=>[H]),footer:t(()=>[s("div",K,[i(r,{as:"button",type:"button",onClick:_(e.cancelDelete,["stop"]),class:"bg-red-500"},{default:t(()=>[Q]),_:1},8,["onClick"]),i(r,{as:"button",type:"button",onClick:_(e.deleteModel,["prevent"]),class:"bg-green-500"},{default:t(()=>[W]),_:1},8,["onClick"])])]),_:1},8,["show"]),e.showModal&&e.currentModel?(l(),f("div",X,[i(M,{show:e.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:o[2]||(o[2]=u=>{e.currentModel=null,e.showModal=!1})},{title:t(()=>[a("Show Fichier #"+p(e.currentModel.id),1)]),footer:t(()=>[i(r,{class:"px-4 text-white bg-primary",onClick:o[1]||(o[1]=u=>{e.showModal=!1,e.currentModel=null})},{default:t(()=>[Z]),_:1})]),default:t(()=>[i(b,{model:e.currentModel},null,8,["model"])]),_:1},8,["show"])])):c("",!0)])])):(l(),f("div",ee," You are not authorized to view a list of Fichiers "))]),_:1})}var _e=N(B,[["render",te]]);export{_e as default};
