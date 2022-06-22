<template>
    <dl class="gap-4">
        <jig-dd>
            <template #dt>Consultation:</template>
            {{ model.consultation ? model.consultation.note : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Tache:</template>
            {{ model.tache ? model.tache.name : '-' }}
        </jig-dd>
        <jig-dd>
            <template #dt>Remises:</template>
            {{ model.remises }}
        </jig-dd>
        <jig-dd>
            <template #dt>Type de remises:</template>
            {{ model.pourcentage_remises? "Pourcentage" : "Montant" }}
        </jig-dd>
        <jig-dd>
            <template #dt>Commentaire:</template>
            {{ model.commentaire }}
        </jig-dd>
        <div class="mt-2 text-right">
            <inertia-button @click="printReport" class="font-semibold text-white bg-indigo-600 mt-2 mr-2"> <i class="fas fa-print"></i> Imprimer le compte rendu</inertia-button>
            <inertia-button @click="printInvoice" class="font-semibold text-white bg-indigo-600 mt-2"> <i class="fas fa-file-invoice-dollar"></i> Imprimer la facture</inertia-button>
        </div>
    </dl>
</template>

<script>
    import JigDd from "@/JigComponents/JigDd.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import DisplayMixin from "@/Mixins/DisplayMixin.js";

    import { defineComponent } from "vue";

    export default defineComponent({
        name: "ShowConsultationTachesForm",
        props: {
            model: Object,
        },
        components: {
            InertiaButton,
            JigDd,
        },
        mixins: [
            DisplayMixin,
        ],
        data() {
            return {}
        },
        mounted() {},
        computed: {
            flash() {
                return this.$page.props.flash || {}
            }
        },
        methods: {
            async printInvoice(){
                await axios.get(this.route('api.consultation-taches.print-invoice',{'consultation_tache_id': this.model.id}), { responseType: "blob" }).then(res => {
                    this.displayNotification('success', "Consultation Tache Invoice Printed");
                    const blob = new Blob([res.data], { type: "application/pdf" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = 'consultation-tache-invoice.pdf';
                    link.click();
                    URL.revokeObjectURL(link.href);
                }).catch(err => {
                    this.displayNotification('error', err.response?.data?.message || err.message || err);
                }).finally(res => {
                    // this.displayNotification('success', "finally");
                });
            },         
            async printReport(){
                await axios.get(this.route('api.consultations-taches.print-report',{'consultation_tache_id': this.model.id}), { responseType: "blob" }).then(res => {
                    this.displayNotification('success', "Consultation Tache Report Printed");
                    const blob = new Blob([res.data], { type: "application/pdf" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = 'consultation-tache-report.pdf';
                    link.click();
                    URL.revokeObjectURL(link.href);
                }).catch(err => {
                    this.displayNotification('error', err.response?.data?.message || err.message || err);
                }).finally(res => {
                    // this.displayNotification('success', "finally");
                });
            },
        }
    });
</script>

<style scoped>

</style>
