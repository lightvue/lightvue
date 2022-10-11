<template>
  <div ref="editable" class="inline-input__wrapper" contenteditable v-on="listeners"></div>
</template>

<script>
export default {
  name: 'LvInlineInput',
  props: {
    value: {
      type: String,
      default: '',
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
  },
};
</script>

<style lang="scss">
.inline-input__wrapper {
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  padding: 4px 8px;
  margin: -4px -8px;
  border-radius: 4px;
}
</style>
