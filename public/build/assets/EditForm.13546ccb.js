var S=Object.defineProperty,R=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var P=(t,o,l)=>o in t?S(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,V=(t,o)=>{for(var l in o||(o={}))E.call(o,l)&&P(t,l,o[l]);if(k)for(var l of k(o))D.call(o,l)&&P(t,l,o[l]);return t},x=(t,o)=>R(t,B(o));import{J as L}from"./Label.6bff53fc.js";import{I as z}from"./InertiaButton.9718c36b.js";import{J as M}from"./InputError.96d9f536.js";import{z as j,r as n,o as h,c as J,w as i,l as r,a,n as c,k as C,v as U,V as O,q as _,m as q,e as T,p as G,F as H,b as f}from"./main.227f4171.js";import{a as K,b as Q,J as W}from"./JigTab.db262883.js";import{J as X}from"./Checkbox.4dcf8749.js";import{J as Y}from"./JigDatepicker.59b5f0dc.js";import{J as Z}from"./Input.6a7016f4.js";import{J as $}from"./JigTextarea.5922ebb2.js";import{J as ee}from"./SecondaryButton.4d4952ef.js";import{_ as oe}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.a8a3989e.js";import"./vue-flatpickr.min.b9eb288e.js";const se={name:"EditUsersForm",props:{model:Object,roles:Object},components:{InertiaButton:z,JetLabel:L,JetInputError:M,JetInput:Z,JigDatepicker:Y,JetCheckbox:X,JigTextarea:$,JigTabLink:K,JigTabs:Q,JigTab:W,JetSecondaryButton:ee},data(){return{form:j(x(V({},this.model),{assigned_roles:this.roles,password:null,password_confirmation:null}),{remember:!1}),activeTab:"basic-info",tabActiveClasses:"bg-primary font-bold text-secondary rounded-t-lg hover:bg-primary-500",photoPreview:null,photo_form:j({photo:null},{remember:!1}),photo:null}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.users.update",this.form.id),{onSuccess:t=>{this.flash.success?(this.updateUserPhoto(),this.clearPhotoFileInput(),this.$emit("success",this.flash.success)):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:t=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})},async toggleRole(t){const o=this;axios.post(this.route("api.users.assign-role",this.form.id),{role:t}).then(l=>{this.$inertia.reload({preserveState:!0}),this.displayNotification("success",l.data.message)}).catch(l=>{var b,e;this.displayNotification("error",((e=(b=l.response)==null?void 0:b.data)==null?void 0:e.message)||l.message||l),o.form.assigned_roles[t.name].checked=!t.checked})},updateUserPhoto(){if(this.$refs.photo&&this.$refs.photo.files[0]){let t=new FormData;t.append("photo",this.$refs.photo.files[0]),axios.post(route("api.users-photo.update",this.form.id),t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(o){this.clearPhotoFileInput()}).catch(function(){this.clearPhotoFileInput()})}},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreview(){const t=this.$refs.photo.files[0];if(!t)return;const o=new FileReader;o.onload=l=>{this.photoPreview=l.target.result},o.readAsDataURL(t)},deletePhoto(){this.form.profile_photo_path=null,this.form.profile_photo_url=null},clearPhotoFileInput(){var t;(t=this.$refs.photo)!=null&&t.value&&(this.$refs.photo.value=null)}}},re=f("Basic Info "),te=f("Assign Roles "),le={class:"sm:col-span-4"},ae={class:"sm:col-span-4"},ne={class:"sm:col-span-4"},ie={class:"sm:col-span-4"},me={class:"sm:col-span-4"},ce={class:"sm:col-span-4"},de={class:"sm:col-span-4"},pe={class:"mt-2"},ue=["src","alt"],fe={class:"mt-2"},he=f(" Select A New Photo "),be=f(" Remove Photo "),_e={class:"mt-2 text-right"},ge=f("Submit"),ve={class:"my-2 border rounded-md p-3"},we=a("h3",{class:"font-bold py-3 text-lg"},"Assign Roles",-1),ye=a("hr",null,null,-1),ke={class:"p-2 mt-2 border rounded"};function Pe(t,o,l,b,e,d){const g=n("jig-tab-link"),m=n("jet-label"),p=n("jet-input"),u=n("jet-input-error"),v=n("jet-secondary-button"),F=n("inertia-button"),w=n("jig-tab"),A=n("jet-checkbox"),N=n("jig-tabs");return h(),J(N,{class:c("border-none"),"nav-classes":"bg-secondary-300 rounded-t-lg border-b-4 border-primary"},{nav:i(()=>[r(g,{onActivate:o[0]||(o[0]=s=>e.activeTab=s),"active-classes":e.tabActiveClasses,"tab-controller":e.activeTab,tab:"basic-info"},{default:i(()=>[re]),_:1},8,["active-classes","tab-controller"]),r(g,{onActivate:o[1]||(o[1]=s=>e.activeTab=s),"active-classes":e.tabActiveClasses,"tab-controller":e.activeTab,tab:"assign-roles"},{default:i(()=>[te]),_:1},8,["active-classes","tab-controller"])]),content:i(()=>[r(w,{name:"basic-info","tab-controller":e.activeTab},{default:i(()=>[a("form",{onSubmit:o[9]||(o[9]=_((...s)=>d.updateModel&&d.updateModel(...s),["prevent"]))},[a("div",le,[r(m,{for:"name",value:"First Name"}),r(p,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":o[2]||(o[2]=s=>e.form.name=s)},null,8,["modelValue","class"]),r(u,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),a("div",ae,[r(m,{for:"last_name",value:"Last name"}),r(p,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.last_name}]),type:"text",id:"last_name",name:"last_name",modelValue:e.form.last_name,"onUpdate:modelValue":o[3]||(o[3]=s=>e.form.last_name=s)},null,8,["modelValue","class"]),r(u,{message:e.form.errors.last_name,class:"mt-2"},null,8,["message"])]),a("div",ne,[r(m,{for:"email",value:"Email"}),r(p,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.email}]),type:"text",id:"email",name:"email",modelValue:e.form.email,"onUpdate:modelValue":o[4]||(o[4]=s=>e.form.email=s)},null,8,["modelValue","class"]),r(u,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])]),a("div",ie,[r(m,{for:"phone",value:"Phone"}),r(p,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.phone}]),type:"text",id:"phone",name:"phone",modelValue:e.form.phone,"onUpdate:modelValue":o[5]||(o[5]=s=>e.form.phone=s)},null,8,["modelValue","class"]),r(u,{message:e.form.errors.phone,class:"mt-2"},null,8,["message"])]),a("div",me,[r(m,{for:"password",value:"Password"}),r(p,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.password}]),type:"password",id:"password",name:"password",modelValue:e.form.password,"onUpdate:modelValue":o[6]||(o[6]=s=>e.form.password=s)},null,8,["modelValue","class"]),r(u,{message:e.form.errors.password,class:"mt-2"},null,8,["message"])]),a("div",ce,[r(m,{for:"password_confirmation",value:"Repeat Password"}),r(p,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.password_confirmation}]),type:"password",id:"password_confirmation",name:"password_confirmation",modelValue:e.form.password_confirmation,"onUpdate:modelValue":o[7]||(o[7]=s=>e.form.password_confirmation=s)},null,8,["modelValue","class"])]),a("div",de,[a("input",{type:"file",class:"hidden",ref:"photo",onChange:o[8]||(o[8]=(...s)=>d.updatePhotoPreview&&d.updatePhotoPreview(...s))},null,544),r(m,{for:"photo",value:"Photo"}),C(a("div",pe,[a("img",{src:e.form.profile_photo_url,alt:e.form.first_name,class:"rounded-full h-20 w-20 object-cover"},null,8,ue)],512),[[U,!e.photoPreview]]),C(a("div",fe,[a("span",{class:"block rounded-full w-20 h-20",style:O("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+e.photoPreview+"');")},null,4)],512),[[U,e.photoPreview]]),r(v,{class:"mt-2 mr-2",type:"button",onClick:_(d.selectNewPhoto,["prevent"])},{default:i(()=>[he]),_:1},8,["onClick"]),e.form.profile_photo_path?(h(),J(v,{key:0,type:"button",class:"mt-2",onClick:_(d.deletePhoto,["prevent"])},{default:i(()=>[be]),_:1},8,["onClick"])):q("",!0),r(u,{message:e.photo_form.errors.photo,class:"mt-2"},null,8,["message"])]),a("div",_e,[r(F,{type:"submit",class:"bg-primary font-semibold text-white",disabled:e.form.processing},{default:i(()=>[ge]),_:1},8,["disabled"])])],32)]),_:1},8,["tab-controller"]),r(w,{name:"assign-roles","tab-controller":e.activeTab},{default:i(()=>[a("div",ve,[we,ye,a("div",ke,[(h(!0),T(H,null,G(e.form.assigned_roles,(s,I)=>(h(),T("div",{style:{cursor:"pointer"},key:I,class:"sm:col-span-4 px-10 flex border-b border-gray-100 justify-between py-3 items-center my-2"},[r(m,{for:s.name,class:"inline-block font-black text-xl",value:s.title},null,8,["for","value"]),r(A,{onChange:y=>d.toggleRole(s),class:c(["p-2 inline-block",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.assigned_roles}]),type:"checkbox",id:s.name,name:s.name,checked:s.checked,modelValue:s.checked,"onUpdate:modelValue":y=>s.checked=y},null,8,["onChange","id","name","checked","modelValue","onUpdate:modelValue","class"])]))),128))])])]),_:1},8,["tab-controller"])]),_:1})}var Ee=oe(se,[["render",Pe]]);export{Ee as default};
