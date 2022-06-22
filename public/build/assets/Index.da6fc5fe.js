import{J as D}from"./JigLayout.f5eb6c53.js";import{J as v}from"./ConfirmationModal.f608ab13.js";import{J as j}from"./DialogModal.b2f3f5a5.js";import{I as k}from"./InertiaButton.c6dbc8f4.js";import{J as C}from"./JigToggle.7d0db7e1.js";import{D as I,J}from"./DtComponent.941efde2.js";import{D as N}from"./DisplayMixin.328c366f.js";import R from"./ShowForm.e94d7218.js";import{r as a,o as m,c as h,w as s,a as l,l as n,m as _,e as u,q as p,b as r,t as A}from"./main.b00fb162.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"./ApplicationLogo.3595876e.js";import"./JigDd.2ba6e98a.js";import"./index.a8a3989e.js";const S={name:"Index",components:{DtComponent:I,JigToggle:C,InertiaButton:k,JetConfirmationModal:v,JetDialogModal:j,JigModal:J,JigLayout:D,ShowRolesForm:R},props:{can:Object,columns:Array},inject:["$refreshDt","$dayjs"],data(){return{tableId:"roles-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1}},mixins:[N],mounted(){},computed:{ajaxUrl(){return new URL(this.route("api.roles.dt")).href}},methods:{showModel(e){axios.get(route("api.roles.show",e)).then(o=>{this.currentModel=o.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.roles.edit",e.id))},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.roles.destroy",e.currentModel),{onFinish:o=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:o=>{console.log(o),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,o){console.log(e),axios.put(route("api.roles.update",o.id),{enabled:e}).then(d=>{this.displayNotification("success",d.data.message),this.$refreshDt(this.tableId)})}}},E={class:"flex flex-wrap items-center justify-between w-full px-4"},V=l("i",{class:"fas fa-arrow-left"},null,-1),L=r(" Retour"),T={class:"flex gap-x-2"},U=l("i",{class:"fas fa-plus"},null,-1),z=r(" New Role"),F=l("i",{class:"fas fa-redo"},null,-1),P=r(" Refresh"),Y={key:0,class:"flex flex-wrap px-4"},q={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},O=l("h3",{class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},[l("i",{class:"mr-2 fas fa-bars"}),r(" List of All Roles")],-1),G={class:"p-4"},H=l("div",null,"Are you sure you want to delete this record?",-1),K={class:"flex justify-end gap-x-2"},Q=r("Cancel"),W=r("Yes, Delete"),X={key:0},Z=r("Close"),$={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function ee(e,o,d,oe,t,i){const w=a("inertia-link"),c=a("inertia-button"),g=a("dt-component"),b=a("jet-confirmation-modal"),x=a("show-roles-form"),M=a("jig-modal"),y=a("jig-layout");return m(),h(y,null,{header:s(()=>[l("div",E,[n(w,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:s(()=>[V,L]),_:1},8,["href"]),l("div",T,[d.can.create?(m(),h(c,{key:0,href:e.route("admin.roles.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:s(()=>[U,z]),_:1},8,["href"])):_("",!0),n(c,{onClick:o[0]||(o[0]=f=>i.$refreshDt(t.tableId)),classes:"bg-green-100 hover:bg-green-200 text-green"},{default:s(()=>[F,P]),_:1})])])]),default:s(()=>[d.can.viewAny?(m(),u("div",Y,[l("div",q,[O,l("div",G,[n(g,{"table-id":t.tableId,"ajax-url":i.ajaxUrl,columns:d.columns,"ajax-params":t.tableParams,onShowModel:i.showModel,onEditModel:i.editModel,onDeleteModel:i.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel"])]),n(b,{title:"Confirm Deletion",show:t.confirmDelete},{content:s(()=>[H]),footer:s(()=>[l("div",K,[n(c,{as:"button",type:"button",onClick:p(i.cancelDelete,["stop"]),class:"bg-red-500"},{default:s(()=>[Q]),_:1},8,["onClick"]),n(c,{as:"button",type:"button",onClick:p(i.deleteModel,["prevent"]),class:"bg-green-500"},{default:s(()=>[W]),_:1},8,["onClick"])])]),_:1},8,["show"]),t.showModal&&t.currentModel?(m(),u("div",X,[n(M,{show:t.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:o[2]||(o[2]=f=>{t.currentModel=null,t.showModal=!1})},{title:s(()=>[r("Show Role #"+A(t.currentModel.id),1)]),footer:s(()=>[n(c,{class:"px-4 text-white bg-primary",onClick:o[1]||(o[1]=f=>{t.showModal=!1,t.currentModel=null})},{default:s(()=>[Z]),_:1})]),default:s(()=>[n(x,{model:t.currentModel},null,8,["model"])]),_:1},8,["show"])])):_("",!0)])])):(m(),u("div",$," You are not authorized to view a list of Roles "))]),_:1})}var _e=B(S,[["render",ee]]);export{_e as default};
