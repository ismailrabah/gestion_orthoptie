import{J as l}from"./JigLayout.a37901a5.js";import{J as m}from"./Label.6bff53fc.js";import{I as d}from"./InertiaButton.9718c36b.js";import{J as c}from"./InputError.96d9f536.js";import{J as p}from"./Button.21571cb9.js";import f from"./EditForm.9a8c0c40.js";import{D as u}from"./DisplayMixin.328c366f.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{d as x,r as t,o as h,c as w,w as s,a as o,l as a,b as E,t as y}from"./main.227f4171.js";import"./DialogModal.9883659e.js";import"./ApplicationLogo.6617a0db.js";import"./Input.6a7016f4.js";import"./index.a8a3989e.js";const J=x({name:"EditSallesDExamens",props:{model:Object},components:{InertiaButton:d,JetLabel:m,JetButton:p,JetInputError:c,JigLayout:l,EditSallesDExamensForm:f},data(){return{}},mixins:[u],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.salles-d-examens.index"))},onError(e){this.displayNotification("error",e)}}}),S={class:"flex flex-wrap items-center justify-between w-full px-4"},b=o("i",{class:"fas fa-arrow-left"},null,-1),g={class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function $(e,k,B,D,N,j){const r=t("inertia-link"),i=t("edit-salles-d-examens-form"),n=t("jig-layout");return h(),w(n,null,{header:s(()=>[o("div",S,[a(r,{href:e.route("admin.salles-d-examens.index"),class:"text-xl font-black text-white"},{default:s(()=>[b,E(" Retour| \xC9diter Salle d'examen #"+y(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[o("div",g,[o("div",v,[a(i,{model:e.model,onSuccess:e.onSuccess,onError:e.onError},null,8,["model","onSuccess","onError"])])])]),_:1})}var H=_(J,[["render",$]]);export{H as default};
