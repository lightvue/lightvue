<template>
  <div>
    <lv-input type="text" :editable="false" ref="mainInput" v-bind="$attrs" :class="{ '--not-empty': filled }">
      <textarea :maxlength="maxLength" class="lv-textarea" v-bind="$attrs" @input="updateValue" :value="modelValue" ref="textarea" :class="{ '--resize-vertical': resize === 'vertical' }" />
    </lv-input>
    <div class="lv-textarea__limits" v-if="showLimit && maxLength">{{ modelValue ? modelValue.length : 0 }} / {{ maxLength }}</div>
  </div>
</template>

<script>
import LvInput from '@/collections/input/Input.vue';

export default {
  name: 'LvTextarea',
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
    maxLength: {
      type: Number,
      // default: 524288,
    },
    showLimit: {
      type: Boolean,
      default: false,
    },
    autoResize: {
      type: Boolean,
      default: false,
    },
    resize: {
      type: String,
      default: 'none',
    },
  },
  cachedScrollHeight: null,
  mounted() {
    if (this.$refs.textarea.offsetParent && this.autoResize) {
      this.resize();
    }
  },
  methods: {
    resize() {
      if (!this.cachedScrollHeight) {
        this.cachedScrollHeight = this.$refs.textarea.scrollHeight;
        this.$refs.textarea.style.overflow = 'hidden';
      }

      if (this.cachedScrollHeight !== this.$refs.textarea.scrollHeight) {
        this.$refs.textarea.style.height = '';
        this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';

        if (parseFloat(this.$refs.textarea.style.height) >= parseFloat(this.$refs.textarea.style.maxHeight)) {
          this.$refs.textarea.style.overflowY = 'scroll';
          this.$refs.textarea.style.height = this.$refs.textarea.style.maxHeight;
        } else {
          this.$refs.textarea.style.overflow = 'hidden';
        }

        this.cachedScrollHeight = this.$refs.textarea.scrollHeight;
      }
    },
    updateValue(event) {
      if (this.autoResize) {
        this.resize();
      }
      this.localValue = event.target.value;
      this.$emit('input-native', event);
      this.$emit('input', event.target.value); // Only for Vue 2
      this.$emit('update:modelValue', event.target.value); // Only for Vue 3
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          if (this.autoResize) {
            this.resize();
          }

          this.$emit('input', event.target.value);
        },
      };
    },
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    modelValue() {
      return this.$attrs.modelValue ? this.$attrs.modelValue : this.value ? this.value : this.localValue;
    },
  },
};
</script>

<style lang="scss">
.lv-textarea {
  border: none;
  width: 100%;
  background: transparent;
  outline: none;
  resize: none;
  &.--resize-vertical {
    resize: vertical;
  }
}
.lv-textarea__limits {
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
}
</style>
