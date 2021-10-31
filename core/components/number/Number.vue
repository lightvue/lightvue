<template>
  <lv-input type="number" :editable="true" ref="mainInput" @input="updateValue" :value="modelValue" v-bind="$attrs">
    <template #prepend>
      <LvButton :icon="iconLeft" :class="buttonColor" @click="LocalDecrement($event)" v-if="controls" />
    </template>
    <template #append>
      <LvButton :icon="iconRight" :class="buttonColor" @click="LocalIncrement($event)" v-if="controls" />
    </template>
  </lv-input>
</template>

<script>
import LvInput from 'lightvue/input';
import LvButton from 'lightvue/button';
export default {
  name: 'LvNumber',
  components: {
    LvInput,
    LvButton,
  },
  data() {
    return {
      localValue: 0,
    };
  },
  props: {
    value: {
      type: Number,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    iconRight: {
      type: String,
      default: 'light-icon-plus',
    },
    iconLeft: {
      type: String,
      default: 'light-icon-minus',
    },
    buttonColor: {
      type: String,
      default: 'lv--secondary',
    },
    max: {
      type: Number,
    },
    step: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
    },
  },
  methods: {
    isNumber(num) {
      return typeof num === 'number' && !Number.isNaN(num);
    },
    isValueValid(val) {
      if (!this.isNumber(val)) return false;
      if (this.isNumber(this.min) && val < this.min) return false;
      if (this.isNumber(this.max) && val > this.max) return false;
      return true;
    },
    updateValue(eventValue) {
      if (eventValue === '') {
        // Handling clear functionality
        eventValue = undefined;
      }
      let floatValue = parseFloat(eventValue);
      const isValueValid = this.isValueValid(floatValue);
      if (isValueValid) {
        this.localValue = floatValue;
        this.$emit('input', floatValue); // Only for Vue 2
        this.$emit('update:modelValue', floatValue); // Only for Vue
      } else {
        //TODO: clarify what should be a fallback in this case, should we reset the input value?
      }
    },
    LocalIncrement(event) {
      this.updateValue(+this.modelValue + +this.step);
    },
    LocalDecrement(event) {
      this.updateValue(this.modelValue - this.step);
    },
  },
  computed: {
    modelValue() {
      if (this.isNumber(this.$attrs.modelValue)) {
        return this.$attrs.modelValue;
      } else {
        return this.isNumber(this.value) ? this.value : this.localValue;
      }
    },
  },
};
</script>
