import{A as j}from"./AppLayout.90f4235a.js";import g from"./DeleteUserForm.7ee938c7.js";import{J as h}from"./SectionBorder.fd970663.js";import w from"./LogoutOtherBrowserSessionsForm.bf5f76a9.js";import b from"./TwoFactorAuthenticationForm.aeda3234.js";import F from"./UpdatePasswordForm.b1e3923f.js";import y from"./UpdateProfileInformationForm.b83c1d1c.js";import{_ as B}from"./plugin-vue_export-helper.5a098b48.js";import{e as t,o as s,f as x,w as m,g as i,k as a,x as o,z as n,F as A}from"./vendor.f8a6287f.js";import"./JigLayout.bb7b7d09.js";import"./InertiaButton.8127fa1b.js";import"./DialogModal.15a46057.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.99a0e64a.js";import"./ActionSection.faf1055f.js";import"./SectionTitle.ffe20ae7.js";import"./DangerButton.9936f4f1.js";import"./Input.3ded2763.js";import"./InputError.5454eee4.js";import"./SecondaryButton.d708f590.js";import"./ActionMessage.80f4a51a.js";import"./Button.0bced74f.js";import"./FormSection.38165bd9.js";import"./Label.933dc508.js";const v={props:["sessions"],components:{AppLayout:j,DeleteUserForm:g,JetSectionBorder:h,LogoutOtherBrowserSessionsForm:w,TwoFactorAuthenticationForm:b,UpdatePasswordForm:F,UpdateProfileInformationForm:y}},S=i("h2",{class:"font-semibold text-xl text-gray-100 leading-tight"}," Profile ",-1),k={class:"max-w-7xl mx-auto bg-gray-300 rounded py-10 sm:px-6 lg:px-8"},P={key:0},U={key:1},$={key:2};function L(e,D,p,I,M,T){const c=t("update-profile-information-form"),r=t("jet-section-border"),f=t("update-password-form"),d=t("two-factor-authentication-form"),l=t("logout-other-browser-sessions-form"),u=t("delete-user-form"),_=t("app-layout");return s(),x(_,{title:"Profile"},{header:m(()=>[S]),default:m(()=>[i("div",null,[i("div",k,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),a("div",P,[o(c,{user:e.$page.props.user},null,8,["user"]),o(r)])):n("",!0),e.$page.props.jetstream.canUpdatePassword?(s(),a("div",U,[o(f,{class:"mt-10 sm:mt-0"}),o(r)])):n("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),a("div",$,[o(d,{class:"mt-10 sm:mt-0"}),o(r)])):n("",!0),o(l,{sessions:p.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),a(A,{key:3},[o(r),o(u,{class:"mt-10 sm:mt-0"})],64)):n("",!0)])])]),_:1})}var io=B(v,[["render",L]]);export{io as default};
