<template>
  <div class="lv-colorpicker-wrapper">
    <div class="icon-picker__selected-icon" v-if="withoutInput" @click="toggleIconBlockOverlay">
      <i :class="localValue"></i>
    </div>

    <LvInput v-else :label="label" ref="colorPickerInput" v-model="localValue" v-bind="$attrs" @focus="toggleIconpickerOverlay" aria:haspopup="true" aria-controls="colorpicker_overlay_panel">
      <template #append>
        <div class="icon-picker__selected-icon" @click="toggleIconpickerOverlay">
          <i :class="localValue"></i>
        </div>
      </template>
    </LvInput>

    <LvOverlayPanel class="icon-picker__overlay" ref="ColorpickerOverlay" append-to="body" :show-close-icon="false" id="image_overlay_panel" alignRight>
      <IconPickerCore v-model="localValue" v-bind="$props" @close="close" />
    </LvOverlayPanel>
  </div>
</template>

<script>
import IconPickerCore from './IconPickerCore.vue';
import LvOverlayPanel from 'lightvue/overlay-panel';
import LvInput from 'lightvue/input';
import { trueValueMixin } from 'lightvue/mixins';
export default {
  name: 'LvIconPicker',
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
    LvOverlayPanel,
    IconPickerCore,
    LvInput,
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
  },
};
</script>

<style lang="scss">
.icon-picker__overlay {
  background-color: #f5f8fa;
}

.lv-colorpicker-wrapper {
  display: inline-block;
  vertical-align: middle;
}

.icon-picker__selected-icon {
  position: relative;
  width: 30px;
  height: 30px;
  top: 3px;
  right: 3px;
  border-radius: 3px !important;
  cursor: pointer;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.05);

  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-size: 24px;
  }
}
</style>
