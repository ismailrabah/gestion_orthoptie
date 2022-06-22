var _=Object.defineProperty;var f=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(e,s,t)=>s in e?_(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,c=(e,s)=>{for(var t in s||(s={}))h.call(s,t)&&p(e,t,s[t]);if(f)for(var t of f(s))v.call(s,t)&&p(e,t,s[t]);return e};import{J as V}from"./Label.be169a38.js";import{I as j}from"./InertiaButton.b06aab18.js";import{J as w}from"./InputError.aee3d62e.js";import{j as I,K as S,e as n,o as k,k as J,g as o,x as r,n as i,w as $,C as y,i as E}from"./vendor.bec00c62.js";import{J as U}from"./JigDatepicker.db423e32.js";import{J as B}from"./Input.a6112c10.js";import{I as C}from"./InfiniteSelect.744baeaa.js";import{_ as M}from"./plugin-vue_export-helper.5a098b48.js";import"./vue-flatpickr.min.9065625b.js";import"./main.e85b79d9.js";const N=I({name:"EditSalleDAttenteForm",props:{model:Object},components:{InertiaButton:j,JetLabel:V,JetInputError:w,JetInput:B,JigDatepicker:U,InfiniteSelect:C},data(){return{form:S(c({},this.model),{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.salle-d-attentes.update",this.form.id),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),A={class:"sm:col-span-4"},D={class:"sm:col-span-4"},F={class:"sm:col-span-4"},K={class:"sm:col-span-4"},T={class:"sm:col-span-4"},H={class:"sm:col-span-4"},L={class:"mt-2 text-right"},q=E("Submit");function z(e,s,t,O,P,G){const m=n("jet-label"),d=n("jet-input"),l=n("jet-input-error"),u=n("jig-datepicker"),b=n("infinite-select"),g=n("inertia-button");return k(),J("form",{onSubmit:s[6]||(s[6]=y((...a)=>e.updateModel&&e.updateModel(...a),["prevent"]))},[o("div",A,[r(m,{for:"name",value:"Name"}),r(d,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":s[0]||(s[0]=a=>e.form.name=a)},null,8,["modelValue","class"]),r(l,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),o("div",D,[r(m,{for:"status",value:"Status"}),r(d,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.status}]),type:"text",id:"status",name:"status",modelValue:e.form.status,"onUpdate:modelValue":s[1]||(s[1]=a=>e.form.status=a)},null,8,["modelValue","class"]),r(l,{message:e.form.errors.status,class:"mt-2"},null,8,["message"])]),o("div",F,[r(m,{for:"start_time",value:"Start Time"}),r(u,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.start_time}]),"data-date-format":"H:i","data-alt-input":!0,"data-alt-format":"h:i K","data-default-hour":"9","data-enable-time":!0,"data-no-calendar":!0,name:"start_time",modelValue:e.form.start_time,"onUpdate:modelValue":s[2]||(s[2]=a=>e.form.start_time=a),id:"start_time"},null,8,["modelValue","class"]),r(l,{message:e.form.errors.start_time,class:"mt-2"},null,8,["message"])]),o("div",K,[r(m,{for:"end_time",value:"End Time"}),r(u,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.end_time}]),"data-date-format":"H:i","data-alt-input":!0,"data-alt-format":"h:i K","data-default-hour":"9","data-enable-time":!0,"data-no-calendar":!0,name:"end_time",modelValue:e.form.end_time,"onUpdate:modelValue":s[3]||(s[3]=a=>e.form.end_time=a),id:"end_time"},null,8,["modelValue","class"]),r(l,{message:e.form.errors.end_time,class:"mt-2"},null,8,["message"])]),o("div",T,[r(m,{for:"max_numbers",value:"Max Numbers"}),r(d,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.max_numbers}]),type:"number",id:"max_numbers",name:"max_numbers",modelValue:e.form.max_numbers,"onUpdate:modelValue":s[4]||(s[4]=a=>e.form.max_numbers=a)},null,8,["modelValue","class"]),r(l,{message:e.form.errors.max_numbers,class:"mt-2"},null,8,["message"])]),o("div",H,[r(m,{for:"assaistante",value:"Assaistante"}),r(b,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.assaistante}]),"per-page":15,"api-url":e.route("api.users.index"),queryParams:{role:"assistante"},id:"assaistante",name:"assaistante",modelValue:e.form.assaistante,"onUpdate:modelValue":s[5]||(s[5]=a=>e.form.assaistante=a),label:"name"},null,8,["api-url","modelValue","class"]),r(l,{message:e.form.errors.assaistante,class:"mt-2"},null,8,["message"])]),o("div",L,[r(g,{type:"submit",class:"font-semibold text-white bg-primary",disabled:e.form.processing},{default:$(()=>[q]),_:1},8,["disabled"])])],32)}var te=M(N,[["render",z]]);export{te as default};
