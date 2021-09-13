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
    rounded: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    sucess: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    topRight: {
      type: Boolean,
      default: false,
    },
    topLeft: {
      type: Boolean,
      default: false,
    },
    bottomLeft: {
      type: Boolean,
      default: false,
    },
    bottomRight: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    badgeClass() {
      return {
        '--rounded': this.rounded,
        '--primary': this.primary,
        '--secondary': this.secondary,
        '--sucess': this.sucess,
        '--danger': this.danger,
        '--warning': this.warning,
        '--info': this.info,
        '--light': this.light,
        '--dark': this.dark,
        '--top-right': this.topRight,
        '--top-left': this.topLeft,
        '--Bottom-left': this.bottomLeft,
        '--Bottom-right': this.bottomRight,
      };
    },
  },
};
</script>
<style lang="sass">
@import './badge.scss'
</style>
