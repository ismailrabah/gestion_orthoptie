import{J as l}from"./JigLayout.bb7b7d09.js";import{I as m}from"./InertiaButton.8127fa1b.js";import c from"./CreateForm.26d459eb.js";import{D as d}from"./DisplayMixin.328c366f.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{j as f,e as s,o as u,f as _,w as t,g as o,x as a,i as x}from"./vendor.f8a6287f.js";import"./DialogModal.15a46057.js";import"./ApplicationLogo.99a0e64a.js";import"./Input.3ded2763.js";import"./Label.933dc508.js";import"./InputError.5454eee4.js";const h=f({name:"CreateSallesDExamens",components:{InertiaButton:m,JigLayout:l,CreateSallesDExamensForm:c},data(){return{}},mixins:[d],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.salles-d-examens.index"))},onError(e){this.displayNotification("error",e)}}}),j={class:"flex flex-wrap items-center justify-between w-full px-4"},w=o("i",{class:"fas fa-arrow-left"},null,-1),b=x(" Retour| Nouveau Salle d'examen "),g={class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function y(e,C,E,S,D,N){const r=s("inertia-link"),n=s("create-salles-d-examens-form"),i=s("jig-layout");return u(),_(i,null,{header:t(()=>[o("div",j,[a(r,{href:e.route("admin.salles-d-examens.index"),class:"text-xl font-black text-white"},{default:t(()=>[w,b]),_:1},8,["href"])])]),default:t(()=>[o("div",g,[o("div",v,[a(n,{onSuccess:e.onSuccess,onError:e.onError},null,8,["onSuccess","onError"])])])]),_:1})}var R=p(h,[["render",y]]);export{R as default};