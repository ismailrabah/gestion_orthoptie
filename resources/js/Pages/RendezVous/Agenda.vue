<template>
    <jig-layout>
        <template #header>
            <div class="flex flex-wrap items-center justify-between w-full px-4">
                <inertia-link :href="route('admin.dashboard')" class="text-xl font-black text-white"><i class="fas fa-arrow-left"></i> Back</inertia-link>
                <!-- <div v-if="message" class="notification is-success">{{ message }}</div> -->
                
                <div class="flex flex-wrap items-center justify-end w-full ">
                    <inertia-button v-if="can.create" :href="route('admin.rendez-vouses.create')" classes="bg-green-100 hover:bg-green-200 text-primary"><i class="fas fa-plus"></i> NewRendez Vou</inertia-button>
                    <inertia-button @click="agendaItems()" classes="bg-indigo-100 hover:bg-green-200 text-indigo m-2"><i class="fas fa-sync-alt"></i> Refresh</inertia-button>
                </div>
            </div>
        </template>
        <div v-if="can.viewAny" class="flex flex-wrap px-4">
            <div class="z-10 flex-auto bg-white md:rounded-md md:shadow-md">
                <h3 class="w-full p-4 mb-4 text-lg font-black sm:rounded-t-lg bg-primary-100 "><i class="mr-2 fas fa-bars"></i> 
                    Agenda
                    <div class="float-right -mt-4 h-sm">
                        <select class="" v-model="displayPeriodUom" @change="onDisplayPeriodUomChange($event)">
                            <option>month</option>
                            <option>week</option>
                            <option>year</option>
                        </select>
                        <select class="" v-model="displayPeriodCount">
                            <option :value="1">1</option>
                            <option :value="2">2</option>
                            <option :value="3">3</option>
                            <option :value="4">4</option>
                        </select>
                    </div>
                </h3>
                   
                <div  class="w-full agenda-sec flex flex-wrap">
                    <div class="calendar-parent">
                        <calendar-view
                            :items="items"
                            :show-date="showDate"
                            :time-format-options="{ hour: 'numeric', minute: '2-digit' ,hour12: false  }"
                            :enable-drag-drop="true"
                            :disable-past="disablePast"
                            :disable-future="disableFuture"
                            :show-times="showTimes"
                            :date-classes="myDateClasses"
                            :display-period-uom="displayPeriodUom"
                            :display-period-count="displayPeriodCount"
                            :starting-day-of-week="startingDayOfWeek"
                            :class="themeClasses"
                            :period-changed-callback="periodChanged"
                            :current-period-label="useTodayIcons ? 'icons' : ''"
                            :displayWeekNumbers="displayWeekNumbers"
                            :enableDateSelection="true" 
                            :enable-date-selection="true"
                            :selection-start="selectionStart"
                            :selection-end="selectionEnd"
                            @date-selection-start="setSelection"
                            @date-selection="setSelection"
                            @date-selection-finish="finishSelection"
                            @drop-on-date="onDrop"
                            @click-date="onClickDay"
                            @click-item="onClickItem"
                        >
                            <template #header="{ headerProps }">
                                <calendar-view-header slot="header" :header-props="headerProps" @input="setShowDate" />
                            </template>
                        </calendar-view>
                    </div>
                </div>
                <jet-confirmation-modal title="Confirm Deletion" :show="confirmDelete">
                    <template v-slot:content>
                        <div>Are you sure you want to delete this record?</div>
                    </template>
                    <template v-slot:footer>
                        <div class="flex justify-end gap-x-2">
                            <inertia-button as="button" type="button" @click.native.stop="cancelDelete" class="bg-red-500">Cancel</inertia-button>
                            <inertia-button as="button" type="button" @click.native.prevent="deleteModel" class="bg-green-500">Yes, Delete</inertia-button>
                        </div>
                    </template>
                </jet-confirmation-modal>
                <div v-if="showModal && currentModel">
                    <jig-modal
                        :show="showModal"
                        corner-class="rounded-lg"
                        position-class="align-middle"
                        @close="currentModel = null; showModal = false">

                        <template #title>Show Rendez Vou #{{currentModel.id}}</template>
                        <show-rendez-vous-form :model="currentModel"></show-rendez-vous-form>
                        <template #footer>
                            <inertia-button class="px-4 text-white bg-primary" @click="showModal = false; currentModel = null">Close</inertia-button>
                        </template>
                    </jig-modal>
                </div>
            </div>
        </div>
        <div v-else class="p-4 font-bold text-red-500 bg-red-100 rounded-md shadow-md ">
            You are not authorized to view a list of Rendez Vous
        </div>
    </jig-layout>
</template>

<script>
    import JigLayout from "@/Layouts/JigLayout.vue";
    import JetConfirmationModal from "@/Jetstream/ConfirmationModal.vue";
    import JetDialogModal from "@/Jetstream/DialogModal.vue";
    import InertiaButton from "@/JigComponents/InertiaButton.vue";
    import JigModal from "@/JigComponents/JigModal.vue";
    import DtComponent from "@/JigComponents/DtComponent.vue";
    import DisplayMixin from "@/Mixins/DisplayMixin.js";
    import ShowRendezVousForm from "@/Pages/RendezVous/ShowForm.vue";
    import InfiniteSelect from '@/JigComponents/InfiniteSelect.vue';
    import { defineComponent } from "vue";
    import moment from 'moment';
    import {useForm} from "@inertiajs/inertia-vue3";
    import { CalendarView, CalendarViewHeader, CalendarMath } from "vue-simple-calendar";
    import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal';

    export default defineComponent({
        name: "Agenda",
        components: {
            DtComponent,
            InertiaButton,
            JetConfirmationModal,
            JetDialogModal,
            JigModal,
            JigLayout,
            ShowRendezVousForm,
            CalendarView,
            CalendarViewHeader,
            CalendarMath,
            VueFinalModal,
            ModalsContainer,
            InfiniteSelect,
        },
        props: {
            can: Object,
        },
        inject: ["$refreshDt","$dayjs"],
        data() {
            return {
                confirmDelete: false,
                currentModel: null,
                showModal: false,

                showDate: this.thisMonth(1),
                message: "",
                startingDayOfWeek: 1,
                disablePast: false,
                disableFuture: false,
                displayPeriodUom: "month",
                displayPeriodCount: 1,
                displayWeekNumbers: true,
                showTimes: true,
                selectionStart: null,
                selectionEnd: null,

                newItemTitle: "",
                newItemStartDate: "",
                newItemEndDate: "",
                useDefaultTheme: true,
                useHolidayTheme: true,
                useTodayIcons: false,

                items: [],

                selected_date:new Date(),
                selectedItem: null,
            }
        },
        mixins: [
            DisplayMixin,
        ],
        mounted() {
            this.newItemStartDate = CalendarMath.isoYearMonthDay(CalendarMath.today());
            this.newItemEndDate = CalendarMath.isoYearMonthDay(CalendarMath.today());
            this.agendaItems()
        },
        computed: {
            flash() {
                return this.$page.props.flash || {}
            },
            userLocale() {
                return CalendarMath.getDefaultBrowserLocale
            },
            dayNames() {
                return CalendarMath.getFormattedWeekdayNames(this.userLocale, "long", 0)
            },
            themeClasses() {
                return {
                    "theme-default": this.useDefaultTheme,
                    "holiday-us-traditional": this.useHolidayTheme,
                    "holiday-us-official": this.useHolidayTheme,
                }
            },
            myDateClasses() {
                const o = {}
                const theFirst = this.thisMonth(1)
                const ides = [2, 4, 6, 9].includes(theFirst.getMonth()) ? 15 : 13
                const idesDate = this.thisMonth(ides)
                o[CalendarMath.isoYearMonthDay(idesDate)] = "ides"
                o[CalendarMath.isoYearMonthDay(this.thisMonth(21))] = ["do-you-remember", "the-21st"]
                return o
            },
        },
        methods: {
            periodChanged() {
                // console.log('periodChanged called');
            },
            agendaItems(){
                let sb_start_date = this.showDate;
                if(this.displayPeriodUom != 'week'){
                    sb_start_date = CalendarMath.addDays(sb_start_date , -14);
                }else{
                    sb_start_date = CalendarMath.addDays(sb_start_date , -7);
                }
                axios.get(route('api.rendez-vouses.agenda',{
                            'displayPeriodUom': this.displayPeriodUom ,
                            'displayPeriodCount' : this.displayPeriodCount ,
                            'start_date': sb_start_date.toLocaleDateString(),
                        }
                    )).then(res => {
                        this.items = res.data.payload.items;
                })
            },
            onDisplayPeriodUomChange(){
                this.agendaItems()
            },
            showModel(model) {
                axios.get(route('api.rendez-vouses.show',model)).then(res => {
                    this.currentModel = res.data.payload;
                    this.showModal = true;
                })
                // this.$inertia.visit(this.route('admin.rendez-vouses.show',model.id));
            },
            editModel(model) {
                this.$inertia.visit(this.route('admin.rendez-vouses.edit',model.id));
            },
            confirmDeletion(model) {
                this.currentModel = model;
                this.confirmDelete = true;
            },
            cancelDelete() {
                this.currentModel = false;
                this.confirmDelete = false;
            },
            async deleteModel() {
                const vm = this;
                this.confirmDelete = false;
                if (this.currentModel) {
                    this.$inertia.delete(route('admin.rendez-vouses.destroy', vm.currentModel),{
                        onFinish: res => {
                            this.displayNotification('success', "Item deleted.");
                            vm.$refreshDt(vm.tableId);
                        },
                        onError: err => {
                            console.log(err);
                            this.displayNotification('error', "There was an error while deleting the item.");
                        }
                    });
                }
            },
            thisMonth(d, h, m) {
                const t = new Date()
                return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
            },
            onClickDay(d) {
                this.selectionStart = null
                this.selectionEnd = null
                console.log("onClickDay");
            },
            onClickItem(e) {
                console.log("onClickItem");
            },
            setShowDate(d,elff) {
                this.showDate = d
                this.agendaItems()
                console.log("setShowDate");
            },
            setSelection(dateRange) {
                this.selectionEnd = dateRange[1]
                this.selectionStart = dateRange[0]
                console.log("setSelection");
            },
            finishSelection(dateRange) {
                this.setSelection(dateRange)
                console.log("finishSelection");
            },
            onDrop(item, date) {
                // Determine the delta between the old start date and the date chosen,
                // and apply that delta to both the start and end date to move the item.
                let elem_ = item.originalItem;
                let thos = this;
                console.log("onDrop");
            },
            clickTestAddItem() {
                this.items.push({
                    startDate: this.newItemStartDate,
                    endDate: this.newItemEndDate,
                    title: this.newItemTitle,
                    id: "e" + Math.random().toString(36).substr(2, 10),
                })
                console.log("clickTestAddItem");
            },
        }
    });
</script>


<style>
    button:disabled{
        cursor: not-allowed;
    }
    .agenda-sec{
        height: 650px;
        margin-top: -35px;
    }
    .calendar-controls {
        margin-right: 1rem;
        min-width: 14rem;
        max-width: 14rem;
    }
    .calendar-parent {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow-x: hidden;
        overflow-y: hidden;
        background-color: white;
    }
    /* For long calendars, ensure each week gets sufficient height. The body of the calendar will scroll if needed */
    .cv-wrapper.period-month.periodCount-2 .cv-week,
    .cv-wrapper.period-month.periodCount-3 .cv-week,
    .cv-wrapper.period-year .cv-week {
        min-height: 6rem;
    }
    .theme-default .cv-item.bg-green-100{
        background-color: rgba(209,250,229,var(--tw-bg-opacity));
    }
    .theme-default .cv-item.bg-blue{
        background-color: #0d6efd;
    }
    .theme-default .cv-item.bg-indigo{
        background-color: #6610f2;
    }
    .theme-default .cv-item.bg-purple{
        background-color: #6f42c1;
    }
    .theme-default .cv-item.bg-pink{
        background-color: #d63384;
    }
    .theme-default .cv-item.bg-red{
        background-color: #dc3545;
    }
    .theme-default .cv-item.bg-orange{
        background-color: #fd7e14;
    }
    .theme-default .cv-item.bg-yellow{
        background-color: #ffc107;
    }
    .theme-default .cv-item.bg-green{
        background-color: #198754;
    }
    .theme-default .cv-item.bg-teal{
        background-color: #20c997;
    }
    .theme-default .cv-item.bg-cyan{
        background-color: #0dcaf0;
    }
    .theme-default .cv-day.ides {
        background-color: #ffe0e0;
    }
    .ides .cv-day-number::before {
        content: "\271D";
    }
    .cv-day.do-you-remember.the-21st .cv-day-number::after {
        content: "\1F30D\1F32C\1F525";
    }
    .agenda_select_filters{
        width: 200px;
        display: inline-block;
        margin-right: 10px;
    }
</style>

<style scoped>
    ::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    ::v-deep .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
    }
    .modal__title {
    margin: 0 2rem 0 0;
    font-size: 1.5rem;
    font-weight: 700;
    }
    .modal__content {
    flex-grow: 1;
    overflow-y: auto;
    }
    .modal__action {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    padding: 1rem 0 0;
    }
    .modal__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    }
    .dark-mode div::v-deep .modal-content {
        border-color: #2d3748;
        background-color: #1a202c;
    }
</style>

<style>
    @import "../../../css/vue-simple-calendar/dist/style.css";
    @import "../../../css/vue-simple-calendar/static/css/default.css";
    @import "../../../css/vue-simple-calendar/static/css/holidays-us.css";
</style>