<template>
  <div class="lv-card" :class="computedClass" :style="computedStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LvCard',
  props: {
    shadowStyle: {
      type: Number,
      default: 1,
    },
    padding: {
      type: String,
      default: '20px',
    },
    borderRadius: {
      type: String,
      default: '4px',
    },
    showBorder: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: 'var(--lv-input-background-color)',
    },
  },
  computed: {
    computedClass() {
      return [`lv-card--shadow-${this.shadowStyle}`, this.showBorder && 'lv-card--border'];
    },
    computedStyle() {
      return {
        padding: this.padding,
        borderRadius: this.borderRadius,
        backgroundColor: this.backgroundColor,
      };
    },
  },
};
</script>
<style lang="sass">
@import './card.scss'
</style>
