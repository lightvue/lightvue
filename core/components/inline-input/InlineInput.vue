<template>
  <div class="inline-input__wrapper" :contenteditable="!readOnly" @input="onUpdateValue($event)" @focus="onTextFocus" @blur="removeTextFocus" v-html="localValue" @keydown.stop=""></div>
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
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  // created() {
  //   this.$refs.editable.innerText = this.modelValue;
  // },
  data() {
    return {
      localValue: '',
    };
  },
  watch: {
    modelValue: {
      handler: function (newValue) {
        console.log(newValue, this.localValue);
        if (newValue !== this.localValue) {
          this.localValue = newValue;
        }
      },
      immediate: true,
    },
  },
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
    onUpdateValue(evt) {
      const newValue = evt.target.innerText;
      const range = document.getSelection().getRangeAt(0);
      const pos = range.endOffset;
      this.localValue = newValue;
      this.updateValue(newValue);
      this.$nextTick(() => {
        const newRange = document.createRange();
        const selection = window.getSelection();
        const node = this.$el.childNodes[0];
        if (node) {
          newRange.setStart(node, node && pos > node.length ? 0 : pos);
          newRange.collapse(true);
          selection.removeAllRanges();
          selection.addRange(newRange);
        }
      });
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
.inline-input__wrapper[contenteditable='true'] {
  outline: none !important;
  cursor: text;
}
</style>
