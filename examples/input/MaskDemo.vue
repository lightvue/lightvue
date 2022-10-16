<template>
  <LvInput type="text" v-mask="config" :value="display" @input-native="onInput" v-bind="$attrs" />
</template>

<script>
import LvMask from 'lightvue/mask';
import LvInput from 'lightvue/input';
import tokens from '../../core/directives/mask/tokens';
import masker from '../../core/directives/mask/masker';
export default {
  name: 'TheMask',
  props: {
    value: [String, Number],
    mask: {
      type: [String, Array],
      required: true,
    },
    masked: {
      // by default emits the value unformatted, change to true to format with the mask
      type: Boolean,
      default: false, // raw
    },
    tokens: {
      type: Object,
      default: () => tokens,
    },
  },
  components: {
    LvInput,
  },
  directives: { mask: LvMask },
  data() {
    return {
      lastValue: null, // avoid unecessary emit when has no change
      display: this.value,
    };
  },
  watch: {
    value(newValue) {
      if (newValue !== this.lastValue) {
        this.display = newValue;
      }
    },
    masked() {
      this.refresh(this.display);
    },
  },
  computed: {
    config() {
      return {
        mask: this.mask,
        tokens: this.tokens,
        masked: this.masked,
      };
    },
  },
  methods: {
    onInput(e) {
      if (e.isTrusted) return; // ignore native event
      console.log(e.target.value);
      this.refresh(e.target.value);
    },

    refresh(value) {
      this.display = value;
      var value = masker(value, this.mask, this.masked, this.tokens);
      if (value !== this.lastValue) {
        this.lastValue = value;
        this.$emit('input', value);
      }
    },
  },
};
</script>
