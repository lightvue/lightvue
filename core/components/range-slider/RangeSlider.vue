<template>
  <span class="lv-range-slider" ref="rangeslider" :class="{ disabled }">
    <drag-helper v-bind:disabled="disabled" @dragstart="dragStart" @drag="drag" @dragend="dragEnd">
      <span ref="inner" class="lv-range-slider__inner">
        <input class="lv-range-slider__hidden" type="text" :name="name" :value="actualValue" :disabled="disabled" />
        <span class="lv-range-slider__rail" :style="{ backgroundColor: trackColor }"></span>
        <span class="lv-range-slider__fill" :style="{ width: valuePercent + '%', backgroundColor: sliderColor }"></span>
        <span class="lv-range-slider__knob" ref="knob" :style="{ left: valuePercent + '%', borderColor: sliderColor }">
          <slot name="knob">
            <span ref="rangeSliderVal" class="lv-range-slider__knob__val" :style="{ color: sliderColor }" v-show="dragging"> {{ actualValue }}</span>
          </slot>
        </span>
      </span>
    </drag-helper>
  </span>
</template>

<script>
import DragHelper from './dependencies/DragHelper.vue';
import { round } from './dependencies/utils';

export default {
  props: {
    name: String,
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false,
    },
    min: {
      type: [String, Number],
      default: 0,
    },
    max: {
      type: [String, Number],
      default: 100,
    },
    step: {
      type: [String, Number],
      default: 1,
    },
    sliderColor: {
      type: String,
      default: '#607c8a',
    },
    trackColor: {
      type: String,
      default: '#e2e2e2',
    },
    showValue: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      actualValue: null,
      dragStartValue: null,
      dragging: false,
    };
  },

  created() {
    const { _min: min, _max: max } = this;
    let defaultValue = Number(this.value);

    if (this.value == null || isNaN(defaultValue)) {
      if (min > max) {
        defaultValue = min;
      } else {
        defaultValue = (min + max) / 2;
      }
    }

    this.actualValue = this.round(defaultValue);
  },

  mounted() {
    if (this.showValue == false) this.$refs.rangeSliderVal.style.display = 'none';
  },

  computed: {
    _min() {
      return Number(this.min);
    },

    _max() {
      return Number(this.max);
    },

    _step() {
      return Number(this.step);
    },

    valuePercent() {
      return ((this.actualValue - this._min) / (this._max - this._min)) * 100;
    },
  },

  watch: {
    value(newValue) {
      const value = Number(newValue);
      if (newValue != null && !isNaN(value)) {
        this.actualValue = this.round(value);
      }
    },
    min() {
      this.actualValue = this.round(this.actualValue);
    },
    max() {
      this.actualValue = this.round(this.actualValue);
    },
  },

  methods: {
    dragStart(event, offset) {
      this.dragging = true;
      this.dragStartValue = this.actualValue;
      if (event.target === this.$refs.knob) {
        return;
      }
      // If the click is out of knob, move it to mouse position
      this.drag(event, offset);
    },

    drag(event, offset) {
      const { offsetWidth } = this.$refs.inner;
      this.actualValue = this.round(this.valueFromBounds(offset.left, offsetWidth));
      this.emitInput(this.actualValue);
    },

    dragEnd(event, offset) {
      this.dragging = false;
      const { offsetWidth } = this.$refs.inner;
      this.actualValue = this.round(this.valueFromBounds(offset.left, offsetWidth));

      if (this.dragStartValue !== this.actualValue) {
        this.emitChange(this.actualValue);
      }
    },

    emitInput(newValue) {
      this.$emit('input', newValue);
      this.$emit('update:modelValue', newValue); // Only for Vue 3
    },

    emitChange(value) {
      this.$emit('change', value);
    },

    valueFromBounds(point, width) {
      return (point / width) * (this._max - this._min) + this._min;
    },

    round(value) {
      const decimalFixed = this.step.toString().split('.')[1]?.length || 0;
      return round(value, this._min, this._max, this._step).toFixed(decimalFixed);
    },
  },

  components: {
    DragHelper,
  },
};
</script>

<style lang="scss">
@import './RangeSlider.scss';
</style>
