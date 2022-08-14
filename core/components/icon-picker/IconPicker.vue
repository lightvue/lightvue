<template>
  <div class="lv-colorpicker-wrapper">
    <div class="lv-colorpicker__colorblock-wrap" v-if="withoutInput" @click="toggleIconBlockOverlay">
      <i :class="localValue"></i>
    </div>

    <LvInput v-else :label="label" ref="colorPickerInput" v-model="localValue" v-bind="$attrs" @focus="toggleIconpickerOverlay" aria:haspopup="true" aria-controls="colorpicker_overlay_panel">
      <template #append>
        <div class="lv-colorpicker__colorblock-wrap" @click="toggleIconpickerOverlay">
          <i :class="localValue"></i>
        </div>
      </template>
    </LvInput>

    <LvOverlayPanel class="overlayPanel" style="max-content" ref="ColorpickerOverlay" append-to="body" :show-close-icon="false" id="image_overlay_panel" alignRight>
      <IconpickerCore v-model="localValue" v-bind="$props" @close="close" />
    </LvOverlayPanel>
  </div>
</template>

<script>
import IconpickerCore from './core/IconpickerCore.vue';
import LvOverlayPanel from 'lightvue/overlay-panel';
import LvInput from 'lightvue/input';
import { trueValueMixin } from 'lightvue/mixins';
export default {
  name: 'LvIconpicker',
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
    icons: {
      type: Array,
      default: () => ['light-icon-accessible', 'light-icon-ad', 'light-icon-activity', 'light-icon-ban', 'light-icon-bandage', 'light-icon-basket', 'light-icon-bike', 'light-icon-bell', 'light-icon-bed', 'light-icon-bolt', 'light-icon-book', 'light-icon-bold', 'light-icon-cloud', 'light-icon-code', 'light-icon-clock', 'light-icon-copy'],
    },
  },
  mixins: [trueValueMixin],
  data() {
    return {
      localValue: 'search',
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
    IconpickerCore: IconpickerCore,
    LvInput: LvInput,
    // Checkboard,
  },
  computed: {
    // modelValue() {
    //   return this.$attrs.modelValue ? this.$attrs.modelValue : this.value;
    // },
  },
  methods: {
    toggleIconpickerOverlay(event) {
      this.$refs.ColorpickerOverlay.toggle(null, this.$refs.colorPickerInput.$el);
    },
    toggleIconBlockOverlay(event) {
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
.overlayPanel {
  background-color: #f5f8fa;
}

.lv-colorpicker-wrapper {
  display: inline-block;
  vertical-align: middle;
}

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
.lv-colorpicker__colorblock-wrap i {
  position: absolute;
  top: 5px;
  font-size: 20px;
}
.lv-colorpicker__colorblock {
  /* border-radius: 4px !important; */
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
}
</style>
