import{J as m}from"./JigLayout.bb7b7d09.js";import{I as c}from"./InertiaButton.8127fa1b.js";import p from"./ShowForm.15b1f799.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";import{j as f,e,o as t,f as _,w as s,g as a,x as n,i as h,y as w,k as i}from"./vendor.f8a6287f.js";import"./DialogModal.15a46057.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.99a0e64a.js";import"./JigDd.81cc9e9e.js";import"./ShowForm.157ed9b5.js";import"./ShowForm.c24ec14a.js";const x=f({name:"ShowConsultation",components:{InertiaButton:c,JigLayout:m,ShowConsultationsForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),j={class:"flex flex-wrap items-center justify-between w-full px-4"},b=a("i",{class:"fas fa-arrow-left"},null,-1),g={key:0,class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},y={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function k(o,S,B,C,D,F){const r=e("inertia-link"),l=e("show-consultations-form"),d=e("jig-layout");return t(),_(d,null,{header:s(()=>[a("div",j,[n(r,{href:o.route("admin.consultations.index"),class:"text-2xl font-black text-white"},{default:s(()=>[b,h(" Retour| Details Du Consultation #"+w(o.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[o.model.can.view?(t(),i("div",g,[a("div",v,[n(l,{model:o.model},null,8,["model"])])])):(t(),i("div",y," You don't have permission to view this resource. "))]),_:1})}var R=u(x,[["render",k]]);export{R as default};
