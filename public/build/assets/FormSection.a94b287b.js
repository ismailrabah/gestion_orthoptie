import{J as a}from"./SectionTitle.5cae5d1d.js";import{r as c,o as d,e as r,l,w as n,g as t,a as e,q as p,n as u,m as _}from"./main.227f4171.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const f={emits:["submitted"],components:{JetSectionTitle:a},computed:{hasActions(){return!!this.$slots.actions}}},g={class:"md:grid md:grid-cols-3 md:gap-6"},v={class:"mt-5 md:mt-0 md:col-span-2"},$={class:"grid grid-cols-6 gap-6"},b={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};function w(s,o,y,x,C,i){const m=c("jet-section-title");return d(),r("div",g,[l(m,null,{title:n(()=>[t(s.$slots,"title")]),description:n(()=>[t(s.$slots,"description")]),_:3}),e("div",v,[e("form",{onSubmit:o[0]||(o[0]=p(J=>s.$emit("submitted"),["prevent"]))},[e("div",{class:u(["px-4 py-5 bg-white sm:p-6 shadow",i.hasActions?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[e("div",$,[t(s.$slots,"form")])],2),i.hasActions?(d(),r("div",b,[t(s.$slots,"actions")])):_("",!0)],32)])])}var A=h(f,[["render",w]]);export{A as J};
