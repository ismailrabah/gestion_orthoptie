import{J as m}from"./JigLayout.332e7c83.js";import{I as c}from"./InertiaButton.b4c5ddff.js";import u from"./ShowForm.4024b898.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import{j as p,e as o,o as t,f as _,w as s,g as a,x as n,i as h,y as x,k as r}from"./vendor.6d78f1ed.js";import"./DialogModal.cf2ee799.js";import"./DisplayMixin.328c366f.js";import"./JigDd.38169f2a.js";const w=p({name:"ShowRendezVousStatus",components:{InertiaButton:c,JigLayout:m,ShowRendezVousStatusesForm:u},props:{model:Object},data(){return{}},mounted(){},methods:{}}),v={class:"flex flex-wrap items-center justify-between w-full px-4"},j=a("i",{class:"fas fa-arrow-left"},null,-1),g={key:0,class:"flex flex-wrap px-4"},k={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},y={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function b(e,S,z,B,V,D){const d=o("inertia-link"),i=o("show-rendez-vous-statuses-form"),l=o("jig-layout");return t(),_(l,null,{header:s(()=>[a("div",v,[n(d,{href:e.route("admin.rendez-vous-statuses.index"),class:"text-2xl font-black text-white"},{default:s(()=>[j,h(" Back | Details of Rendez Vous Status #"+x(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(t(),r("div",g,[a("div",k,[n(i,{model:e.model},null,8,["model"])])])):(t(),r("div",y," You don't have permission to view this resource. "))]),_:1})}var M=f(w,[["render",b]]);export{M as default};