import{J as c}from"./JigLayout.473189ee.js";import{I as l}from"./InertiaButton.b06aab18.js";import p from"./CreateForm.5035fc06.js";import{D as m}from"./DisplayMixin.328c366f.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";import{j as u,e as t,o as f,f as _,w as s,g as o,x as a,i as h}from"./vendor.bec00c62.js";import"./DialogModal.c74b5b77.js";import"./ApplicationLogo.0294935d.js";import"./Input.a6112c10.js";import"./Label.be169a38.js";import"./InputError.aee3d62e.js";const x=u({name:"CreateTaches",components:{InertiaButton:l,JigLayout:c,CreateTachesForm:p},data(){return{}},mixins:[m],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.taches.index"))},onError(e){this.displayNotification("error",e)}}}),j={class:"flex flex-wrap items-center justify-between w-full px-4"},b=o("i",{class:"fas fa-arrow-left"},null,-1),w=h(" Retour| Nouveau Tach "),g={class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function y(e,C,N,$,k,B){const r=t("inertia-link"),i=t("create-taches-form"),n=t("jig-layout");return f(),_(n,null,{header:s(()=>[o("div",j,[a(r,{href:e.route("admin.taches.index"),class:"text-xl font-black text-white"},{default:s(()=>[b,w]),_:1},8,["href"])])]),default:s(()=>[o("div",g,[o("div",v,[a(i,{onSuccess:e.onSuccess,onError:e.onError},null,8,["onSuccess","onError"])])])]),_:1})}var A=d(x,[["render",y]]);export{A as default};
