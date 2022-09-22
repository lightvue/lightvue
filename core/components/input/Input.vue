<template>
  <div :class="['lv-input__group', { '--with-floating-label': floatingLabel }, { '--not-empty': filled }, { '--with-bottom-bar': floatingLabel || bottomBar }]">
    <label :for="name">
      <div class="lv-input__label" v-if="label" :for="name">{{ label }}</div>
    </label>
    <div :class="['lv-input__field', { '--rounded': rounded }, { '--show-input-spinner': showInputSpinner }]" :style="`--placeholder-color: ${placeholderColor}`">
      <div class="lv-input__prepend" v-if="$slots['prepend'] || iconLeft">
        <slot name="prepend">
          <div class="lv-input__icon" v-if="iconLeft">
            <i :class="iconLeft" />
          </div>
        </slot>
      </div>
      <input class="lv-input__element" :value="modelValue" v-bind="$attrs" v-on="listeners" @input="this.inputEventHandler" :name="name" :id="name" v-if="editable" />
      <div v-else class="lv-input__default">
        <slot>{{ modelValue || $attrs.placeholder }}</slot>
        <div class="lv-hidden-accessible">
          <input type="text" readonly :value="modelValue" v-bind="$attrs" v-on="listeners" :name="name" />
        </div>
      </div>
      <div class="lv-input__append" v-if="$slots['append'] || iconRight || clearable">
        <div class="lv-input__icon" v-if="clearable && filled" style="cursor: pointer" @click.stop="handleClear">
          <i class="light-icon-x" />
        </div>
        <slot name="append">
          <div class="lv-input__icon" v-if="iconRight">
            <i :class="iconRight" />
          </div>
        </slot>
      </div>
    </div>
    <div class="lv-input__help" v-if="helpText">
      {{ helpText }}
    </div>
  </div>
</template>

<script>
// import { uniqueComponentId } from 'lightvue/utils';
export default {
  name: 'Input',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      // default: `text_${uniqueComponentId()}`,
    },
    helpText: {
      type: String,
      default: '',
    },
    editable: {
      type: Boolean,
      default: true,
    },
    // placeholder: {
    //     type: String,
    //     default: null,
    // },
    placeholderColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.3)',
    },
    floatingLabel: {
      type: Boolean,
      default: false,
    },
    bottomBar: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    iconLeft: {
      type: String,
      default: '',
    },
    iconRight: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showInputSpinner: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    modelValue() {
      // return this.$attrs.modelValue ? this.$attrs.modelValue : this.value;
      return this.value ? this.value : this.$attrs.modelValue ? this.$attrs.modelValue : null;
    },
    listeners() {
      return this.$listeners
        ? {
            // Depreciated in Vue 3
            ...this.$listeners,
            input: event => this.inputEventHandler(event),
          }
        : {};
    },
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
  },
  methods: {
    inputEventHandler(event) {
      this.$emit('input-native', event);
      this.updateValue(event.target.value);
    },
    updateValue(newValue) {
      this.$emit('input', newValue); // Only for Vue 2
      this.$emit('update:modelValue', newValue); // Only for Vue 3
    },
    handleClear() {
      this.updateValue('');
      this.$emit('clear');
    },
  },
};
</script>
<style lang="scss">
@import './Input.scss';
@import './InputTheme.scss';
@import './InputAccesibility.scss';
</style>
