import{J as C}from"./Label.1640e158.js";import{I as P}from"./InertiaButton.c7080281.js";import{J as w}from"./InputError.c3276db9.js";import{J}from"./Checkbox.b76a04f3.js";import{J as $}from"./Input.a9a68364.js";import{$ as V,e as h,o as d,k as m,g as r,x as l,w as g,C as p,F as x,B as k,y as B,n as v,i as f}from"./vendor.f60cbd33.js";import{D as I}from"./DisplayMixin.328c366f.js";import{_ as N}from"./plugin-vue_export-helper.5a098b48.js";const D={name:"AssignPerms",components:{InertiaButton:P,JetLabel:C,JetInputError:w,JetInput:$,JetCheckbox:J},props:{permissions:Object,role:{required:!0,type:Object}},mixins:[I],methods:{async togglePerm(o){V.post(this.route("api.roles.assign-permission",this.role.id),{permission:o}).then(e=>{this.$emit("toggle-success",e.data.message)}).catch(e=>{var t,n;this.$emit("toggle-error",((n=(t=e.response)==null?void 0:t.data)==null?void 0:n.message)||e.message||e)})},async toggleAll(o){const e=this;for(const t in e.permissions){if(!e.permissions.hasOwnProperty(t))return!1;let n=e.permissions[t];await e.togglePermGroup(n,o)}this.displayNotification("success",`All permissions have been ${o?"Assigned.":"Revoked."}`)},async togglePermGroup(o,e){const t=this;for(const n in o){if(!o.hasOwnProperty(n))return!1;let i=o[n];i.checked&&!e?(i.checked=!1,await t.togglePerm(i)):e&&!i.checked&&(i.checked=!0,await t.togglePerm(i))}this.displayNotification("success",`All permissions in the group have been ${e?"Assigned.":"Revoked."}`)}}},O={class:"font-black text-xl mb-2 flex flex-wrap justify-between items-center"},R=r("h2",{class:""},"Assign Permissions",-1),E=f("Assign All"),G=f("Revoke All"),L=r("hr",null,null,-1),M={class:"p-4 mt-2 md:grid grid-cols-2 border rounded"},F={class:"flex flex-wrap"},U={class:"font-black text-xl pb-2"},q={class:""},z=f("Assign"),K=f("Revoke");function S(o,e,t,n,i,a){const u=h("inertia-button"),y=h("jet-checkbox"),j=h("jet-label");return d(),m("div",null,[r("div",O,[R,r("div",null,[l(u,{class:"bg-green-500",type:"button",onClick:e[0]||(e[0]=p(c=>a.toggleAll(!0),["prevent"]))},{default:g(()=>[E]),_:1}),l(u,{class:"bg-red-500 text-white",type:"button",onClick:e[1]||(e[1]=p(c=>a.toggleAll(!1),["prevent"]))},{default:g(()=>[G]),_:1})])]),L,r("div",M,[(d(!0),m(x,null,k(t.permissions,(c,b)=>(d(),m("div",{key:b,class:"border-b-2 mb-2"},[r("div",F,[r("h3",U,B(b),1),r("div",q,[l(u,{onClick:p(s=>a.togglePermGroup(c,!0),["prevent"]),class:"bg-green-500 py-1 mx-1 text-sm"},{default:g(()=>[z]),_:2},1032,["onClick"]),l(u,{onClick:p(s=>a.togglePermGroup(c,!1),["prevent"]),class:"bg-red-500 py-1 mx-1 text-sm"},{default:g(()=>[K]),_:2},1032,["onClick"])])]),(d(!0),m(x,null,k(c,(s,A)=>(d(),m("div",{style:{cursor:"pointer"},key:A,class:"sm:col-span-4 px-10 flex border-b border-gray-100 py-3 items-center my-2 text-gray-600"},[l(y,{onChange:_=>a.togglePerm(s),class:v(["p-2 inline-block",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":!s.checked}]),type:"checkbox",id:s.name,name:s.name,checked:!!s.checked,modelValue:s.checked,"onUpdate:modelValue":_=>s.checked=_},null,8,["onChange","id","name","checked","modelValue","onUpdate:modelValue","class"]),l(j,{style:{cursor:"pointer"},for:s.name,class:v(["text-gray-400 hover:text-gray-600","inline-block font-black text-xl ml-3"]),value:s.title},null,8,["for","value"])]))),128))]))),128))])])}var se=N(D,[["render",S]]);export{se as default};
