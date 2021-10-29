<template>
  <div @click="Show" @mouseenter="ShowHover" @mouseleave="HideHover">
    <div v-if="$slots.popover" :class="[Position]" class="popover" ref="parent">
      <slot name="popover"></slot>

      <transition :duration="{ enter: 300, leave: 300 }" name="fade" @enter="Enter">
        <div v-show="isShow">
          <div class="popover-overlay" @click.stop="Hide" v-if="!hover"></div>

          <div ref="popover" :class="className" :style="computedStyle">
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
const BaseClass = 'popover--';
const PopoverPosition = {
  top: BaseClass + 'top',
  bottom: BaseClass + 'bottom',
  right: BaseClass + 'right',
  left: BaseClass + 'left',
};

export default {
  name: 'LvPopOver',
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
  },
  data: () => ({
    isShow: false,
    positionClass: '',
  }),
  computed: {
    Position() {
      return PopoverPosition[this.placement];
    },
    className() {
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
    },

    Hide() {
      this.isShow = false;
    },
    ShowHover() {
      if (this.hover) {
        this.isShow = true;
      }
    },
    HideHover() {
      if (this.hover) {
        this.isShow = false;
      }
    },
    Enter() {
      const content = this.$slots.popover[0].elm;
      const popover = this.$refs.popover;
      const offset = this.offset;
      const contentWidth = content.offsetWidth;
      const contentHeight = content.offsetHeight;

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
          popover.style.left = contentWidth / 2 - popover.offsetWidth / 2 + 'px';
          popover.style.top = contentHeight + offset + 'px';
          break;
      }
    },
  },
};
</script>

<style lang="scss">
@import './Popover.scss';
</style>
