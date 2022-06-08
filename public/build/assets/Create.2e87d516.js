import{J as m}from"./JigLayout.332e7c83.js";import{I as d}from"./InertiaButton.b4c5ddff.js";import l from"./CreateForm.0d73cdb4.js";import{D as p}from"./DisplayMixin.328c366f.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import{e as o,o as u,f as _,w as t,g as s,x as i,i as x}from"./vendor.6d78f1ed.js";import"./DialogModal.cf2ee799.js";import"./Input.bd38e939.js";import"./Label.fd47eb70.js";import"./InputError.d267c622.js";const h={name:"CreatePermissions",components:{InertiaButton:d,JigLayout:m,CreatePermissionsForm:l},data(){return{}},mixins:[p],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(e){this.displayNotification("success",e),this.$inertia.visit(route("admin.permissions.index"))},onError(e){this.displayNotification("error",e)}}},j={class:"flex flex-wrap items-center justify-between w-full px-4"},w=s("i",{class:"fas fa-arrow-left"},null,-1),b=x(" Back | New Permission "),g={class:"flex flex-wrap px-4"},y={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function v(e,k,B,C,N,r){const a=o("inertia-link"),n=o("create-permissions-form"),c=o("jig-layout");return u(),_(c,null,{header:t(()=>[s("div",j,[i(a,{href:e.route("admin.permissions.index"),class:"text-xl font-black text-white"},{default:t(()=>[w,b]),_:1},8,["href"])])]),default:t(()=>[s("div",g,[s("div",y,[i(n,{onSuccess:r.onSuccess,onError:r.onError},null,8,["onSuccess","onError"])])])]),_:1})}var F=f(h,[["render",v]]);export{F as default};
