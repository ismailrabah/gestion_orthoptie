import{J as c}from"./JigLayout.a37901a5.js";import{I as _}from"./InertiaButton.9718c36b.js";import f from"./ShowForm.423ccb59.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as t,c as u,w as s,a,l as r,b as h,t as x,e as n}from"./main.227f4171.js";import"./DialogModal.9883659e.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.6617a0db.js";import"./JigDd.69a3a9d5.js";import"./index.a8a3989e.js";const w={name:"ShowRoles",components:{InertiaButton:_,JigLayout:c,ShowRolesForm:f},props:{model:Object},data(){return{}},mounted(){},methods:{}},v={class:"flex flex-wrap items-center justify-between w-full px-4"},k=a("i",{class:"fas fa-arrow-left"},null,-1),b={key:0,class:"flex flex-wrap px-4"},g={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},y={key:1,class:"text-center space-4 px-4 bg-white rounded-md shadow-md text-red-500 font-bold text-lg"};function B(l,j,e,R,S,N){const i=o("inertia-link"),d=o("show-roles-form"),m=o("jig-layout");return t(),u(m,null,{header:s(()=>[a("div",v,[r(i,{href:l.route("admin.roles.index"),class:"text-2xl font-black text-white"},{default:s(()=>[k,h(" Retour| Details of Role #"+x(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(t(),n("div",b,[a("div",g,[r(d,{model:e.model},null,8,["model"])])])):(t(),n("div",y," You don't have permission to view this resource. "))]),_:1})}var T=p(w,[["render",B]]);export{T as default};
