import{J as c}from"./JigLayout.f9b138d2.js";import{J as d}from"./Label.5467a800.js";import{I as p}from"./InertiaButton.f95f8f59.js";import{J as f}from"./InputError.ef575259.js";import{J as u}from"./Button.b545a8dd.js";import _ from"./EditForm.5ef836ef.js";import{D as x}from"./DisplayMixin.328c366f.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as w,c as E,w as s,a as t,l as a,b as y,t as J}from"./main.8d02089a.js";import"./DialogModal.a90c0402.js";import"./ApplicationLogo.e325ada5.js";import"./Input.12512e43.js";import"./JigTab.ee773f53.js";import"./AssignPerms.7600d92c.js";import"./Checkbox.17e8b9e7.js";import"./index.a8a3989e.js";const b={name:"EditRoles",props:{model:Object,permissions:Object},components:{InertiaButton:p,JetLabel:d,JetButton:u,JetInputError:f,JigLayout:c,EditRolesForm:_},data(){return{}},mixins:[x],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(o){this.displayNotification("success",o),this.$inertia.visit(route("admin.roles.index"))},onError(o){this.displayNotification("error",o)}}},g={class:"flex flex-wrap items-center justify-between w-full px-4"},v=t("i",{class:"fas fa-arrow-left"},null,-1),j={class:"flex flex-wrap px-4"},k={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function B(o,N,e,S,R,i){const n=r("inertia-link"),m=r("edit-roles-form"),l=r("jig-layout");return w(),E(l,null,{header:s(()=>[t("div",g,[a(n,{href:o.route("admin.roles.index"),class:"text-xl font-black text-white"},{default:s(()=>[v,y(" Retour| Edit Role #"+J(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[t("div",j,[t("div",k,[a(m,{permissions:e.permissions,model:e.model,onSuccess:i.onSuccess,onError:i.onError},null,8,["permissions","model","onSuccess","onError"])])])]),_:1})}var P=h(b,[["render",B]]);export{P as default};