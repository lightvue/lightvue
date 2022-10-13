<template>
  <div class="vdp-datepicker" :class="[wrapperClass, isRtl ? 'rtl' : '']">
    <date-input :selectedDate="selectedDate" :resetTypedDate="resetTypedDate" :format="format" :translation="translation" :inline="inline" :id="id" :name="name" :refName="refName" :openDate="openDate" :placeholder="placeholder" :inputClass="inputClass" :typeable="typeable" :clearButton="clearButton" :clearButtonIcon="clearButtonIcon" :calendarButton="calendarButton" :calendarButtonIcon="calendarButtonIcon" :calendarButtonIconContent="calendarButtonIconContent" :disabled="disabled" :required="required" :bootstrapStyling="bootstrapStyling" :use-utc="useUtc" @showCalendar="showCalendar($event)" @toggleCalendar="toggleCalendar($event)" @closeCalendar="hideDatePickerOverlay" @typedDate="setTypedDate" @clearDate="clearDate">
      <slot name="afterDateInput" slot="afterDateInput"></slot>
    </date-input>

    <LvOverlayPanel style="width: 280px" ref="DatepickerOverlay" append-to="body" :show-close-icon="false" id="image_overlay_panel" :class="{ '--panel-active': activeTab === 'time' }" alignRight>
      <div class="date-time-tabs">
        <div :class="['tab calendar', { '--active': activeTab === 'calendar' }]" @click="switchTab('calendar')">Date</div>
        <div :class="['tab time', { '--active': activeTab === 'time' }]" @click="switchTab('time')">Time</div>
      </div>
      <div class="lv-date-controls" v-if="activeTab === 'calendar'">
        <!-- Day View -->
        <picker-day v-if="allowedToShowView('day') && showDayView" :pageDate="pageDate" :selectedDate="selectedDate" :showDayView="showDayView" :fullMonthName="fullMonthName" :allowedToShowView="allowedToShowView" :disabledDates="disabledDates" :highlighted="highlighted" :calendarClass="calendarClass" :calendarStyle="calendarStyle" :translation="translation" :pageTimestamp="pageTimestamp" :isRtl="isRtl" :mondayFirst="mondayFirst" :dayCellContent="dayCellContent" :use-utc="useUtc" @changedMonth="handleChangedMonthFromDayPicker" @selectDate="selectDate" @showMonthCalendar="showMonthCalendar" @selectedDisabled="selectDisabledDate">
          <slot name="beforeCalendarHeader" slot="beforeCalendarHeader"></slot>
        </picker-day>
        <!-- Month View -->
        <picker-month v-if="allowedToShowView('month') && showMonthView" :pageDate="pageDate" :selectedDate="selectedDate" :showMonthView="showMonthView" :allowedToShowView="allowedToShowView" :disabledDates="disabledDates" :calendarClass="calendarClass" :calendarStyle="calendarStyle" :translation="translation" :isRtl="isRtl" :use-utc="useUtc" @selectMonth="selectMonth" @showYearCalendar="showYearCalendar" @changedYear="setPageDate">
          <slot name="beforeCalendarHeader" slot="beforeCalendarHeader"></slot>
        </picker-month>
        <!-- Year View -->
        <picker-year v-if="allowedToShowView('year') && showYearView" :pageDate="pageDate" :selectedDate="selectedDate" :showYearView="showYearView" :allowedToShowView="allowedToShowView" :disabledDates="disabledDates" :calendarClass="calendarClass" :calendarStyle="calendarStyle" :translation="translation" :isRtl="isRtl" :use-utc="useUtc" @selectYear="selectYear" @changedDecade="setPageDate">
          <slot name="beforeCalendarHeader" slot="beforeCalendarHeader"></slot>
        </picker-year>
      </div>
      <div class="lv-time-controls" v-else>
        <TimePicker></TimePicker>
      </div>
    </LvOverlayPanel>
  </div>
</template>
<script>
import en from './locale/translations/en';
import DateInput from './DateInput.vue';
import PickerDay from './PickerDay.vue';
import PickerMonth from './PickerMonth.vue';
import PickerYear from './PickerYear.vue';
import TimePicker from './TimePicker.vue';
import LvOverlayPanel from 'lightvue/overlay-panel';
import utils, { makeDateUtils } from './DateUtils';
export default {
  components: {
    DateInput,
    PickerDay,
    PickerMonth,
    PickerYear,
    TimePicker,
    LvOverlayPanel,
  },
  props: {
    value: {
      validator: val => utils.validateDateInput(val),
    },
    name: String,
    refName: String,
    id: String,
    format: {
      type: [String, Function],
      default: 'dd MMM yyyy',
    },
    language: {
      type: Object,
      default: () => en,
    },
    openDate: {
      validator: val => utils.validateDateInput(val),
    },
    dayCellContent: Function,
    fullMonthName: Boolean,
    disabledDates: Object,
    highlighted: Object,
    placeholder: String,
    inline: Boolean,
    calendarClass: [String, Object, Array],
    inputClass: [String, Object, Array],
    wrapperClass: [String, Object, Array],
    mondayFirst: Boolean,
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    bootstrapStyling: Boolean,
    initialView: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    useUtc: Boolean,
    minimumView: {
      type: String,
      default: 'day',
    },
    maximumView: {
      type: String,
      default: 'year',
    },
  },
  data() {
    const startDate = this.openDate ? new Date(this.openDate) : new Date();
    const constructedDateUtils = makeDateUtils(this.useUtc);
    const pageTimestamp = constructedDateUtils.setDate(startDate, 1);
    return {
      /*
       * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
       * This represents the first day of the current viewing month
       * {Number}
       */
      pageTimestamp,
      /*
       * Selected Date
       * {Date}
       */
      selectedDate: null,
      /*
       * Flags to show calendar views
       * {Boolean}
       */
      showDayView: false,
      showMonthView: false,
      showYearView: false,
      /*
       * Positioning
       */
      calendarHeight: 0,
      resetTypedDate: new Date(),
      utils: constructedDateUtils,
      activeTab: 'calendar',
    };
  },
  watch: {
    value(value) {
      this.setValue(value);
    },
    openDate() {
      this.setPageDate();
    },
    initialView() {
      this.setInitialView();
    },
  },
  computed: {
    computedInitialView() {
      if (!this.initialView) {
        return this.minimumView;
      }

      return this.initialView;
    },
    pageDate() {
      return new Date(this.pageTimestamp);
    },

    translation() {
      return this.language;
    },

    calendarStyle() {
      return {
        position: this.isInline ? 'static' : undefined,
      };
    },
    isOpen() {
      return this.showDayView || this.showMonthView || this.showYearView;
    },
    isInline() {
      return !!this.inline;
    },
    isRtl() {
      return this.translation.rtl === true;
    },
  },
  methods: {
    /**
     * Called in the event that the user navigates to date pages and
     * closes the picker without selecting a date.
     */
    resetDefaultPageDate() {
      if (this.selectedDate === null) {
        this.setPageDate();
        return;
      }
      this.setPageDate(this.selectedDate);
    },
    /**
     * Effectively a toggle to show/hide the calendar
     * @return {mixed}
     */
    showCalendar(e) {
      if (this.disabled || this.isInline) {
        return false;
      }
      this.showDatePickerOverlay(e);
      this.setInitialView();
    },
    toggleDatePickerOverlay(event) {
      this.$refs.DatepickerOverlay.toggle(event);
    },
    showDatePickerOverlay(event) {
      this.$refs.DatepickerOverlay.show(event.currentTarget);
    },
    hideDatePickerOverlay() {
      this.$refs.DatepickerOverlay.hide();
    },
    toggleCalendar(e) {
      if (!this.$refs.DatepickerOverlay.visible) {
        this.showDatePickerOverlay(e);
      }
    },
    /**
     * Sets the initial picker page view: day, month or year
     */
    setInitialView() {
      const initialView = this.computedInitialView;
      if (!this.allowedToShowView(initialView)) {
        throw new Error(`initialView '${this.initialView}' cannot be rendered based on minimum '${this.minimumView}' and maximum '${this.maximumView}'`);
      }
      switch (initialView) {
        case 'year':
          this.showYearCalendar();
          break;
        case 'month':
          this.showMonthCalendar();
          break;
        default:
          this.showDayCalendar();
          break;
      }
    },
    /**
     * Are we allowed to show a specific picker view?
     * @param {String} view
     * @return {Boolean}
     */
    allowedToShowView(view) {
      const views = ['day', 'month', 'year'];
      const minimumViewIndex = views.indexOf(this.minimumView);
      const maximumViewIndex = views.indexOf(this.maximumView);
      const viewIndex = views.indexOf(view);

      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex;
    },
    /**
     * Show the day picker
     * @return {Boolean}
     */
    showDayCalendar() {
      if (!this.allowedToShowView('day')) {
        return false;
      }
      // this.close();
      this.showMonthView = false;
      this.showYearView = false;
      this.showDayView = true;
      return true;
    },
    /**
     * Show the month picker
     * @return {Boolean}
     */
    showMonthCalendar() {
      if (!this.allowedToShowView('month')) {
        return false;
      }
      // this.close();
      this.showMonthView = true;
      this.showYearView = false;
      this.showDayView = false;
      return true;
    },
    /**
     * Show the year picker
     * @return {Boolean}
     */
    showYearCalendar() {
      if (!this.allowedToShowView('year')) {
        return false;
      }
      // this.close();
      this.showMonthView = false;
      this.showYearView = true;
      this.showDayView = false;
      return true;
    },
    /**
     * Set the selected date
     * @param {Number} timestamp
     */
    setDate(timestamp) {
      const date = new Date(timestamp);
      this.selectedDate = date;
      this.setPageDate(date);
      this.$emit('selected', date);
      this.$emit('input', date);
      this.$emit('update:modelValue', date);
    },
    /**
     * Clear the selected date
     */
    clearDate() {
      this.selectedDate = null;
      this.setPageDate();
      this.$emit('selected', null);
      this.$emit('input', null);
      this.$emit('cleared');
    },
    /**
     * @param {Object} date
     */
    selectDate(date) {
      this.setDate(date.timestamp);
      if (!this.isInline) {
        // this.close(true);
        this.hideDatePickerOverlay();
      }
      this.resetTypedDate = new Date();
    },
    /**
     * @param {Object} date
     */
    selectDisabledDate(date) {
      this.$emit('selectedDisabled', date);
    },
    /**
     * @param {Object} month
     */
    selectMonth(month) {
      const date = new Date(month.timestamp);
      if (this.allowedToShowView('day')) {
        this.setPageDate(date);
        this.$emit('changedMonth', month);
        this.showDayCalendar();
      } else {
        this.selectDate(month);
      }
    },
    /**
     * @param {Object} year
     */
    selectYear(year) {
      const date = new Date(year.timestamp);
      if (this.allowedToShowView('month')) {
        this.setPageDate(date);
        this.$emit('changedYear', year);
        this.showMonthCalendar();
      } else {
        this.selectDate(year);
      }
    },
    /**
     * Set the datepicker value
     * @param {Date|String|Number|null} date
     */
    setValue(date) {
      if (typeof date === 'string' || typeof date === 'number') {
        let parsed = new Date(date);
        date = isNaN(parsed.valueOf()) ? null : parsed;
      }
      if (!date) {
        this.setPageDate();
        this.selectedDate = null;
        return;
      }
      this.selectedDate = date;
      this.setPageDate(date);
    },
    /**
     * Sets the date that the calendar should open on
     */
    setPageDate(date) {
      if (!date) {
        if (this.openDate) {
          date = new Date(this.openDate);
        } else {
          date = new Date();
        }
      }
      this.pageTimestamp = this.utils.setDate(new Date(date), 1);
    },
    /**
     * Handles a month change from the day picker
     */
    handleChangedMonthFromDayPicker(date) {
      this.setPageDate(date);
      this.$emit('changedMonth', date);
    },
    /**
     * Set the date from a typedDate event
     */
    setTypedDate(date) {
      this.setDate(date.getTime());
    },
    /**
     * Close all calendar layers
     * @param {Boolean} emitEvent - emit close event
     */
    close(emitEvent) {
      this.showDayView = this.showMonthView = this.showYearView = false;
      if (!this.isInline) {
        if (emitEvent) {
          this.$emit('closed');
          this.hideDatePickerOverlay();
        }
        document.removeEventListener('click', this.clickOutside, false);
      }
    },
    /**
     * Initiate the component
     */
    init() {
      if (this.value) {
        this.setValue(this.value);
      }
      if (this.isInline) {
        this.setInitialView();
      }
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
  },
  mounted() {
    this.init();
  },
};
// eslint-disable-next-line
</script>
<style lang="sass">
@import './datepicker.scss'
</style>
