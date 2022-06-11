import{J as c}from"./JigLayout.67b03211.js";import{I as f}from"./InertiaButton.d4eeaf43.js";import l from"./CreateForm.b9353aeb.js";import{D as m}from"./DisplayMixin.328c366f.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{j as d,e as o,o as u,f as _,w as r,g as t,x as s,i as h}from"./vendor.0e2d33d8.js";import"./DialogModal.a0065cb1.js";import"./Input.268af2b6.js";import"./JigTextarea.c1347337.js";import"./InfiniteSelect.e52428db.js";import"./Label.6a56508f.js";import"./InputError.8fba5cb1.js";const x=d({name:"CreateFichiers",components:{InertiaButton:f,JigLayout:c,CreateFichiersForm:l},data(){return{}},mixins:[m],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.fichiers.index"))},onError(e){this.displayNotification("error",e)}}}),j={class:"flex flex-wrap items-center justify-between w-full px-4"},b=t("i",{class:"fas fa-arrow-left"},null,-1),w=h(" Back | New Fichier "),g={class:"flex flex-wrap px-4"},y={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function v(e,C,k,B,I,N){const i=o("inertia-link"),a=o("create-fichiers-form"),n=o("jig-layout");return u(),_(n,null,{header:r(()=>[t("div",j,[s(i,{href:e.route("admin.fichiers.index"),class:"text-xl font-black text-white"},{default:r(()=>[b,w]),_:1},8,["href"])])]),default:r(()=>[t("div",g,[t("div",y,[s(a,{onSuccess:e.onSuccess,onError:e.onError},null,8,["onSuccess","onError"])])])]),_:1})}var A=p(x,[["render",v]]);export{A as default};