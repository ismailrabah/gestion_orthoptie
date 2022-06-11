var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, reactive, computed, watch, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createElementVNode, createCommentVNode, Fragment, renderList, toDisplayString, withModifiers, normalizeStyle, createTextVNode } from "vue";
const today = () => dateOnly(new Date());
const beginningOfPeriod = (d, periodUom, startDow) => {
  switch (periodUom) {
    case "year":
      return new Date(d.getFullYear(), 0);
    case "month":
      return new Date(d.getFullYear(), d.getMonth());
    case "week":
      return beginningOfWeek(d, startDow);
    default:
      return d;
  }
};
const daysOfWeek = (weekStart) => [...Array(7)].map((_, i) => addDays(weekStart, i));
const addDays = (d, days) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + days, d.getHours(), d.getMinutes(), d.getSeconds());
const beginningOfWeek = (d, startDow) => addDays(d, (startDow - d.getDay() - 7) % -7);
const endOfWeek = (d, startDow) => addDays(beginningOfWeek(d, startDow), 7);
const beginningOfMonth = (d) => new Date(d.getFullYear(), d.getMonth());
const instanceOfMonth = (d) => Math.ceil(d.getDate() / 7);
const incrementPeriod = (d, uom, count) => new Date(d.getFullYear() + (uom == "year" ? count : 0), d.getMonth() + (uom == "month" ? count : 0), d.getDate() + (uom == "week" ? count * 7 : 0));
const paddedMonth = (d) => ("0" + String(d.getMonth() + 1)).slice(-2);
const paddedDay = (d) => ("0" + String(d.getDate())).slice(-2);
const isoYearMonth = (d) => d.getFullYear() + "-" + paddedMonth(d);
const isoYearMonthDay = (d) => isoYearMonth(d) + "-" + paddedDay(d);
const isoMonthDay = (d) => paddedMonth(d) + "-" + paddedDay(d);
const formattedTime = (d, locale, options) => {
  if (d.getHours() === 0 && d.getMinutes() === 0 && d.getSeconds() === 0)
    return "";
  if (!supportsIntl()) {
    var ms = new Date().getTimezoneOffset() * 6e4;
    return new Date(d.getTime() - ms).toISOString().slice(11, 16);
  }
  return d.toLocaleTimeString(locale, options);
};
const formattedPeriod = (startDate, endDate, periodUom, monthNames) => {
  const singleYear = startDate.getFullYear() === endDate.getFullYear();
  const singleMonth = isSameMonth(startDate, endDate);
  const isYear = periodUom === "year";
  const isMonth = periodUom === "month";
  const isWeek = !isYear && !isMonth;
  let s = [];
  s.push(monthNames[startDate.getMonth()]);
  if (isWeek) {
    s.push(" ");
    s.push(startDate.getDate());
  }
  if (!singleYear) {
    s.push(isWeek ? ", " : " ");
    s.push(startDate.getFullYear());
  }
  if (!singleMonth || !singleYear) {
    s.push(" \u2013 ");
    if (!singleMonth) {
      s.push(monthNames[endDate.getMonth()]);
    }
    if (isWeek)
      s.push(" ");
  } else if (isWeek) {
    s.push(" \u2013 ");
  }
  if (isWeek) {
    s.push(endDate.getDate());
    s.push(", ");
  } else {
    s.push(" ");
  }
  s.push(endDate.getFullYear());
  return s.join("");
};
const dayDiff = (d1, d2) => {
  const endDate = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate()), startDate = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
  return (endDate - startDate) / 864e5;
};
const isSameDate = (d1, d2) => d1 && d2 && dayDiff(d1, d2) === 0;
const isSameDateTime = (d1, d2) => d1 && d2 && d1.getTime() === d2.getTime();
const isSameMonth = (d1, d2) => d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth();
const isPastMonth = (d) => beginningOfMonth(d) < beginningOfMonth(today());
const isFutureMonth = (d) => beginningOfMonth(d) > beginningOfMonth(today());
const isInFuture = (d) => dateOnly(d) > today();
const isInPast = (d) => dateOnly(d) < today();
const isLastInstanceOfMonth = (d) => d.getMonth() !== addDays(d, 7).getMonth();
const isLastDayOfMonth = (d) => d.getMonth() !== addDays(d, 1).getMonth();
const fromIsoStringToLocalDate = (s) => {
  let d = [...Array(7)].map((_) => 0);
  s.split(/\D/, 7).forEach((s2, i) => d[i] = Number(s2));
  d[1]--;
  return new Date(d[0], d[1], d[2], d[3], d[4], d[5], d[6]);
};
const toLocalDate = (d) => typeof d === "string" ? fromIsoStringToLocalDate(d) : new Date(d);
const dateOnly = (d) => {
  const d2 = new Date(d);
  d2.setHours(0, 0, 0, 0);
  return d2;
};
const languageCode = (l) => l.substring(0, 2);
const supportsIntl = () => typeof Intl !== "undefined";
const getFormattedMonthNames = (locale, format) => {
  if (!supportsIntl())
    return [...Array(12)].map((_) => "");
  const formatter = new Intl.DateTimeFormat(locale, { month: format });
  return [...Array(12)].map((_, i) => formatter.format(new Date(2017, i, 1)));
};
const getFormattedWeekdayNames = (locale, format, startingDayOfWeek) => {
  if (!supportsIntl())
    return [...Array(7)].map((_) => "");
  const formatter = new Intl.DateTimeFormat(locale, { weekday: format });
  return [...Array(7)].map((_, i) => formatter.format(new Date(2017, 0, (i + 1 + startingDayOfWeek) % 7)));
};
const getDefaultBrowserLocale = () => {
  if (typeof navigator === "undefined")
    return "unk";
  return (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language).toLowerCase();
};
const normalizeItem = (item, isHovered) => {
  const itemClasses = item.classes ? [...item.classes] : [];
  if (isHovered)
    itemClasses.push("isHovered");
  return {
    originalItem: item,
    startDate: toLocalDate(item.startDate),
    endDate: toLocalDate(item.endDate || item.startDate),
    classes: itemClasses,
    title: item.title || "Untitled",
    id: item.id,
    url: item.url
  };
};
var CalendarMath = {
  addDays,
  beginningOfMonth,
  beginningOfPeriod,
  beginningOfWeek,
  dateOnly,
  dayDiff,
  daysOfWeek,
  endOfWeek,
  formattedPeriod,
  formattedTime,
  fromIsoStringToLocalDate,
  getDefaultBrowserLocale,
  getFormattedMonthNames,
  getFormattedWeekdayNames,
  incrementPeriod,
  instanceOfMonth,
  isFutureMonth,
  isInFuture,
  isInPast,
  isLastDayOfMonth,
  isLastInstanceOfMonth,
  isoMonthDay,
  isoYearMonth,
  isoYearMonthDay,
  isPastMonth,
  isSameDate,
  isSameDateTime,
  isSameMonth,
  languageCode,
  normalizeItem,
  paddedDay,
  paddedMonth,
  supportsIntl,
  today,
  toLocalDate
};
class CalendarViewState {
  constructor() {
    __publicField(this, "currentDragItem", null);
    __publicField(this, "dateSelectionOrigin", null);
    __publicField(this, "currentHoveredItemId", "");
    __publicField(this, "CalendarMath", CalendarMath);
  }
}
var CalendarView_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "cv-header-days" };
const _hoisted_2$1 = {
  key: 0,
  class: "cv-weeknumber"
};
const _hoisted_3$1 = ["aria-multiselectable"];
const _hoisted_4$1 = {
  key: 0,
  class: "cv-weeknumber"
};
const _hoisted_5$1 = { class: "cv-weekdays" };
const _hoisted_6$1 = ["draggable", "aria-grabbed", "aria-label", "aria-selected", "aria-dropeffect", "onClick", "onDragstart", "onDrop", "onDragover", "onDragenter", "onDragleave"];
const _hoisted_7$1 = { class: "cv-day-number" };
const _hoisted_8 = ["draggable", "aria-grabbed", "title", "onDragstart", "onMouseenter", "onMouseleave", "onClick", "innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    showDate: { type: Date, default: void 0 },
    displayPeriodUom: { type: String, default: "month" },
    displayPeriodCount: { type: Number, default: 1 },
    displayWeekNumbers: { type: Boolean, default: false },
    locale: { type: String, default: void 0 },
    monthNameFormat: { type: String, default: "long" },
    weekdayNameFormat: { type: String, default: "short" },
    showTimes: { type: Boolean, default: false },
    timeFormatOptions: { type: Object, default: () => {
    } },
    disablePast: { type: Boolean, default: false },
    disableFuture: { type: Boolean, default: false },
    enableDateSelection: { type: Boolean, default: false },
    selectionStart: { type: Date, default: null },
    selectionEnd: { type: Date, default: null },
    enableDragDrop: { type: Boolean, default: false },
    startingDayOfWeek: { type: Number, default: 0 },
    items: { type: Array, default: () => [] },
    dateClasses: { type: Object, default: () => {
    } },
    itemTop: { type: String, default: "1.4em" },
    itemContentHeight: { type: String, default: "1.4em" },
    itemBorderHeight: { type: String, default: "2px" },
    periodChangedCallback: { type: Function, default: void 0 },
    currentPeriodLabel: { type: String, default: "" },
    currentPeriodLabelIcons: { type: String, default: "\u21E4-\u21E5" },
    doEmitItemMouseEvents: { type: Boolean, default: false }
  },
  emits: [
    "input",
    "period-changed",
    "click-date",
    "click-item",
    "item-mouseenter",
    "item-mouseleave",
    "drag-start",
    "drag-over-date",
    "drag-enter-date",
    "drag-leave-date",
    "drop-on-date",
    "date-selection",
    "date-selection-start",
    "date-selection-finish"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const state = reactive(new CalendarViewState());
    const displayLocale = computed(() => props.locale || CalendarMath.getDefaultBrowserLocale());
    const defaultedShowDate = computed(() => props.showDate ? CalendarMath.dateOnly(props.showDate) : CalendarMath.today());
    const periodStart = computed(() => CalendarMath.beginningOfPeriod(defaultedShowDate.value, props.displayPeriodUom, props.startingDayOfWeek));
    const periodEnd = computed(() => CalendarMath.addDays(CalendarMath.incrementPeriod(periodStart.value, props.displayPeriodUom, props.displayPeriodCount), -1));
    const periodStartCalendarWeek = computed(() => {
      const firstWeekStarts = CalendarMath.beginningOfWeek(CalendarMath.beginningOfPeriod(periodStart.value, "year", 0), props.startingDayOfWeek);
      const periodWeekStarts = CalendarMath.beginningOfWeek(periodStart.value, props.startingDayOfWeek);
      return 1 + Math.floor(CalendarMath.dayDiff(firstWeekStarts, periodWeekStarts) / 7);
    });
    const displayFirstDate = computed(() => CalendarMath.beginningOfWeek(periodStart.value, props.startingDayOfWeek));
    const displayLastDate = computed(() => CalendarMath.endOfWeek(periodEnd.value, props.startingDayOfWeek));
    const weeksOfPeriod = computed(() => {
      const numWeeks = Math.floor((CalendarMath.dayDiff(displayFirstDate.value, displayLastDate.value) + 1) / 7);
      return [...Array(numWeeks)].map((_, i) => CalendarMath.addDays(displayFirstDate.value, i * 7));
    });
    const monthNames = computed(() => CalendarMath.getFormattedMonthNames(displayLocale.value, props.monthNameFormat));
    const weekdayNames = computed(() => CalendarMath.getFormattedWeekdayNames(displayLocale.value, props.weekdayNameFormat, props.startingDayOfWeek));
    const fixedItems = computed(() => {
      if (!props.items)
        return [];
      return props.items.map((item) => CalendarMath.normalizeItem(item, item.id === state.currentHoveredItemId));
    });
    const currentPeriodStart = computed(() => CalendarMath.beginningOfPeriod(CalendarMath.today(), props.displayPeriodUom, props.startingDayOfWeek));
    const currentPeriodEnd = computed(() => CalendarMath.addDays(CalendarMath.incrementPeriod(currentPeriodStart.value, props.displayPeriodUom, props.displayPeriodCount), -1));
    const periodLabel = computed(() => CalendarMath.formattedPeriod(periodStart.value, periodEnd.value, props.displayPeriodUom, monthNames.value));
    const currentPeriodLabelFinal = computed(() => {
      const c = currentPeriodStart.value;
      const s = periodStart.value;
      if (!props.currentPeriodLabel)
        return CalendarMath.formattedPeriod(c, currentPeriodEnd.value, props.displayPeriodUom, monthNames.value);
      if (props.currentPeriodLabel === "icons")
        return props.currentPeriodLabelIcons[Math.sign(c.getTime() - s.getTime()) + 1];
      return props.currentPeriodLabel;
    });
    const headerProps = computed(() => ({
      previousYear: getIncrementedPeriod(-12),
      previousPeriod: getIncrementedPeriod(-1),
      nextPeriod: getIncrementedPeriod(1),
      previousFullPeriod: getIncrementedPeriod(-props.displayPeriodCount),
      nextFullPeriod: getIncrementedPeriod(props.displayPeriodCount),
      nextYear: getIncrementedPeriod(12),
      currentPeriod: currentPeriodStart.value,
      currentPeriodLabel: currentPeriodLabelFinal.value,
      periodStart: periodStart.value,
      periodEnd: periodEnd.value,
      displayLocale: displayLocale.value,
      displayFirstDate: displayFirstDate.value,
      displayLastDate: displayLastDate.value,
      monthNames: monthNames.value,
      fixedItems: fixedItems.value,
      periodLabel: periodLabel.value
    }));
    const periodRange = computed(() => ({
      periodStart,
      periodEnd,
      displayFirstDate,
      displayLastDate
    }));
    watch(() => periodRange, (newVal) => {
      if (props.periodChangedCallback) {
        emit("period-changed");
        props.periodChangedCallback(newVal, "watch");
      }
    }, { immediate: true });
    const onClickDay = (day, windowEvent) => {
      if (props.disablePast && CalendarMath.isInPast(day))
        return;
      if (props.disableFuture && CalendarMath.isInFuture(day))
        return;
      emit("click-date", day, findAndSortItemsInDateRange(day, day), windowEvent);
    };
    const onClickItem = (calendarItem, windowEvent) => emit("click-item", calendarItem, windowEvent);
    const getColumnDOWClass = (dayIndex) => "dow" + (dayIndex + props.startingDayOfWeek) % 7;
    const getIncrementedPeriod = (count) => {
      const newStartDate = CalendarMath.incrementPeriod(periodStart.value, props.displayPeriodUom, count);
      const newEndDate = CalendarMath.incrementPeriod(newStartDate, props.displayPeriodUom, props.displayPeriodCount);
      if (props.disablePast && newEndDate <= CalendarMath.today())
        return null;
      if (props.disableFuture && newStartDate > CalendarMath.today())
        return null;
      return newStartDate;
    };
    const onMouseEnterItem = (calendarItem, windowEvent) => {
      state.currentHoveredItemId = calendarItem.id;
      if (props.doEmitItemMouseEvents) {
        emit("item-mouseenter", calendarItem, windowEvent);
      }
    };
    const onMouseLeaveItem = (calendarItem, windowEvent) => {
      state.currentHoveredItemId = "";
      if (props.doEmitItemMouseEvents) {
        emit("item-mouseleave", calendarItem, windowEvent);
      }
    };
    const onDragDateStart = (day, windowEvent) => {
      var _a, _b;
      if (!props.enableDateSelection)
        return false;
      (_a = windowEvent.dataTransfer) == null ? void 0 : _a.setData("text", day.toString());
      let img = new Image();
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
      (_b = windowEvent.dataTransfer) == null ? void 0 : _b.setDragImage(img, 10, 10);
      state.dateSelectionOrigin = day;
      emitDateSelection("date-selection-start", day, windowEvent);
      return true;
    };
    const onDragItemStart = (calendarItem, windowEvent) => {
      var _a;
      if (!props.enableDragDrop)
        return false;
      (_a = windowEvent.dataTransfer) == null ? void 0 : _a.setData("text", calendarItem.id);
      state.currentDragItem = calendarItem;
      state.dateSelectionOrigin = null;
      emit("drag-start", calendarItem, windowEvent);
      return true;
    };
    const handleDragEvent = (bubbleEventName, bubbleParam, windowEvent) => {
      if (!props.enableDragDrop)
        return false;
      emit(bubbleEventName, state.currentDragItem, bubbleParam, windowEvent);
      return true;
    };
    const onDragOver = (day, windowEvent) => {
      handleDragEvent("drag-over-date", day, windowEvent);
    };
    const onDragEnter = (day, windowEvent) => {
      if (props.enableDateSelection && state.dateSelectionOrigin) {
        emitDateSelection("date-selection", day, windowEvent);
        return;
      }
      if (!handleDragEvent("drag-enter-date", day, windowEvent))
        return;
      const el = windowEvent.target;
      el.classList.add("draghover");
    };
    const onDragLeave = (day, windowEvent) => {
      if (props.enableDateSelection && props.selectionStart)
        return;
      if (!handleDragEvent("drag-leave-date", day, windowEvent))
        return;
      const el = windowEvent.target;
      el.classList.remove("draghover");
    };
    const onDrop = (day, windowEvent) => {
      if (props.enableDateSelection && state.dateSelectionOrigin) {
        emitDateSelection("date-selection-finish", day, windowEvent);
        return;
      }
      if (!handleDragEvent("drop-on-date", day, windowEvent))
        return;
      const el = windowEvent.target;
      el.classList.remove("draghover");
    };
    const emitDateSelection = (eventName, toDate, windowEvent) => {
      if (!state.dateSelectionOrigin)
        return;
      emit(eventName, toDate <= state.dateSelectionOrigin ? [toDate, state.dateSelectionOrigin, windowEvent] : [state.dateSelectionOrigin, toDate, windowEvent]);
    };
    const itemComparer = (a, b) => {
      if (a.startDate < b.startDate)
        return -1;
      if (b.startDate < a.startDate)
        return 1;
      if (a.endDate > b.endDate)
        return -1;
      if (b.endDate > a.endDate)
        return 1;
      return a.id < b.id ? -1 : 1;
    };
    const findAndSortItemsInWeek = (weekStart) => findAndSortItemsInDateRange(weekStart, CalendarMath.addDays(weekStart, 6));
    const findAndSortItemsInDateRange = (startDate, endDate) => fixedItems.value.filter((item) => item.endDate >= startDate && CalendarMath.dateOnly(item.startDate) <= endDate, this).sort(itemComparer);
    const dayHasItems = (day) => !!fixedItems.value.find((d) => d.endDate >= day && CalendarMath.dateOnly(d.startDate) <= day);
    const dayIsSelected = (day) => {
      if (!props.selectionStart || !props.selectionEnd)
        return false;
      if (day < CalendarMath.dateOnly(props.selectionStart))
        return false;
      if (day > CalendarMath.dateOnly(props.selectionEnd))
        return false;
      return true;
    };
    const getWeekItems = (weekStart) => {
      const items = findAndSortItemsInWeek(weekStart);
      const results = [];
      const itemRows = [[], [], [], [], [], [], []];
      for (let i = 0; i < items.length; i++) {
        const ep = Object.assign({}, items[i], {
          classes: [...items[i].classes],
          itemRow: 0
        });
        const continued = ep.startDate < weekStart;
        const startOffset = continued ? 0 : CalendarMath.dayDiff(weekStart, ep.startDate);
        const span = Math.min(7 - startOffset, CalendarMath.dayDiff(CalendarMath.addDays(weekStart, startOffset), ep.endDate) + 1);
        if (continued)
          ep.classes.push("continued");
        if (CalendarMath.dayDiff(weekStart, ep.endDate) > 6)
          ep.classes.push("toBeContinued");
        if (CalendarMath.isInPast(ep.endDate))
          ep.classes.push("past");
        if (ep.originalItem.url)
          ep.classes.push("hasUrl");
        for (let d = 0; d < 7; d++) {
          if (d === startOffset) {
            let s = 0;
            while (itemRows[d][s])
              s++;
            ep.itemRow = s;
            itemRows[d][s] = true;
          } else if (d < startOffset + span) {
            itemRows[d][ep.itemRow] = true;
          }
        }
        ep.classes.push(`offset${startOffset}`);
        ep.classes.push(`span${span}`);
        results.push(ep);
      }
      return results;
    };
    const getFormattedTimeRange = (item) => {
      const startTime = '<span class="startTime">' + CalendarMath.formattedTime(item.startDate, displayLocale.value, props.timeFormatOptions) + "</span>";
      let endTime = "";
      if (!CalendarMath.isSameDateTime(item.startDate, item.endDate)) {
        endTime = '<span class="endTime">' + CalendarMath.formattedTime(item.endDate, displayLocale.value, props.timeFormatOptions) + "</span>";
      }
      return startTime + endTime;
    };
    const getItemTitle = (item) => {
      if (!props.showTimes)
        return item.title;
      return getFormattedTimeRange(item) + " " + item.title;
    };
    const getItemTop = (item) => {
      const r = item.itemRow;
      const h = props.itemContentHeight;
      const b = props.itemBorderHeight;
      return `calc(${props.itemTop} + ${r}*${h} + ${r}*${b})`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "aria-label": "Calendar",
        class: normalizeClass([
          "cv-wrapper",
          "locale-" + unref(CalendarMath).languageCode(unref(displayLocale)),
          "locale-" + unref(displayLocale),
          "y" + unref(periodStart).getFullYear(),
          "m" + unref(CalendarMath).paddedMonth(unref(periodStart)),
          "period-" + __props.displayPeriodUom,
          "periodCount-" + __props.displayPeriodCount,
          {
            past: unref(CalendarMath).isPastMonth(unref(periodStart)),
            future: unref(CalendarMath).isFutureMonth(unref(periodStart)),
            noIntl: !unref(CalendarMath).supportsIntl
          }
        ])
      }, [
        renderSlot(_ctx.$slots, "header", { headerProps: unref(headerProps) }),
        createElementVNode("div", _hoisted_1$1, [
          __props.displayWeekNumbers ? (openBlock(), createElementBlock("div", _hoisted_2$1)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(weekdayNames), (label, index) => {
            return renderSlot(_ctx.$slots, "dayHeader", {
              index: getColumnDOWClass(index),
              label
            }, () => [
              (openBlock(), createElementBlock("div", {
                key: getColumnDOWClass(index),
                class: normalizeClass([getColumnDOWClass(index), "cv-header-day"])
              }, toDisplayString(label), 3))
            ]);
          }), 256))
        ]),
        createElementVNode("div", {
          "aria-multiselectable": __props.enableDateSelection,
          class: "cv-weeks"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(weeksOfPeriod), (weekStart, weekIndex) => {
            return openBlock(), createElementBlock("div", {
              key: `${weekIndex}-week`,
              class: normalizeClass(["cv-week", "week" + (weekIndex + 1), "ws" + unref(CalendarMath).isoYearMonthDay(weekStart)])
            }, [
              __props.displayWeekNumbers ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
                renderSlot(_ctx.$slots, "weekNumber", {
                  date: weekStart,
                  numberInYear: unref(periodStartCalendarWeek) + weekIndex,
                  numberInPeriod: weekIndex + 1
                }, () => [
                  createElementVNode("span", null, toDisplayString(unref(periodStartCalendarWeek) + weekIndex), 1)
                ])
              ])) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_5$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(CalendarMath).daysOfWeek(weekStart), (day, dayIndex) => {
                  return openBlock(), createElementBlock("div", {
                    key: getColumnDOWClass(dayIndex),
                    draggable: __props.enableDateSelection,
                    class: normalizeClass([
                      "cv-day",
                      getColumnDOWClass(dayIndex),
                      "d" + unref(CalendarMath).isoYearMonthDay(day),
                      "d" + unref(CalendarMath).isoMonthDay(day),
                      "d" + unref(CalendarMath).paddedDay(day),
                      "instance" + unref(CalendarMath).instanceOfMonth(day),
                      {
                        today: unref(CalendarMath).isSameDate(day, unref(CalendarMath).today()),
                        outsideOfMonth: !unref(CalendarMath).isSameMonth(day, unref(defaultedShowDate)),
                        past: unref(CalendarMath).isInPast(day),
                        future: unref(CalendarMath).isInFuture(day),
                        last: unref(CalendarMath).isLastDayOfMonth(day),
                        lastInstance: unref(CalendarMath).isLastInstanceOfMonth(day),
                        hasItems: dayHasItems(day),
                        selectionStart: unref(CalendarMath).isSameDate(day, __props.selectionStart),
                        selectionEnd: unref(CalendarMath).isSameDate(day, __props.selectionEnd)
                      },
                      ...__props.dateClasses && __props.dateClasses[unref(CalendarMath).isoYearMonthDay(day)] || []
                    ]),
                    "aria-grabbed": __props.enableDateSelection ? dayIsSelected(day) : void 0,
                    "aria-label": day.getDate().toString(),
                    "aria-selected": dayIsSelected(day),
                    "aria-dropeffect": __props.enableDragDrop && unref(state).currentDragItem ? "move" : __props.enableDateSelection && unref(state).dateSelectionOrigin ? "execute" : "none",
                    onClick: ($event) => onClickDay(day, $event),
                    onDragstart: ($event) => onDragDateStart(day, $event),
                    onDrop: withModifiers(($event) => onDrop(day, $event), ["prevent"]),
                    onDragover: withModifiers(($event) => onDragOver(day, $event), ["prevent"]),
                    onDragenter: withModifiers(($event) => onDragEnter(day, $event), ["prevent"]),
                    onDragleave: withModifiers(($event) => onDragLeave(day, $event), ["prevent"])
                  }, [
                    createElementVNode("div", _hoisted_7$1, toDisplayString(day.getDate()), 1),
                    renderSlot(_ctx.$slots, "dayContent", { day })
                  ], 42, _hoisted_6$1);
                }), 128)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(getWeekItems(weekStart), (i) => {
                  return renderSlot(_ctx.$slots, "item", {
                    value: i,
                    weekStartDate: weekStart,
                    top: getItemTop(i)
                  }, () => [
                    (openBlock(), createElementBlock("div", {
                      key: i.id,
                      draggable: __props.enableDragDrop,
                      "aria-grabbed": __props.enableDragDrop ? i == unref(state).currentDragItem : void 0,
                      class: normalizeClass([i.classes, "cv-item"]),
                      title: i.title,
                      style: normalizeStyle(`top:${getItemTop(i)};${i.originalItem.style}`),
                      onDragstart: ($event) => onDragItemStart(i, $event),
                      onMouseenter: ($event) => onMouseEnterItem(i, $event),
                      onMouseleave: ($event) => onMouseLeaveItem(i, $event),
                      onClick: withModifiers(($event) => onClickItem(i, $event), ["stop"]),
                      innerHTML: getItemTitle(i)
                    }, null, 46, _hoisted_8))
                  ]);
                }), 256))
              ])
            ], 2);
          }), 128))
        ], 8, _hoisted_3$1)
      ], 2);
    };
  }
});
var CalendarViewHeader_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "cv-header" };
const _hoisted_2 = { class: "cv-header-nav" };
const _hoisted_3 = ["disabled"];
const _hoisted_4 = ["disabled", "innerHTML"];
const _hoisted_5 = ["disabled"];
const _hoisted_6 = ["disabled"];
const _hoisted_7 = { class: "periodLabel" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    headerProps: {
      type: Object,
      required: true
    },
    previousYearLabel: { type: String, default: "<<" },
    previousPeriodLabel: { type: String, default: "<" },
    nextPeriodLabel: { type: String, default: ">" },
    nextYearLabel: { type: String, default: ">>" }
  },
  emits: ["input"],
  setup(__props, { emit }) {
    const onInput = (d) => emit("input", d);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("button", {
            disabled: !__props.headerProps.previousYear,
            class: "previousYear",
            "aria-label": "Previous Year",
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => onInput(__props.headerProps.previousYear), ["prevent"]))
          }, toDisplayString(__props.previousYearLabel), 9, _hoisted_3),
          createElementVNode("button", {
            disabled: !__props.headerProps.previousPeriod,
            class: "previousPeriod",
            "aria-label": "Previous Period",
            onClick: _cache[1] || (_cache[1] = withModifiers(($event) => onInput(__props.headerProps.previousPeriod), ["prevent"])),
            innerHTML: __props.previousPeriodLabel
          }, null, 8, _hoisted_4),
          createElementVNode("button", {
            class: "currentPeriod",
            "aria-label": "Current Period",
            onClick: _cache[2] || (_cache[2] = withModifiers(($event) => onInput(__props.headerProps.currentPeriod), ["prevent"]))
          }, toDisplayString(__props.headerProps.currentPeriodLabel), 1),
          createElementVNode("button", {
            disabled: !__props.headerProps.nextPeriod,
            class: "nextPeriod",
            "aria-label": "Next Period",
            onClick: _cache[3] || (_cache[3] = withModifiers(($event) => onInput(__props.headerProps.nextPeriod), ["prevent"]))
          }, toDisplayString(__props.nextPeriodLabel), 9, _hoisted_5),
          createElementVNode("button", {
            disabled: !__props.headerProps.nextYear,
            class: "nextYear",
            "aria-label": "Next Year",
            onClick: _cache[4] || (_cache[4] = withModifiers(($event) => onInput(__props.headerProps.nextYear), ["prevent"]))
          }, toDisplayString(__props.nextYearLabel), 9, _hoisted_6)
        ]),
        createElementVNode("div", _hoisted_7, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString(__props.headerProps.periodLabel), 1)
          ])
        ])
      ]);
    };
  }
});
export { CalendarMath, _sfc_main$1 as CalendarView, _sfc_main as CalendarViewHeader };
