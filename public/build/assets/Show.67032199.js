import{J as m}from"./JigLayout.5f650382.js";import{I as c}from"./InertiaButton.b06aab18.js";import p from"./ShowForm.1bb476a7.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import{j as u,e as o,o as t,f as _,w as s,g as a,x as n,i as x,y as h,k as l}from"./vendor.bec00c62.js";import"./DialogModal.c74b5b77.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.0294935d.js";import"./JigDd.6b7b5a1f.js";const w=u({name:"ShowSallesDExamen",components:{InertiaButton:c,JigLayout:m,ShowSallesDExamensForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),b={class:"flex flex-wrap items-center justify-between w-full px-4"},j=a("i",{class:"fas fa-arrow-left"},null,-1),g={key:0,class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},y={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function k(e,D,S,B,J,$){const r=o("inertia-link"),i=o("show-salles-d-examens-form"),d=o("jig-layout");return t(),_(d,null,{header:s(()=>[a("div",b,[n(r,{href:e.route("admin.salles-d-examens.index"),class:"text-2xl font-black text-white"},{default:s(()=>[j,x(" Retour| Details Du Salle d'examen #"+h(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(t(),l("div",g,[a("div",v,[n(i,{model:e.model},null,8,["model"])])])):(t(),l("div",y," You don't have permission to view this resource. "))]),_:1})}var A=f(w,[["render",k]]);export{A as default};
