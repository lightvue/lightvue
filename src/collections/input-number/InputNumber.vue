<template>
  <lv-input type="number" :editable="true" ref="mainInput" @input="updateValue" :value="modelValue" v-bind="$attrs">
    <template slot="prepend">
      <LvButton :icon="LeftIcon" :class="ButtonColor" @click="LocalDecrement($event)" v-if="DisipayUpdateButtons" />
    </template>
    <template slot="append">
      <LvButton :icon="RightIcon" :class="ButtonColor" @click="LocalIncrement($event)" v-if="DisipayUpdateButtons" />
    </template>
  </lv-input>
</template>

<script>
import LvInput from '@/collections/input/Input.vue';
export default {
  name: 'LvInputNumber',
  components: {
    LvInput,
  },
  data() {
    return {
      localValue: '',
    };
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    DisipayUpdateButtons: {
      type: Boolean,
      default: true,
    },
    RightIcon: {
      type: String,
      default: 'light-icon-plus',
    },
    LeftIcon: {
      type: String,
      default: 'light-icon-minus',
    },
    ButtonColor: {
      type: String,
      default: 'lv--secondary',
    },
    MaxNumber: {
      type: Number,
      // default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    MinNumber: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    updateValue(eventValue) {
      let floatValue = parseFloat(eventValue);
      if (floatValue >= this.MinNumber && (this.MaxNumber ? floatValue <= this.MaxNumber : true)) {
        this.localValue = floatValue;
        this.$emit('input', floatValue); // Only for Vue 2
        this.$emit('update:modelValue', floatValue); // Only for Vue
      }
    },
    LocalIncrement(event) {
      this.updateValue(this.modelValue + this.step);
      // this.localValue=this.localValue+1;
    },
    LocalDecrement(event) {
      this.updateValue(this.modelValue - this.step);
      // this.localValue=this.localValue-1;
    },
  },
  computed: {
    modelValue() {
      return this.$attrs.modelValue ? this.$attrs.modelValue : this.value ? this.value : this.localValue;
    },
  },
};
</script>

<style>
.DisipayPrepend {
  display: none;
}
</style>
