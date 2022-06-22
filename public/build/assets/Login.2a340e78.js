var V=Object.defineProperty,C=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))B.call(e,o)&&f(t,o,e[o]);if(p)for(var o of p(e))E.call(e,o)&&f(t,o,e[o]);return t},b=(t,e)=>C(t,A(e));import{J as F}from"./AuthenticationCard.a11c5980.js";import{J as H}from"./AuthenticationCardLogo.7d030135.js";import{J as N}from"./Button.10f174e4.js";import{J as q}from"./Input.a6112c10.js";import{J as P}from"./Checkbox.af44e9b7.js";import{J as R}from"./Label.be169a38.js";import{J as S}from"./ValidationErrors.e276959d.js";import{H as U,L as z,e as r,o as l,k as h,x as s,w as m,y as I,z as g,g as i,f as D,n as M,C as T,F as G,i as j}from"./vendor.bec00c62.js";import{A as K}from"./ApplicationLogo.0294935d.js";import{_ as O}from"./plugin-vue_export-helper.5a098b48.js";const Q={components:{Head:U,JetAuthenticationCard:F,JetAuthenticationCardLogo:H,JetButton:N,JetInput:q,JetCheckbox:P,JetLabel:R,JetValidationErrors:S,ApplicationLogo:K,Link:z},props:{canResetPassword:Boolean,status:String},data(){return{form:this.$inertia.form({email:"",password:"",remember:!1})}},methods:{submit(){this.form.transform(t=>b(_({},t),{remember:this.form.remember?"on":""})).post(this.route("login"),{onFinish:()=>this.form.reset("password")})}}},W={key:0,class:"mb-4 font-medium text-sm text-green-600"},X={class:"mt-4"},Y={class:"block mt-4"},Z={class:"flex items-center"},$=i("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),ee={class:"flex items-center justify-end mt-4"},oe=j(" Forgot your password? "),te=j(" Log in ");function se(t,e,o,re,a,c){const k=r("Head"),x=r("application-logo"),w=r("jet-validation-errors"),d=r("jet-label"),u=r("jet-input"),v=r("jet-checkbox"),J=r("Link"),L=r("jet-button"),y=r("jet-authentication-card");return l(),h(G,null,[s(k,{title:"Log in"}),s(y,null,{logo:m(()=>[s(x)]),default:m(()=>[s(w,{class:"mb-4"}),o.status?(l(),h("div",W,I(o.status),1)):g("",!0),i("form",{onSubmit:e[3]||(e[3]=T((...n)=>c.submit&&c.submit(...n),["prevent"]))},[i("div",null,[s(d,{for:"email",value:"Email"}),s(u,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a.form.email,"onUpdate:modelValue":e[0]||(e[0]=n=>a.form.email=n),required:"",autofocus:""},null,8,["modelValue"])]),i("div",X,[s(d,{for:"password",value:"Password"}),s(u,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a.form.password,"onUpdate:modelValue":e[1]||(e[1]=n=>a.form.password=n),required:"",autocomplete:"current-password"},null,8,["modelValue"])]),i("div",Y,[i("label",Z,[s(v,{name:"remember",checked:a.form.remember,"onUpdate:checked":e[2]||(e[2]=n=>a.form.remember=n)},null,8,["checked"]),$])]),i("div",ee,[o.canResetPassword?(l(),D(J,{key:0,href:t.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[oe]),_:1},8,["href"])):g("",!0),s(L,{class:M(["ml-4",{"opacity-25":a.form.processing}]),disabled:a.form.processing},{default:m(()=>[te]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}var be=O(Q,[["render",se]]);export{be as default};
