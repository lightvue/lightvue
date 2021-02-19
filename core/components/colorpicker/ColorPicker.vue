<template>
  <div class="lv-colorpicker-wrapper">
    <LvInput label="Choose color" ref="colorPickerInput" v-model="colorpickerValue" @focus="toggleColorpickerOverlay" aria:haspopup="true" aria-controls="colorpicker_overlay_panel">
      <template slot="append">
        <div class="lv-colorpicker__colorblock-wrapper" @click="toggleColorpickerOverlay">
          <div class="lv-colorpicker__colorblock" :style="{ backgroundColor: colorpickerValue }"></div>
          <checkboard grey="#607c8a" />
        </div>
      </template>
    </LvInput>

    <LvOverlayPanel style="width: max-content" ref="ColorpickerOverlay" append-to="body" :show-close-icon="false" id="image_overlay_panel" alignRight>
      <ColorpickerCore :value="colorpickerValue" :updateOverlayValue="updateOverlayValue" style="width: 195px; transform: scale(1.05)" />
    </LvOverlayPanel>
  </div>
</template>

<script>
import ColorpickerCore from './core/ColorpickerCore.vue';
import Checkboard from './core/Checkboard.vue';
import LvOverlayPanel from '@/collections/overlay-panel/OverlayPanel';
import LvInput from '@/collections/input/Input';
export default {
  name: 'LvColorpicker',
  data() {
    return {
      colorpickerValue: null,
    };
  },
  beforeMount() {
    this.colorpickerValue = this.$attrs.value || '#607C8A';
  },
  components: {
    LvOverlayPanel: LvOverlayPanel,
    ColorpickerCore: ColorpickerCore,
    LvInput: LvInput,
    Checkboard,
  },
  methods: {
    updateOverlayValue(color, mode) {
      this.colorpickerValue = `${this.getColorString(color, mode)}`;
      this.$emit('input', this.colorpickerValue);
    },
    toggle(event) {
      this.$refs.op.toggle(event);
    },
    toggleColorpickerOverlay(event) {
      // this.$el.
      this.$refs.ColorpickerOverlay.toggle(null, this.$refs.colorPickerInput.$el);
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

<style scoped>
.lv-colorpicker-wrapper {
  /* width: max-content; */
  /* width: 250px; */
  /* max-width: 100%; */
}
.lv-colorpicker__colorblock-wrapper {
  position: relative;
  width: 30px;
  height: 30px;
  top: calc(50% - 16px);
  right: 2px;
  border-radius: 5px !important;
  transform: scale(0.9);
  cursor: pointer;
  overflow: hidden;
}
.lv-colorpicker__colorblock {
  /* border-radius: 4px !important; */
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
}
</style>
