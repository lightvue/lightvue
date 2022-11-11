<template>
  <div class="lv__iconpicker-wrapper">
    <div class="icon-picker__selected-icon" v-if="withoutInput" @click="toggleIconBlockOverlay">
      <i :class="localValue"></i>
    </div>

    <LvInput v-else :label="label" ref="iconPickerInput" v-model="localValue" v-bind="$attrs" @focus="toggleIconpickerOverlay" aria:haspopup="true" aria-controls="iconpicker_overlay_panel">
      <template #append>
        <div class="icon-picker__selected-icon" @click="toggleIconpickerOverlay">
          <i :class="localValue"></i>
        </div>
      </template>
    </LvInput>

    <LvOverlayPanel class="icon-picker__overlay" ref="IconpickerOverlay" append-to="body" :show-close-icon="false" id="image_overlay_panel" alignRight>
      <IconPickerCore v-model="localValue" v-bind="$props" @close="close" />
    </LvOverlayPanel>
  </div>
</template>

<script>
import IconPickerCore from './IconPickerOverlay.vue';
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
      default: () => ['light-icon-brand-twitter', 'light-icon-brand-linkedin', 'light-icon-brand-facebook', 'light-icon-brand-instagram', 'light-icon-brand-telegram', 'light-icon-brand-github', 'light-icon-brand-whatsapp', 'light-icon-brand-youtube', 'light-icon-settings', 'light-icon-download', 'light-icon-bell', 'light-icon-book', 'light-icon-copy', 'light-icon-code'],
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
      this.$refs.IconpickerOverlay.toggle(null, this.$refs.iconPickerInput.$el);
    },
    toggleIconBlockOverlay(event) {
      this.$refs.IconpickerOverlay.toggle(event);
    },
    close() {
      this.$refs.IconpickerOverlay.hide();
    },
  },
};
</script>

<style lang="scss">
.icon-picker__overlay {
  background-color: #f5f8fa;
}

.lv__iconpicker-wrapper {
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
