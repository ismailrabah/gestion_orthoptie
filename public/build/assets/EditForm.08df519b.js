var N=Object.defineProperty,S=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var j=(t,o,l)=>o in t?N(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,x=(t,o)=>{for(var l in o||(o={}))E.call(o,l)&&j(t,l,o[l]);if(y)for(var l of y(o))D.call(o,l)&&j(t,l,o[l]);return t},P=(t,o)=>S(t,R(o));import{J as L}from"./Label.6a56508f.js";import{I as z}from"./InertiaButton.d4eeaf43.js";import{J as M}from"./InputError.8fba5cb1.js";import{K as V,e as n,o as h,f as J,w as i,x as r,g as a,n as c,u as C,v as T,a6 as O,C as _,z as K,k as U,B as q,F as G,i as f}from"./vendor.0e2d33d8.js";import{a as H,b as Q,J as W}from"./JigTab.7e875f44.js";import{J as X}from"./Checkbox.030d5e9b.js";import{J as Y}from"./JigDatepicker.087ef7ef.js";import{J as Z}from"./Input.268af2b6.js";import{J as $}from"./JigTextarea.c1347337.js";import{J as ee}from"./SecondaryButton.c76024dd.js";import{_ as oe}from"./plugin-vue_export-helper.5a098b48.js";import"./vue-flatpickr.min.3ea540b1.js";import"./main.7cad3b00.js";const se={name:"EditUsersForm",props:{model:Object,roles:Object},components:{InertiaButton:z,JetLabel:L,JetInputError:M,JetInput:Z,JigDatepicker:Y,JetCheckbox:X,JigTextarea:$,JigTabLink:H,JigTabs:Q,JigTab:W,JetSecondaryButton:ee},data(){return{form:V(P(x({},this.model),{assigned_roles:this.roles,password_confirmation:null}),{remember:!1}),activeTab:"basic-info",tabActiveClasses:"bg-primary font-bold text-secondary rounded-t-lg hover:bg-primary-500",photoPreview:null,photo_form:V({photo:null},{remember:!1}),photo:null}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async updateModel(){this.form.put(this.route("admin.users.update",this.form.id),{onSuccess:t=>{this.flash.success?(this.updateUserPhoto(),this.clearPhotoFileInput(),this.$emit("success",this.flash.success)):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:t=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})},async toggleRole(t){const o=this;axios.post(this.route("api.users.assign-role",this.form.id),{role:t}).then(l=>{this.$inertia.reload({preserveState:!0}),this.displayNotification("success",l.data.message)}).catch(l=>{var b,e;this.displayNotification("error",((e=(b=l.response)==null?void 0:b.data)==null?void 0:e.message)||l.message||l),o.form.assigned_roles[t.name].checked=!t.checked})},updateUserPhoto(){if(this.$refs.photo&&this.$refs.photo.files[0]){let t=new FormData;t.append("photo",this.$refs.photo.files[0]),axios.post(route("api.users-photo.update",this.form.id),t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(o){this.clearPhotoFileInput()}).catch(function(){this.clearPhotoFileInput()})}},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreview(){const t=this.$refs.photo.files[0];if(!t)return;const o=new FileReader;o.onload=l=>{this.photoPreview=l.target.result},o.readAsDataURL(t)},deletePhoto(){this.form.profile_photo_path=null,this.form.profile_photo_url=null},clearPhotoFileInput(){var t;((t=this.$refs.photo)==null?void 0:t.value)&&(this.$refs.photo.value=null)}}},re=f("Basic Info "),te=f("Assign Roles "),le={class:"sm:col-span-4"},ae={class:"sm:col-span-4"},ne={class:"sm:col-span-4"},ie={class:"sm:col-span-4"},me={class:"sm:col-span-4"},ce={class:"sm:col-span-4"},de={class:"sm:col-span-4"},ue={class:"mt-2"},pe=["src","alt"],fe={class:"mt-2"},he=f(" Select A New Photo "),be=f(" Remove Photo "),_e={class:"mt-2 text-right"},ge=f("Submit"),ve={class:"my-2 border rounded-md p-3"},we=a("h3",{class:"font-bold py-3 text-lg"},"Assign Roles",-1),ke=a("hr",null,null,-1),ye={class:"p-2 mt-2 border rounded"};function je(t,o,l,b,e,d){const g=n("jig-tab-link"),m=n("jet-label"),u=n("jet-input"),p=n("jet-input-error"),v=n("jet-secondary-button"),F=n("inertia-button"),w=n("jig-tab"),I=n("jet-checkbox"),A=n("jig-tabs");return h(),J(A,{class:c("border-none"),"nav-classes":"bg-secondary-300 rounded-t-lg border-b-4 border-primary"},{nav:i(()=>[r(g,{onActivate:o[0]||(o[0]=s=>e.activeTab=s),"active-classes":e.tabActiveClasses,"tab-controller":e.activeTab,tab:"basic-info"},{default:i(()=>[re]),_:1},8,["active-classes","tab-controller"]),r(g,{onActivate:o[1]||(o[1]=s=>e.activeTab=s),"active-classes":e.tabActiveClasses,"tab-controller":e.activeTab,tab:"assign-roles"},{default:i(()=>[te]),_:1},8,["active-classes","tab-controller"])]),content:i(()=>[r(w,{name:"basic-info","tab-controller":e.activeTab},{default:i(()=>[a("form",{onSubmit:o[9]||(o[9]=_((...s)=>d.updateModel&&d.updateModel(...s),["prevent"]))},[a("div",le,[r(m,{for:"name",value:"First Name"}),r(u,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":o[2]||(o[2]=s=>e.form.name=s)},null,8,["modelValue","class"]),r(p,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),a("div",ae,[r(m,{for:"last_name",value:"Last name"}),r(u,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.last_name}]),type:"text",id:"last_name",name:"last_name",modelValue:e.form.last_name,"onUpdate:modelValue":o[3]||(o[3]=s=>e.form.last_name=s)},null,8,["modelValue","class"]),r(p,{message:e.form.errors.last_name,class:"mt-2"},null,8,["message"])]),a("div",ne,[r(m,{for:"email",value:"Email"}),r(u,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.email}]),type:"text",id:"email",name:"email",modelValue:e.form.email,"onUpdate:modelValue":o[4]||(o[4]=s=>e.form.email=s)},null,8,["modelValue","class"]),r(p,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])]),a("div",ie,[r(m,{for:"phone",value:"Phone"}),r(u,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.phone}]),type:"text",id:"phone",name:"phone",modelValue:e.form.phone,"onUpdate:modelValue":o[5]||(o[5]=s=>e.form.phone=s)},null,8,["modelValue","class"]),r(p,{message:e.form.errors.phone,class:"mt-2"},null,8,["message"])]),a("div",me,[r(m,{for:"password",value:"Password"}),r(u,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.password}]),type:"password",id:"password",name:"password",modelValue:e.form.password,"onUpdate:modelValue":o[6]||(o[6]=s=>e.form.password=s)},null,8,["modelValue","class"]),r(p,{message:e.form.errors.password,class:"mt-2"},null,8,["message"])]),a("div",ce,[r(m,{for:"password_confirmation",value:"Repeat Password"}),r(u,{class:c(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.password_confirmation}]),type:"password",id:"password_confirmation",name:"password_confirmation",modelValue:e.form.password_confirmation,"onUpdate:modelValue":o[7]||(o[7]=s=>e.form.password_confirmation=s)},null,8,["modelValue","class"])]),a("div",de,[a("input",{type:"file",class:"hidden",ref:"photo",onChange:o[8]||(o[8]=(...s)=>d.updatePhotoPreview&&d.updatePhotoPreview(...s))},null,544),r(m,{for:"photo",value:"Photo"}),C(a("div",ue,[a("img",{src:e.form.profile_photo_url,alt:e.form.first_name,class:"rounded-full h-20 w-20 object-cover"},null,8,pe)],512),[[T,!e.photoPreview]]),C(a("div",fe,[a("span",{class:"block rounded-full w-20 h-20",style:O("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+e.photoPreview+"');")},null,4)],512),[[T,e.photoPreview]]),r(v,{class:"mt-2 mr-2",type:"button",onClick:_(d.selectNewPhoto,["prevent"])},{default:i(()=>[he]),_:1},8,["onClick"]),e.form.profile_photo_path?(h(),J(v,{key:0,type:"button",class:"mt-2",onClick:_(d.deletePhoto,["prevent"])},{default:i(()=>[be]),_:1},8,["onClick"])):K("",!0),r(p,{message:e.photo_form.errors.photo,class:"mt-2"},null,8,["message"])]),a("div",_e,[r(F,{type:"submit",class:"bg-primary font-semibold text-white",disabled:e.form.processing},{default:i(()=>[ge]),_:1},8,["disabled"])])],32)]),_:1},8,["tab-controller"]),r(w,{name:"assign-roles","tab-controller":e.activeTab},{default:i(()=>[a("div",ve,[we,ke,a("div",ye,[(h(!0),U(G,null,q(e.form.assigned_roles,(s,B)=>(h(),U("div",{style:{cursor:"pointer"},key:B,class:"sm:col-span-4 px-10 flex border-b border-gray-100 justify-between py-3 items-center my-2"},[r(m,{for:s.name,class:"inline-block font-black text-xl",value:s.title},null,8,["for","value"]),r(I,{onChange:k=>d.toggleRole(s),class:c(["p-2 inline-block",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.assigned_roles}]),type:"checkbox",id:s.name,name:s.name,checked:s.checked,modelValue:s.checked,"onUpdate:modelValue":k=>s.checked=k},null,8,["onChange","id","name","checked","modelValue","onUpdate:modelValue","class"])]))),128))])])]),_:1},8,["tab-controller"])]),_:1})}var Ee=oe(se,[["render",je]]);export{Ee as default};
