import{J as d}from"./JigLayout.67b03211.js";import{J as c}from"./Label.6a56508f.js";import{I as p}from"./InertiaButton.d4eeaf43.js";import{J as f}from"./InputError.8fba5cb1.js";import{J as u}from"./Button.1a1e2a1d.js";import _ from"./EditForm.9ce26a63.js";import{D as x}from"./DisplayMixin.328c366f.js";import{_ as h}from"./plugin-vue_export-helper.5a098b48.js";import{e as s,o as j,f as b,w as r,g as o,x as a,i as g,y as w}from"./vendor.0e2d33d8.js";import"./DialogModal.a0065cb1.js";import"./Input.268af2b6.js";import"./JigTab.7e875f44.js";import"./AssignPerms.32e08fd2.js";import"./Checkbox.030d5e9b.js";const y={name:"EditRoles",props:{model:Object,permissions:Object},components:{InertiaButton:p,JetLabel:c,JetButton:u,JetInputError:f,JigLayout:d,EditRolesForm:_},data(){return{}},mixins:[x],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.roles.index"))},onError(e){this.displayNotification("error",e)}}},E={class:"flex flex-wrap items-center justify-between w-full px-4"},J=o("i",{class:"fas fa-arrow-left"},null,-1),v={class:"flex flex-wrap px-4"},B={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function k(e,I,t,D,N,i){const n=s("inertia-link"),l=s("edit-roles-form"),m=s("jig-layout");return j(),b(m,null,{header:r(()=>[o("div",E,[a(n,{href:e.route("admin.roles.index"),class:"text-xl font-black text-white"},{default:r(()=>[J,g(" Back | Edit Role #"+w(t.model.id),1)]),_:1},8,["href"])])]),default:r(()=>[o("div",v,[o("div",B,[a(l,{permissions:t.permissions,model:t.model,onSuccess:i.onSuccess,onError:i.onError},null,8,["permissions","model","onSuccess","onError"])])])]),_:1})}var G=h(y,[["render",k]]);export{G as default};