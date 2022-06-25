import{J as k}from"./ActionMessage.2c81f133.js";import{J as x}from"./ActionSection.f387ca65.js";import{J as b}from"./Button.b545a8dd.js";import{J as j}from"./DialogModal.a90c0402.js";import{J as B}from"./Input.12512e43.js";import{J as C}from"./InputError.ef575259.js";import{J as S}from"./SecondaryButton.78087a61.js";import{r as i,o as r,c as J,w as e,e as c,F as L,p as M,a as o,t as d,b as s,m as O,l as a,U as V,n as F}from"./main.8d02089a.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";import"./SectionTitle.56265092.js";import"./index.a8a3989e.js";const N={props:["sessions"],components:{JetActionMessage:k,JetActionSection:x,JetButton:b,JetDialogModal:j,JetInput:B,JetInputError:C,JetSecondaryButton:S},data(){return{confirmingLogout:!1,form:this.$inertia.form({password:""})}},methods:{confirmLogout(){this.confirmingLogout=!0,setTimeout(()=>this.$refs.password.focus(),250)},logoutOtherBrowserSessions(){this.form.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.confirmingLogout=!1,this.form.reset()}}},z=s(" Browser Sessions "),D=s(" Manage and log out your active sessions on other browsers and devices. "),E=o("div",{class:"max-w-xl text-sm text-gray-600"}," If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. ",-1),K={key:0,class:"mt-5 space-y-6"},T={key:0,fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-8 h-8 text-gray-500"},A=o("path",{d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,-1),H=[A],P={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"w-8 h-8 text-gray-500"},U=o("path",{d:"M0 0h24v24H0z",stroke:"none"},null,-1),q=o("rect",{x:"7",y:"4",width:"10",height:"16",rx:"1"},null,-1),G=o("path",{d:"M11 5h2M12 17v.01"},null,-1),Q=[U,q,G],R={class:"ml-3"},W={class:"text-sm text-gray-600"},X={class:"text-xs text-gray-500"},Y={key:0,class:"text-green-500 font-semibold"},Z={key:1},$={class:"flex items-center mt-5"},oo=s(" Log Out Other Browser Sessions "),eo=s(" Done. "),so=s(" Log Out Other Browser Sessions "),to=s(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),ro={class:"mt-4"},no=s(" Cancel "),io=s(" Log Out Other Browser Sessions ");function co(ao,_,u,lo,n,l){const m=i("jet-button"),h=i("jet-action-message"),p=i("jet-input"),f=i("jet-input-error"),g=i("jet-secondary-button"),w=i("jet-dialog-modal"),y=i("jet-action-section");return r(),J(y,null,{title:e(()=>[z]),description:e(()=>[D]),content:e(()=>[E,u.sessions.length>0?(r(),c("div",K,[(r(!0),c(L,null,M(u.sessions,(t,v)=>(r(),c("div",{class:"flex items-center",key:v},[o("div",null,[t.agent.is_desktop?(r(),c("svg",T,H)):(r(),c("svg",P,Q))]),o("div",R,[o("div",W,d(t.agent.platform)+" - "+d(t.agent.browser),1),o("div",null,[o("div",X,[s(d(t.ip_address)+", ",1),t.is_current_device?(r(),c("span",Y,"This device")):(r(),c("span",Z,"Last active "+d(t.last_active),1))])])])]))),128))])):O("",!0),o("div",$,[a(m,{onClick:l.confirmLogout},{default:e(()=>[oo]),_:1},8,["onClick"]),a(h,{on:n.form.recentlySuccessful,class:"ml-3"},{default:e(()=>[eo]),_:1},8,["on"])]),a(w,{show:n.confirmingLogout,onClose:l.closeModal},{title:e(()=>[so]),content:e(()=>[to,o("div",ro,[a(p,{type:"password",class:"mt-1 block w-3/4",placeholder:"Password",ref:"password",modelValue:n.form.password,"onUpdate:modelValue":_[0]||(_[0]=t=>n.form.password=t),onKeyup:V(l.logoutOtherBrowserSessions,["enter"])},null,8,["modelValue","onKeyup"]),a(f,{message:n.form.errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[a(g,{onClick:l.closeModal},{default:e(()=>[no]),_:1},8,["onClick"]),a(m,{class:F(["ml-2",{"opacity-25":n.form.processing}]),onClick:l.logoutOtherBrowserSessions,disabled:n.form.processing},{default:e(()=>[io]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show","onClose"])]),_:1})}var xo=I(N,[["render",co]]);export{xo as default};