import{J as _}from"./JigDd.2ba6e98a.js";import{I as u}from"./InertiaButton.c6dbc8f4.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{d as p,r as l,o as n,e as f,c as r,w as e,l as d,b as t,t as s,m as i,a as h}from"./main.b00fb162.js";import"./index.a8a3989e.js";const g=p({name:"ShowFichiersForm",props:{model:Object,is_consul:!1},components:{InertiaButton:u,JigDd:_},data(){return{}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{}}),b={class:"gap-4"},k=t("Patient:"),B=h("i",{class:"mr-2 fas fa-user-injured"},null,-1),C=t("Titre:"),w=t("Motif De Bilan:"),y=t("Atcd:"),$=t("Medcin Traitant:"),j=t("Commentaire:"),F=t("Created at:"),N=t("Updated at:");function V(o,v,D,S,T,I){const m=l("inertia-button"),a=l("jig-dd");return n(),f("dl",b,[o.model.patient&&!o.is_consul?(n(),r(a,{key:0},{dt:e(()=>[k]),default:e(()=>[d(m,{href:o.route("admin.patients.show",o.model.patient.id),classes:" mb-6 bg-green-100 hover:bg-green-200 text-primary"},{default:e(()=>[B,t(s(o.model.patient.title),1)]),_:1},8,["href"])]),_:1})):i("",!0),d(a,null,{dt:e(()=>[C]),default:e(()=>[t(" "+s(o.model.titre),1)]),_:1}),d(a,null,{dt:e(()=>[w]),default:e(()=>[t(" "+s(o.model.motif_de_bilan),1)]),_:1}),d(a,null,{dt:e(()=>[y]),default:e(()=>[t(" "+s(o.model.atcd),1)]),_:1}),d(a,null,{dt:e(()=>[$]),default:e(()=>[t(" "+s(o.model.medcin_traitant),1)]),_:1}),d(a,null,{dt:e(()=>[j]),default:e(()=>[t(" "+s(o.model.commentaire),1)]),_:1}),o.is_consul?i("",!0):(n(),r(a,{key:1},{dt:e(()=>[F]),default:e(()=>[t(" "+s(o.model.created_at),1)]),_:1})),o.is_consul?i("",!0):(n(),r(a,{key:2},{dt:e(()=>[N]),default:e(()=>[t(" "+s(o.model.updated_at),1)]),_:1}))])}var P=c(g,[["render",V]]);export{P as default};
