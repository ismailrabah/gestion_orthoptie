import{J as c}from"./JigLayout.4b8eecd7.js";import{I as m}from"./InertiaButton.d4eeaf43.js";import p from"./ShowForm.61fd846e.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import{j as h,e as o,o as t,f as u,w as s,g as a,x as n,i as _,y as x,k as r}from"./vendor.0e2d33d8.js";import"./DialogModal.a0065cb1.js";import"./DisplayMixin.328c366f.js";import"./JigDd.1b8a2e07.js";const w=h({name:"ShowTach",components:{InertiaButton:m,JigLayout:c,ShowTachesForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),j={class:"flex flex-wrap items-center justify-between w-full px-4"},g=a("i",{class:"fas fa-arrow-left"},null,-1),v={key:0,class:"flex flex-wrap px-4"},b={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},k={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function y(e,B,D,S,J,T){const i=o("inertia-link"),d=o("show-taches-form"),l=o("jig-layout");return t(),u(l,null,{header:s(()=>[a("div",j,[n(i,{href:e.route("admin.taches.index"),class:"text-2xl font-black text-white"},{default:s(()=>[g,_(" Back | Details of Tach #"+x(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(t(),r("div",v,[a("div",b,[n(d,{model:e.model},null,8,["model"])])])):(t(),r("div",k," You don't have permission to view this resource. "))]),_:1})}var z=f(w,[["render",y]]);export{z as default};