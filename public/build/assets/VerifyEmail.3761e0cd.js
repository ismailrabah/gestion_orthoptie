import{J as g}from"./AuthenticationCard.b140b3a4.js";import{J as b}from"./AuthenticationCardLogo.c0eed129.js";import{J as v}from"./Button.1a1e2a1d.js";import{H as y,L as k,e as t,o as r,k as c,x as e,w as o,z as x,g as i,n as j,C,F as L,i as d}from"./vendor.0e2d33d8.js";import{_ as w}from"./plugin-vue_export-helper.5a098b48.js";const V={components:{Head:y,JetAuthenticationCard:g,JetAuthenticationCardLogo:b,JetButton:v,Link:k},props:{status:String},data(){return{form:this.$inertia.form()}},methods:{submit(){this.form.post(this.route("verification.send"))}},computed:{verificationLinkSent(){return this.status==="verification-link-sent"}}},B=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),J={key:0,class:"mb-4 font-medium text-sm text-green-600"},A={class:"mt-4 flex items-center justify-between"},E=d(" Resend Verification Email "),H=d("Log Out");function N(m,s,S,z,a,n){const u=t("Head"),l=t("jet-authentication-card-logo"),f=t("jet-button"),_=t("Link"),h=t("jet-authentication-card");return r(),c(L,null,[e(u,{title:"Email Verification"}),e(h,null,{logo:o(()=>[e(l)]),default:o(()=>[B,n.verificationLinkSent?(r(),c("div",J," A new verification link has been sent to the email address you provided during registration. ")):x("",!0),i("form",{onSubmit:s[0]||(s[0]=C((...p)=>n.submit&&n.submit(...p),["prevent"]))},[i("div",A,[e(f,{class:j({"opacity-25":a.form.processing}),disabled:a.form.processing},{default:o(()=>[E]),_:1},8,["class","disabled"]),e(_,{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:o(()=>[H]),_:1},8,["href"])])],32)]),_:1})],64)}var R=w(V,[["render",N]]);export{R as default};