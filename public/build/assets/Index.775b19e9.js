import{J as j}from"./JigLayout.332e7c83.js";import{J as D}from"./ConfirmationModal.a26c62b3.js";import{J as v}from"./DialogModal.cf2ee799.js";import{I as k}from"./InertiaButton.b4c5ddff.js";import{D as C,J as I,a as J}from"./DtComponent.309940d4.js";import{D as N}from"./DisplayMixin.328c366f.js";import B from"./ShowForm.c7a86e27.js";import{e as a,o as m,f as h,w as s,g as l,x as n,z as _,k as f,C as p,i as r,y as R}from"./vendor.6d78f1ed.js";import{_ as S}from"./plugin-vue_export-helper.5a098b48.js";import"./main.28e06522.js";import"./JigDd.38169f2a.js";const A={name:"Index",components:{DtComponent:C,JigToggle:I,InertiaButton:k,JetConfirmationModal:D,JetDialogModal:v,JigModal:J,JigLayout:j,ShowRolesForm:B},props:{can:Object,columns:Array},inject:["$refreshDt","$dayjs"],data(){return{tableId:"roles-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1}},mixins:[N],mounted(){},computed:{ajaxUrl(){return new URL(this.route("api.roles.dt")).href}},methods:{showModel(e){axios.get(route("api.roles.show",e)).then(o=>{this.currentModel=o.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.roles.edit",e.id))},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.roles.destroy",e.currentModel),{onFinish:o=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:o=>{console.log(o),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,o){console.log(e),axios.put(route("api.roles.update",o.id),{enabled:e}).then(d=>{this.displayNotification("success",d.data.message),this.$refreshDt(this.tableId)})}}},E={class:"flex flex-wrap items-center justify-between w-full px-4"},L=l("i",{class:"fas fa-arrow-left"},null,-1),V=r(" Back"),z={class:"flex gap-x-2"},F=l("i",{class:"fas fa-plus"},null,-1),T=r(" New Role"),U=l("i",{class:"fas fa-redo"},null,-1),P=r(" Refresh"),Y={key:0,class:"flex flex-wrap px-4"},O={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},q=l("h3",{class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},[l("i",{class:"mr-2 fas fa-bars"}),r(" List of All Roles")],-1),G={class:"p-4"},H=l("div",null,"Are you sure you want to delete this record?",-1),K={class:"flex justify-end gap-x-2"},Q=r("Cancel"),W=r("Yes, Delete"),X={key:0},Z=r("Close"),$={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function ee(e,o,d,oe,t,i){const g=a("inertia-link"),c=a("inertia-button"),w=a("dt-component"),b=a("jet-confirmation-modal"),x=a("show-roles-form"),M=a("jig-modal"),y=a("jig-layout");return m(),h(y,null,{header:s(()=>[l("div",E,[n(g,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:s(()=>[L,V]),_:1},8,["href"]),l("div",z,[d.can.create?(m(),h(c,{key:0,href:e.route("admin.roles.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:s(()=>[F,T]),_:1},8,["href"])):_("",!0),n(c,{onClick:o[0]||(o[0]=u=>i.$refreshDt(t.tableId)),classes:"bg-green-100 hover:bg-green-200 text-green"},{default:s(()=>[U,P]),_:1})])])]),default:s(()=>[d.can.viewAny?(m(),f("div",Y,[l("div",O,[q,l("div",G,[n(w,{"table-id":t.tableId,"ajax-url":i.ajaxUrl,columns:d.columns,"ajax-params":t.tableParams,onShowModel:i.showModel,onEditModel:i.editModel,onDeleteModel:i.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel"])]),n(b,{title:"Confirm Deletion",show:t.confirmDelete},{content:s(()=>[H]),footer:s(()=>[l("div",K,[n(c,{as:"button",type:"button",onClick:p(i.cancelDelete,["stop"]),class:"bg-red-500"},{default:s(()=>[Q]),_:1},8,["onClick"]),n(c,{as:"button",type:"button",onClick:p(i.deleteModel,["prevent"]),class:"bg-green-500"},{default:s(()=>[W]),_:1},8,["onClick"])])]),_:1},8,["show"]),t.showModal&&t.currentModel?(m(),f("div",X,[n(M,{show:t.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:o[2]||(o[2]=u=>{t.currentModel=null,t.showModal=!1})},{title:s(()=>[r("Show Role #"+R(t.currentModel.id),1)]),footer:s(()=>[n(c,{class:"px-4 text-white bg-primary",onClick:o[1]||(o[1]=u=>{t.showModal=!1,t.currentModel=null})},{default:s(()=>[Z]),_:1})]),default:s(()=>[n(x,{model:t.currentModel},null,8,["model"])]),_:1},8,["show"])])):_("",!0)])])):(m(),f("div",$," You are not authorized to view a list of Roles "))]),_:1})}var ue=S(A,[["render",ee]]);export{ue as default};