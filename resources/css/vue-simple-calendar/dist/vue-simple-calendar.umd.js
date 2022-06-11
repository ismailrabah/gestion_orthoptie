var et=Object.defineProperty;var tt=(m,e,y)=>e in m?et(m,e,{enumerable:!0,configurable:!0,writable:!0,value:y}):m[e]=y;var L=(m,e,y)=>(tt(m,typeof e!="symbol"?e+"":e,y),y);(function(m,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(m=typeof globalThis!="undefined"?globalThis:m||self,e(m.CalendarView={},m.Vue))})(this,function(m,e){"use strict";const y=()=>F(new Date),J=(t,o,n)=>{switch(o){case"year":return new Date(t.getFullYear(),0);case"month":return new Date(t.getFullYear(),t.getMonth());case"week":return T(t,n);default:return t}},K=t=>[...Array(7)].map((o,n)=>k(t,n)),k=(t,o)=>new Date(t.getFullYear(),t.getMonth(),t.getDate()+o,t.getHours(),t.getMinutes(),t.getSeconds()),T=(t,o)=>k(t,(o-t.getDay()-7)%-7),X=(t,o)=>k(T(t,o),7),M=t=>new Date(t.getFullYear(),t.getMonth()),Z=t=>Math.ceil(t.getDate()/7),_=(t,o,n)=>new Date(t.getFullYear()+(o=="year"?n:0),t.getMonth()+(o=="month"?n:0),t.getDate()+(o=="week"?n*7:0)),A=t=>("0"+String(t.getMonth()+1)).slice(-2),Y=t=>("0"+String(t.getDate())).slice(-2),U=t=>t.getFullYear()+"-"+A(t),ee=t=>U(t)+"-"+Y(t),te=t=>A(t)+"-"+Y(t),ae=(t,o,n)=>{if(t.getHours()===0&&t.getMinutes()===0&&t.getSeconds()===0)return"";if(!w()){var d=new Date().getTimezoneOffset()*6e4;return new Date(t.getTime()-d).toISOString().slice(11,16)}return t.toLocaleTimeString(o,n)},ne=(t,o,n,d)=>{const u=t.getFullYear()===o.getFullYear(),h=R(t,o),b=!(n==="year")&&!(n==="month");let f=[];return f.push(d[t.getMonth()]),b&&(f.push(" "),f.push(t.getDate())),u||(f.push(b?", ":" "),f.push(t.getFullYear())),!h||!u?(f.push(" \u2013 "),h||f.push(d[o.getMonth()]),b&&f.push(" ")):b&&f.push(" \u2013 "),b?(f.push(o.getDate()),f.push(", ")):f.push(" "),f.push(o.getFullYear()),f.join("")},z=(t,o)=>{const n=Date.UTC(o.getFullYear(),o.getMonth(),o.getDate()),d=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return(n-d)/864e5},re=(t,o)=>t&&o&&z(t,o)===0,oe=(t,o)=>t&&o&&t.getTime()===o.getTime(),R=(t,o)=>t&&o&&t.getFullYear()===o.getFullYear()&&t.getMonth()===o.getMonth(),se=t=>M(t)<M(y()),ie=t=>M(t)>M(y()),le=t=>F(t)>y(),de=t=>F(t)<y(),ce=t=>t.getMonth()!==k(t,7).getMonth(),ue=t=>t.getMonth()!==k(t,1).getMonth(),j=t=>{let o=[...Array(7)].map(n=>0);return t.split(/\D/,7).forEach((n,d)=>o[d]=Number(n)),o[1]--,new Date(o[0],o[1],o[2],o[3],o[4],o[5],o[6])},N=t=>typeof t=="string"?j(t):new Date(t),F=t=>{const o=new Date(t);return o.setHours(0,0,0,0),o},fe=t=>t.substring(0,2),w=()=>typeof Intl!="undefined";var r={addDays:k,beginningOfMonth:M,beginningOfPeriod:J,beginningOfWeek:T,dateOnly:F,dayDiff:z,daysOfWeek:K,endOfWeek:X,formattedPeriod:ne,formattedTime:ae,fromIsoStringToLocalDate:j,getDefaultBrowserLocale:()=>typeof navigator=="undefined"?"unk":(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language).toLowerCase(),getFormattedMonthNames:(t,o)=>{if(!w())return[...Array(12)].map(d=>"");const n=new Intl.DateTimeFormat(t,{month:o});return[...Array(12)].map((d,u)=>n.format(new Date(2017,u,1)))},getFormattedWeekdayNames:(t,o,n)=>{if(!w())return[...Array(7)].map(u=>"");const d=new Intl.DateTimeFormat(t,{weekday:o});return[...Array(7)].map((u,h)=>d.format(new Date(2017,0,(h+1+n)%7)))},incrementPeriod:_,instanceOfMonth:Z,isFutureMonth:ie,isInFuture:le,isInPast:de,isLastDayOfMonth:ue,isLastInstanceOfMonth:ce,isoMonthDay:te,isoYearMonth:U,isoYearMonthDay:ee,isPastMonth:se,isSameDate:re,isSameDateTime:oe,isSameMonth:R,languageCode:fe,normalizeItem:(t,o)=>{const n=t.classes?[...t.classes]:[];return o&&n.push("isHovered"),{originalItem:t,startDate:N(t.startDate),endDate:N(t.endDate||t.startDate),classes:n,title:t.title||"Untitled",id:t.id,url:t.url}},paddedDay:Y,paddedMonth:A,supportsIntl:w,today:y,toLocalDate:N};class ge{constructor(){L(this,"currentDragItem",null);L(this,"dateSelectionOrigin",null);L(this,"currentHoveredItemId","");L(this,"CalendarMath",r)}}var st="";const me={class:"cv-header-days"},pe={key:0,class:"cv-weeknumber"},De=["aria-multiselectable"],he={key:0,class:"cv-weeknumber"},ye={class:"cv-weekdays"},be=["draggable","aria-grabbed","aria-label","aria-selected","aria-dropeffect","onClick","onDragstart","onDrop","onDragover","onDragenter","onDragleave"],Pe={class:"cv-day-number"},ke=["draggable","aria-grabbed","title","onDragstart","onMouseenter","onMouseleave","onClick","innerHTML"],Se=e.defineComponent({props:{showDate:{type:Date,default:void 0},displayPeriodUom:{type:String,default:"month"},displayPeriodCount:{type:Number,default:1},displayWeekNumbers:{type:Boolean,default:!1},locale:{type:String,default:void 0},monthNameFormat:{type:String,default:"long"},weekdayNameFormat:{type:String,default:"short"},showTimes:{type:Boolean,default:!1},timeFormatOptions:{type:Object,default:()=>{}},disablePast:{type:Boolean,default:!1},disableFuture:{type:Boolean,default:!1},enableDateSelection:{type:Boolean,default:!1},selectionStart:{type:Date,default:null},selectionEnd:{type:Date,default:null},enableDragDrop:{type:Boolean,default:!1},startingDayOfWeek:{type:Number,default:0},items:{type:Array,default:()=>[]},dateClasses:{type:Object,default:()=>{}},itemTop:{type:String,default:"1.4em"},itemContentHeight:{type:String,default:"1.4em"},itemBorderHeight:{type:String,default:"2px"},periodChangedCallback:{type:Function,default:void 0},currentPeriodLabel:{type:String,default:""},currentPeriodLabelIcons:{type:String,default:"\u21E4-\u21E5"},doEmitItemMouseEvents:{type:Boolean,default:!1}},emits:["input","period-changed","click-date","click-item","item-mouseenter","item-mouseleave","drag-start","drag-over-date","drag-enter-date","drag-leave-date","drop-on-date","date-selection","date-selection-start","date-selection-finish"],setup(t,{emit:o}){const n=t,d=e.reactive(new ge),u=e.computed(()=>n.locale||r.getDefaultBrowserLocale()),h=e.computed(()=>n.showDate?r.dateOnly(n.showDate):r.today()),p=e.computed(()=>r.beginningOfPeriod(h.value,n.displayPeriodUom,n.startingDayOfWeek)),C=e.computed(()=>r.addDays(r.incrementPeriod(p.value,n.displayPeriodUom,n.displayPeriodCount),-1)),b=e.computed(()=>{const a=r.beginningOfWeek(r.beginningOfPeriod(p.value,"year",0),n.startingDayOfWeek),s=r.beginningOfWeek(p.value,n.startingDayOfWeek);return 1+Math.floor(r.dayDiff(a,s)/7)}),f=e.computed(()=>r.beginningOfWeek(p.value,n.startingDayOfWeek)),W=e.computed(()=>r.endOfWeek(C.value,n.startingDayOfWeek)),Ee=e.computed(()=>{const a=Math.floor((r.dayDiff(f.value,W.value)+1)/7);return[...Array(a)].map((s,l)=>r.addDays(f.value,l*7))}),$=e.computed(()=>r.getFormattedMonthNames(u.value,n.monthNameFormat)),Te=e.computed(()=>r.getFormattedWeekdayNames(u.value,n.weekdayNameFormat,n.startingDayOfWeek)),V=e.computed(()=>n.items?n.items.map(a=>r.normalizeItem(a,a.id===d.currentHoveredItemId)):[]),H=e.computed(()=>r.beginningOfPeriod(r.today(),n.displayPeriodUom,n.startingDayOfWeek)),Ae=e.computed(()=>r.addDays(r.incrementPeriod(H.value,n.displayPeriodUom,n.displayPeriodCount),-1)),Ye=e.computed(()=>r.formattedPeriod(p.value,C.value,n.displayPeriodUom,$.value)),Ne=e.computed(()=>{const a=H.value,s=p.value;return n.currentPeriodLabel?n.currentPeriodLabel==="icons"?n.currentPeriodLabelIcons[Math.sign(a.getTime()-s.getTime())+1]:n.currentPeriodLabel:r.formattedPeriod(a,Ae.value,n.displayPeriodUom,$.value)}),We=e.computed(()=>({previousYear:S(-12),previousPeriod:S(-1),nextPeriod:S(1),previousFullPeriod:S(-n.displayPeriodCount),nextFullPeriod:S(n.displayPeriodCount),nextYear:S(12),currentPeriod:H.value,currentPeriodLabel:Ne.value,periodStart:p.value,periodEnd:C.value,displayLocale:u.value,displayFirstDate:f.value,displayLastDate:W.value,monthNames:$.value,fixedItems:V.value,periodLabel:Ye.value})),$e=e.computed(()=>({periodStart:p,periodEnd:C,displayFirstDate:f,displayLastDate:W}));e.watch(()=>$e,a=>{n.periodChangedCallback&&(o("period-changed"),n.periodChangedCallback(a,"watch"))},{immediate:!0});const Ve=(a,s)=>{n.disablePast&&r.isInPast(a)||n.disableFuture&&r.isInFuture(a)||o("click-date",a,q(a,a),s)},He=(a,s)=>o("click-item",a,s),O=a=>"dow"+(a+n.startingDayOfWeek)%7,S=a=>{const s=r.incrementPeriod(p.value,n.displayPeriodUom,a),l=r.incrementPeriod(s,n.displayPeriodUom,n.displayPeriodCount);return n.disablePast&&l<=r.today()||n.disableFuture&&s>r.today()?null:s},xe=(a,s)=>{d.currentHoveredItemId=a.id,n.doEmitItemMouseEvents&&o("item-mouseenter",a,s)},Ue=(a,s)=>{d.currentHoveredItemId="",n.doEmitItemMouseEvents&&o("item-mouseleave",a,s)},ze=(a,s)=>{var g,i;if(!n.enableDateSelection)return!1;(g=s.dataTransfer)==null||g.setData("text",a.toString());let l=new Image;return l.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",(i=s.dataTransfer)==null||i.setDragImage(l,10,10),d.dateSelectionOrigin=a,x("date-selection-start",a,s),!0},Re=(a,s)=>{var l;return n.enableDragDrop?((l=s.dataTransfer)==null||l.setData("text",a.id),d.currentDragItem=a,d.dateSelectionOrigin=null,o("drag-start",a,s),!0):!1},B=(a,s,l)=>n.enableDragDrop?(o(a,d.currentDragItem,s,l),!0):!1,je=(a,s)=>{B("drag-over-date",a,s)},qe=(a,s)=>{if(n.enableDateSelection&&d.dateSelectionOrigin){x("date-selection",a,s);return}if(!B("drag-enter-date",a,s))return;s.target.classList.add("draghover")},ve=(a,s)=>{if(n.enableDateSelection&&n.selectionStart||!B("drag-leave-date",a,s))return;s.target.classList.remove("draghover")},Ge=(a,s)=>{if(n.enableDateSelection&&d.dateSelectionOrigin){x("date-selection-finish",a,s);return}if(!B("drop-on-date",a,s))return;s.target.classList.remove("draghover")},x=(a,s,l)=>{!d.dateSelectionOrigin||o(a,s<=d.dateSelectionOrigin?[s,d.dateSelectionOrigin,l]:[d.dateSelectionOrigin,s,l])},Qe=(a,s)=>a.startDate<s.startDate?-1:s.startDate<a.startDate?1:a.endDate>s.endDate?-1:s.endDate>a.endDate?1:a.id<s.id?-1:1,Je=a=>q(a,r.addDays(a,6)),q=(a,s)=>V.value.filter(l=>l.endDate>=a&&r.dateOnly(l.startDate)<=s,this).sort(Qe),Ke=a=>!!V.value.find(s=>s.endDate>=a&&r.dateOnly(s.startDate)<=a),v=a=>!(!n.selectionStart||!n.selectionEnd||a<r.dateOnly(n.selectionStart)||a>r.dateOnly(n.selectionEnd)),Xe=a=>{const s=Je(a),l=[],g=[[],[],[],[],[],[],[]];for(let i=0;i<s.length;i++){const c=Object.assign({},s[i],{classes:[...s[i].classes],itemRow:0}),D=c.startDate<a,I=D?0:r.dayDiff(a,c.startDate),Q=Math.min(7-I,r.dayDiff(r.addDays(a,I),c.endDate)+1);D&&c.classes.push("continued"),r.dayDiff(a,c.endDate)>6&&c.classes.push("toBeContinued"),r.isInPast(c.endDate)&&c.classes.push("past"),c.originalItem.url&&c.classes.push("hasUrl");for(let P=0;P<7;P++)if(P===I){let E=0;for(;g[P][E];)E++;c.itemRow=E,g[P][E]=!0}else P<I+Q&&(g[P][c.itemRow]=!0);c.classes.push(`offset${I}`),c.classes.push(`span${Q}`),l.push(c)}return l},Ze=a=>{const s='<span class="startTime">'+r.formattedTime(a.startDate,u.value,n.timeFormatOptions)+"</span>";let l="";return r.isSameDateTime(a.startDate,a.endDate)||(l='<span class="endTime">'+r.formattedTime(a.endDate,u.value,n.timeFormatOptions)+"</span>"),s+l},_e=a=>n.showTimes?Ze(a)+" "+a.title:a.title,G=a=>{const s=a.itemRow,l=n.itemContentHeight,g=n.itemBorderHeight;return`calc(${n.itemTop} + ${s}*${l} + ${s}*${g})`};return(a,s)=>(e.openBlock(),e.createElementBlock("div",{"aria-label":"Calendar",class:e.normalizeClass(["cv-wrapper","locale-"+e.unref(r).languageCode(e.unref(u)),"locale-"+e.unref(u),"y"+e.unref(p).getFullYear(),"m"+e.unref(r).paddedMonth(e.unref(p)),"period-"+t.displayPeriodUom,"periodCount-"+t.displayPeriodCount,{past:e.unref(r).isPastMonth(e.unref(p)),future:e.unref(r).isFutureMonth(e.unref(p)),noIntl:!e.unref(r).supportsIntl}])},[e.renderSlot(a.$slots,"header",{headerProps:e.unref(We)}),e.createElementVNode("div",me,[t.displayWeekNumbers?(e.openBlock(),e.createElementBlock("div",pe)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(Te),(l,g)=>e.renderSlot(a.$slots,"dayHeader",{index:O(g),label:l},()=>[(e.openBlock(),e.createElementBlock("div",{key:O(g),class:e.normalizeClass([O(g),"cv-header-day"])},e.toDisplayString(l),3))])),256))]),e.createElementVNode("div",{"aria-multiselectable":t.enableDateSelection,class:"cv-weeks"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(Ee),(l,g)=>(e.openBlock(),e.createElementBlock("div",{key:`${g}-week`,class:e.normalizeClass(["cv-week","week"+(g+1),"ws"+e.unref(r).isoYearMonthDay(l)])},[t.displayWeekNumbers?(e.openBlock(),e.createElementBlock("div",he,[e.renderSlot(a.$slots,"weekNumber",{date:l,numberInYear:e.unref(b)+g,numberInPeriod:g+1},()=>[e.createElementVNode("span",null,e.toDisplayString(e.unref(b)+g),1)])])):e.createCommentVNode("",!0),e.createElementVNode("div",ye,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(r).daysOfWeek(l),(i,c)=>(e.openBlock(),e.createElementBlock("div",{key:O(c),draggable:t.enableDateSelection,class:e.normalizeClass(["cv-day",O(c),"d"+e.unref(r).isoYearMonthDay(i),"d"+e.unref(r).isoMonthDay(i),"d"+e.unref(r).paddedDay(i),"instance"+e.unref(r).instanceOfMonth(i),{today:e.unref(r).isSameDate(i,e.unref(r).today()),outsideOfMonth:!e.unref(r).isSameMonth(i,e.unref(h)),past:e.unref(r).isInPast(i),future:e.unref(r).isInFuture(i),last:e.unref(r).isLastDayOfMonth(i),lastInstance:e.unref(r).isLastInstanceOfMonth(i),hasItems:Ke(i),selectionStart:e.unref(r).isSameDate(i,t.selectionStart),selectionEnd:e.unref(r).isSameDate(i,t.selectionEnd)},...t.dateClasses&&t.dateClasses[e.unref(r).isoYearMonthDay(i)]||[]]),"aria-grabbed":t.enableDateSelection?v(i):void 0,"aria-label":i.getDate().toString(),"aria-selected":v(i),"aria-dropeffect":t.enableDragDrop&&e.unref(d).currentDragItem?"move":t.enableDateSelection&&e.unref(d).dateSelectionOrigin?"execute":"none",onClick:D=>Ve(i,D),onDragstart:D=>ze(i,D),onDrop:e.withModifiers(D=>Ge(i,D),["prevent"]),onDragover:e.withModifiers(D=>je(i,D),["prevent"]),onDragenter:e.withModifiers(D=>qe(i,D),["prevent"]),onDragleave:e.withModifiers(D=>ve(i,D),["prevent"])},[e.createElementVNode("div",Pe,e.toDisplayString(i.getDate()),1),e.renderSlot(a.$slots,"dayContent",{day:i})],42,be))),128)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(Xe(l),i=>e.renderSlot(a.$slots,"item",{value:i,weekStartDate:l,top:G(i)},()=>[(e.openBlock(),e.createElementBlock("div",{key:i.id,draggable:t.enableDragDrop,"aria-grabbed":t.enableDragDrop?i==e.unref(d).currentDragItem:void 0,class:e.normalizeClass([i.classes,"cv-item"]),title:i.title,style:e.normalizeStyle(`top:${G(i)};${i.originalItem.style}`),onDragstart:c=>Re(i,c),onMouseenter:c=>xe(i,c),onMouseleave:c=>Ue(i,c),onClick:e.withModifiers(c=>He(i,c),["stop"]),innerHTML:_e(i)},null,46,ke))])),256))])],2))),128))],8,De)],2))}});var it="";const Me={class:"cv-header"},Ce={class:"cv-header-nav"},Oe=["disabled"],Ie=["disabled","innerHTML"],Le=["disabled"],Fe=["disabled"],we={class:"periodLabel"},Be=e.defineComponent({props:{headerProps:{type:Object,required:!0},previousYearLabel:{type:String,default:"<<"},previousPeriodLabel:{type:String,default:"<"},nextPeriodLabel:{type:String,default:">"},nextYearLabel:{type:String,default:">>"}},emits:["input"],setup(t,{emit:o}){const n=d=>o("input",d);return(d,u)=>(e.openBlock(),e.createElementBlock("div",Me,[e.createElementVNode("div",Ce,[e.createElementVNode("button",{disabled:!t.headerProps.previousYear,class:"previousYear","aria-label":"Previous Year",onClick:u[0]||(u[0]=e.withModifiers(h=>n(t.headerProps.previousYear),["prevent"]))},e.toDisplayString(t.previousYearLabel),9,Oe),e.createElementVNode("button",{disabled:!t.headerProps.previousPeriod,class:"previousPeriod","aria-label":"Previous Period",onClick:u[1]||(u[1]=e.withModifiers(h=>n(t.headerProps.previousPeriod),["prevent"])),innerHTML:t.previousPeriodLabel},null,8,Ie),e.createElementVNode("button",{class:"currentPeriod","aria-label":"Current Period",onClick:u[2]||(u[2]=e.withModifiers(h=>n(t.headerProps.currentPeriod),["prevent"]))},e.toDisplayString(t.headerProps.currentPeriodLabel),1),e.createElementVNode("button",{disabled:!t.headerProps.nextPeriod,class:"nextPeriod","aria-label":"Next Period",onClick:u[3]||(u[3]=e.withModifiers(h=>n(t.headerProps.nextPeriod),["prevent"]))},e.toDisplayString(t.nextPeriodLabel),9,Le),e.createElementVNode("button",{disabled:!t.headerProps.nextYear,class:"nextYear","aria-label":"Next Year",onClick:u[4]||(u[4]=e.withModifiers(h=>n(t.headerProps.nextYear),["prevent"]))},e.toDisplayString(t.nextYearLabel),9,Fe)]),e.createElementVNode("div",we,[e.renderSlot(d.$slots,"label",{},()=>[e.createTextVNode(e.toDisplayString(t.headerProps.periodLabel),1)])])]))}});m.CalendarMath=r,m.CalendarView=Se,m.CalendarViewHeader=Be,Object.defineProperty(m,"__esModule",{value:!0}),m[Symbol.toStringTag]="Module"});
