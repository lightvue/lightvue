export default {
  props: ['value'],
  emits: ['input', 'update:modelValue'],
  computed: {
    modelValue() {
      return this.$attrs.modelValue ? this.$attrs.modelValue : this.value;
    },
  },
  methods: {
    updateValue(newValue) {
      // TODO Handle conditions in generic way...
      this.$emit('input', newValue); // Only for Vue 2
      this.$emit('update:modelValue', newValue); // Only for Vue 3
    },
  },
};
