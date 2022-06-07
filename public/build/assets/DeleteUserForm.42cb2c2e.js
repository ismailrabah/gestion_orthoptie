import{J as f}from"./ActionSection.6538fb82.js";import{J as h}from"./DialogModal.02c2b71d.js";import{J as y}from"./DangerButton.2b239d9e.js";import{J as w}from"./Input.a9a68364.js";import{J as j}from"./InputError.c3276db9.js";import{J as g}from"./SecondaryButton.9629e4d3.js";import{e as s,o as b,f as D,w as e,g as c,x as n,Y as C,n as J,i as o}from"./vendor.f60cbd33.js";import{_ as x}from"./plugin-vue_export-helper.5a098b48.js";import"./SectionTitle.ca4743a3.js";const U={components:{JetActionSection:f,JetDangerButton:y,JetDialogModal:h,JetInput:w,JetInputError:j,JetSecondaryButton:g},data(){return{confirmingUserDeletion:!1,form:this.$inertia.form({password:""})}},methods:{confirmUserDeletion(){this.confirmingUserDeletion=!0,setTimeout(()=>this.$refs.password.focus(),250)},deleteUser(){this.form.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.confirmingUserDeletion=!1,this.form.reset()}}},k=o(" Delete Account "),v=o(" Permanently delete your account. "),B=c("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),A={class:"mt-5"},S=o(" Delete Account "),M=o(" Delete Account "),V=o(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),I={class:"mt-4"},E=o(" Cancel "),K=o(" Delete Account ");function N(P,a,T,F,t,r){const l=s("jet-danger-button"),i=s("jet-input"),d=s("jet-input-error"),u=s("jet-secondary-button"),m=s("jet-dialog-modal"),_=s("jet-action-section");return b(),D(_,null,{title:e(()=>[k]),description:e(()=>[v]),content:e(()=>[B,c("div",A,[n(l,{onClick:r.confirmUserDeletion},{default:e(()=>[S]),_:1},8,["onClick"])]),n(m,{show:t.confirmingUserDeletion,onClose:r.closeModal},{title:e(()=>[M]),content:e(()=>[V,c("div",I,[n(i,{type:"password",class:"mt-1 block w-3/4",placeholder:"Password",ref:"password",modelValue:t.form.password,"onUpdate:modelValue":a[0]||(a[0]=p=>t.form.password=p),onKeyup:C(r.deleteUser,["enter"])},null,8,["modelValue","onKeyup"]),n(d,{message:t.form.errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[n(u,{onClick:r.closeModal},{default:e(()=>[E]),_:1},8,["onClick"]),n(l,{class:J(["ml-2",{"opacity-25":t.form.processing}]),onClick:r.deleteUser,disabled:t.form.processing},{default:e(()=>[K]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show","onClose"])]),_:1})}var W=x(U,[["render",N]]);export{W as default};
