<template>
  <div @click="Show" @mouseenter="ShowHover" @mouseleave="HideHover">
    <div :class="wrapperClass" class="popover" ref="parent">
      <slot name="anchor"></slot>

      <transition :duration="{ enter: 300, leave: 300 }" name="fade" @enter="Enter">
        <div v-if="isShow || modelValue">
          <!-- <div class="popover-overlay" @click.stop="Hide" v-if="!hover"></div> -->
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
    target: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isShow: false,
    // isVisible: false,
    positionClass: '',
  }),
  mounted() {},
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
        position: this.target ? 'fixed' : 'absolute',
      };
    },
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closePopover);
  },

  methods: {
    Show() {
      if (!this.isShow) {
        this.isShow = true;
        this.updateValue(true);
        setTimeout(() => {
          document.addEventListener('click', this.closePopover);
        }, 1);
      }
    },
    closePopover(e) {
      if (!this.$refs.popover.contains(e.target)) this.Hide();
    },

    Hide() {
      this.isShow = false;
      this.updateValue(false);
      document.removeEventListener('click', this.closePopover);
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
      const targetEl = this.target ? document.querySelector(this.target) : '';
      const content = targetEl ? targetEl : this.$refs.parent.children[0];
      const popover = this.$refs.popover;
      const offset = this.offset;
      const contentWidth = content.offsetWidth;
      const contentHeight = content.offsetHeight;
      const contentOffsetTop = targetEl ? content.getBoundingClientRect().top : 0;
      const contentOffsetLeft = targetEl ? content.getBoundingClientRect().left : 0;
      if (!targetEl) console.warn(`Given target: '${this.target}' is not a valid element.`);
      // console.log(popover.getBoundingClientRect().bottom < window.innerHeight);

      console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n', content, contentOffsetLeft, contentOffsetTop);
      switch (this.placement) {
        case 'left':
          popover.style.left = contentOffsetLeft + -popover.offsetWidth - offset + 'px';
          popover.style.top = contentOffsetTop + contentHeight / 2 - popover.offsetHeight / 2 + 'px';
          break;
        case 'right':
          popover.style.left = contentOffsetLeft + contentWidth + offset + 'px';
          popover.style.top = contentOffsetTop + contentHeight / 2 - popover.offsetHeight / 2 + 'px';
          break;
        case 'bottom':
          popover.style.left = contentOffsetLeft + contentWidth / 2 - popover.offsetWidth / 2 + 'px';
          popover.style.top = contentOffsetTop + contentHeight + offset + 'px';
          break;
        case 'top':
        default:
          if (popover.getBoundingClientRect().top < window.innerHeight) {
            popover.style.left = contentOffsetLeft + contentWidth / 2 - popover.offsetWidth / 2 + 'px';
            popover.style.top = contentOffsetTop + contentHeight + offset + 'px';
          } else {
            popover.style.left = contentOffsetLeft + contentWidth / 2 - popover.offsetWidth / 2 + 'px';
            popover.style.top = contentOffsetTop + -this.$refs.popover.offsetHeight - offset + 'px';
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
