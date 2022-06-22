import{A as j}from"./AppLayout.f22289a8.js";import g from"./DeleteUserForm.6bc54dc0.js";import{J as h}from"./SectionBorder.e6a6081d.js";import b from"./LogoutOtherBrowserSessionsForm.b3462905.js";import w from"./TwoFactorAuthenticationForm.f65e8f18.js";import F from"./UpdatePasswordForm.1081fa49.js";import y from"./UpdateProfileInformationForm.b1366852.js";import{_ as B}from"./plugin-vue_export-helper.5a098b48.js";import{e as t,o as s,f as x,w as m,g as i,k as a,x as o,z as n,F as A}from"./vendor.bec00c62.js";import"./JigLayout.5f650382.js";import"./InertiaButton.b06aab18.js";import"./DialogModal.c74b5b77.js";import"./DisplayMixin.328c366f.js";import"./ApplicationLogo.0294935d.js";import"./ActionSection.f4e49856.js";import"./SectionTitle.56fd62af.js";import"./DangerButton.d5be33fa.js";import"./Input.a6112c10.js";import"./InputError.aee3d62e.js";import"./SecondaryButton.09b32d97.js";import"./ActionMessage.37370d20.js";import"./Button.10f174e4.js";import"./FormSection.b9a7329f.js";import"./Label.be169a38.js";const v={props:["sessions"],components:{AppLayout:j,DeleteUserForm:g,JetSectionBorder:h,LogoutOtherBrowserSessionsForm:b,TwoFactorAuthenticationForm:w,UpdatePasswordForm:F,UpdateProfileInformationForm:y}},S=i("h2",{class:"font-semibold text-xl text-gray-100 leading-tight"}," Profile ",-1),k={class:"max-w-7xl mx-auto bg-gray-300 rounded py-10 sm:px-6 lg:px-8"},P={key:0},U={key:1},$={key:2};function L(e,D,p,I,M,T){const c=t("update-profile-information-form"),r=t("jet-section-border"),d=t("update-password-form"),f=t("two-factor-authentication-form"),l=t("logout-other-browser-sessions-form"),u=t("delete-user-form"),_=t("app-layout");return s(),x(_,{title:"Profile"},{header:m(()=>[S]),default:m(()=>[i("div",null,[i("div",k,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),a("div",P,[o(c,{user:e.$page.props.user},null,8,["user"]),o(r)])):n("",!0),e.$page.props.jetstream.canUpdatePassword?(s(),a("div",U,[o(d,{class:"mt-10 sm:mt-0"}),o(r)])):n("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),a("div",$,[o(f,{class:"mt-10 sm:mt-0"}),o(r)])):n("",!0),o(l,{sessions:p.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),a(A,{key:3},[o(r),o(u,{class:"mt-10 sm:mt-0"})],64)):n("",!0)])])]),_:1})}var io=B(v,[["render",L]]);export{io as default};
