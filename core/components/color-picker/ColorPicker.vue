<template>
  <div class="lv-colorpicker-wrapper">
    <div class="lv-colorpicker__colorblock-wrap" v-if="block" @click="toggleColorBlockOverlay">
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

    <LvOverlayPanel style="width: max-content" ref="ColorpickerOverlay" append-to="body" :show-close-icon="false" id="image_overlay_panel" :alignRight="!block">
      <ColorpickerCore v-model="localValue" style="width: 200px; transform: scale(1.05)" />

      <div class="palette-container" v-if="palette">
        <div class="lv-colorpicker__colorblock-wrap palette-color" v-for="color in colors" :key="color" @click="handleClick(color)">
          <div class="lv-colorpicker__colorblock" :style="{ backgroundColor: color }"></div>
          <checkboard grey="#607c8a" />
        </div>
      </div>
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
    palette: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    colors: {
      type: Array,
      default: () => ['#607C8A', '#008080', '#00FF7F', '#008000', '#EE82EE', '#CD5CFF', '#4B0082', '#0000ff', '#6495ED', '#118FFF', '#11FFE4', '#D1F200', '#FFFA00', '#FFA318', '#FF0C74', '#FF2000'],
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
    toggleColorBlockOverlay(event) {
      this.$refs.ColorpickerOverlay.toggle(event);
    },
    handleClick(color) {
      this.localValue = color;
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
}
.lv-colorpicker__colorblock {
  /* border-radius: 4px !important; */
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.palette-container {
  border-top: 1px solid silver;
  margin-top: 1rem;
  padding-top: 1rem;
  display: flex;
  width: 200px;
  flex-wrap: wrap;
  justify-content: center;
}
.palette-color {
  height: 25px;
  transform: scale(0.55);
  flex-basis: 12.4%;
}
.palette-color:hover {
  transform: scale(0.6);
  transition: 0.3s ease-in-out;
}
</style>
