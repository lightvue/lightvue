import { ObjectUtils } from 'lightvue/utils';

export default {
  props: {
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    dataKey: null,
  },
  methods: {
    getOptionLabel(option) {
      return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    },
    getOptionValue(option) {
      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    },
    getOptionRenderKey(option) {
      return this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option);
    },
    isOptionDisabled(option) {
      return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    },
    isOptionSelected(option) {
      if (this.modelValue instanceof Array) {
        return ObjectUtils.contains(this.getOptionValue(option), this.modelValue);
      } else {
        return ObjectUtils.equals(this.modelValue, this.getOptionValue(option), this.equalityKey);
      }
    },
  },
  computed: {
    equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
  },
};
