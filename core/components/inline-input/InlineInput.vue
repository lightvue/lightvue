<template>
  <div class="inline-input__wrapper" contenteditable @input="onUpdateValue($event.target.innerText)" @focus="onTextFocus" @blur="removeTextFocus">
    {{ modelValue }}
  </div>
</template>

<script>
import { trueValueMixin } from 'lightvue/mixins';

export default {
  name: 'LvInlineInput',
  mixins: [trueValueMixin],

  props: {
    value: {
      type: String,
      default: '',
    },
    background: {
      type: String,
      default: 'rgba(0, 0, 0, 0.02)',
    },
    padding: {
      type: String,
      default: '4px 8px',
    },
    margin: {
      type: String,
      default: '-4px -8px',
    },
    borderRadius: {
      type: String,
      default: '4px',
    },
  },
  // mounted() {
  //   this.$refs.editable.innerText = this.value;
  // },
  computed: {
    calculateMargin() {
      var newPadding = this.padding.split(' ');
      var arrayPadding = newPadding.map(function (x) {
        return '-' + x;
      });
      return arrayPadding.join(' ');
    },
  },
  methods: {
    onUpdateValue(newValue) {
      this.updateValue(newValue);
    },
    onTextFocus(e) {
      e.target.style.color = this.color;
      e.target.style.background = this.background;
      e.target.style.padding = this.padding;
      e.target.style.margin = this.calculateMargin;
      e.target.style.borderRadius = this.borderRadius;
    },
    removeTextFocus(e) {
      e.target.style.background = '';
      e.target.style.padding = '';
      e.target.style.margin = '';
      e.target.style.borderRadius = '';
    },
  },
};
</script>

<style lang="scss">
.inline-input__wrapper {
  outline: none !important;
  cursor: text;
}
</style>
