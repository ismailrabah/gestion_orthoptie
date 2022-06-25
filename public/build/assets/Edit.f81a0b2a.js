import{J as m}from"./JigLayout.a37901a5.js";import{J as d}from"./Label.6bff53fc.js";import{I as p}from"./InertiaButton.9718c36b.js";import{J as l}from"./InputError.96d9f536.js";import{J as c}from"./Button.21571cb9.js";import f from"./EditForm.7ca8da18.js";import{D as u}from"./DisplayMixin.328c366f.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{d as h,r as e,o as x,c as w,w as r,a as o,l as s,b as y,t as E}from"./main.227f4171.js";import"./DialogModal.9883659e.js";import"./ApplicationLogo.6617a0db.js";import"./JigDatepicker.59b5f0dc.js";import"./vue-flatpickr.min.b9eb288e.js";import"./index.a8a3989e.js";import"./Input.6a7016f4.js";const J=h({name:"EditPatients",props:{model:Object},components:{InertiaButton:p,JetLabel:d,JetButton:c,JetInputError:l,JigLayout:m,EditPatientsForm:f},data(){return{}},mixins:[u],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(t){this.displayNotification("success",t),this.$inertia.visit(route("admin.patients.index"))},onError(t){this.displayNotification("error",t)}}}),b={class:"flex flex-wrap items-center justify-between w-full px-4"},g=o("i",{class:"fas fa-arrow-left"},null,-1),v={class:"flex flex-wrap px-4"},$={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function k(t,B,N,S,j,C){const i=e("inertia-link"),a=e("edit-patients-form"),n=e("jig-layout");return x(),w(n,null,{header:r(()=>[o("div",b,[s(i,{href:t.route("admin.patients.index"),class:"text-xl font-black text-white"},{default:r(()=>[g,y(" Retour| \xC9diter Patient #"+E(t.model.id),1)]),_:1},8,["href"])])]),default:r(()=>[o("div",v,[o("div",$,[s(a,{model:t.model,onSuccess:t.onSuccess,onError:t.onError},null,8,["model","onSuccess","onError"])])])]),_:1})}var K=_(J,[["render",k]]);export{K as default};
