import{J as m}from"./JigLayout.bb7b7d09.js";import{I as c}from"./InertiaButton.8127fa1b.js";import p from"./ShowForm.0aa8a3f8.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import{j as u,e as t,o,f as _,w as a,g as s,x as n,i as h,y as x,k as l}from"./vendor.f8a6287f.js";import"./DialogModal.15a46057.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.99a0e64a.js";import"./JigDd.81cc9e9e.js";const w=u({name:"ShowSalleDAttente",components:{InertiaButton:c,JigLayout:m,ShowSalleDAttentesForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),j={class:"flex flex-wrap items-center justify-between w-full px-4"},g=s("i",{class:"fas fa-arrow-left"},null,-1),b={key:0,class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},y={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function k(e,D,S,B,J,$){const r=t("inertia-link"),i=t("show-salle-d-attentes-form"),d=t("jig-layout");return o(),_(d,null,{header:a(()=>[s("div",j,[n(r,{href:e.route("admin.salle-d-attentes.index"),class:"text-2xl font-black text-white"},{default:a(()=>[g,h(" Retour| Details Du Salle d'attente #"+x(e.model.id),1)]),_:1},8,["href"])])]),default:a(()=>[e.model.can.view?(o(),l("div",b,[s("div",v,[n(i,{model:e.model},null,8,["model"])])])):(o(),l("div",y," You don't have permission to view this resource. "))]),_:1})}var E=f(w,[["render",k]]);export{E as default};