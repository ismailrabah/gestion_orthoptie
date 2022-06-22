import{J as y}from"./Button.3fc86b53.js";import{J}from"./FormSection.db302f31.js";import{J as S}from"./Input.7543e972.js";import{J as V}from"./InputError.da02960c.js";import{J as I}from"./Label.fc1854d2.js";import{J as C}from"./ActionMessage.7efccc4f.js";import{J as N}from"./SecondaryButton.9138315a.js";import{r as n,o as f,c as _,w as s,e as B,a as l,l as o,k as v,v as P,V as F,q as b,m as g,n as U,b as a}from"./main.b00fb162.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./SectionTitle.39f90e44.js";import"./index.a8a3989e.js";const z={components:{JetActionMessage:C,JetButton:y,JetFormSection:J,JetInput:S,JetInputError:V,JetLabel:I,JetSecondaryButton:N},props:["user"],data(){return{form:this.$inertia.form({_method:"PUT",name:this.user.name,email:this.user.email,photo:null}),photoPreview:null}},methods:{updateProfileInformation(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>this.clearPhotoFileInput()})},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreview(){const r=this.$refs.photo.files[0];if(!r)return;const t=new FileReader;t.onload=i=>{this.photoPreview=i.target.result},t.readAsDataURL(r)},deletePhoto(){this.$inertia.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{this.photoPreview=null,this.clearPhotoFileInput()}})},clearPhotoFileInput(){var r;(r=this.$refs.photo)!=null&&r.value&&(this.$refs.photo.value=null)}}},A=a(" Profile Information "),E=a(" Update your account's profile information and email address. "),R={key:0,class:"col-span-6 sm:col-span-4"},D={class:"mt-2"},L=["src","alt"],M={class:"mt-2"},T=a(" Select A New Photo "),q=a(" Remove Photo "),G={class:"col-span-6 sm:col-span-4"},H={class:"col-span-6 sm:col-span-4"},K=a(" Saved. "),O=a(" Save ");function Q(r,t,i,W,e,m){const u=n("jet-label"),d=n("jet-secondary-button"),p=n("jet-input-error"),h=n("jet-input"),w=n("jet-action-message"),k=n("jet-button"),j=n("jet-form-section");return f(),_(j,{onSubmitted:m.updateProfileInformation},{title:s(()=>[A]),description:s(()=>[E]),form:s(()=>[r.$page.props.jetstream.managesProfilePhotos?(f(),B("div",R,[l("input",{type:"file",class:"hidden",ref:"photo",onChange:t[0]||(t[0]=(...c)=>m.updatePhotoPreview&&m.updatePhotoPreview(...c))},null,544),o(u,{for:"photo",value:"Photo"}),v(l("div",D,[l("img",{src:i.user.profile_photo_url,alt:i.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,L)],512),[[P,!e.photoPreview]]),v(l("div",M,[l("span",{class:"block rounded-full w-20 h-20",style:F("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+e.photoPreview+"');")},null,4)],512),[[P,e.photoPreview]]),o(d,{class:"mt-2 mr-2",type:"button",onClick:b(m.selectNewPhoto,["prevent"])},{default:s(()=>[T]),_:1},8,["onClick"]),i.user.profile_photo_path?(f(),_(d,{key:0,type:"button",class:"mt-2",onClick:b(m.deletePhoto,["prevent"])},{default:s(()=>[q]),_:1},8,["onClick"])):g("",!0),o(p,{message:e.form.errors.photo,class:"mt-2"},null,8,["message"])])):g("",!0),l("div",G,[o(u,{for:"name",value:"Name"}),o(h,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.form.name,"onUpdate:modelValue":t[1]||(t[1]=c=>e.form.name=c),autocomplete:"name"},null,8,["modelValue"]),o(p,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),l("div",H,[o(u,{for:"email",value:"Email"}),o(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":t[2]||(t[2]=c=>e.form.email=c)},null,8,["modelValue"]),o(p,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])])]),actions:s(()=>[o(w,{on:e.form.recentlySuccessful,class:"mr-3"},{default:s(()=>[K]),_:1},8,["on"]),o(k,{class:U({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:s(()=>[O]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"])}var ae=x(z,[["render",Q]]);export{ae as default};
