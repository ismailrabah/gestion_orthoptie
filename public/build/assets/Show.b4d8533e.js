import{J as m}from"./JigLayout.bb7b7d09.js";import{I as c}from"./InertiaButton.8127fa1b.js";import p from"./ShowForm.102b35a4.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";import{j as f,e as o,o as t,f as _,w as s,g as a,x as n,i as h,y as x,k as r}from"./vendor.f8a6287f.js";import"./DialogModal.15a46057.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.99a0e64a.js";import"./JigDd.81cc9e9e.js";const w=f({name:"ShowRendezVou",components:{InertiaButton:c,JigLayout:m,ShowRendezVousForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),j={class:"flex flex-wrap items-center justify-between w-full px-4"},v=a("i",{class:"fas fa-arrow-left"},null,-1),g={key:0,class:"flex flex-wrap px-4"},b={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},y={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function k(e,z,B,D,V,S){const i=o("inertia-link"),d=o("show-rendez-vous-form"),l=o("jig-layout");return t(),_(l,null,{header:s(()=>[a("div",j,[n(i,{href:e.route("admin.rendez-vouses.index"),class:"text-2xl font-black text-white"},{default:s(()=>[v,h(" Retour| Details Du Rendez Vou #"+x(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(t(),r("div",g,[a("div",b,[n(d,{model:e.model},null,8,["model"])])])):(t(),r("div",y," You don't have permission to view this resource. "))]),_:1})}var A=u(w,[["render",k]]);export{A as default};
