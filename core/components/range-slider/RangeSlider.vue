<template>
  <span class="lv-range-slider" ref="rangeslider" :class="{ disabled }">
    <drag-helper v-bind:disabled="disabled" @dragstart="dragStart" @drag="drag" @dragend="dragEnd">
      <span ref="inner" class="lv-range-slider__inner">
        <input class="lv-range-slider__hidden" type="text" :name="name" :value="actualValue" :disabled="disabled" />
        <span class="lv-range-slider__rail" :style="{ backgroundColor: trackColor }"></span>
        <span class="lv-range-slider__fill" :style="{ width: valuePercent + '%', backgroundColor: sliderColor }"></span>
        <span class="lv-range-slider__knob" ref="knob" :style="{ left: valuePercent + '%', backgroundColor: sliderColor }">
          <slot name="knob">
            <span ref="rangeSliderVal" class="lv-range-slider__knob__val" :style="{ color: sliderColor }"> {{ actualValue }}</span>
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
    };
  },

  created() {
    const { _min: min, _max: max } = this;
    let defaultValue = Number(this.value);

    if (this.value == null || isNaN(defaultValue)) {
      defaultValue = min > max ? min : (min + max) / 2;
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
      const { offsetWidth } = this.$refs.inner;
      this.actualValue = this.round(this.valueFromBounds(offset.left, offsetWidth));

      if (this.dragStartValue !== this.actualValue) {
        this.emitChange(this.actualValue);
      }
    },

    emitInput(value) {
      this.$emit('input', value);
    },

    emitChange(value) {
      this.$emit('change', value);
    },

    valueFromBounds(point, width) {
      return (point / width) * (this._max - this._min) + this._min;
    },

    round(value) {
      return round(value, this._min, this._max, this._step);
    },
  },

  components: {
    DragHelper,
  },
};
</script>

<style lang="scss">
$slider-height: 20px !default;
$slider-width: 196px !default;
$rail-height: 4px !default;
$knob-size: 15px !default;
$knob-color: #fff !default;

$knob-border: 1px solid #f5f5f5 !default;
$knob-shadow: 1px 1px rgba(0, 0, 0, 0.2) !default;

.lv-range-slider {
  display: inline-block;
  height: $slider-height;
  width: $slider-width;
}

.lv-range-slider.disabled {
  opacity: 0.5;
}

.lv-range-slider__inner {
  display: inline-block;
  position: relative;
  height: 100%;
  width: 100%;
}

.lv-range-slider__rail,
.lv-range-slider__fill {
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  height: $rail-height;
  border-radius: $rail-height / 2;
  transform: translateY(-50%);
  transition: all 0.25s;
}

.lv-range-slider__rail {
  width: 100%;
  background-color: var(--rail-color);
}

.lv-range-slider__fill {
  background-color: var(--rail-fill-color);
}

.lv-range-slider__knob {
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  box-sizing: border-box;
  height: $knob-size;
  width: $knob-size;
  border: $knob-border;
  border-radius: 50%;
  background-color: $knob-color;
  background-color: var(--rail-fill-color);
  box-shadow: $knob-shadow;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: translate(-50%, -50%) scale(1.3);
    // opacity: 0.6;
  }
}

.lv-range-slider__hidden {
  display: none;
}

.lv-range-slider__knob__val {
  display: inline-block;
  position: relative;
  color: val(--rail-fill-color);
  background-color: #ffffff;
  padding: 2px;
  border: solid 0.3px rgba(0, 0, 0, 0.2);
  top: -16px;
  left: -12.5px;
  text-align: center;
  width: 40px;
  min-width: max-content;
  opacity: 0;
  border-radius: 4px;
  transition: all 0.2s;
}

.lv-range-slider__knob:hover .lv-range-slider__knob__val {
  top: -26px;
  opacity: 1;
}
</style>
