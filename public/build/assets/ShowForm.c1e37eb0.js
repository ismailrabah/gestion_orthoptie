import{J as r}from"./JigDd.81cc9e9e.js";import{I as d}from"./InertiaButton.8127fa1b.js";import{_ as p}from"./plugin-vue_export-helper.5a098b48.js";import{j as m,e as i,o as l,k as c,x as a,w as e,i as t,y as n}from"./vendor.f8a6287f.js";const u=m({name:"ShowRendezVousStatusesForm",props:{model:Object},components:{InertiaButton:d,JigDd:r},data(){return{}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{}}),_={class:"gap-4"},f=t("Name:"),h=t("Is Default:");function g(o,j,x,S,$,v){const s=i("jig-dd");return l(),c("dl",_,[a(s,null,{dt:e(()=>[f]),default:e(()=>[t(" "+n(o.model.name),1)]),_:1}),a(s,null,{dt:e(()=>[h]),default:e(()=>[t(" "+n(o.model.is_default),1)]),_:1})])}var V=p(u,[["render",g]]);export{V as default};