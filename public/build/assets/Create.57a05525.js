import{J as l}from"./JigLayout.473189ee.js";import{I as m}from"./InertiaButton.b06aab18.js";import p from"./CreateForm.1b238760.js";import{D as d}from"./DisplayMixin.328c366f.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";import{e as t,o as f,f as _,w as r,g as o,x as a,i as x}from"./vendor.bec00c62.js";import"./DialogModal.c74b5b77.js";import"./ApplicationLogo.0294935d.js";import"./Input.a6112c10.js";import"./Label.be169a38.js";import"./InputError.aee3d62e.js";const h={name:"CreateRoles",components:{InertiaButton:m,JigLayout:l,CreateRolesForm:p},data(){return{}},mixins:[d],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.roles.index"))},onError(e){this.displayNotification("error",e)}}},j={class:"flex flex-wrap items-center justify-between w-full px-4"},b=o("i",{class:"fas fa-arrow-left"},null,-1),w=x(" Retour| Nouveau Role "),g={class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function y(e,C,N,k,B,s){const i=t("inertia-link"),n=t("create-roles-form"),c=t("jig-layout");return f(),_(c,null,{header:r(()=>[o("div",j,[a(i,{href:e.route("admin.roles.index"),class:"text-xl font-black text-white"},{default:r(()=>[b,w]),_:1},8,["href"])])]),default:r(()=>[o("div",g,[o("div",v,[a(n,{onSuccess:s.onSuccess,onError:s.onError},null,8,["onSuccess","onError"])])])]),_:1})}var z=u(h,[["render",y]]);export{z as default};
