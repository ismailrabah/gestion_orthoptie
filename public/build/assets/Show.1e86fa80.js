import{J as l}from"./JigLayout.a37901a5.js";import{I as c}from"./InertiaButton.9718c36b.js";import p from"./ShowForm.cf39ce9f.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{d as f,r as o,o as t,c as _,w as s,a as r,l as a,b as h,t as w,e as n}from"./main.227f4171.js";import"./DialogModal.9883659e.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.6617a0db.js";import"./JigDd.69a3a9d5.js";import"./InfiniteSelect.35ef3c17.js";import"./index.a8a3989e.js";const x=f({name:"ShowRendezVou",components:{InertiaButton:c,JigLayout:l,ShowRendezVousForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),v={class:"flex flex-wrap items-center justify-between w-full px-4"},k=r("i",{class:"fas fa-arrow-left"},null,-1),b={key:0,class:"flex flex-wrap px-4"},g={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},y={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function z(e,V,B,j,R,S){const d=o("inertia-link"),i=o("show-rendez-vous-form"),m=o("jig-layout");return t(),_(m,null,{header:s(()=>[r("div",v,[a(d,{href:e.route("admin.rendez-vouses.index"),class:"text-2xl font-black text-white"},{default:s(()=>[k,h(" Retour| Details Du Rendez Vou #"+w(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(t(),n("div",b,[r("div",g,[a(i,{model:e.model},null,8,["model"])])])):(t(),n("div",y," You don't have permission to view this resource. "))]),_:1})}var Y=u(x,[["render",z]]);export{Y as default};
