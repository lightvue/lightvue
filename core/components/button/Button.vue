<template>
  <button class="lv-button lv--primary" :class="buttonClass" v-bind="$attrs" :type="type" v-on="listeners">
    <div v-if="$slots['prepend'] || icon" class="lv-button__prepend">
      <slot name="prepend">
        <div v-if="icon" class="lv-button__icon">
          <i :class="icon" />
        </div>
      </slot>
    </div>
    <div class="lv-button__label">
      <slot>
        {{ label || '&nbsp;' }}
      </slot>
    </div>
    <div v-if="$slots['append'] || iconRight" class="lv-button__append">
      <slot name="append">
        <div v-if="iconRight" class="lv-button__icon">
          <i :class="iconRight" />
        </div>
      </slot>
    </div>
  </button>
</template>

<script>
// import Ripple from '@/components/ripple/Ripple';

export default {
  props: {
    icon: {
      type: String,
    },
    iconRight: {
      type: String,
    },
    label: {
      type: String,
    },
    // loading: { // upcomming with needed slot
    //     type: Boolean,
    //     default: false,
    // },
    outlined: {
      type: Boolean,
      default: false,
    },
    push: {
      type: Boolean,
      default: false,
    },
    raised: {
      type: Boolean,
      default: false,
    },
    deepShadow: {
      type: Boolean,
      default: false,
    },
    deepShadowHover: {
      type: Boolean,
      default: false,
    },

    rounded: {
      type: Boolean,
      default: false,
    },
    // ripple: { // upcomming
    //     type: Boolean,
    //     default: true
    // },
    size: {
      type: String,
      default: 'md',
      // validation: [TODO] for only possible values
    },
    type: {
      type: String,
      default: 'button',
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return {
        '--icon-only': this.icon && !this.label,
        '--rounded': this.rounded,
        '--size-sm': this.size === 'sm',
        '--size-md': this.size === 'md',
        '--size-lg': this.size === 'lg',
        '--size-xl': this.size === 'xl',
        '--raised': this.raised,
        '--deep-shadow-hover': this.deepShadowHover,
        '--deep-shadow': this.deepShadow,
        '--push': this.raised || this.push,
        '--outlined': this.outlined,
        '--inline': this.inline,
      };
    },
    listeners() {
      return this.$listeners
        ? {
            // Depreciated in Vue 3
            ...this.$listeners,
          }
        : {};
    },
  },
  // directives: {
  //     'ripple': Ripple
  // }
};
</script>
<style lang="scss">
@import './Button.scss';
@import './ButtonTheme.scss';
</style>
