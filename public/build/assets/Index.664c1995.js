import{J as y}from"./JigLayout.67b03211.js";import{J as j}from"./ConfirmationModal.fac5df17.js";import{J as D}from"./DialogModal.a0065cb1.js";import{I as v}from"./InertiaButton.d4eeaf43.js";import{J as k}from"./JigToggle.cbf01486.js";import{D as C,J as x}from"./DtComponent.11e62bd7.js";import{D as $}from"./DisplayMixin.328c366f.js";import J from"./ShowForm.2828a4bf.js";import{j as I,e as n,o as r,f,w as o,g as s,x as i,z as h,k as d,C as u,i as a,y as N}from"./vendor.0e2d33d8.js";import{_ as S}from"./plugin-vue_export-helper.5a098b48.js";import"./main.7cad3b00.js";import"./JigDd.1b8a2e07.js";const B=I({name:"Index",components:{DtComponent:C,JigToggle:k,InertiaButton:v,JetConfirmationModal:j,JetDialogModal:D,JigModal:x,JigLayout:y,ShowPatientsForm:J},props:{can:Object,columns:Array},inject:["$refreshDt","$dayjs"],data(){return{tableId:"patients-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1}},mixins:[$],mounted(){},computed:{ajaxUrl(){return new URL(this.route("api.patients.dt")).href}},methods:{showModel(e){axios.get(route("api.patients.show",e)).then(t=>{this.currentModel=t.data.payload,this.showModal=!0})},showFichiers(e){this.$inertia.visit(this.route("admin.fichiers.index",{patient_id:e?e.id:null}))},editModel(e){this.$inertia.visit(this.route("admin.patients.edit",e.id))},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.patients.destroy",e.currentModel),{onFinish:t=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:t=>{console.log(t),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,t){console.log(e),axios.put(route("api.patients.update",t.id),{enabled:e}).then(c=>{this.displayNotification("success",c.data.message),this.$refreshDt(this.tableId)})}}}),F={class:"flex flex-wrap items-center justify-between w-full px-4"},P=s("i",{class:"fas fa-arrow-left"},null,-1),A=a(" Back"),E={class:"flex gap-x-2"},L=s("i",{class:"fas fa-plus"},null,-1),T=a(" New Patient"),V=s("i",{class:"fas fa-redo"},null,-1),z=a(" Refresh"),U={key:0,class:"flex flex-wrap px-4"},R={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},Y=s("h3",{class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},[s("i",{class:"mr-2 fas fa-bars"}),a(" List of All Patients")],-1),O={class:"p-4"},q=s("div",null,"Are you sure you want to delete this record?",-1),G={class:"flex justify-end gap-x-2"},H=a("Cancel"),K=a("Yes, Delete"),Q={key:0},W=a("Close"),X={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function Z(e,t,c,ee,te,oe){const p=n("inertia-link"),l=n("inertia-button"),_=n("dt-component"),g=n("jet-confirmation-modal"),w=n("show-patients-form"),b=n("jig-modal"),M=n("jig-layout");return r(),f(M,null,{header:o(()=>[s("div",F,[i(p,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:o(()=>[P,A]),_:1},8,["href"]),s("div",E,[e.can.create?(r(),f(l,{key:0,href:e.route("admin.patients.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:o(()=>[L,T]),_:1},8,["href"])):h("",!0),i(l,{onClick:t[0]||(t[0]=m=>e.$refreshDt(e.tableId)),classes:"bg-indigo-100 hover:bg-green-200 text-indigo"},{default:o(()=>[V,z]),_:1})])])]),default:o(()=>[e.can.viewAny?(r(),d("div",U,[s("div",R,[Y,s("div",O,[i(_,{"table-id":e.tableId,"ajax-url":e.ajaxUrl,columns:e.columns,"ajax-params":e.tableParams,onShowModel:e.showModel,onShowFichiers:e.showFichiers,onEditModel:e.editModel,onDeleteModel:e.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onShowFichiers","onEditModel","onDeleteModel"])]),i(g,{title:"Confirm Deletion",show:e.confirmDelete},{content:o(()=>[q]),footer:o(()=>[s("div",G,[i(l,{as:"button",type:"button",onClick:u(e.cancelDelete,["stop"]),class:"bg-red-500"},{default:o(()=>[H]),_:1},8,["onClick"]),i(l,{as:"button",type:"button",onClick:u(e.deleteModel,["prevent"]),class:"bg-green-500"},{default:o(()=>[K]),_:1},8,["onClick"])])]),_:1},8,["show"]),e.showModal&&e.currentModel?(r(),d("div",Q,[i(b,{show:e.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:t[2]||(t[2]=m=>{e.currentModel=null,e.showModal=!1})},{title:o(()=>[a("Show Patient #"+N(e.currentModel.id),1)]),footer:o(()=>[i(l,{class:"px-4 text-white bg-primary",onClick:t[1]||(t[1]=m=>{e.showModal=!1,e.currentModel=null})},{default:o(()=>[W]),_:1})]),default:o(()=>[i(w,{model:e.currentModel},null,8,["model"])]),_:1},8,["show"])])):h("",!0)])])):(r(),d("div",X," You are not authorized to view a list of Patients "))]),_:1})}var pe=S(B,[["render",Z]]);export{pe as default};
