import{J as m}from"./JigLayout.f5eb6c53.js";import{I as c}from"./InertiaButton.c6dbc8f4.js";import p from"./ShowForm.daeb7f65.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{d as f,r as t,o as e,c as _,w as s,a,l as n,b as h,t as w,e as r}from"./main.b00fb162.js";import"./DialogModal.b2f3f5a5.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.3595876e.js";import"./JigDd.2ba6e98a.js";import"./ShowForm.e515ab1f.js";import"./index.a8a3989e.js";import"./ShowForm.2a3c3a40.js";const x=f({name:"ShowConsultation",components:{InertiaButton:c,JigLayout:m,ShowConsultationsForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),v={class:"flex flex-wrap items-center justify-between w-full px-4"},k=a("i",{class:"fas fa-arrow-left"},null,-1),b={key:0,class:"flex flex-wrap px-4"},g={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},y={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function C(o,B,j,S,$,D){const i=t("inertia-link"),l=t("show-consultations-form"),d=t("jig-layout");return e(),_(d,null,{header:s(()=>[a("div",v,[n(i,{href:o.route("admin.consultations.index"),class:"text-2xl font-black text-white"},{default:s(()=>[k,h(" Retour| Details Du Consultation #"+w(o.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[o.model.can.view?(e(),r("div",b,[a("div",g,[n(l,{model:o.model},null,8,["model"])])])):(e(),r("div",y," You don't have permission to view this resource. "))]),_:1})}var q=u(x,[["render",C]]);export{q as default};
