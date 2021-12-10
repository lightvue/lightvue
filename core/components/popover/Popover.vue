<template>
  <div @click="Show" @mouseenter="ShowHover" @mouseleave="HideHover">
    <div :class="wrapperClass" class="popover" ref="parent">
      <slot name="anchor"></slot>

      <transition :duration="{ enter: 300, leave: 300 }" name="fade" @enter="Enter">
        <div v-if="isShow || modelValue">
          <div class="popover-overlay" @click.stop="Hide" v-if="!hover"></div>
          <div ref="popover" :class="popoverClass" :style="computedStyle">
            <div class="popover--content">
              <slot></slot>
            </div>
            <div class="popover-tip"></div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { trueValueMixin } from 'lightvue/mixins';

export default {
  name: 'LvPopOver',
  mixins: [trueValueMixin],
  props: {
    placement: {
      type: String,
      default: 'top',
    },
    hover: {
      type: Boolean,
      default: false,
    },

    offset: {
      type: Number,
      default: 15,
    },
    width: {
      type: String,
      default: '200px',
    },
    height: {
      type: String,
      default: '70vh',
    },
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isShow: false,
    // isVisible: false,
    positionClass: '',
  }),
  computed: {
    wrapperClass() {
      return `popover--${this.placement}`;
    },
    popoverClass() {
      this.positionClass = `arrow-position-${this.placement}`;
      return ['popover-item', this.positionClass];
    },
    computedStyle() {
      return {
        'min-width': this.width,
        'max-height': this.height,
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    Show() {
      this.isShow = true;
      this.updateValue(true);
    },

    Hide() {
      this.isShow = false;
      this.updateValue(false);
    },
    ShowHover() {
      if (this.hover) {
        this.Show();
      }
    },
    HideHover() {
      if (this.hover) {
        this.Hide();
      }
    },
    Enter() {
      const content = this.$refs.parent.children[0];
      const popover = this.$refs.popover;
      const offset = this.offset;
      const contentWidth = content.offsetWidth;
      const contentHeight = content.offsetHeight;
      // console.log(popover.getBoundingClientRect().bottom < window.innerHeight);
      switch (this.placement) {
        case 'top':
          console.log(this.$refs.popover.offsetHeight);
          popover.style.left = contentWidth / 2 - popover.offsetWidth / 2 + 'px';
          popover.style.top = -this.$refs.popover.offsetHeight - offset + 'px';
          break;
        case 'left':
          popover.style.left = -popover.offsetWidth - offset + 'px';
          popover.style.top = contentHeight / 2 - popover.offsetHeight / 2 + 'px';
          break;
        case 'right':
          popover.style.left = contentWidth + offset + 'px';
          popover.style.top = contentHeight / 2 - popover.offsetHeight / 2 + 'px';
          break;
        case 'bottom':
        default:
          if (popover.getBoundingClientRect().bottom < window.innerHeight) {
            popover.style.left = contentWidth / 2 - popover.offsetWidth / 2 + 'px';
            popover.style.top = contentHeight + offset + 'px';
          } else {
            this.placement = 'top';
          }
          break;
      }
    },
    // setBottom(popover) {
    //   popover.style.left = contentWidth / 2 - popover.offsetWidth / 2 + 'px';
    //   popover.style.top = contentHeight + offset + 'px';
    // },
  },
};
</script>

<style lang="scss">
@import './Popover.scss';
</style>
