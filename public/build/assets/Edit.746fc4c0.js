import{J as m}from"./JigLayout.f5eb6c53.js";import{J as c}from"./Label.fc1854d2.js";import{I as d}from"./InertiaButton.c6dbc8f4.js";import{J as l}from"./InputError.da02960c.js";import{J as p}from"./Button.3fc86b53.js";import f from"./EditForm.408543ee.js";import{D as u}from"./DisplayMixin.328c366f.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{d as _,r as e,o as x,c as w,w as s,a as t,l as r,b as y,t as E}from"./main.b00fb162.js";import"./DialogModal.b2f3f5a5.js";import"./ApplicationLogo.3595876e.js";import"./Input.7543e972.js";import"./index.a8a3989e.js";const J=_({name:"EditTaches",props:{model:Object},components:{InertiaButton:d,JetLabel:c,JetButton:p,JetInputError:l,JigLayout:m,EditTachesForm:f},data(){return{}},mixins:[u],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(o){this.displayNotification("success",o),this.$inertia.visit(route("admin.taches.index"))},onError(o){this.displayNotification("error",o)}}}),b={class:"flex flex-wrap items-center justify-between w-full px-4"},g=t("i",{class:"fas fa-arrow-left"},null,-1),v={class:"flex flex-wrap px-4"},$={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function k(o,B,N,S,j,T){const a=e("inertia-link"),i=e("edit-taches-form"),n=e("jig-layout");return x(),w(n,null,{header:s(()=>[t("div",b,[r(a,{href:o.route("admin.taches.index"),class:"text-xl font-black text-white"},{default:s(()=>[g,y(" Retour| \xC9diter Tach #"+E(o.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[t("div",v,[t("div",$,[r(i,{model:o.model,onSuccess:o.onSuccess,onError:o.onError},null,8,["model","onSuccess","onError"])])])]),_:1})}var H=h(J,[["render",k]]);export{H as default};
