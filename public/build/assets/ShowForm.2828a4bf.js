import{J as r}from"./JigDd.1b8a2e07.js";import{I as m}from"./InertiaButton.d4eeaf43.js";import{_}from"./plugin-vue_export-helper.5a098b48.js";import{j as u,e as i,o as h,k as c,x as d,w as e,i as t,y as n,g as a}from"./vendor.0e2d33d8.js";const f=u({name:"ShowPatientsForm",props:{model:Object},components:{InertiaButton:m,JigDd:r},data(){return{}},mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{}}),p={class:"gap-4"},g=t("Nom:"),b=t("Prenom:"),v=t("Adresse:"),j=t("Cin:"),B=t("Phone:"),C=t("Email:"),$=t("Ddn:"),k=t("Fichiers:"),w=t("Created at:"),y=t("Updated at:"),D={class:"pt-2"},N=a("i",{class:"mr-2 fas fa-calendar-check"},null,-1),P=t("List des rendez-vous"),F=a("i",{class:"mr-2 fas fa-file-alt"},null,-1),I=t("List des fichiers");function J(o,S,V,z,E,L){const s=i("jig-dd"),l=i("inertia-button");return h(),c("dl",p,[d(s,null,{dt:e(()=>[g]),default:e(()=>[t(" "+n(o.model.nom),1)]),_:1}),d(s,null,{dt:e(()=>[b]),default:e(()=>[t(" "+n(o.model.prenom),1)]),_:1}),d(s,null,{dt:e(()=>[v]),default:e(()=>[t(" "+n(o.model.adresse),1)]),_:1}),d(s,null,{dt:e(()=>[j]),default:e(()=>[t(" "+n(o.model.cin),1)]),_:1}),d(s,null,{dt:e(()=>[B]),default:e(()=>[t(" "+n(o.model.phone),1)]),_:1}),d(s,null,{dt:e(()=>[C]),default:e(()=>[t(" "+n(o.model.email),1)]),_:1}),d(s,null,{dt:e(()=>[$]),default:e(()=>[t(" "+n(o.model.ddn),1)]),_:1}),d(s,null,{dt:e(()=>[k]),default:e(()=>[t(" "+n(o.model.count_fichiers),1)]),_:1}),d(s,null,{dt:e(()=>[w]),default:e(()=>[t(" "+n(o.model.created_at),1)]),_:1}),d(s,null,{dt:e(()=>[y]),default:e(()=>[t(" "+n(o.model.updated_at),1)]),_:1}),a("div",D,[d(l,{href:o.route("admin.rendez-vouses.index",{patient_id:o.model?o.model.id:null}),classes:"bg-green-100 hover:bg-green-200 text-primary mr-7"},{default:e(()=>[N,P]),_:1},8,["href"]),d(l,{href:o.route("admin.fichiers.index",{patient_id:o.model?o.model.id:null}),classes:"bg-green-100 hover:bg-green-200 text-primary"},{default:e(()=>[F,I]),_:1},8,["href"])])])}var q=_(f,[["render",J]]);export{q as default};
