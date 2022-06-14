import{J as d}from"./JigLayout.bb7b7d09.js";import{J as p}from"./Label.933dc508.js";import{I as m}from"./InertiaButton.8127fa1b.js";import{J as l}from"./InputError.5454eee4.js";import{J as c}from"./Button.0bced74f.js";import f from"./EditForm.90cb3bb4.js";import{D as u}from"./DisplayMixin.328c366f.js";import{_}from"./plugin-vue_export-helper.5a098b48.js";import{j as x,e,o as h,f as j,w as s,g as o,x as r,i as b,y as g}from"./vendor.f8a6287f.js";import"./DialogModal.15a46057.js";import"./ApplicationLogo.99a0e64a.js";import"./Input.3ded2763.js";import"./JigTextarea.e73f175d.js";const w=x({name:"EditPrestations",props:{model:Object},components:{InertiaButton:m,JetLabel:p,JetButton:c,JetInputError:l,JigLayout:d,EditPrestationsForm:f},data(){return{}},mixins:[u],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(t){this.displayNotification("success",t),this.$inertia.visit(route("admin.prestations.index"))},onError(t){this.displayNotification("error",t)}}}),y={class:"flex flex-wrap items-center justify-between w-full px-4"},E=o("i",{class:"fas fa-arrow-left"},null,-1),J={class:"flex flex-wrap px-4"},v={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function B(t,I,$,k,D,L){const i=e("inertia-link"),a=e("edit-prestations-form"),n=e("jig-layout");return h(),j(n,null,{header:s(()=>[o("div",y,[r(i,{href:t.route("admin.prestations.index"),class:"text-xl font-black text-white"},{default:s(()=>[E,b(" Retour| \xC9diter Prestation #"+g(t.model.id),1)]),_:1},8,["href"])])]),default:s(()=>[o("div",J,[o("div",v,[r(a,{model:t.model,onSuccess:t.onSuccess,onError:t.onError},null,8,["model","onSuccess","onError"])])])]),_:1})}var G=_(w,[["render",B]]);export{G as default};