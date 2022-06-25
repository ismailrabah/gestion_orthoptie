import{J as l}from"./JigLayout.a37901a5.js";import{I as c}from"./InertiaButton.9718c36b.js";import m from"./CreateForm.a895d3f0.js";import{D as d}from"./DisplayMixin.328c366f.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{d as f,r as o,o as u,c as _,w as s,a as e,l as a,b as h}from"./main.227f4171.js";import"./DialogModal.9883659e.js";import"./ApplicationLogo.6617a0db.js";import"./JigDatepicker.59b5f0dc.js";import"./vue-flatpickr.min.b9eb288e.js";import"./index.a8a3989e.js";import"./Input.6a7016f4.js";import"./InfiniteSelect.35ef3c17.js";import"./Label.6bff53fc.js";import"./InputError.96d9f536.js";const x=f({name:"CreateSalleDAttentes",components:{InertiaButton:c,JigLayout:l,CreateSalleDAttentesForm:m},data(){return{}},mixins:[d],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(t){this.displayNotification("success",t),this.$inertia.visit(route("admin.salle-d-attentes.index"))},onError(t){this.displayNotification("error",t)}}}),w={class:"flex flex-wrap items-center justify-between w-full px-4"},v=e("i",{class:"fas fa-arrow-left"},null,-1),y=h(" Retour| Nouveau Salle d'attente "),S={class:"flex flex-wrap px-4"},C={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function N(t,$,g,k,b,B){const r=o("inertia-link"),n=o("create-salle-d-attentes-form"),i=o("jig-layout");return u(),_(i,null,{header:s(()=>[e("div",w,[a(r,{href:t.route("admin.salle-d-attentes.index"),class:"text-xl font-black text-white"},{default:s(()=>[v,y]),_:1},8,["href"])])]),default:s(()=>[e("div",S,[e("div",C,[a(n,{onSuccess:t.onSuccess,onError:t.onError},null,8,["onSuccess","onError"])])])]),_:1})}var H=p(x,[["render",N]]);export{H as default};
