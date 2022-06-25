import{J as l}from"./JigLayout.a37901a5.js";import{I as m}from"./InertiaButton.9718c36b.js";import c from"./CreateForm.e3cce80f.js";import{D as d}from"./DisplayMixin.328c366f.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{d as f,r as t,o as u,c as _,w as s,a as o,l as a,b as x}from"./main.227f4171.js";import"./DialogModal.9883659e.js";import"./ApplicationLogo.6617a0db.js";import"./Input.6a7016f4.js";import"./Label.6bff53fc.js";import"./InputError.96d9f536.js";import"./index.a8a3989e.js";const h=f({name:"CreateSallesDExamens",components:{InertiaButton:m,JigLayout:l,CreateSallesDExamensForm:c},data(){return{}},mixins:[d],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.salles-d-examens.index"))},onError(e){this.displayNotification("error",e)}}}),w={class:"flex flex-wrap items-center justify-between w-full px-4"},v=o("i",{class:"fas fa-arrow-left"},null,-1),y=x(" Retour| Nouveau Salle d'examen "),S={class:"flex flex-wrap px-4"},C={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function E(e,N,$,g,k,b){const r=t("inertia-link"),n=t("create-salles-d-examens-form"),i=t("jig-layout");return u(),_(i,null,{header:s(()=>[o("div",w,[a(r,{href:e.route("admin.salles-d-examens.index"),class:"text-xl font-black text-white"},{default:s(()=>[v,y]),_:1},8,["href"])])]),default:s(()=>[o("div",S,[o("div",C,[a(n,{onSuccess:e.onSuccess,onError:e.onError},null,8,["onSuccess","onError"])])])]),_:1})}var q=p(h,[["render",E]]);export{q as default};