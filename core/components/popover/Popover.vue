<template>
  <div @click="showPopover" @mouseenter="showHover" @mouseleave="hideHover">
    <div :class="wrapperClass" class="popover" ref="parent">
      <slot name="anchor"></slot>
      <transition :duration="{ enter: 300, leave: 300 }" name="fade" @enter="enterPopover">
        <div v-if="isShow || modelValue">
          <!-- <div class="popover-overlay" @click.stop="hidePopover" v-if="!hover"></div> -->
          <div ref="popover" :class="['popover-item', this.positionClass]" :style="computedStyle">
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
    maxWidth:{
      type: String,
      default: '250px',
    },
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
    borderRadius: {
      type: String,
      default: '4px',
    },
    padding:{
      type: String,
      default: '16px',
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
    computedPlacement: '',
  }),
  mounted() {
    this.computedPlacement = this.placement ? this.placement : 'top';
  },
  computed: {
    wrapperClass() {
      return `popover--${this.placement}`;
    },
    popoverClass() {
      this.positionClass = `arrow-position-${this.computedPlacement}`;
      return [];
    },
    computedStyle() {
      return {
        'min-width': this.width,
        'max-height': this.height,
        'max-width' : this.maxWidth,
        backgroundColor: this.backgroundColor,
        borderRadius: this.borderRadius,
        padding: this.padding,
        position: this.target ? 'fixed' : 'absolute',
      };
    },
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closePopover);
  },

  methods: {
    showPopover() {
      if (!this.isShow) {
        this.isShow = true;
        this.updateValue(true);
        setTimeout(() => {
          document.addEventListener('click', this.closePopover);
        }, 1);
      }
    },
    closePopover(e) {
      if (this.$refs.popover && !this.$refs.popover.contains(e.target)) this.hidePopover();
    },

    hidePopover() {
      this.isShow = false;
      this.updateValue(false);
      document.removeEventListener('click', this.closePopover);
    },
    showHover() {
      if (this.hover) {
        this.showPopover();
      }
    },
    hideHover() {
      if (this.hover) {
        this.hidePopover();
      }
    },
    enterPopover() {
      const targetEl = this.target ? document.querySelector(this.target) : '';
      const content = targetEl ? targetEl : this.$refs.parent.children[0];
      const popover = this.$refs.popover;
      // const offset = this.offset;
      const contentWidth = content.offsetWidth;
      const contentHeight = content.offsetHeight;
      const contentOffsetTop = targetEl ? content.getBoundingClientRect().top : 0;
      const contentOffsetLeft = targetEl ? content.getBoundingClientRect().left : 0;
      if (!targetEl && this.target) console.warn(`Given target: '${this.target}' is not a valid element.`);
      // console.log(popover.getBoundingClientRect().bottom < window.innerHeight);

      if (this.computedPlacement == 'left') {
        this.setLeft(contentOffsetTop, contentOffsetLeft, contentHeight);
        const popoverBounding = popover.getBoundingClientRect();
        if (popoverBounding.left < 0) {
          this.setRight(contentWidth, contentOffsetTop, contentOffsetLeft, contentHeight);
        }
      } else if (this.computedPlacement == 'right') {
        const popoverBounding = popover.getBoundingClientRect();
        this.setRight(contentWidth, contentOffsetTop, contentOffsetLeft, contentHeight);
        if (popoverBounding.left + popoverBounding.width > window.innerWidth) {
          this.setLeft(contentOffsetTop, contentOffsetLeft, contentHeight);
        }
      } else if (this.computedPlacement == 'bottom') {
        this.setBottom(contentWidth, contentOffsetTop, contentOffsetLeft, contentHeight, contentWidth);
        const popoverBounding = popover.getBoundingClientRect();
        if (popoverBounding.top + popoverBounding.height > window.innerHeight) {
          this.setTop(contentWidth, contentOffsetTop, contentOffsetLeft);
        }
      } else if (this.computedPlacement == 'top') {
        this.setTop(contentWidth, contentOffsetTop, contentOffsetLeft);
        const popoverBounding = popover.getBoundingClientRect();
        if (popoverBounding.top < 0) {
          this.setBottom(contentWidth, contentOffsetTop, contentOffsetLeft, contentHeight, contentWidth);
        }
      }
      this.positionClass = `arrow-position-${this.computedPlacement}`;
    },
    setLeft(contentOffsetTop, contentOffsetLeft, contentHeight) {
      this.computedPlacement = 'left';
      const popover = this.$refs.popover;
      const offset = this.offset;

      popover.style.left = contentOffsetLeft + -popover.offsetWidth - offset + 'px';
      popover.style.top = contentOffsetTop + contentHeight / 2 - popover.offsetHeight / 2 + 'px';
      this.positionClass = `arrow-position-${this.computedPlacement}`;
    },
    setRight(contentWidth, contentOffsetTop, contentOffsetLeft, contentHeight) {
      this.computedPlacement = 'right';
      const popover = this.$refs.popover;
      const offset = this.offset;

      popover.style.left = contentOffsetLeft + contentWidth + offset + 'px';
      popover.style.top = contentOffsetTop + contentHeight / 2 - popover.offsetHeight / 2 + 'px';
      this.positionClass = `arrow-position-${this.computedPlacement}`;
    },
    setTop(contentWidth, contentOffsetTop, contentOffsetLeft) {
      this.computedPlacement = 'top';
      const popover = this.$refs.popover;
      const offset = this.offset;

      popover.style.left = contentOffsetLeft + contentWidth / 2 - popover.offsetWidth / 2 + 'px';
      popover.style.top = contentOffsetTop + -this.$refs.popover.offsetHeight - offset + 'px';
      this.positionClass = `arrow-position-${this.computedPlacement}`;
    },
    setBottom(contentWidth, contentOffsetTop, contentOffsetLeft, contentHeight) {
      
      this.computedPlacement = 'bottom';
      const popover = this.$refs.popover;
      const offset = this.offset;

      popover.style.left = contentOffsetLeft + contentWidth / 2 - popover.offsetWidth / 2 + 'px';
      popover.style.top = contentOffsetTop + contentHeight + offset + 'px';
      this.positionClass = `arrow-position-${this.computedPlacement}`;
    },
  },
};
</script>

<style lang="scss">
@import './Popover.scss';
</style>
