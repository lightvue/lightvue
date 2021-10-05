<template>
  <div>
    <lv-input type="text" :editable="false" ref="mainInput" v-bind="$attrs" :class="{ '--not-empty': filled }" :value="modelValue" @clear="handleClear()">
      <textarea :maxlength="maxLength" class="light-scrollbar" class="lv-textarea" v-bind="$attrs" @input="updateModel" :value="modelValue" ref="textarea" :class="{ '--resize-vertical': resize === 'vertical' }" />
    </lv-input>
    <div class="lv-textarea__limits" v-if="showLimit && maxLength">{{ modelValue ? modelValue.length : 0 }} / {{ maxLength }}</div>
  </div>
</template>

<script>
import LvInput from 'lightvue/input';

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
  // cachedScrollHeight: null,
  mounted() {
    if (this.$refs.textarea.offsetParent && this.autoResize) {
      this.resizeTextareaV2();
    }
  },
  methods: {
    // resizeTextarea() {
    //   if (!this.cachedScrollHeight) {
    //     this.cachedScrollHeight = this.$refs.textarea.scrollHeight;
    //     this.$refs.textarea.style.overflow = 'hidden';
    //   }

    //   if (this.cachedScrollHeight !== this.$refs.textarea.scrollHeight) {
    //     this.$refs.textarea.style.height = '';
    //     this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';

    //     if (parseFloat(this.$refs.textarea.style.height) >= parseFloat(this.$refs.textarea.style.maxHeight)) {
    //       this.$refs.textarea.style.overflowY = 'scroll';
    //       this.$refs.textarea.style.height = this.$refs.textarea.style.maxHeight;
    //     } else {
    //       this.$refs.textarea.style.overflow = 'hidden';
    //     }

    //     this.cachedScrollHeight = this.$refs.textarea.scrollHeight;
    //   }
    // },
    // New Function for Auto resize
    resizeTextareaV2() {
      this.$refs.textarea.style.height = 'auto';
      this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + (this.$refs.textarea.clientHeight - this.$refs.textarea.offsetHeight) + 'px';
    },

    updateModel(event) {
      this.$emit('input-native', event);
      this.updateValue(event.target.value);
    },
    updateValue(newValue) {
      if (this.autoResize) {
        // this.resizeTextarea();
        this.resizeTextareaV2(); // New Function for auto Resize
      }
      this.localValue = newValue;
      this.$emit('input', newValue); // Only for Vue 2
      this.$emit('update:modelValue', newValue); // Only for Vue 3
    },
    handleClear() {
      this.updateValue('');
      this.$emit('clear');
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          this.updateModel(event);
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
  font-family: inherit;
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
