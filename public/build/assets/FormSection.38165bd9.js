import{J as a}from"./SectionTitle.ffe20ae7.js";import{e as c,o as r,k as d,x as l,w as n,p as e,g as t,C as p,n as u,z as f}from"./vendor.f8a6287f.js";import{_}from"./plugin-vue_export-helper.5a098b48.js";const h={emits:["submitted"],components:{JetSectionTitle:a},computed:{hasActions(){return!!this.$slots.actions}}},g={class:"md:grid md:grid-cols-3 md:gap-6"},v={class:"mt-5 md:mt-0 md:col-span-2"},$={class:"grid grid-cols-6 gap-6"},b={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};function j(s,o,w,x,y,i){const m=c("jet-section-title");return r(),d("div",g,[l(m,null,{title:n(()=>[e(s.$slots,"title")]),description:n(()=>[e(s.$slots,"description")]),_:3}),t("div",v,[t("form",{onSubmit:o[0]||(o[0]=p(C=>s.$emit("submitted"),["prevent"]))},[t("div",{class:u(["px-4 py-5 bg-white sm:p-6 shadow",i.hasActions?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[t("div",$,[e(s.$slots,"form")])],2),i.hasActions?(r(),d("div",b,[e(s.$slots,"actions")])):f("",!0)],32)])])}var A=_(h,[["render",j]]);export{A as J};
