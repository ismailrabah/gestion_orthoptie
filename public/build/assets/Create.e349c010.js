import{J as c}from"./JigLayout.4b8eecd7.js";import{I as l}from"./InertiaButton.d4eeaf43.js";import m from"./CreateForm.d569ce43.js";import{D as p}from"./DisplayMixin.328c366f.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";import{j as u,e as o,o as f,f as _,w as s,g as e,x as a,i as x}from"./vendor.0e2d33d8.js";import"./DialogModal.a0065cb1.js";import"./JigDatepicker.27151b7c.js";import"./vue-flatpickr.min.3ea540b1.js";import"./main.011ecaf6.js";import"./Input.268af2b6.js";import"./InfiniteSelect.e52428db.js";import"./Label.6a56508f.js";import"./InputError.8fba5cb1.js";const h=u({name:"CreateConsultations",components:{InertiaButton:l,JigLayout:c,CreateConsultationsForm:m},data(){return{}},mixins:[p],mounted(){},computed:{flash(){return this.$page.props.flash||{}}},methods:{onSuccess(t){this.displayNotification("success",t),this.$inertia.visit(route("admin.consultations.index"))},onError(t){this.displayNotification("error",t)}}}),j={class:"flex flex-wrap items-center justify-between w-full px-4"},b=e("i",{class:"fas fa-arrow-left"},null,-1),w=x(" Back | New Consultation "),g={class:"flex flex-wrap px-4"},C={class:"z-10 flex-auto max-w-2xl p-4 mx-auto bg-white md:rounded-md md:shadow-md"};function v(t,y,k,B,I,N){const i=o("inertia-link"),n=o("create-consultations-form"),r=o("jig-layout");return f(),_(r,null,{header:s(()=>[e("div",j,[a(i,{href:t.route("admin.consultations.index"),class:"text-xl font-black text-white"},{default:s(()=>[b,w]),_:1},8,["href"])])]),default:s(()=>[e("div",g,[e("div",C,[a(n,{onSuccess:t.onSuccess,onError:t.onError},null,8,["onSuccess","onError"])])])]),_:1})}var H=d(h,[["render",v]]);export{H as default};