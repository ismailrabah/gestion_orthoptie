import{J as c}from"./JigLayout.a37901a5.js";import{I as m}from"./InertiaButton.9718c36b.js";import p from"./CreateForm.b06d58b5.js";import{D as l}from"./DisplayMixin.328c366f.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{d as f,r as t,o as u,c as _,w as r,a as o,l as i,b as h}from"./main.227f4171.js";import"./DialogModal.9883659e.js";import"./ApplicationLogo.6617a0db.js";import"./Input.6a7016f4.js";import"./JigTextarea.5922ebb2.js";import"./InfiniteSelect.35ef3c17.js";import"./index.a8a3989e.js";import"./Label.6bff53fc.js";import"./InputError.96d9f536.js";const x=f({name:"CreateFichiers",components:{InertiaButton:m,JigLayout:c,CreateFichiersForm:p},data(){return{}},mixins:[l],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.fichiers.index"))},onError(e){this.displayNotification("error",e)}}}),w={class:"flex flex-wrap items-center justify-between w-full px-4"},v=o("i",{class:"fas fa-arrow-left"},null,-1),y=h(" Retour| Nouveau Fichier "),C={class:"flex flex-wrap px-4"},N={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function $(e,g,k,b,B,E){const s=t("inertia-link"),a=t("create-fichiers-form"),n=t("jig-layout");return u(),_(n,null,{header:r(()=>[o("div",w,[i(s,{href:e.route("admin.fichiers.index"),class:"text-xl font-black text-white"},{default:r(()=>[v,y]),_:1},8,["href"])])]),default:r(()=>[o("div",C,[o("div",N,[i(a,{onSuccess:e.onSuccess,onError:e.onError},null,8,["onSuccess","onError"])])])]),_:1})}var G=d(x,[["render",$]]);export{G as default};
