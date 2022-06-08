import{J as j}from"./JigLayout.332e7c83.js";import{J as D}from"./ConfirmationModal.a26c62b3.js";import{J as v}from"./DialogModal.cf2ee799.js";import{I as k}from"./InertiaButton.b4c5ddff.js";import{D as C,J as I,a as J}from"./DtComponent.309940d4.js";import{D as N}from"./DisplayMixin.328c366f.js";import U from"./ShowForm.7d64e445.js";import{e as a,o as u,f as h,w as s,g as l,x as n,z as _,k as m,C as p,i as r,y as B}from"./vendor.6d78f1ed.js";import{_ as S}from"./plugin-vue_export-helper.5a098b48.js";import"./main.28e06522.js";import"./JigDd.38169f2a.js";const A={name:"Index",components:{DtComponent:C,JigToggle:I,InertiaButton:k,JetConfirmationModal:D,JetDialogModal:v,JigModal:J,JigLayout:j,ShowUsersForm:U},props:{can:Object,columns:Array},inject:["$refreshDt","$dayjs"],data(){return{tableId:"users-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1}},mixins:[N],mounted(){},computed:{ajaxUrl(){return new URL(this.route("api.users.dt")).href}},methods:{showModel(e){axios.get(route("api.users.show",e)).then(t=>{this.currentModel=t.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.users.edit",e.id))},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.users.destroy",e.currentModel),{onFinish:t=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:t=>{console.log(t),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,t){console.log(e),axios.put(route("api.users.update",t.id),{enabled:e}).then(d=>{this.displayNotification("success",d.data.message),this.$refreshDt(this.tableId)})}}},E={class:"flex flex-wrap items-center justify-between w-full px-4"},L=l("i",{class:"fas fa-arrow-left"},null,-1),V=r(" Back"),z={class:"flex gap-x-2"},F=l("i",{class:"fas fa-plus"},null,-1),T=r(" New User"),P=l("i",{class:"fas fa-redo"},null,-1),R=r(" Refresh"),Y={key:0,class:"flex flex-wrap px-4"},O={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},q=l("h3",{class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},[l("i",{class:"mr-2 fas fa-bars"}),r(" List of All Users")],-1),G={class:"p-4"},H=l("div",null,"Are you sure you want to delete this record?",-1),K={class:"flex justify-end gap-x-2"},Q=r("Cancel"),W=r("Yes, Delete"),X={key:0},Z=r("Close"),$={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function ee(e,t,d,te,o,i){const g=a("inertia-link"),c=a("inertia-button"),w=a("dt-component"),b=a("jet-confirmation-modal"),x=a("show-users-form"),M=a("jig-modal"),y=a("jig-layout");return u(),h(y,{class:"bg-gray-100"},{header:s(()=>[l("div",E,[n(g,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:s(()=>[L,V]),_:1},8,["href"]),l("div",z,[d.can.create?(u(),h(c,{key:0,href:e.route("admin.users.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:s(()=>[F,T]),_:1},8,["href"])):_("",!0),n(c,{onClick:t[0]||(t[0]=f=>i.$refreshDt(o.tableId)),classes:"bg-green-100 hover:bg-green-200 text-green"},{default:s(()=>[P,R]),_:1})])])]),default:s(()=>[d.can.viewAny?(u(),m("div",Y,[l("div",O,[q,l("div",G,[n(w,{"table-id":o.tableId,"ajax-url":i.ajaxUrl,columns:d.columns,"ajax-params":o.tableParams,onShowModel:i.showModel,onEditModel:i.editModel,onDeleteModel:i.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel"])]),n(b,{title:"Confirm Deletion",show:o.confirmDelete},{content:s(()=>[H]),footer:s(()=>[l("div",K,[n(c,{as:"button",type:"button",onClick:p(i.cancelDelete,["stop"]),class:"bg-red-500"},{default:s(()=>[Q]),_:1},8,["onClick"]),n(c,{as:"button",type:"button",onClick:p(i.deleteModel,["prevent"]),class:"bg-green-500"},{default:s(()=>[W]),_:1},8,["onClick"])])]),_:1},8,["show"]),o.showModal&&o.currentModel?(u(),m("div",X,[n(M,{show:o.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:t[2]||(t[2]=f=>{o.currentModel=null,o.showModal=!1})},{title:s(()=>[r("Show User #"+B(o.currentModel.id),1)]),footer:s(()=>[n(c,{class:"px-4 text-white bg-primary",onClick:t[1]||(t[1]=f=>{o.showModal=!1,o.currentModel=null})},{default:s(()=>[Z]),_:1})]),default:s(()=>[n(x,{model:o.currentModel},null,8,["model"])]),_:1},8,["show"])])):_("",!0)])])):(u(),m("div",$," You are not authorized to view a list of Users "))]),_:1})}var fe=S(A,[["render",ee]]);export{fe as default};