import{J as j}from"./JigLayout.a642a959.js";import{J as D}from"./ConfirmationModal.8c5cfde2.js";import{J as v}from"./DialogModal.02c2b71d.js";import{I as k}from"./InertiaButton.c7080281.js";import{D as C,J as I,a as J}from"./DtComponent.d3279e9f.js";import{D as N}from"./DisplayMixin.328c366f.js";import U from"./ShowForm.fe810953.js";import{e as a,o as u,f as h,w as s,g as l,x as n,z as _,k as m,C as p,i,y as B}from"./vendor.f60cbd33.js";import{_ as A}from"./plugin-vue_export-helper.5a098b48.js";import"./ApplicationLogo.6e5eba94.js";import"./main.fc8de431.js";import"./JigDd.c19f821d.js";const S={name:"Index",components:{DtComponent:C,JigToggle:I,InertiaButton:k,JetConfirmationModal:D,JetDialogModal:v,JigModal:J,JigLayout:j,ShowUsersForm:U},props:{can:Object,columns:Array},inject:["$refreshDt","$dayjs"],data(){return{tableId:"users-dt",tableParams:{},datatable:null,confirmDelete:!1,currentModel:null,withDisabled:!1,showModal:!1}},mixins:[N],mounted(){},computed:{ajaxUrl(){return new URL(this.route("api.users.dt")).href}},methods:{showModel(e){axios.get(route("api.users.show",e)).then(o=>{this.currentModel=o.data.payload,this.showModal=!0})},editModel(e){this.$inertia.visit(this.route("admin.users.edit",e.id))},confirmDeletion(e){this.currentModel=e,this.confirmDelete=!0},cancelDelete(){this.currentModel=!1,this.confirmDelete=!1},async deleteModel(){const e=this;this.confirmDelete=!1,this.currentModel&&this.$inertia.delete(route("admin.users.destroy",e.currentModel),{onFinish:o=>{this.displayNotification("success","Item deleted."),e.$refreshDt(e.tableId)},onError:o=>{console.log(o),this.displayNotification("error","There was an error while deleting the item.")}})},async toggleActivation(e,o){console.log(e),axios.put(route("api.users.update",o.id),{enabled:e}).then(d=>{this.displayNotification("success",d.data.message),this.$refreshDt(this.tableId)})}}},L={class:"flex flex-wrap items-center justify-between w-full px-4"},E=l("i",{class:"fas fa-arrow-left"},null,-1),V=i(" Back"),z={class:"flex gap-x-2"},F=l("i",{class:"fas fa-plus"},null,-1),T=i(" New User"),P=l("i",{class:"fas fa-redo"},null,-1),R=i(" Refresh"),Y={key:0,class:"flex flex-wrap px-4"},O={class:"z-10 flex-auto bg-white md:rounded-md md:shadow-md"},q=l("h3",{class:"w-full p-4 mb-2 text-lg font-black sm:rounded-t-lg bg-primary-100"},[l("i",{class:"mr-2 fas fa-bars"}),i(" List of All Users")],-1),G={class:"p-4"},H=l("div",null,"Are you sure you want to delete this record?",-1),K={class:"flex justify-end gap-x-2"},Q=i("Cancel"),W=i("Yes, Delete"),X={key:0},Z=i("Close"),$={key:1,class:"p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md"};function ee(e,o,d,oe,t,r){const g=a("inertia-link"),c=a("inertia-button"),w=a("dt-component"),b=a("jet-confirmation-modal"),x=a("show-users-form"),M=a("jig-modal"),y=a("jig-layout");return u(),h(y,{class:"bg-gray-100"},{header:s(()=>[l("div",L,[n(g,{href:e.route("admin.dashboard"),class:"text-xl font-black text-white"},{default:s(()=>[E,V]),_:1},8,["href"]),l("div",z,[d.can.create?(u(),h(c,{key:0,href:e.route("admin.users.create"),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:s(()=>[F,T]),_:1},8,["href"])):_("",!0),n(c,{onClick:o[0]||(o[0]=f=>r.$refreshDt(t.tableId)),classes:"bg-indigo-100 hover:bg-green-200 text-indigo"},{default:s(()=>[P,R]),_:1})])])]),default:s(()=>[d.can.viewAny?(u(),m("div",Y,[l("div",O,[q,l("div",G,[n(w,{"table-id":t.tableId,"ajax-url":r.ajaxUrl,columns:d.columns,"ajax-params":t.tableParams,onShowModel:r.showModel,onEditModel:r.editModel,onDeleteModel:r.confirmDeletion},null,8,["table-id","ajax-url","columns","ajax-params","onShowModel","onEditModel","onDeleteModel"])]),n(b,{title:"Confirm Deletion",show:t.confirmDelete},{content:s(()=>[H]),footer:s(()=>[l("div",K,[n(c,{as:"button",type:"button",onClick:p(r.cancelDelete,["stop"]),class:"bg-red-500"},{default:s(()=>[Q]),_:1},8,["onClick"]),n(c,{as:"button",type:"button",onClick:p(r.deleteModel,["prevent"]),class:"bg-green-500"},{default:s(()=>[W]),_:1},8,["onClick"])])]),_:1},8,["show"]),t.showModal&&t.currentModel?(u(),m("div",X,[n(M,{show:t.showModal,"corner-class":"rounded-lg","position-class":"align-middle",onClose:o[2]||(o[2]=f=>{t.currentModel=null,t.showModal=!1})},{title:s(()=>[i("Show User #"+B(t.currentModel.id),1)]),footer:s(()=>[n(c,{class:"px-4 text-white bg-primary",onClick:o[1]||(o[1]=f=>{t.showModal=!1,t.currentModel=null})},{default:s(()=>[Z]),_:1})]),default:s(()=>[n(x,{model:t.currentModel},null,8,["model"])]),_:1},8,["show"])])):_("",!0)])])):(u(),m("div",$," You are not authorized to view a list of Users "))]),_:1})}var he=A(S,[["render",ee]]);export{he as default};
