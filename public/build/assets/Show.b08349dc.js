import{J as m}from"./JigLayout.a37901a5.js";import{I as c}from"./InertiaButton.9718c36b.js";import p from"./ShowForm.e6fb9b05.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{d as _,r as t,o,c as u,w as s,a,l as n,b as h,t as w,e as r}from"./main.227f4171.js";import"./DialogModal.9883659e.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.6617a0db.js";import"./JigDd.69a3a9d5.js";import"./index.a8a3989e.js";const x=_({name:"ShowPatient",components:{InertiaButton:c,JigLayout:m,ShowPatientsForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),v={class:"flex flex-wrap items-center justify-between w-full px-4"},k=a("i",{class:"fas fa-arrow-left"},null,-1),b={key:0,class:"flex flex-wrap px-4"},g={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},y={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function B(e,j,S,$,C,N){const i=t("inertia-link"),d=t("show-patients-form"),l=t("jig-layout");return o(),u(l,null,{header:s(()=>[a("div",v,[n(i,{href:e.route("admin.patients.index"),class:"text-2xl font-black text-white"},{default:s(()=>[k,h(" Retour| D\xE9tails du patient #"+w(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(o(),r("div",b,[a("div",g,[n(d,{model:e.model},null,8,["model"])])])):(o(),r("div",y," You don't have permission to view this resource. "))]),_:1})}var R=f(x,[["render",B]]);export{R as default};