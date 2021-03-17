<template>
  <div class="lv-colorpicker-wrapper">
    <LvInput :label="label" ref="colorPickerInput" v-model="localValue" @focus="toggleColorpickerOverlay" aria:haspopup="true" aria-controls="colorpicker_overlay_panel">
      <template #append>
        <div class="lv-colorpicker__colorblock-wrapper" @click="toggleColorpickerOverlay">
          <div class="lv-colorpicker__colorblock" :style="{ backgroundColor: localValue }"></div>
          <checkboard grey="#607c8a" />
        </div>
      </template>
    </LvInput>

    <LvOverlayPanel style="width: max-content" ref="ColorpickerOverlay" append-to="body" :show-close-icon="false" id="image_overlay_panel" alignRight>
      <ColorpickerCore v-model="localValue" style="width: 195px; transform: scale(1.05)" />
    </LvOverlayPanel>
  </div>
</template>

<script>
import ColorpickerCore from './core/ColorpickerCore.vue';
import Checkboard from './core/Checkboard.vue';
import LvOverlayPanel from 'lightvue/overlay-panel';
import LvInput from 'lightvue/input';
import { trueValueMixin } from 'lightvue/mixins';
export default {
  name: 'LvColorpicker',
  props: {
    label: {
      type: String,
      default: 'Choose Color',
    },
  },
  mixins: [trueValueMixin],
  data() {
    return {
      localValue: '#607C8A',
    };
  },
  watch: {
    localValue() {
      if (this.localValue !== this.modelValue) {
        this.updateValue(this.localValue);
      }
    },
  },
  components: {
    LvOverlayPanel: LvOverlayPanel,
    ColorpickerCore: ColorpickerCore,
    LvInput: LvInput,
    Checkboard,
  },
  computed: {
    // modelValue() {
    //   return this.$attrs.modelValue ? this.$attrs.modelValue : this.value;
    // },
  },
  methods: {
    toggleColorpickerOverlay(event) {
      this.$refs.ColorpickerOverlay.toggle(null, this.$refs.colorPickerInput.$el);
    },
    // updateValue(newValue) {
    //   this.$emit('input', newValue); // Only for Vue 2
    //   this.$emit('update:modelValue', newValue); // Only for Vue 3
    // },
  },
};
</script>

<style scoped>
/* .lv-colorpicker-wrapper { */
/* width: max-content; */
/* width: 250px; */
/* max-width: 100%; */
/* } */
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
