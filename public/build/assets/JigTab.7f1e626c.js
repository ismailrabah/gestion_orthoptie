import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{d as s,o,e as a,a as f,g as r,n as b,m}from"./main.b00fb162.js";const c=s({name:"JigTabs",props:{navClasses:String}}),g={class:"p-4 pb-4 bg-white border rounded-lg"};function $(e,t,i,d,l,p){return o(),a("div",g,[f("nav",{class:b(["flex flex-col flex-wrap w-full sm:flex-row",e.navClasses])},[r(e.$slots,"nav")],2),r(e.$slots,"content")])}var T=n(c,[["render",$]]);const h=s({name:"JigTabLink",emits:["activate"],props:{tab:{type:String},tabController:{type:String},activeClasses:{default:"text-gray-600 border-t-2 border-l-2 border-r-2 sm:border-b-none border-green-500 text-green-500 hover:text-green-600 translate-x-0"}},computed:{active(){return this.tab===this.tabController}}}),v=["id"],_=["id"];function k(e,t,i,d,l,p){return e.active?(o(),a("button",{key:0,id:e.tab,class:b(["block px-6 py-4 font-medium transition transition-transform duration-1000 ease-in-out transform translate-x-0 focus:outline-none",e.activeClasses]),onClick:t[0]||(t[0]=u=>e.$emit("activate",e.tab))},[r(e.$slots,"default")],10,v)):(o(),a("button",{key:1,id:e.tab,class:"block px-6 py-4 font-medium transition duration-700 duration-1000 ease-in-out border-b focus:outline-none",onClick:t[1]||(t[1]=u=>e.$emit("activate",e.tab))},[r(e.$slots,"default")],8,_))}var S=n(h,[["render",k]]);const w=s({name:"JigTab",props:{name:{type:String,required:!0},tabController:{type:String,required:!0}}}),x={key:0,class:"py-4 transition ease-in-out"};function y(e,t,i,d,l,p){return e.name===e.tabController?(o(),a("div",x,[r(e.$slots,"default")])):m("",!0)}var B=n(w,[["render",y]]);export{B as J,S as a,T as b};
