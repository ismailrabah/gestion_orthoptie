import{J as d}from"./JigLayout.5f650382.js";import{J as m}from"./Label.be169a38.js";import{I as u}from"./InertiaButton.b06aab18.js";import{J as l}from"./InputError.aee3d62e.js";import{J as p}from"./Button.10f174e4.js";import c from"./EditForm.6f865325.js";import{D as f}from"./DisplayMixin.328c366f.js";import{_}from"./plugin-vue_export-helper.5a098b48.js";import{j as h,e as t,o as x,f as j,w as s,g as o,x as r,i as b,y as v}from"./vendor.bec00c62.js";import"./DialogModal.c74b5b77.js";import"./ApplicationLogo.0294935d.js";import"./Checkbox.af44e9b7.js";import"./Input.a6112c10.js";import"./style.6668bb15.js";const y=h({name:"EditRendezVousStatuses",props:{model:Object},components:{InertiaButton:u,JetLabel:m,JetButton:p,JetInputError:l,JigLayout:d,EditRendezVousStatusesForm:c},data(){return{}},mixins:[f],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.rendez-vous-statuses.index"))},onError(e){this.displayNotification("error",e)}}}),g={class:"flex flex-wrap items-center justify-between w-full px-4"},w=o("i",{class:"fas fa-arrow-left"},null,-1),E={class:"flex flex-wrap px-4"},J={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function z(e,S,B,k,I,V){const a=t("inertia-link"),i=t("edit-rendez-vous-statuses-form"),n=t("jig-layout");return x(),j(n,null,{header:s(()=>[o("div",g,[r(a,{href:e.route("admin.rendez-vous-statuses.index"),class:"text-xl font-black text-white"},{default:s(()=>[w,b(" Retour| Edit Rendez Vous Status #"+v(e.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[o("div",E,[o("div",J,[r(i,{model:e.model,onSuccess:e.onSuccess,onError:e.onError},null,8,["model","onSuccess","onError"])])])]),_:1})}var K=_(y,[["render",z]]);export{K as default};
