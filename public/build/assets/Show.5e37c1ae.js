import{J as d}from"./JigLayout.473189ee.js";import{I as m}from"./InertiaButton.b06aab18.js";import p from"./ShowForm.fa05b7ba.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import{j as u,e,o as t,f as h,w as a,g as s,x as n,i as _,y as x,k as i}from"./vendor.bec00c62.js";import"./DialogModal.c74b5b77.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.0294935d.js";import"./JigDd.6b7b5a1f.js";const w=u({name:"ShowConsultationTach",components:{InertiaButton:m,JigLayout:d,ShowConsultationTachesForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),b={class:"flex flex-wrap items-center justify-between w-full px-4"},j=s("i",{class:"fas fa-arrow-left"},null,-1),g={key:0,class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},k={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function y(o,B,C,D,S,J){const r=e("inertia-link"),l=e("show-consultation-taches-form"),c=e("jig-layout");return t(),h(c,null,{header:a(()=>[s("div",b,[n(r,{href:o.route("admin.consultation-taches.index"),class:"text-2xl font-black text-white"},{default:a(()=>[j,_(" Back | Details of Consultation Tach #"+x(o.model.id),1)]),_:1},8,["href"])])]),default:a(()=>[o.model.can.view?(t(),i("div",g,[s("div",v,[n(l,{model:o.model},null,8,["model"])])])):(t(),i("div",k," You don't have permission to view this resource. "))]),_:1})}var A=f(w,[["render",y]]);export{A as default};
