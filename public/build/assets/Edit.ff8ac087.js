import{J as d}from"./JigLayout.f5eb6c53.js";import{J as m}from"./Label.fc1854d2.js";import{I as l}from"./InertiaButton.c6dbc8f4.js";import{J as p}from"./InputError.da02960c.js";import{J as c}from"./Button.3fc86b53.js";import u from"./EditForm.fbf28dc7.js";import{D as f}from"./DisplayMixin.328c366f.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{d as h,r as t,o as x,c as w,w as r,a as e,l as s,b as v,t as y}from"./main.b00fb162.js";import"./DialogModal.b2f3f5a5.js";import"./ApplicationLogo.3595876e.js";import"./JigDatepicker.18aebfd1.js";import"./vue-flatpickr.min.852deabf.js";import"./index.a8a3989e.js";import"./InfiniteSelect.b537c6d0.js";const z=h({name:"EditRendezVous",props:{model:Object},components:{InertiaButton:l,JetLabel:m,JetButton:c,JetInputError:p,JigLayout:d,EditRendezVousForm:u},data(){return{}},mixins:[f],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(o){this.displayNotification("success",o),this.$inertia.visit(route("admin.rendez-vouses.index"))},onError(o){this.displayNotification("error",o)}}}),E={class:"flex flex-wrap items-center justify-between w-full px-4"},J=e("i",{class:"fas fa-arrow-left"},null,-1),b={class:"flex flex-wrap px-4"},g={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function V(o,$,k,B,N,S){const i=t("inertia-link"),n=t("edit-rendez-vous-form"),a=t("jig-layout");return x(),w(a,null,{header:r(()=>[e("div",E,[s(i,{href:o.route("admin.rendez-vouses.index"),class:"text-xl font-black text-white"},{default:r(()=>[J,v(" Retour| \xC9diter Rendez Vou #"+y(o.model.id),1)]),_:1},8,["href"])])]),default:r(()=>[e("div",b,[e("div",g,[s(n,{model:o.model,onSuccess:o.onSuccess,onError:o.onError},null,8,["model","onSuccess","onError"])])])]),_:1})}var P=_(z,[["render",V]]);export{P as default};
