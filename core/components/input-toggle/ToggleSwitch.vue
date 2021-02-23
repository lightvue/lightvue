<template>
  <div class="d-toggle__wrapper" @click="updateValue($event)">
    <label
      v-if="label && labelPosition === 'left'"
      :for="inputId ? inputId : name"
      class="d-toggle__label d-toggle__label--left"
      >{{ label }}</label
    >

    <div :class="containerClass">
      <input
        type="checkbox"
        role="switch"
        class="d-toggle__input"
        ref="input"
        v-bind="$attrs"
        v-on="listeners"
        :id="inputId"
        :name="name"
        :checked="modelValue"
        :disabled="disabled"
        @focus="onFocus($event)"
        @blur="onBlur($event)"
        @keydown.enter.prevent="updateValue($event)"
        :aria-checked="value"
        :aria-labelledby="ariaLabelledBy"
      />

      <div class="d-toggle__track"></div>
      <div class="d-toggle__thumb">
        <i aria-hidden="true" role="presentation" :class="icon" v-if="icon"></i>
      </div>
    </div>

    <label
      v-if="label && labelPosition !== 'left'"
      :for="inputId ? inputId : name"
      class="d-toggle__label"
      >{{ label }}</label
    >
  </div>
</template>

<script>
export default {
  name: 'LvToggleswitch',
  inheritAttrs: false,

  props: {
    value: Boolean,
    inputId: String,
    name: String,
    disabled: Boolean,
    dense: Boolean,
    label: String,
    labelPosition: {
      type: String,
      default: 'right'
    },
    icon: String,
    checkedIcon: String,
    ariaLabelledBy: null,
  },
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    modelValue() {
      return this.$attrs.modelValue ? this.$attrs.modelValue : this.value;
    },

    listeners() {
      return this.$listeners
        ? {
            // Depreciated in Vue 3
            ...this.$listeners,
            click: (event) => this.updateValue(event),
          }
        : {};
    },
    containerClass() {
      return [
        "d-toggle__inner",
        {
          "--checked": this.modelValue,
          "--disabled": this.disabled,
          "--dense": this.dense,
        },
      ];
    },
  },
  methods: {
    updateValue(event) {
      if (!this.disabled) {
        this.$emit("input-native", event);
        this.$emit("input", !this.modelValue); // Only for Vue 2
        this.$emit("update:modelValue", !this.modelValue); // Only for Vue 3
        this.$emit("change", event);
        this.$emit("click", event);

        this.$refs.input.focus();
      }
    },
    // onClick(event) {
    //   if (!this.disabled) {
    //     this.$emit("click", event);
    //     this.$emit("input", !this.modelValue);
    //     this.$emit("change", event);
    //     this.$refs.input.focus();
    //   }
    // },
    onFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    },
    onBlur(event) {
      this.focused = false;
      this.$emit("blur", event);
    },
  },
};
</script>
<style lang="scss">
@import "./ToggleSwitch.scss";
</style>
