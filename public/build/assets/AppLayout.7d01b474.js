import{S as g,J as w,a as v,b,c as x,d as k,e as y}from"./JigLayout.f9b138d2.js";import{o as n,e as r,n as i,a as e,m as c,t as $,q as j,d as B,r as u,c as C,w as a,g as m,l as L}from"./main.8d02089a.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const M={data(){return{show:!0}},computed:{style(){var s;return((s=this.$page.props.jetstream.flash)==null?void 0:s.bannerStyle)||"success"},message(){var s;return((s=this.$page.props.jetstream.flash)==null?void 0:s.banner)||""}}},J={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},S={class:"flex items-center justify-between flex-wrap"},P={class:"w-0 flex-1 flex items-center min-w-0"},D={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},N=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),T=[N],z={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},A=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),V=[A],I={class:"ml-3 font-medium text-sm text-white truncate"},q={class:"flex-shrink-0 sm:ml-3"},E=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),R=[E];function F(s,o,f,p,l,t){return n(),r("div",null,[l.show&&t.message?(n(),r("div",{key:0,class:i({"bg-green-500":t.style=="success","bg-red-700":t.style=="danger"})},[e("div",J,[e("div",S,[e("div",P,[e("span",{class:i(["flex p-2 rounded-lg",{"bg-green-600":t.style=="success","bg-red-600":t.style=="danger"}])},[t.style=="success"?(n(),r("svg",D,T)):c("",!0),t.style=="danger"?(n(),r("svg",z,V)):c("",!0)],2),e("p",I,$(t.message),1)]),e("div",q,[e("button",{type:"button",class:i(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-green-600 focus:bg-green-600":t.style=="success","hover:bg-red-600 focus:bg-red-600":t.style=="danger"}]),"aria-label":"Dismiss",onClick:o[0]||(o[0]=j(d=>l.show=!1,["prevent"]))},R,2)])])])],2)):c("",!0)])}var G=h(M,[["render",F]]);const H={route:"admin.dashboard",routePattern:"admin.dashboard",title:"Tableau De Bord",faIcon:"fas fa-tv",isTitle:!1,isParent:!1,ignorePerm:!1,children:[]};var K={backend:H,"my-profile":{route:"profile.show",routePattern:"case-files",title:"Mon Profile",faIcon:"fas fa-user",isTitle:!1,isParent:!1,ignorePerm:!0,children:[]}};const O=B({components:{Sidebar:g,JigLayout:w,JetApplicationMark:v,JetBanner:G,JetDropdown:b,JetDropdownLink:x,JetNavLink:k,JetResponsiveNavLink:y},data(){return{showingNavigationDropdown:!1,frontendSidebarMenu:K}},methods:{switchToTeam(s){this.$inertia.put(route("current-team.update"),{team_id:s.id},{preserveState:!1})},logout(){let s=this;if(this.$page.props.user.is_cas){console.log("Logging out of cas");const o=window.open(this.route("cas.logout"),"_blank");setTimeout(function(){o.close(),s.$inertia.reload()},1e3)}else this.$inertia.post(route("logout"))}}}),Q=e("div",null,null,-1),U={class:"flex justify-center w-full"},W={class:"w-full text-secondary"};function X(s,o,f,p,l,t){const d=u("sidebar"),_=u("jig-layout");return n(),C(_,null,{"navbar-menu":a(()=>[Q]),header:a(()=>[e("div",U,[e("div",W,[m(s.$slots,"header")])])]),sidebar:a(()=>[L(d,{menu:s.frontendSidebarMenu,class:"z-40"},null,8,["menu"])]),default:a(()=>[e("main",null,[m(s.$slots,"default")])]),_:3})}var se=h(O,[["render",X]]);export{se as A};