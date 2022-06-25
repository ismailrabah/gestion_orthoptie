import{H as h,r as t,o as m,e as c,l as o,w as n,t as g,m as j,a,n as J,q as v,F as x,b as y}from"./main.227f4171.js";import{J as V}from"./AuthenticationCard.1ccc23ae.js";import{J as k}from"./AuthenticationCardLogo.e257da88.js";import{J as C}from"./Button.21571cb9.js";import{J as F}from"./Input.6a7016f4.js";import{J as N}from"./Label.6bff53fc.js";import{J as B}from"./ValidationErrors.4cdde9ff.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.a8a3989e.js";const H={components:{Head:h,JetAuthenticationCard:V,JetAuthenticationCardLogo:k,JetButton:C,JetInput:F,JetLabel:N,JetValidationErrors:B},props:{status:String},data(){return{form:this.$inertia.form({email:""})}},methods:{submit(){this.form.post(this.route("password.email"))}}},L=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),P={key:0,class:"mb-4 font-medium text-sm text-green-600"},S={class:"flex items-center justify-end mt-4"},q=y(" Email Password Reset Link ");function A(z,e,i,D,s,l){const d=t("Head"),u=t("jet-authentication-card-logo"),_=t("jet-validation-errors"),p=t("jet-label"),f=t("jet-input"),b=t("jet-button"),w=t("jet-authentication-card");return m(),c(x,null,[o(d,{title:"Forgot Password"}),o(w,null,{logo:n(()=>[o(u)]),default:n(()=>[L,i.status?(m(),c("div",P,g(i.status),1)):j("",!0),o(_,{class:"mb-4"}),a("form",{onSubmit:e[1]||(e[1]=v((...r)=>l.submit&&l.submit(...r),["prevent"]))},[a("div",null,[o(p,{for:"email",value:"Email"}),o(f,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s.form.email,"onUpdate:modelValue":e[0]||(e[0]=r=>s.form.email=r),required:"",autofocus:""},null,8,["modelValue"])]),a("div",S,[o(b,{class:J({"opacity-25":s.form.processing}),disabled:s.form.processing},{default:n(()=>[q]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}var W=E(H,[["render",A]]);export{W as default};
