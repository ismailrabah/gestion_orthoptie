import{J as m}from"./JigLayout.f9b138d2.js";import{J as l}from"./Label.5467a800.js";import{I as d}from"./InertiaButton.f95f8f59.js";import{J as c}from"./InputError.ef575259.js";import{J as p}from"./Button.b545a8dd.js";import u from"./EditForm.3bc7aed7.js";import{D as f}from"./DisplayMixin.328c366f.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{d as h,r as e,o as x,c as w,w as s,a as t,l as r,b as y,t as E}from"./main.8d02089a.js";import"./DialogModal.a90c0402.js";import"./ApplicationLogo.e325ada5.js";import"./JigDatepicker.9c45d0af.js";import"./vue-flatpickr.min.ef1bd4e0.js";import"./index.a8a3989e.js";import"./Input.12512e43.js";import"./InfiniteSelect.05c26939.js";import"./JigTextarea.93f58f67.js";const J=h({name:"EditConsultations",props:{model:Object},components:{InertiaButton:d,JetLabel:l,JetButton:p,JetInputError:c,JigLayout:m,EditConsultationsForm:u},data(){return{}},mixins:[f],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(o){this.displayNotification("success",o),this.$inertia.visit(route("admin.consultations.index"))},onError(o){this.displayNotification("error",o)}}}),b={class:"flex flex-wrap items-center justify-between w-full px-4"},g=t("i",{class:"fas fa-arrow-left"},null,-1),v={class:"flex flex-wrap px-4"},C={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function $(o,k,B,N,S,j){const i=e("inertia-link"),n=e("edit-consultations-form"),a=e("jig-layout");return x(),w(a,null,{header:s(()=>[t("div",b,[r(i,{href:o.route("admin.consultations.index"),class:"text-xl font-black text-white"},{default:s(()=>[g,y(" Retour| \xC9diter Consultation #"+E(o.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[t("div",v,[t("div",C,[r(n,{model:o.model,onSuccess:o.onSuccess,onError:o.onError},null,8,["model","onSuccess","onError"])])])]),_:1})}var U=_(J,[["render",$]]);export{U as default};