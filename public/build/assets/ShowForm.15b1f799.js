import{J as f}from"./JigDd.81cc9e9e.js";import{I as h}from"./InertiaButton.8127fa1b.js";import u from"./ShowForm.157ed9b5.js";import _ from"./ShowForm.c24ec14a.js";import{_ as g}from"./plugin-vue_export-helper.5a098b48.js";import{j as w,e as i,o as r,k as b,g as s,f as d,z as m,x as n,w as o,i as t,y as l}from"./vendor.f8a6287f.js";const j=w({name:"ShowConsultationsForm",props:{model:Object},components:{InertiaButton:h,JigDd:f,ShowFichiersForm:u,ShowPatientsForm:_},data(){return{}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{}}),v={class:"gap-4"},k={class:"flex"},C={class:"flex-1"},D=s("div",{class:"w-full p-3 text-lg font-black border-r bg-primary-100"},[s("span",null,"D\xE9tails du patient :")],-1),S={class:"flex-1"},y=s("div",{class:"w-full p-3 text-lg font-black bg-primary-100"},[s("span",null,"D\xE9tails du fichier :")],-1),F=s("div",{class:"w-full p-3 text-lg font-black bg-primary-100"},[s("span",null,"Details Du Consultation :")],-1),B=t("Orthoptiste:"),N=t("Note:"),$=t("Date:"),V=t("Salle:"),I=t("Commentaire:");function J(e,O,z,E,P,T){const c=i("show-patients-form"),p=i("show-fichiers-form"),a=i("jig-dd");return r(),b("dl",v,[s("div",k,[s("div",C,[D,e.model.fichier?(r(),d(c,{key:0,model:e.model.fichier.patient,is_consul:!0},null,8,["model"])):m("",!0)]),s("div",S,[y,e.model.fichier?(r(),d(p,{key:0,model:e.model.fichier,is_consul:!0},null,8,["model"])):m("",!0)])]),F,n(a,null,{dt:o(()=>[B]),default:o(()=>[t(" "+l(e.model.orthoptiste?e.model.orthoptiste.name:"-")+" "+l(e.model.orthoptiste?e.model.orthoptiste.last_name:"-"),1)]),_:1}),n(a,null,{dt:o(()=>[N]),default:o(()=>[t(" "+l(e.model.note),1)]),_:1}),n(a,null,{dt:o(()=>[$]),default:o(()=>[t(" "+l(e.model.date),1)]),_:1}),n(a,null,{dt:o(()=>[V]),default:o(()=>[t(" "+l(e.model.salle?e.model.salle.name:"-"),1)]),_:1}),n(a,null,{dt:o(()=>[I]),default:o(()=>[t(" "+l(e.model.commentaire),1)]),_:1})])}var L=g(j,[["render",J]]);export{L as default};
