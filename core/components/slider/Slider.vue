<template>
  <div
    :class="['slider lv-slider__wrap', orientation && orientation == 'vertical' ? 'vertical' : '']"
    :style="[orientation == 'vertical' ? verticalSliderContainerStyle : '']"
  >
    <input
      @input="getSlideValue"
      v-bind="$attrs"
      type="range"
      class="slider-range"
      id="slider-range"
      :step="step"
      :min="min"
      :max="max"
      :style="[
        {
        background: `linear-gradient(to right, ${sliderColor} 0%, ${sliderColor} ${getPercentValue}%, ${trackColor} ${getPercentValue}% , ${trackColor} 100%)`,
        },
        orientation == 'vertical' ? {...verticalSliderStyle} : ''
        ]"
      :value="modelValue"
    >
    <div
      v-if="showLabel"
      class="slider-range-label__wrap"
      :style="[orientation == 'vertical' ? verticalSliderStyle: '']"
    >
      <span
        class="label"
        :style="labelStyle"
      >{{ sliderValue }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    orientation: {
      type: String,
      default: 'horizontal',
    },
    verticalHeight: {
      type: String,
      default: '200',
    },
    step: {
      type: Number,
      default: 1,
    },
    showLabel: {
      type: Boolean,
      default: false,
    },
    sliderColor: {
      type: String,
      default: '#38b2ac',
    },
    trackColor: {
      type: String,
      default: '#e2e2e2e2',
    },
  },
  data() {
    return {
      sliderValue: 0,
      percentValue: 0,
    };
  },
  methods: {
    getSlideValue(event) {
      const finalVal = parseInt(event.target.value);
      this.sliderValue = finalVal;
      this.updateModal(event);
    },
    updateModal(event) {
      const emitValue = parseInt(event.target.value);
      this.$emit('input', emitValue);
      this.$emit('change', emitValue);
      this.$emit('update:modelValue', emitValue);
    },
  },

  computed: {
    getPercentValue() {
      const value = ((this.modelValue - this.min) / (this.max - this.min)) * 100;
      this.percentValue = value >= 100 ? 100 : value <= 0 ? 0 : value;
      return this.percentValue;
    },
    labelStyle() {
      return {
        left: `${this.percentValue}%`,
      };
    },
    verticalSliderStyle() {
      return {
        transformOrigin: `${this.verticalHeight / 2}px ${this.verticalHeight / 2}px`,
        transform: `rotate(-90deg)`,
      };
    },
    verticalSliderContainerStyle() {
      return {
        height: `${this.verticalHeight}px`,
        width: `${this.verticalHeight}px`,
      };
    },
    modelValue() {
      return this.$attrs.modelValue ? this.$attrs.modelValue : this.value ? this.value : this.sliderValue;
    },
  },
};
</script>
<style lang="scss" scoped>
.lv-slider__wrap {
  flex-grow: 1;
  position: relative;
  &.vertical {
    .slider-range-label__wrap {
      top: 0;
      .label {
        transform: translateX(-50%) translateY(50%) rotate(90deg);
        top: 5px;
      }
    }
  }
  .slider-range {
    -webkit-appearance: none;
    height: 4px;
    border-radius: 50px;
    background-color: #cccccc;
    width: 100%;
    outline: none;
    opacity: 0.8;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    margin: 10px 0;
    &:hover {
      opacity: 1;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 16px;
      width: 26px;
      background-color: #b2f5ea;
      border: 4px solid #38b2ac;
      border-radius: 50px;
      cursor: grab;
      position: relative;
    }

    &::-moz-range-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 16px;
      width: 26px;
      background-color: #b2f5ea;
      border: 4px solid #38b2ac;
      border-radius: 50%;
      cursor: grab;
    }
  }
  .slider-range-label__wrap {
    position: absolute;
    width: calc(100% - 20px);
    left: 10px;
    height: 110%;
    top: -30px;

    .label {
      position: absolute;
      top: -20px;
      background-color: #00658d;
      padding: 5px 10px;
      border-radius: 3px;
      color: white;
      transform: translate(-50%, 50%);
      opacity: 0;
      transition: opacity 0.2s;
    }
  }
  &:hover {
    .slider-range-label__wrap .label {
      opacity: 1;
    }
  }
}
</style>