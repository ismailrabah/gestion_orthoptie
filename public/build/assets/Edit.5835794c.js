import{J as d}from"./JigLayout.bb7b7d09.js";import{J as c}from"./Label.933dc508.js";import{I as m}from"./InertiaButton.8127fa1b.js";import{J as l}from"./InputError.5454eee4.js";import{J as p}from"./Button.0bced74f.js";import f from"./EditForm.aec3e301.js";import{D as u}from"./DisplayMixin.328c366f.js";import{_ as h}from"./plugin-vue_export-helper.5a098b48.js";import{j as _,e as t,o as x,f as j,w as i,g as o,x as r,i as b,y as g}from"./vendor.f8a6287f.js";import"./DialogModal.15a46057.js";import"./ApplicationLogo.99a0e64a.js";import"./Input.3ded2763.js";import"./JigTextarea.e73f175d.js";import"./InfiniteSelect.ba070ddb.js";const w=_({name:"EditFichiers",props:{model:Object},components:{InertiaButton:m,JetLabel:c,JetButton:p,JetInputError:l,JigLayout:d,EditFichiersForm:f},data(){return{}},mixins:[u],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.fichiers.index"))},onError(e){this.displayNotification("error",e)}}}),y={class:"flex flex-wrap items-center justify-between w-full px-4"},E=o("i",{class:"fas fa-arrow-left"},null,-1),J={class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function B(e,I,S,$,k,D){const s=t("inertia-link"),a=t("edit-fichiers-form"),n=t("jig-layout");return x(),j(n,null,{header:i(()=>[o("div",y,[r(s,{href:e.route("admin.fichiers.index"),class:"text-xl font-black text-white"},{default:i(()=>[E,b(" Retour| Modifier Fichier #"+g(e.model.id),1)]),_:1},8,["href"])])]),default:i(()=>[o("div",J,[o("div",v,[r(a,{model:e.model,onSuccess:e.onSuccess,onError:e.onError},null,8,["model","onSuccess","onError"])])])]),_:1})}var K=h(w,[["render",B]]);export{K as default};
