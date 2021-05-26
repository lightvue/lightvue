<template>
  <div
    class="slider range-slider"
    @mouseenter="showValue ? handleMouseEnter() : ''"
    @mouseleave="showValue ? handleMouseLeave() : ''"
  >
    <!-- Input Slider --Hidden -->
    <input
      @input="setLeftValue"
      type="range"
      id="input-left"
      :max="max"
      :min="min"
      :step="step"
      :value="leftValue"
      v-if="range"
      :style="getLeftPercent > 90 ? { zIndex: '3' } : ''"
    />
    <input
      @input="setRightValue"
      type="range"
      id="input-right"
      :max="max"
      :min="min"
      :step="step"
      :value="rightValue"
    />

    <!-- Actual Visible Slider -->
    <div class="visible-slider">
      <div
        class="track"
        :style="{ backgroundColor: `${trackColor}` }"
      ></div>
      <div
        class="range"
        :style="{
          left: `${getLeftPercent}%`,
          right: `${getRightPercent}%`,
          backgroundColor: `${sliderColor}`,
        }"
      ></div>
      <div
        class="thumb --left"
        :style="{ left: `${getLeftPercent}%`, backgroundColor: `${thumbColor ? thumbColor : trackColor}`, borderColor: `${thumbBorderColor ? thumbBorderColor : sliderColor}` }"
        v-if="range"
      >
        <div
          class="label --left"
          v-if="showValue"
          :style="[
            { borderColor: `${thumbBorderColor || sliderColor}`, color: `${thumbBorderColor || sliderColor}` },
            label
              ? {
                  opacity: '1',
                }
              : '',
          ]"
        >
          {{ range
              ? modelValue
                ? modelValue[0]
                : value[0]
              : modelValue
              ? modelValue
              : value }}
        </div>
      </div>
      <div
        class="thumb --right"
        :style="{ right: `${getRightPercent}%`, backgroundColor: `${thumbColor ? thumbColor : trackColor}`, borderColor: `${thumbBorderColor ? thumbBorderColor : sliderColor}` }"
      >
        <div
          class="label --right"
          v-if="showValue"
          :style="[
            { borderColor: `${thumbBorderColor || sliderColor}`, color: `${thumbBorderColor || sliderColor}` },
            label
              ? {
                  opacity: '1',
                }
              : '',
          ]"
        >
          {{ range
              ? modelValue
                ? modelValue[1]
                : value[1]
              : modelValue
              ? modelValue
              : value }}
        </div>
      </div>
      <div
        v-if="scale"
        class="scale"
      >
        <div
          class="scale__item"
          :key="item"
          v-for="item in max / precision + 1"
          :style="(item - 1) * getUnitScale >= getLeftPercent && (item - 1) * getUnitScale <= 100 - getRightPercent ? { backgroundColor: `${sliderColor}`, height: '20px' } : ''"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftValue: 0,
      rightValue: 0,
      overallValue: 0,
      valueFromProp: null,
      label: false,
    };
  },
  props: {
    modelValue: {
      type: [Number, Array],
    },
    value: {
      type: [Number, Array],
    },
    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: 100,
    },

    step: {
      type: Number,
      default: 1,
    },
    showValue: {
      type: Boolean,
      default: false,
    },
    precision: {
      type: Number,
      default: 10,
    },
    range: {
      type: Boolean,
      default: false,
    },
    scale: {
      type: Boolean,
      default: false,
    },
    thumbColor: {
      type: String,
    },
    thumbBorderColor: {
      type: String,
    },
    sliderColor: {
      type: String,
      default: '#38b2ac',
    },
    trackColor: {
      type: String,
      default: '#c2ebe9',
    },
  },
  methods: {
    handleMouseEnter() {
      this.label = this.showValue;
    },
    handleMouseLeave() {
      this.label = false;
    },

    getOverallValue() {
      this.overallValue = this.rightValue - this.leftValue;
    },

    setLeftValue(event) {
      const left = Math.min(parseInt(event.target.value), parseInt(this.rightValue));
      event.target.value = left;
      this.leftValue = left;
      this.getOverallValue();
      this.updateModal();
    },
    setRightValue(event) {
      const right = Math.max(parseInt(event.target.value), parseInt(this.leftValue));
      event.target.value = right;
      this.rightValue = right;
      this.getOverallValue();
      this.updateModal();
    },

    updateModal() {
      if (this.range) {
        this.$emit('input', [this.leftValue, this.rightValue]);
        this.$emit('change', [this.leftValue, this.rightValue]);
        this.$emit('update:modelValue', [this.leftValue, this.rightValue]);
      } else {
        this.$emit('input', this.rightValue);
        this.$emit('change', this.rightValue);
        this.$emit('update:modelValue', this.rightValue);
      }
    },
    getValueBetweenMinMax(value) {
      return value < this.min ? this.min : value > this.max ? this.max : value;
    },
    getValueFromStep(value) {
      return (value - this.min) % this.step <= this.step / 2 ? value - this.min - ((value - this.min) % this.step) + this.min : value - this.min + (this.step - ((value - this.min) % this.step)) + this.min;
    },
    setValue(value) {
      if (this.range && value[0] <= value[1]) {
        if (this.step > 1) {
          const tempValueLeft = this.getValueBetweenMinMax(value[0]);
          const tempValueRight = this.getValueBetweenMinMax(value[1]);
          this.leftValue = this.getValueFromStep(tempValueLeft);
          this.rightValue = this.getValueFromStep(tempValueRight);
        } else {
          this.leftValue = this.getValueBetweenMinMax(value[0]);
          this.rightValue = this.getValueBetweenMinMax(value[1]);
        }
      } else {
        const tempValue = this.getValueBetweenMinMax(value);
        if (this.step > 1) {
          this.rightValue = this.getValueFromStep(tempValue);
        } else {
          this.rightValue = tempValue;
        }
      }
    },
  },
  computed: {
    getLeftPercent() {
      if (this.range) {
        const value = ((this.leftValue - this.min) / (this.max - this.min)) * 100;
        return value;
      } else {
        return 0;
      }
    },
    getRightPercent() {
      const value = ((this.max - this.rightValue) / (this.max - this.min)) * 100;

      return value > 100 ? 100 : value < 0 ? 0 : value;
    },
    getUnitScale() {
      const singlePipLength = ((this.max - this.min) * this.precision) / this.max;
      return (singlePipLength / (this.max - this.min)) * 100;
    },
  },
  watch: {
    value(value) {
      this.value ? this.setValue(value) : '';
    },
    modelValue(value) {
      this.modelValue ? this.setValue(value) : '';
    },
  },
  mounted() {
    this.value ? this.setValue(this.value) : this.setValue(this.modelValue);
  },
};
</script>
<style lang="scss" scoped>
.slider {
  box-sizing: border-box;
  width: auto;
  position: relative;
  padding: 14px 0;
  .visible-slider {
    position: relative;
    height: 6px;
    margin: 0 15px;
    // width: 400px;
    z-index: 1;
    .track {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 50px;
      //   background-color: #c2ebe9;
    }
    .range {
      position: absolute;
      z-index: 2;
      left: 25%;
      right: 25%;
      top: 0;
      bottom: 0;
      //   background-color: #38b2ac;
      border-radius: 50px;
    }
    .thumb {
      position: absolute;
      z-index: 3;
      height: 16px;
      width: 26px;
      //   background-color: #b2f5ea;
      border: 4px solid #38b2ac;
      border-radius: 50px;
      cursor: grab;
      // opacity: 0.3;
      top: 0;
      &.--left {
        left: 25%;
        transform: translate(-13px, -5px);
      }
      &.--right {
        right: 25%;
        transform: translate(13px, -5px);
      }
      .label {
        position: absolute;
        height: 24px;
        width: 38px;
        left: -10px;
        top: -34px;
        background-color: #ffffff;
        border: 2px solid #38b2ac;
        border-radius: 5px;
        color: #38b2ac;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .scale {
      position: absolute;
      display: flex;
      top: 20px;
      left: 0;
      right: 0;
      flex-grow: 1;
      justify-content: space-between;
      .scale__item {
        height: 10px;
        width: 2px;
        background-color: #cccccc;
        transition: all 0.2s;
        border-radius: 1px;
      }
    }
  }
  input[type='range'] {
    position: absolute;
    -webkit-appearance: none;
    pointer-events: none;
    z-index: 2;
    height: 10px;
    width: 100%;
    left: 0;
    opacity: 0;
    // &::-webkit-slider-runnable-track {
    //   -webkit-appearance: none;
    // }
    // &#input-left {

    // }
    // &#input-right {

    // }
    &::-webkit-slider-thumb {
      pointer-events: all;
      height: 30px;
      width: 30px;
      border-radius: 0;
      border: 0 none;
      cursor: grab;
      background-color: black;
      -webkit-appearance: none;
    }
    &::-moz-range-thumb {
      pointer-events: all;
      height: 30px;
      width: 30px;
      border-radius: 0;
      border: 0 none;
      cursor: grab;
      background-color: black;
      -webkit-appearance: none;
    }
    &::-ms-thumb {
      pointer-events: all;
      height: 30px;
      width: 30px;
      border-radius: 0;
      border: 0 none;
      cursor: grab;
      background-color: black;
      -webkit-appearance: none;
    }
  }
}
</style>
