import{J as c}from"./JigDd.6b7b5a1f.js";import{I as f}from"./InertiaButton.b06aab18.js";import{_ as h}from"./plugin-vue_export-helper.5a098b48.js";import{j as p,e as u,o as a,k as _,x as d,w as o,i as t,y as s,f as l,z as i,g as m}from"./vendor.bec00c62.js";const g=p({name:"ShowPatientsForm",props:{model:Object,is_consul:!1},components:{InertiaButton:f,JigDd:c},data(){return{}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{}}),b={class:"gap-4"},v=t("Nom et Prenom:"),y=t("Adresse:"),k=t("Cin:"),j=t("Phone:"),B=t("Email:"),C=t("Ddn:"),N=t("Fichiers:"),$=t("Created at:"),w=t("Updated at:"),D={key:3,class:"pt-2 my-2"},P=m("i",{class:"mr-2 fas fa-file-alt"},null,-1),V=t("List des fichiers"),z=m("i",{class:"mr-2 fas fa-calendar-check"},null,-1),F=t("List des rendez-vous"),I=m("i",{class:"mr-2 fas fa-stethoscope"},null,-1),J=t("List des consultations");function L(e,S,E,A,O,T){const n=u("jig-dd"),r=u("inertia-button");return a(),_("dl",b,[d(n,null,{dt:o(()=>[v]),default:o(()=>[t(" "+s(e.model.nom)+" "+s(e.model.prenom),1)]),_:1}),d(n,null,{dt:o(()=>[y]),default:o(()=>[t(" "+s(e.model.adresse),1)]),_:1}),d(n,null,{dt:o(()=>[k]),default:o(()=>[t(" "+s(e.model.cin),1)]),_:1}),d(n,null,{dt:o(()=>[j]),default:o(()=>[t(" "+s(e.model.phone),1)]),_:1}),d(n,null,{dt:o(()=>[B]),default:o(()=>[t(" "+s(e.model.email),1)]),_:1}),d(n,null,{dt:o(()=>[C]),default:o(()=>[t(" "+s(e.model.ddn),1)]),_:1}),e.is_consul?i("",!0):(a(),l(n,{key:0},{dt:o(()=>[N]),default:o(()=>[t(" "+s(e.model.count_fichiers),1)]),_:1})),e.is_consul?i("",!0):(a(),l(n,{key:1},{dt:o(()=>[$]),default:o(()=>[t(" "+s(e.model.created_at),1)]),_:1})),e.is_consul?i("",!0):(a(),l(n,{key:2},{dt:o(()=>[w]),default:o(()=>[t(" "+s(e.model.updated_at),1)]),_:1})),e.is_consul?i("",!0):(a(),_("div",D,[d(r,{href:e.route("admin.fichiers.index",{patient_id:e.model?e.model.id:null}),classes:"bg-green-100 hover:bg-green-200 text-primary mr-7"},{default:o(()=>[P,V]),_:1},8,["href"]),d(r,{href:e.route("admin.rendez-vouses.index",{patient_id:e.model?e.model.id:null}),classes:"bg-green-100 hover:bg-green-200 text-primary mr-7"},{default:o(()=>[z,F]),_:1},8,["href"]),d(r,{href:e.route("admin.consultations.index",{patient_id:e.model?e.model.id:null}),classes:"bg-green-100 hover:bg-green-200 text-primary mr-7"},{default:o(()=>[I,J]),_:1},8,["href"])]))])}var K=h(g,[["render",L]]);export{K as default};
