import{J as m}from"./JigLayout.a37901a5.js";import{I as l}from"./InertiaButton.9718c36b.js";import p from"./CreateForm.c9370dff.js";import{D as d}from"./DisplayMixin.328c366f.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as u,c as _,w as s,a as o,l as i,b as x}from"./main.227f4171.js";import"./DialogModal.9883659e.js";import"./ApplicationLogo.6617a0db.js";import"./Input.6a7016f4.js";import"./Label.6bff53fc.js";import"./InputError.96d9f536.js";import"./index.a8a3989e.js";const h={name:"CreatePermissions",components:{InertiaButton:l,JigLayout:m,CreatePermissionsForm:p},data(){return{}},mixins:[d],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.permissions.index"))},onError(e){this.displayNotification("error",e)}}},w={class:"flex flex-wrap items-center justify-between w-full px-4"},v=o("i",{class:"fas fa-arrow-left"},null,-1),y=x(" Retour| Nouveau Permission "),N={class:"flex flex-wrap px-4"},g={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function k(e,C,b,B,E,r){const a=t("inertia-link"),n=t("create-permissions-form"),c=t("jig-layout");return u(),_(c,null,{header:s(()=>[o("div",w,[i(a,{href:e.route("admin.permissions.index"),class:"text-xl font-black text-white"},{default:s(()=>[v,y]),_:1},8,["href"])])]),default:s(()=>[o("div",N,[o("div",g,[i(n,{onSuccess:r.onSuccess,onError:r.onError},null,8,["onSuccess","onError"])])])]),_:1})}var R=f(h,[["render",k]]);export{R as default};