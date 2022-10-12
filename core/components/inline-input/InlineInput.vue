<template>
  <div ref="editable" class="inline-input__wrapper" contenteditable v-on="listeners" @focus="onTextFocus" @focusout="removeTextFocus"></div>
</template>

<script>
export default {
  name: 'LvInlineInput',

  props: {
    value: {
      type: String,
      default: '',
    },
    color: {
      type: String,
    },
    background: {
      type: String,
      default: '',
    },
    padding: {
      type: String,
    },
    margin: {
      type: String,
    },
    borderRadius: {
      type: String,
      default: '4px',
    },
  },

  computed: {
    listeners() {
      return { ...this.$listeners, input: this.onInput };
    },
  },
  mounted() {
    this.$refs.editable.innerText = this.value;
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.innerText);
    },
    onTextFocus(e) {
      e.target.style.color = this.color;
      e.target.style.background = this.background;
      e.target.style.padding = this.padding + 'px';
      e.target.style.margin = this.margin + 'px';
      e.target.style.borderRadius = this.borderRadius + 'px';
    },
    removeTextFocus(e) {
      e.target.style.color = '';
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
}
</style>
