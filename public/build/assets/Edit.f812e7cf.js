import{J as l}from"./JigLayout.332e7c83.js";import{J as m}from"./Label.fd47eb70.js";import{I as f}from"./InertiaButton.b4c5ddff.js";import{J as p}from"./InputError.d267c622.js";import{J as u}from"./Button.a87349ca.js";import _ from"./EditForm.60cddc4c.js";import{D as x}from"./DisplayMixin.328c366f.js";import{_ as h}from"./plugin-vue_export-helper.5a098b48.js";import{e as s,o as j,f as b,w as r,g as o,x as a,i as g,y as w}from"./vendor.6d78f1ed.js";import"./DialogModal.cf2ee799.js";import"./Input.bd38e939.js";import"./JigTab.41ae1533.js";import"./AssignPerms.4cf0aa98.js";import"./Checkbox.af7f0095.js";const y={name:"EditRoles",props:{model:Object,permissions:Object},components:{InertiaButton:f,JetLabel:m,JetButton:u,JetInputError:p,JigLayout:l,EditRolesForm:_},data(){return{}},mixins:[x],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.roles.index"))},onError(e){this.displayNotification("error",e)}}},E={class:"flex flex-wrap items-center justify-between w-full px-4"},J=o("i",{class:"fas fa-arrow-left"},null,-1),v={class:"flex flex-wrap px-4"},B={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function k(e,I,t,D,N,i){const n=s("inertia-link"),c=s("edit-roles-form"),d=s("jig-layout");return j(),b(d,null,{header:r(()=>[o("div",E,[a(n,{href:e.route("admin.roles.index"),class:"text-xl font-black text-white"},{default:r(()=>[J,g(" Back | Edit Role #"+w(t.model.id),1)]),_:1},8,["href"])])]),default:r(()=>[o("div",v,[o("div",B,[a(c,{permissions:t.permissions,model:t.model,onSuccess:i.onSuccess,onError:i.onError},null,8,["permissions","model","onSuccess","onError"])])])]),_:1})}var G=h(y,[["render",k]]);export{G as default};
