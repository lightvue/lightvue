<template>
  <div
    class="lv-drawer__wrapper"
    :class="{
      '--shadow': shadow,
      '--close': !modelValue,
      '--mobile': getDrawerPosition,
      '--moving': isMoving,
      '--absolute': absolute,
      '--no-backdrop': noBackdrop,
    }"
    :style="{
      zIndex: zIndex,
    }"
    ref="drawerWrapper"
  >
    <!-- Drawer Contents -->
    <aside class="wrapper__drawer-container" :style="getDrawerStyle" ref="drawer">
      <div class="touch-dragger" v-if="getDrawerPosition" @touchstart.prevent="handleTouchStart" @touchmove.prevent="handleTouchMove" @touchend.prevent="handleTouchEnd"></div>
      <!-- Header -->
      <div class="drawer-container__header" ref="drawerHeader" :style="getHeaderStyle" v-if="headerTitle || close || $slots.customHeader">
        <div v-if="!$slots.customHeader" class="header__title">
          {{ headerTitle }}
        </div>
        <slot v-else name="customHeader"></slot>
        <div class="header__close" @click="drawerClose" v-if="close">
          <!-- Light Icon -->
          <i class="light-icon-x"></i>
        </div>
      </div>
      <!-- Slot -->
      <div class="drawer-container__slot-content">
        <slot></slot>
      </div>
    </aside>
    <!-- Backdrop -->
    <div
      class="wrapper__backdrop"
      v-if="!noBackdrop"
      @click="drawerClose"
      :style="{
        zIndex: zIndex - 1,
        backdropFilter: backdropBlur && 'blur(5px)',
        filter: `${backdropBlur ? 'blur(5px) ' : ''}opacity(${backdropOpacity})`,
      }"
    ></div>
  </div>
</template>

<script>
import { trueValueMixin, preventBrowserBackMixin } from 'lightvue/mixins';

export default {
  name: 'LvDrawer',
  mixins: [trueValueMixin, preventBrowserBackMixin],
  data() {
    return {
      // drawer: false,
      initialTouch: 0,
      currentTouch: 0,
      changedTouch: 0,
      initialClientYTouch: 0,
      isMoving: false,
      isMobile: false,
      snap: 0,
      drawerHeight: 0,
      windowWidth: 0,
      windowHeight: 0,
      containerHeight: 0,
      timeOutID: null,
    };
  },
  props: {
    // modelValue: Boolean,
    // value: Boolean,
    top: Boolean,
    right: Boolean,
    bottom: Boolean,
    left: Boolean,
    close: Boolean,
    shadow: Boolean,
    backdropBlur: Boolean,
    customStyle: Object,
    headerTitle: String,
    backdropOpacity: {
      type: Number,
      default: 0.3,
    },
    absolute: {
      type: Boolean,
      default: false,
    },
    noBackdrop: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 250,
    },
    height: {
      type: Number,
      default: 250,
    },
    percentWidth: Number,
    percentHeight: Number,
    zIndex: {
      type: Number,
      default: 10,
    },
    maxSpan: {
      type: Number,
      default: 70,
    },
    background: {
      type: String,
      default: '#ffffff',
    },
    headerColor: {
      type: String,
      default: '#000000',
    },
    headerBackground: {
      type: String,
      default: '#fff',
    },
    headerFontSize: {
      type: String,
      default: '20px',
    },
    padding: {
      type: String,
      default: '0px',
    },
    noBottom: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    drawerClose() {
      // this.drawer = false;
      this.snap = this.drawerHeight;
      this.$emit('close');
      this.updateValue(false);
      // this.$emit('input', this.drawer);
      // this.$emit('update:modelValue', this.drawer);
    },
    handleTouchStart(event) {
      this.initialTouch = this.$refs.drawer.offsetTop; // Initial Touch with respect to the drawer element
      this.initialClientYTouch = event.touches[0].clientY; // Initial Touch with respect to the entire screen
      this.currentTouch = 0; // Current Touch Position on the screen
      this.changedTouch = 0; // Amount of pixels travelled by touch
      this.isMoving = true;
    },
    handleTouchMove(event) {
      if (this.isMoving) {
        this.currentTouch = event.touches[0].clientY;
        this.changedTouch = this.initialClientYTouch - this.currentTouch;
      }
    },
    handleTouchEnd() {
      this.getSnap(this.getTopPx);
      this.isMoving = false;
      this.initialTouch = 0;
      this.initialClientYTouch = 0;
      this.currentTouch = 0;
      this.changedTouch = 0;
    },

    // New Snap
    getSnap(top) {
      const tenPercentHeight = (this.containerHeight * 10) / 100;
      const maxPercentHeight = (this.containerHeight * (100 - this.maxSpan)) / 100;
      if (top <= maxPercentHeight) {
        this.snap = maxPercentHeight.toString() + 'px';
      } else if (top > this.containerHeight - tenPercentHeight) {
        this.snap = '100%';
        this.drawerClose();
      } else {
        this.snap = top;
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.isMobile = this.windowWidth <= 525 ? true : false;
      // In order to run the following code when resize is completed --optimisation
      clearTimeout(this.timeOutID);
      this.timeOutID = setTimeout(() => {
        this.drawerHeight = this.getHeight; // in px
        this.snap = this.drawerHeight;
      }, 250);
    },
    handleOnBrowserBack() {
      // Called from Mixin
      if (this.modelValue === true) {
        this.drawerClose();
      }
    },
  },
  computed: {
    getTopPx() {
      const transformPercent = this.initialTouch - this.changedTouch;
      return transformPercent;
    },
    getDrawerStyle() {
      return {
        width: this.left || this.right ? this.getWidth : !this.top && !this.right ? this.getWidth : '100%',
        zIndex: this.zIndex + 5,
        padding: this.padding,
        background: this.background,
        ...this.getTransitionStyle,
        ...this.customStyle,
      };
    },
    getHeaderStyle() {
      return {
        fontSize: this.headerFontSize,
        color: this.headerColor,
        background: this.headerBackground,
      };
    },
    getTransitionStyle() {
      return this.getDrawerPosition ? this.getBottomTouchStyle : this.left ? this.getLeftStyle : this.right ? this.getRightStyle : this.top ? this.getTopStyle : this.getLeftStyle;
    },
    getLeftStyle() {
      return {
        left: 0,
        top: 0,
        bottom: 0,
        transform: this.modelValue ? 'translateX(0)' : 'translateX(-100%)',
      };
    },
    getRightStyle() {
      return {
        right: 0,
        top: 0,
        bottom: 0,
        left: '100%',
        transform: !this.modelValue ? 'translateX(0)' : 'translateX(-100%)',
      };
    },
    getTopStyle() {
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: this.modelValue ? this.drawerHeight : '100%',
      };
    },
    getBottomTouchStyle() {
      return {
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: 'auto',
        top: this.modelValue ? (!this.isMoving ? this.snap : this.getTopPx + 'px') : '100%',
      };
    },
    getDrawerPosition() {
      return this.noBottom ? false : this.isMobile;
    },
    getHeight() {
      this.containerHeight = this.$refs.drawerWrapper.clientHeight;
      let resultHeight = 0;
      if (this.percentHeight) {
        (this.percentHeight * this.windowHeight) / 100;
      } else {
        resultHeight = Math.min(this.height, this.windowHeight);
      }
      return `${this.containerHeight - resultHeight}px`;
    },
    getWidth() {
      return this.percentWidth ? `${this.percentWidth}%` : `${this.width}px`;
    },
  },
  watch: {
    // value(value) {
    //   this.drawer = value;
    //   value == true ? (document.documentElement.style.overflow = 'hidden') : (document.documentElement.style.overflow = 'overlay');
    // },
    modelValue(value) {
      // this.drawer = value;
      value == true ? (document.documentElement.style.overflow = this.noBackdrop ? 'auto' : 'hidden') : (document.documentElement.style.overflow = 'overlay');
      if (value === true) {
        this.preventPopstate(); // from Mixin
      } else {
        this.manuallyClosePopstate(); // From Mixin
      }
    },
  },
  beforeMount() {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  },
  mounted() {
    this.isMobile = this.windowWidth <= 525 ? true : false;
    this.drawerHeight = this.getHeight; // in px
    this.snap = this.drawerHeight;
    document.documentElement.style.overflow = this.modelValue == true ? 'hidden' : 'overlay';
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss">
@import './Drawer.scss';
</style>
