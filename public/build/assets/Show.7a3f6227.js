import{J as c}from"./JigLayout.5f650382.js";import{I as m}from"./InertiaButton.b06aab18.js";import p from"./ShowForm.1217451c.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import{j as h,e as o,o as t,f as u,w as s,g as i,x as a,i as _,y as x,k as r}from"./vendor.bec00c62.js";import"./DialogModal.c74b5b77.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.0294935d.js";import"./JigDd.6b7b5a1f.js";const w=h({name:"ShowFichier",components:{InertiaButton:m,JigLayout:c,ShowFichiersForm:p},props:{model:Object},data(){return{}},mounted(){},methods:{}}),b={class:"flex flex-wrap items-center justify-between w-full px-4"},j=i("i",{class:"fas fa-arrow-left"},null,-1),g={key:0,class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-5xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"},y={key:1,class:"px-4 text-lg font-bold text-center text-red-500 bg-white rounded-md shadow-md space-4"};function k(e,B,D,F,S,J){const n=o("inertia-link"),d=o("show-fichiers-form"),l=o("jig-layout");return t(),u(l,null,{header:s(()=>[i("div",b,[a(n,{href:e.route("admin.fichiers.index"),class:"text-2xl font-black text-white"},{default:s(()=>[j,_(" Retour| Details De Fichier #"+x(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[e.model.can.view?(t(),r("div",g,[i("div",v,[a(d,{model:e.model},null,8,["model"])])])):(t(),r("div",y," You don't have permission to view this resource. "))]),_:1})}var E=f(w,[["render",k]]);export{E as default};
