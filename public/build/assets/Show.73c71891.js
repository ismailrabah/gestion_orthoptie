import{J as m}from"./JigLayout.bb7b7d09.js";import{I as f}from"./InertiaButton.8127fa1b.js";import p from"./ShowForm.fd5c4efd.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";import{e as o,o as t,f as _,w as s,g as a,x as r,i as h,y as x,k as i}from"./vendor.f8a6287f.js";import"./DialogModal.15a46057.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.99a0e64a.js";import"./JigDd.81cc9e9e.js";const w={name:"ShowUsers",components:{InertiaButton:f,JigLayout:m,ShowUsersForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}},g={class:"flex flex-wrap items-center justify-between w-full px-4"},j=a("i",{class:"fas fa-arrow-left"},null,-1),b={key:0,class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},y={key:1,class:"text-center space-4 px-4 bg-white rounded-md shadow-md text-red-500 font-bold text-lg"};function k(n,B,e,D,S,J){const d=o("inertia-link"),l=o("show-users-form"),c=o("jig-layout");return t(),_(c,null,{header:s(()=>[a("div",g,[r(d,{href:n.route("admin.users.index"),class:"text-2xl font-black text-white"},{default:s(()=>[j,h(" Retour| Details of User #"+x(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(t(),i("div",b,[a("div",v,[r(l,{model:e.model},null,8,["model"])])])):(t(),i("div",y," You don't have permission to view this resource. "))]),_:1})}var A=u(w,[["render",k]]);export{A as default};
