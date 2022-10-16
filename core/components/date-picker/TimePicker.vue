<template>
  <div class="lv-time-picker-wrapper">
    <div class="lv-hour-minute-demo">
      <div :class="['hour time-box', { '--active': setTime === 'hour' }]">
        {{ hour }}
      </div>
      <div class="colon">
        <span class="circle"></span>
        <span class="circle"></span>
      </div>
      <div :class="['minutes time-box', { '--active': setTime === 'minute' }]">
        {{ minutes }}
      </div>
      <div class="lv_am-pm-switcher">
        <div :class="['switch', { '--active': active === 'am' }]" @click="setActive('am')">AM</div>
        <div :class="['switch switch-pm', { '--active': active === 'pm' }]" @click="setActive('pm')">PM</div>
      </div>
    </div>
    <div>
      <span>Hours</span>
      <LvRangeSlider name="Hour" @update:modelValue="change('hour')" :min="0" :max="23" class="slider" v-model="hour" />
    </div>
    <div>
      <span>Minutes</span>
      <LvRangeSlider name="Minute" @update:modelValue="change('minute')" :min="0" :max="59" class="slider" v-model="minutes" />
    </div>
  </div>
</template>
<script>
//   import { makeDateUtils } from './DateUtils';
import LvRangeSlider from 'lightvue/range-slider';
import { makeDateUtils } from './DateUtils';
export default {
  data() {
    const constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils,
      hour: 1,
      minutes: 3,
      active: 'am',
      activeMinutes: false,
      activeHour: false,
      setTime: null,
    };
  },
  props: {
    pageDate: Date,
    pageTimestamp: Number,
    useUtc: Boolean,
  },
  components: {
    LvRangeSlider, // REFACTORING
  },
  methods: {
    setActive(tab) {
      this.active = tab;
    },
    change(stamp) {
      this.setTime = stamp;
      this.$emit('update-time', { hours: this.hour, minutes: this.minutes });
    },
  },
  mounted() {
    const d = this.pageDate;
    let dObj = this.useUtc ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate())) : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());
    console.log(d);
    dObj.setHours(12);
    dObj.setMinutes(59);
    let time = [];
    time.push({
      date: this.utils.getDate(dObj),
      timestamp: dObj.getTime(),
    });
    console.log(time);
    console.log(dObj);
  },
};
// eslint-disable-next-line
</script>
<style lang="scss">
.lv-time-picker-wrapper {
  display: flex;
  flex-direction: column;
  gap: 35px;
}
.lv-hour-minute-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  widows: 100%;
  .time-box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    background-color: #e4e4e4;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    border: 2px solid transparent;
    padding: 10px;
    width: 96px;
    text-align: center;
    &:hover {
      color: #ffffff;
      background-color: rgba(56, 178, 172, 1);
      border-color: #38b2ac;
    }
    &.--active {
      color: #ffffff;
      background-color: rgba(56, 178, 172, 1);
      border-color: #1f8f89;
    }
  }
  .colon {
    .circle {
      display: block;
      height: 8px;
      width: 8px;
      border-radius: 50%;
      background: #79909c;
      &:first-child {
        margin-bottom: 6px;
      }
    }
  }
  .lv_am-pm-switcher {
    display: flex;
    flex-direction: column;
    height: 80px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #787878;
    .switch {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #d6d6d6;
      transition: all 0.3s ease;
      cursor: pointer;
      width: 100%;
      height: 100%;
      &:hover {
        color: #38b2ac;
        background-color: rgba(56, 178, 172, 0.1);
      }
      &:first-child {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        border-bottom-width: calc(0.7504px / 2);
      }
      &.switch-pm {
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        border-top-width: calc(0.7504px / 2);
        width: 54px;
      }
      &.--active {
        color: #ffffff;
        background-color: rgba(56, 178, 172, 1);
        /* border-color: #38b2ac; */
      }
    }
  }
}
</style>
