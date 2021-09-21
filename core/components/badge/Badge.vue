<template>
  <div class="Badge__wrapper">
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
        '--Bottom-left': this.position === 'bottomLeft',
        '--Bottom-right': this.position === 'bottomRight',
      };
    },
  },
};
</script>
<style lang="sass">
@import './badge.scss'
</style>
