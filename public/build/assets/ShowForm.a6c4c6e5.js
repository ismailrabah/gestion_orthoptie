import{J as r}from"./JigDd.6b7b5a1f.js";import{I as d}from"./InertiaButton.b06aab18.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";import{e as m,o as c,k as i,x as s,w as e,i as t,y as n}from"./vendor.bec00c62.js";const _={name:"ShowRolesForm",props:{model:Object},components:{InertiaButton:d,JigDd:r},data(){return{}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{}},u={class:"gap-4"},p=t("Name:"),f=t("Title:"),h=t("Guard Name:");function g(b,j,o,x,v,w){const a=m("jig-dd");return c(),i("dl",u,[s(a,null,{dt:e(()=>[p]),default:e(()=>[t(" "+n(o.model.name),1)]),_:1}),s(a,null,{dt:e(()=>[f]),default:e(()=>[t(" "+n(o.model.title),1)]),_:1}),s(a,null,{dt:e(()=>[h]),default:e(()=>[t(" "+n(o.model.guard_name),1)]),_:1})])}var I=l(_,[["render",g]]);export{I as default};