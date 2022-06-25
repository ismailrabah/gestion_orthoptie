import{J as y}from"./AuthenticationCard.1ccc23ae.js";import{A as k}from"./ApplicationLogo.6617a0db.js";import{J as V}from"./AuthenticationCardLogo.e257da88.js";import{J as x}from"./Button.21571cb9.js";import{J as j}from"./Input.6a7016f4.js";import{J}from"./Checkbox.4dcf8749.js";import{J as C}from"./Label.6bff53fc.js";import{J as L}from"./ValidationErrors.4cdde9ff.js";import{H as A,L as P,r as a,o as p,e as u,l as e,w as i,a as r,m as q,n as N,q as U,F as B,b as d}from"./main.227f4171.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.a8a3989e.js";const H={components:{Head:A,JetAuthenticationCard:y,JetAuthenticationCardLogo:V,JetButton:x,JetInput:j,JetCheckbox:J,JetLabel:C,JetValidationErrors:L,Link:P,ApplicationLogo:k},data(){return{form:this.$inertia.form({name:"",email:"",password:"",password_confirmation:"",terms:!1})}},methods:{submit(){this.form.post(this.route("register"),{onFinish:()=>this.form.reset("password","password_confirmation")})}}},E={class:"mt-4"},R={class:"mt-4"},T={class:"mt-4"},I={key:0,class:"mt-4"},S={class:"flex items-center"},z={class:"ml-2"},M=d(" I agree to the "),D=["href"],G=d(" and "),K=["href"],O={class:"flex items-center justify-end mt-4"},Q=d(" Already registered? "),W=d(" Register ");function X(l,o,Y,Z,t,c){const f=a("Head"),_=a("application-logo"),h=a("jet-validation-errors"),n=a("jet-label"),m=a("jet-input"),w=a("jet-checkbox"),g=a("Link"),v=a("jet-button"),b=a("jet-authentication-card");return p(),u(B,null,[e(f,{title:"Register"}),e(b,null,{logo:i(()=>[e(_)]),default:i(()=>[e(h,{class:"mb-4"}),r("form",{onSubmit:o[5]||(o[5]=U((...s)=>c.submit&&c.submit(...s),["prevent"]))},[r("div",null,[e(n,{for:"name",value:"Name"}),e(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t.form.name,"onUpdate:modelValue":o[0]||(o[0]=s=>t.form.name=s),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),r("div",E,[e(n,{for:"email",value:"Email"}),e(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t.form.email,"onUpdate:modelValue":o[1]||(o[1]=s=>t.form.email=s),required:""},null,8,["modelValue"])]),r("div",R,[e(n,{for:"password",value:"Password"}),e(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t.form.password,"onUpdate:modelValue":o[2]||(o[2]=s=>t.form.password=s),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),r("div",T,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:t.form.password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=s=>t.form.password_confirmation=s),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),l.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(p(),u("div",I,[e(n,{for:"terms"},{default:i(()=>[r("div",S,[e(w,{name:"terms",id:"terms",checked:t.form.terms,"onUpdate:checked":o[4]||(o[4]=s=>t.form.terms=s)},null,8,["checked"]),r("div",z,[M,r("a",{target:"_blank",href:l.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,D),G,r("a",{target:"_blank",href:l.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,K)])])]),_:1})])):q("",!0),r("div",O,[e(g,{href:l.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:i(()=>[Q]),_:1},8,["href"]),e(v,{class:N(["ml-4",{"opacity-25":t.form.processing}]),disabled:t.form.processing},{default:i(()=>[W]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}var de=F(H,[["render",X]]);export{de as default};
