<template>
  <div class="lv-badge__wrap">
    <div :class="badgeClass" class="lv-badge">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LvBadge',
  props: {
    size: {
      type: String,
      default: 'md',
    },
    position: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    badgeClass() {
      return {
        '--size-sm': this.size === 'sm',
        '--size-md': this.size === 'md',
        '--size-lg': this.size === 'lg',
        '--size-xl': this.size === 'xl',
        '--top-right': this.position === 'topRight',
        '--top-left': this.position === 'topLeft',
        '--bottom-left': this.position === 'bottomLeft',
        '--bottom-right': this.position === 'bottomRight',
        [`lv--${this.variant}`]: true,
      };
    },
  },
};
</script>
<style lang="sass">
@import './badge.scss'
</style>
