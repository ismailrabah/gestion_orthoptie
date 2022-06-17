import{J as f}from"./JigTextarea.b8a999f8.js";import{I as b}from"./InfiniteSelect.744baeaa.js";import{J as g}from"./Label.be169a38.js";import{I as h}from"./InertiaButton.b06aab18.js";import{J as j}from"./InputError.aee3d62e.js";import{j as v,K as V,e as t,o as u,k as d,x as o,n as i,z as C,g as l,w as _,C as $,i as I}from"./vendor.bec00c62.js";import{_ as J}from"./plugin-vue_export-helper.5a098b48.js";const w=v({name:"CreateConsultationPrestationsForm",components:{InertiaButton:h,JetInputError:j,JetLabel:g,JigTextarea:f,InfiniteSelect:b},props:{consultation:Object},data(){return{form:V({commentaire:null,consultation:this.consultation,prestation:null},{remember:!1})}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{async storeModel(){this.form.post(this.route("admin.consultation-prestations.store"),{onSuccess:e=>{this.flash.success?this.$emit("success",this.flash.success):this.flash.error?this.$emit("error",this.flash.error):this.$emit("error","Unknown server error.")},onError:e=>{this.$emit("error","A server error occurred")}},{remember:!1,preserveState:!0})}}}),S={key:0,class:"sm:col-span-4"},k={class:"sm:col-span-4"},B={class:"sm:col-span-4"},y={class:"mt-2 text-right"},E=I("Submit");function M(e,s,N,U,F,P){const a=t("jet-label"),m=t("infinite-select"),n=t("jet-input-error"),p=t("jig-textarea"),c=t("inertia-button");return u(),d("form",{class:"w-full",onSubmit:s[3]||(s[3]=$((...r)=>e.storeModel&&e.storeModel(...r),["prevent"]))},[e.consultation?C("",!0):(u(),d("div",S,[o(a,{for:"consultation",value:"Consultation"}),o(m,{"per-page":15,"api-url":e.route("api.consultations.index"),id:"consultation",name:"consultation",modelValue:e.form.consultation,"onUpdate:modelValue":s[0]||(s[0]=r=>e.form.consultation=r),label:"note",class:i({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.consultation})},null,8,["api-url","modelValue","class"]),o(n,{message:e.form.errors.consultation,class:"mt-2"},null,8,["message"])])),l("div",k,[o(a,{for:"prestation",value:"Prestation"}),o(m,{"per-page":15,"api-url":e.route("api.prestations.index"),id:"prestation",name:"prestation",modelValue:e.form.prestation,"onUpdate:modelValue":s[1]||(s[1]=r=>e.form.prestation=r),label:"note",class:i({"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.prestation})},null,8,["api-url","modelValue","class"]),o(n,{message:e.form.errors.prestation,class:"mt-2"},null,8,["message"])]),l("div",B,[o(a,{for:"commentaire",value:"Commentaire"}),o(p,{class:i(["w-full",{"border-red-500 sm:focus:border-red-300 sm:focus:ring-red-100":e.form.errors.commentaire}]),id:"commentaire",name:"commentaire",modelValue:e.form.commentaire,"onUpdate:modelValue":s[2]||(s[2]=r=>e.form.commentaire=r)},null,8,["modelValue","class"]),o(n,{message:e.form.errors.commentaire,class:"mt-2"},null,8,["message"])]),l("div",y,[o(c,{type:"submit",class:"font-semibold bg-success disabled:opacity-25",disabled:e.form.processing},{default:_(()=>[E]),_:1},8,["disabled"])])],32)}var D=J(w,[["render",M]]);export{D as default};
