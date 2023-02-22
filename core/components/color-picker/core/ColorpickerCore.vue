<template>
  <div role="application" aria-label="Chrome color picker" :class="['vc-chrome', disableAlpha ? 'vc-chrome__disable-alpha' : '']" style="box-shadow: none">
    <div class="vc-chrome-saturation-wrap" style="border-radius: 2px">
      <saturation v-model="colors" @change="childChange"></saturation>
    </div>
    <div class="vc-chrome-body">
      <div class="vc-chrome-controls">
        <div class="vc-chrome-color-wrap">
          <div :aria-label="`current color is ${colors.hex}`" class="vc-chrome-active-color" :style="{ background: activeColor }"></div>
          <checkboard v-if="!disableAlpha"></checkboard>
        </div>

        <div class="vc-chrome-sliders">
          <div class="vc-chrome-hue-wrap">
            <hue v-model="colors" @change="childChange"></hue>
          </div>
          <div class="vc-chrome-alpha-wrap" v-if="!disableAlpha">
            <alpha v-model="colors" @change="childChange"></alpha>
          </div>
        </div>
      </div>

      <div class="vc-chrome-fields-wrap" v-if="!disableFields">
        <div class="vc-chrome-fields" v-show="fieldsIndex === 0">
          <!-- hex -->
          <div class="vc-chrome-field">
            <ed-in v-if="!hasAlpha" label="hex" :value="colors.hex" @change="inputChange"></ed-in>
            <ed-in v-if="hasAlpha" label="hex" :value="colors.hex8" @change="inputChange"></ed-in>
          </div>
        </div>
        <div class="vc-chrome-fields" v-show="fieldsIndex === 1">
          <!-- rgba -->
          <div class="vc-chrome-field">
            <ed-in label="r" :value="colors.rgba.r" @change="inputChange"></ed-in>
          </div>
          <div class="vc-chrome-field">
            <ed-in label="g" :value="colors.rgba.g" @change="inputChange"></ed-in>
          </div>
          <div class="vc-chrome-field">
            <ed-in label="b" :value="colors.rgba.b" @change="inputChange"></ed-in>
          </div>
          <div class="vc-chrome-field" v-if="!disableAlpha">
            <ed-in label="a" :value="colors.a" :arrow-offset="0.01" :max="1" @change="inputChange"></ed-in>
          </div>
        </div>
        <div class="vc-chrome-fields" v-show="fieldsIndex === 2">
          <!-- hsla -->
          <div class="vc-chrome-field">
            <ed-in label="h" :value="hsl.h" @change="inputChange"></ed-in>
          </div>
          <div class="vc-chrome-field">
            <ed-in label="s" :value="hsl.s" @change="inputChange"></ed-in>
          </div>
          <div class="vc-chrome-field">
            <ed-in label="l" :value="hsl.l" @change="inputChange"></ed-in>
          </div>
          <div class="vc-chrome-field" v-if="!disableAlpha">
            <ed-in label="a" :value="colors.a" :arrow-offset="0.01" :max="1" @change="inputChange"></ed-in>
          </div>
        </div>
        <!-- btn -->
        <div class="vc-chrome-toggle-btn" role="button" aria-label="Change another color definition" @click="toggleViews">
          <div class="vc-chrome-toggle-icon">
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24" @mouseover="showHighlight" @mouseenter="showHighlight" @mouseout="hideHighlight">
              <path fill="var(--text-color)" d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" />
            </svg>
            <!-- fill="#fff" -->
          </div>
          <div class="vc-chrome-toggle-icon-highlight" v-show="highlight"></div>
        </div>
        <!-- btn -->
      </div>
    </div>

    <div class="palette-container" v-if="!$attrs.hidePalette">
      <div class="lv-colorpicker__colorblock-wrap" style="transform: scale(0.55); height: 25px; flex-basis: 12.5%" v-for="(color, i) in $attrs.colors" :key="i" @click="handleClick(color)">
        <div class="lv-colorpicker__colorblock" :style="{ backgroundColor: color }"></div>
        <checkboard grey="#607c8a" />
      </div>
    </div>
  </div>
</template>

<script>
import colorMixin from './color';
import saturation from './Saturation.vue';
import hue from './Hue.vue';
import alpha from './Alpha.vue';
import checkboard from './Checkboard.vue';
import editableInput from './EditInput.vue';
import { trueValueMixin } from 'lightvue/mixins';

export default {
  name: 'Chrome',
  mixins: [trueValueMixin, colorMixin],
  props: {
    disableAlpha: {
      type: Boolean,
      default: false,
    },
    disableFields: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    saturation,
    hue,
    alpha,
    'ed-in': editableInput,
    checkboard,
  },
  data() {
    return {
      fieldsIndex: 0,
      highlight: false,
    };
  },
  computed: {
    hsl() {
      const { h, s, l } = this.colors.hsl;
      return {
        h: h.toFixed(),
        s: `${(s * 100).toFixed()}%`,
        l: `${(l * 100).toFixed()}%`,
      };
    },
    activeColor() {
      const rgba = this.colors.rgba;
      return 'rgba(' + [rgba.r, rgba.g, rgba.b, rgba.a].join(',') + ')';
    },
    hasAlpha() {
      return this.colors.a < 1;
    },
  },
  methods: {
    handleClick(color) {
      this.updateValue(color);
      this.$emit('close');
    },
    childChange(data) {
      this.colorChange(data);
      this.updateOverlayValue(this.colors, this.fieldsIndex);
    },
    inputChange(data) {
      if (!data) {
        return;
      }
      if (data.hex) {
        this.isValidHex(data.hex) &&
          this.colorChange({
            hex: data.hex,
            source: 'hex',
          });
      } else if (data.r || data.g || data.b || data.a) {
        this.colorChange({
          r: data.r || this.colors.rgba.r,
          g: data.g || this.colors.rgba.g,
          b: data.b || this.colors.rgba.b,
          a: data.a || this.colors.rgba.a,
          source: 'rgba',
        });
      } else if (data.h || data.s || data.l) {
        const s = data.s ? data.s.replace('%', '') / 100 : this.colors.hsl.s;
        const l = data.l ? data.l.replace('%', '') / 100 : this.colors.hsl.l;
        this.colorChange({
          h: data.h || this.colors.hsl.h,
          s,
          l,
          source: 'hsl',
        });
      }
      this.updateOverlayValue(this.colors, this.fieldsIndex);
    },
    toggleViews() {
      if (this.fieldsIndex >= 2) {
        this.fieldsIndex = 0;
        this.updateOverlayValue(this.colors, this.fieldsIndex);
        return;
      }
      this.fieldsIndex++;
      this.updateOverlayValue(this.colors, this.fieldsIndex);
    },
    showHighlight() {
      this.highlight = true;
    },
    hideHighlight() {
      this.highlight = false;
    },
    updateOverlayValue(color, mode) {
      let colorValue = `${this.getColorString(color, mode)}`;
      this.updateValue(colorValue);
      // this.$emit('input', colorValue); // Only for Vue 2.x
      // this.$emit('update:modelValue', colorValue); // Only for Vue 3.x
    },
    getColorString(color, mode) {
      if (mode == 0) {
        if (color.hex8.slice(7, 9) === 'FF') return `${color.hex8.slice(0, 7)}`;
        return `${color.hex8}`;
      } else if (mode == 1) {
        if (color.rgba.a == 1) return `rgb(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b})`;
        return `rgba(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b}, ${color.rgba.a})`;
      } else if (mode == 2) {
        return `hsla(${Math.floor(color.hsl.h)}, ${Math.floor(color.hsl.s * 100)}%, ${Math.floor(color.hsl.l * 100)}%, ${color.hsl.a})`;
      }
    },
  },
};
</script>

<style>
.vc-chrome {
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3);
  box-sizing: initial;
  width: 225px;
  font-family: Menlo;
  background-color: var(--lv-input-background-color);
}
.vc-chrome-controls {
  display: flex;
}
.vc-chrome-color-wrap {
  position: relative;
  width: 36px;
}
.vc-chrome-active-color {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 1;
}
.vc-chrome-color-wrap .vc-checkerboard {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-size: auto;
}
.vc-chrome-sliders {
  flex: 1;
}
.vc-chrome-fields-wrap {
  display: flex;
  padding-top: 16px;
}
.vc-chrome-fields {
  display: flex;
  margin-left: -6px;
  flex: 1;
}
.vc-chrome-field {
  padding-left: 6px;
  width: 100%;
}
.vc-chrome-toggle-btn {
  width: 32px;
  text-align: right;
  position: relative;
}
.vc-chrome-toggle-icon {
  margin-right: -4px;
  margin-top: 12px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
.vc-chrome-toggle-icon-highlight {
  position: absolute;
  width: 24px;
  height: 28px;
  background: var(--lv-background-color);
  border-radius: 4px;
  top: 10px;
  left: 12px;
}
.vc-chrome-hue-wrap {
  position: relative;
  height: 10px;
  margin-bottom: 8px;
}
.vc-chrome-alpha-wrap {
  position: relative;
  height: 10px;
}
.vc-chrome-hue-wrap .vc-hue {
  border-radius: 2px;
}
.vc-chrome-alpha-wrap .vc-alpha-gradient {
  border-radius: 2px;
}
.vc-chrome-hue-wrap .vc-hue-picker,
.vc-chrome-alpha-wrap .vc-alpha-picker {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: solid 2px rgba(255, 255, 255, 0);
  background-color: rgb(248, 248, 248);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  transition: all 0.3s;
  transform: translate(-6px, -2px) scale(1);
}

.vc-chrome-hue-wrap .vc-hue-picker:hover,
.vc-chrome-alpha-wrap .vc-alpha-picker:hover {
  transform: translate(-6px, -2px) scale(1.5);
  border: solid 2px rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, 0.5);
}
.vc-chrome-body {
  padding: 16px 16px 12px;
  background-color: var(--lv-input-background-color);
}
.vc-chrome-saturation-wrap {
  width: 100%;
  padding-bottom: 55%;
  position: relative;
  border-radius: 2px 2px 0 0;
  overflow: hidden;
}
.vc-chrome-saturation-wrap .vc-saturation-circle {
  width: 12px;
  height: 12px;
}
.vc-chrome-fields .vc-input__input {
  font-size: 11px;
  color: var(--text-color);
  width: 100%;
  border-radius: 2px;
  border: none;
  box-shadow: inset 0 0 0 1px #dadada;
  height: 21px;
  text-align: center;
  background-color: var(--lv-background-color);
}
.vc-chrome-fields .vc-input__label {
  text-transform: uppercase;
  font-size: 11px;
  line-height: 11px;
  color: var(--text-color);
  text-align: center;
  display: block;
  margin-top: 12px;
}
.vc-chrome__disable-alpha .vc-chrome-active-color {
  width: 18px;
  height: 18px;
}
.vc-chrome__disable-alpha .vc-chrome-color-wrap {
  width: 30px;
}
.vc-chrome__disable-alpha .vc-chrome-hue-wrap {
  margin-top: 4px;
  margin-bottom: 4px;
}
.palette-container {
  border-top: 1px solid var(--lv-input-background-color);
  padding: 8px 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: var(--lv-input-background-color);
}
</style>
