import{J as V}from"./JigDatepicker.18aebfd1.js";import{J as k}from"./Input.7543e972.js";import{J as S}from"./JigTextarea.3e918141.js";import{J as x}from"./Label.fc1854d2.js";import{I as C}from"./InertiaButton.c6dbc8f4.js";import{J}from"./InputError.da02960c.js";import{z as U,r as d,o as c,e as f,a as t,l as o,n as a,k as _,_ as F,F as j,p as I,t as N,v as g,V as B,w as h,q as v,c as M,m as R,b as w}from"./main.b00fb162.js";import{J as z}from"./SecondaryButton.9138315a.js";import{I as A}from"./InfiniteSelect.b537c6d0.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-flatpickr.min.852deabf.js";import"./index.a8a3989e.js";const E={name:"CreateUsersForm",props:{roles:Array},components:{InertiaButton:C,JetInputError:J,JetLabel:x,JigDatepicker:V,JetInput:k,JigTextarea:S,JetSecondaryButton:z,InfiniteSelect:A},data(){return{form:U({name:null,last_name:null,email:null,phone:null,password:null,password_confirmation:null,profile_photo_path:null,two_factor_secret:null,two_factor_recovery_codes:null,email_verified_at:null,current_team_id:null,photo:null,role:null},{remember:!1}),photoPreview:null}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(this.route("admin.users.store"),{onSuccess:l=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:l=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreview(){const l=this.$refs.photo.files[0];if(!l)return;const s=new FileReader;s.onload=p=>{this.photoPreview=p.target.result},s.readAsDataURL(l)},deletePhoto(){this.$inertia.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{this.photoPreview=null,this.clearPhotoFileInput()}})},clearPhotoFileInput(){var l;(l=this.$refs.photo)!=null&&l.value&&(this.$refs.photo.value=null)}}},L={class:"sm:col-span-4"},T={class:"sm:col-span-4"},q={class:"sm:col-span-4"},G={class:"sm:col-span-4"},H={class:"sm:col-span-4"},K={class:"sm:col-span-4"},O={class:"sm:col-span-4"},Q=["value"],W={class:"sm:col-span-4"},X={class:"mt-2"},Y=["src","alt"],Z={class:"mt-2"},$=w(" Select A New Photo "),ee=w(" Remove Photo "),oe={class:"mt-2 text-right"},se=w("Submit");function re(l,s,p,te,e,m){const n=d("jet-label"),i=d("jet-input"),u=d("jet-input-error"),b=d("jet-secondary-button"),y=d("inertia-button");return c(),f("form",{class:"w-full",onSubmit:s[8]||(s[8]=v((...r)=>m.storeModel&&m.storeModel(...r),["prevent"]))},[t("div",L,[o(n,{for:"name",value:"First Name"}),o(i,{class:a(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.name}]),type:"text",id:"name",name:"name",modelValue:e.form.name,"onUpdate:modelValue":s[0]||(s[0]=r=>e.form.name=r)},null,8,["modelValue","class"]),o(u,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),t("div",T,[o(n,{for:"last_name",value:"Last Name"}),o(i,{class:a(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.last_name}]),type:"text",id:"last_name",name:"last_name",modelValue:e.form.last_name,"onUpdate:modelValue":s[1]||(s[1]=r=>e.form.last_name=r)},null,8,["modelValue","class"]),o(u,{message:e.form.errors.last_name,class:"mt-2"},null,8,["message"])]),t("div",q,[o(n,{for:"email",value:"Email"}),o(i,{class:a(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.email}]),type:"text",id:"email",name:"email",modelValue:e.form.email,"onUpdate:modelValue":s[2]||(s[2]=r=>e.form.email=r)},null,8,["modelValue","class"]),o(u,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])]),t("div",G,[o(n,{for:"phone",value:"Phone"}),o(i,{class:a(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.phone}]),type:"text",id:"phone",name:"phone",modelValue:e.form.phone,"onUpdate:modelValue":s[3]||(s[3]=r=>e.form.phone=r)},null,8,["modelValue","class"]),o(u,{message:e.form.errors.phone,class:"mt-2"},null,8,["message"])]),t("div",H,[o(n,{for:"password",value:"Password"}),o(i,{type:"password",id:"password",name:"password",modelValue:e.form.password,"onUpdate:modelValue":s[4]||(s[4]=r=>e.form.password=r),class:a({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.password})},null,8,["modelValue","class"]),o(u,{message:e.form.errors.password,class:"mt-2"},null,8,["message"])]),t("div",K,[o(n,{for:"password_confirmation",value:"Repeat Password"}),o(i,{type:"password",id:"password_confirmation",name:"password_confirmation",modelValue:e.form.password_confirmation,"onUpdate:modelValue":s[5]||(s[5]=r=>e.form.password_confirmation=r),class:a({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.password_confirmation})},null,8,["modelValue","class"])]),t("div",O,[o(n,{for:"roles",value:"Role"}),_(t("select",{class:a(["w-full cost_select",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.role}]),"onUpdate:modelValue":s[6]||(s[6]=r=>e.form.role=r),id:"type",name:"type"},[(c(!0),f(j,null,I(p.roles,(r,P)=>(c(),f("option",{key:P,value:r.id},N(r.name),9,Q))),128))],2),[[F,e.form.role]])]),t("div",W,[t("input",{type:"file",class:"hidden",ref:"photo",onChange:s[7]||(s[7]=(...r)=>m.updatePhotoPreview&&m.updatePhotoPreview(...r))},null,544),o(n,{for:"photo",value:"Photo"}),_(t("div",X,[t("img",{src:e.form.profile_photo_path,alt:e.form.name,class:"rounded-full h-20 w-20 object-cover"},null,8,Y)],512),[[g,!e.photoPreview]]),_(t("div",Z,[t("span",{class:"block rounded-full w-20 h-20",style:B("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+e.photoPreview+"');")},null,4)],512),[[g,e.photoPreview]]),o(b,{class:"mt-2 mr-2",type:"button",onClick:v(m.selectNewPhoto,["prevent"])},{default:h(()=>[$]),_:1},8,["onClick"]),e.form.profile_photo_path?(c(),M(b,{key:0,type:"button",class:"mt-2",onClick:v(m.deletePhoto,["prevent"])},{default:h(()=>[ee]),_:1},8,["onClick"])):R("",!0),o(u,{message:e.form.errors.photo,class:"mt-2"},null,8,["message"])]),t("div",oe,[o(y,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:h(()=>[se]),_:1},8,["disabled"])])],32)}var ve=D(E,[["render",re],["__scopeId","data-v-165a07e6"]]);export{ve as default};
