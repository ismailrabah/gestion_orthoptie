var y=Object.defineProperty;var g=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var v=(o,e,t)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,h=(o,e)=>{for(var t in e||(e={}))V.call(e,t)&&v(o,t,e[t]);if(g)for(var t of g(e))A.call(e,t)&&v(o,t,e[t]);return o};import{J}from"./Label.be169a38.js";import{I as w}from"./InertiaButton.b06aab18.js";import{J as C}from"./InputError.aee3d62e.js";import{K as I,e as a,o as k,f as B,w as i,x as r,g as l,n as c,C as E,i as f}from"./vendor.bec00c62.js";import{J as M}from"./Input.a6112c10.js";import{J as N,a as S,b as U}from"./JigTab.9d89f277.js";import F from"./AssignPerms.da73814b.js";import{_ as L}from"./plugin-vue_export-helper.5a098b48.js";import"./Checkbox.af44e9b7.js";import"./DisplayMixin.328c366f.js";const P={name:"EditRolesForm",props:{model:Object,permissions:Object},components:{AssignPerms:F,JigTab:N,JigTabLink:S,JigTabs:U,InertiaButton:w,JetLabel:J,JetInputError:C,JetInput:M},data(){return{form:I(h({},this.model),{remember:!1}),activeTab:"basic-info",tabActiveClasses:"bg-primary font-bold text-secondary rounded-t-lg hover:bg-primary-200 hover:text-gray-800"}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.roles.update",this.form.id),{onSuccess:o=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:o=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})},setTab(o){this.activeTab=o}}},O=f("Basic Info "),R=f("Assign Permissions "),z={class:"sm:col-span-4"},D={class:"sm:col-span-4"},G={class:"sm:col-span-4"},K={class:"mt-2 text-right"},q=f("Submit");function H(o,e,t,Q,s,m){const p=a("jig-tab-link"),d=a("jet-label"),u=a("jet-input"),b=a("jet-input-error"),j=a("inertia-button"),_=a("jig-tab"),x=a("assign-perms"),T=a("jig-tabs");return k(),B(T,{class:c("border-none"),"nav-classes":"bg-secondary-300 rounded-t-lg border-b-4 border-primary"},{nav:i(()=>[r(p,{onActivate:m.setTab,"active-classes":s.tabActiveClasses,"tab-controller":s.activeTab,tab:"basic-info"},{default:i(()=>[O]),_:1},8,["onActivate","active-classes","tab-controller"]),r(p,{onActivate:m.setTab,"active-classes":s.tabActiveClasses,"tab-controller":s.activeTab,tab:"assign-permissions"},{default:i(()=>[R]),_:1},8,["onActivate","active-classes","tab-controller"])]),content:i(()=>[r(_,{name:"basic-info","tab-controller":s.activeTab},{default:i(()=>[l("form",{onSubmit:e[3]||(e[3]=E((...n)=>m.updateModel&&m.updateModel(...n),["prevent"]))},[l("div",z,[r(d,{for:"name",value:"Name"}),r(u,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":s.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:s.form.name,"onUpdate:modelValue":e[0]||(e[0]=n=>s.form.name=n)},null,8,["modelValue","class"]),r(b,{message:s.form.errors.name,class:"mt-2"},null,8,["message"])]),l("div",D,[r(d,{for:"title",value:"Title"}),r(u,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":s.form.errors.title}]),type:"text",id:"title",name:"title",modelValue:s.form.title,"onUpdate:modelValue":e[1]||(e[1]=n=>s.form.title=n)},null,8,["modelValue","class"]),r(b,{message:s.form.errors.title,class:"mt-2"},null,8,["message"])]),l("div",G,[r(d,{for:"guard_name",value:"Guard Name"}),r(u,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":s.form.errors.guard_name}]),type:"text",id:"guard_name",name:"guard_name",modelValue:s.form.guard_name,"onUpdate:modelValue":e[2]||(e[2]=n=>s.form.guard_name=n)},null,8,["modelValue","class"]),r(b,{message:s.form.errors.guard_name,class:"mt-2"},null,8,["message"])]),l("div",K,[r(j,{type:"submit",class:"bg-primary font-semibold text-white",disabled:s.form.processing},{default:i(()=>[q]),_:1},8,["disabled"])])],32)]),_:1},8,["tab-controller"]),r(_,{name:"assign-permissions","tab-controller":s.activeTab},{default:i(()=>[r(x,{role:t.model,permissions:t.permissions},null,8,["role","permissions"])]),_:1},8,["tab-controller"])]),_:1})}var ne=L(P,[["render",H]]);export{ne as default};
