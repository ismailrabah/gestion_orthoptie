import{J as d}from"./JigDd.38169f2a.js";import{I as r}from"./InertiaButton.b4c5ddff.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";import{e as m,o as l,k as _,x as a,w as e,i as t,y as n}from"./vendor.6d78f1ed.js";const c={name:"ShowPermissionsForm",props:{model:Object},components:{InertiaButton:r,JigDd:d},data(){return{}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{}},u={class:"gap-4"},p=t("Name:"),f=t("Title:"),h=t("Guard Name:");function g(j,x,o,v,w,B){const s=m("jig-dd");return l(),_("dl",u,[a(s,null,{dt:e(()=>[p]),default:e(()=>[t(" "+n(o.model.name),1)]),_:1}),a(s,null,{dt:e(()=>[f]),default:e(()=>[t(" "+n(o.model.title),1)]),_:1}),a(s,null,{dt:e(()=>[h]),default:e(()=>[t(" "+n(o.model.guard_name),1)]),_:1})])}var I=i(c,[["render",g]]);export{I as default};
