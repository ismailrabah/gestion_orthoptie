import{J as c}from"./JigLayout.f7fb3eec.js";import{I as p}from"./InertiaButton.19f70872.js";import l from"./CreateForm.0995704d.js";import{D as d}from"./DisplayMixin.328c366f.js";import{_ as m}from"./plugin-vue_export-helper.5a098b48.js";import{j as f,e as o,o as u,f as _,w as s,g as t,x as r,i as x}from"./vendor.76a4f2da.js";import"./DialogModal.5c215a75.js";import"./Input.3d816876.js";import"./JigTextarea.7a6e8040.js";import"./Label.738327b5.js";import"./InputError.a46be50d.js";const h=f({name:"CreatePrestations",components:{InertiaButton:p,JigLayout:c,CreatePrestationsForm:l},data(){return{}},mixins:[d],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.prestations.index"))},onError(e){this.displayNotification("error",e)}}}),j={class:"flex flex-wrap items-center justify-between w-full px-4"},w=t("i",{class:"fas fa-arrow-left"},null,-1),g=x(" Back | New Prestation "),y={class:"flex flex-wrap px-4"},b={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function v(e,C,k,B,N,$){const a=o("inertia-link"),i=o("create-prestations-form"),n=o("jig-layout");return u(),_(n,null,{header:s(()=>[t("div",j,[r(a,{href:e.route("admin.prestations.index"),class:"text-xl font-black text-white"},{default:s(()=>[w,g]),_:1},8,["href"])])]),default:s(()=>[t("div",y,[t("div",b,[r(i,{onSuccess:e.onSuccess,onError:e.onError},null,8,["onSuccess","onError"])])])]),_:1})}var z=m(h,[["render",v]]);export{z as default};
