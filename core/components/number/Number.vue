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
      localValue: '',
    };
  },
  props: {
    value: {
      type: Number,
      default: 0,
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
      // default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    updateValue(eventValue) {
      if (eventValue === '') {
        // Handling clear functionality
        eventValue = this.min; // TODO: Ideally should be blank.
      }
      let floatValue = parseFloat(eventValue);
      if (floatValue >= this.min && (this.max ? floatValue <= this.max : true)) {
        this.localValue = floatValue;
        this.$emit('input', floatValue); // Only for Vue 2
        this.$emit('update:modelValue', floatValue); // Only for Vue
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
      return this.$attrs.modelValue ? this.$attrs.modelValue : this.value ? this.value : this.localValue;
    },
  },
};
</script>
