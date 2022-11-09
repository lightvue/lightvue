<template>
  <div class="lv-colorpicker-wrapper">
    <div class="lv-colorpicker__colorblock-wrap" v-if="withoutInput" @click="toggleColorBlockOverlay">
      <div class="lv-colorpicker__colorblock" :style="{ backgroundColor: localValue }"></div>
      <checkboard grey="#607c8a" />
    </div>

    <LvInput v-else :label="label" ref="colorPickerInput" v-model="localValue" v-bind="$attrs" @focus="toggleColorpickerOverlay" aria:haspopup="true" aria-controls="colorpicker_overlay_panel">
      <template #append>
        <div class="lv-colorpicker__colorblock-wrap" @click="toggleColorpickerOverlay">
          <div class="lv-colorpicker__colorblock" :style="{ backgroundColor: localValue }"></div>
          <checkboard grey="#607c8a" />
        </div>
      </template>
    </LvInput>

    <LvOverlayPanel style="width: max-content" ref="ColorpickerOverlay" append-to="body" :show-close-icon="false" id="image_overlay_panel" alignRight>
      <ColorpickerCore v-model="localValue" v-bind="$props" style="width: 200px; transform: scale(1.05)" @close="close" />
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
      default: '',
    },
    hidePalette: {
      type: Boolean,
      default: false,
    },
    withoutInput: {
      type: Boolean,
      default: false,
    },
    colors: {
      type: Array,
      default: () => ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#795548'],
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
  mounted() {
    this.localValue = this.modelValue;
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
    toggleColorBlockOverlay(event) {
      this.$refs.ColorpickerOverlay.toggle(event);
    },
    close() {
      this.$refs.ColorpickerOverlay.hide();
    },
    // updateValue(newValue) {
    //   this.$emit('input', newValue); // Only for Vue 2
    //   this.$emit('update:modelValue', newValue); // Only for Vue 3
    // },
  },
};
</script>

<style>

.lv-colorpicker__colorblock-wrap {
  position: relative;
  width: 30px;
  height: 30px;
  top: calc(50% - 16px);
  right: 2px;
  border-radius: 5px !important;
  transform: scale(0.9);
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
}
.lv-colorpicker__colorblock {
  /* border-radius: 4px !important; */
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
}
</style>
