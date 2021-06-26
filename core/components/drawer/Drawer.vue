<template>
  <!-- Handle Edge Case -->
  <!-- For Mobile Drawer -->
  <!-- Disable Auto Scroll    --Done-->
  <!-- Take Proper top pixels --Done -->
  <!-- Configurable fixed and absolute position -->
  <div
    class="lv-drawer__wrapper"
    :class="{
      '--shadow': shadow,
      '--close': !drawer,
      '--mobile': isMobile,
      '--moving': isMoving,
      '--absolute':absolute
    }"
    :style="{
      zIndex:zIndex,
      backdropFilter: backdropBlur && 'blur(3px)'
    }"
    ref="drawerWrapper"
  >
    <!-- Drawer Contents -->
    <aside
      class="wrapper__drawer-container"
      :style="getDrawerStyle"
      ref="drawer"
    >
      <div
        class="touch-dragger"
        v-if="isMobile"
        @touchstart.prevent="handleTouchStart"
        @touchmove.prevent="handleTouchMove"
        @touchend.prevent="handleTouchEnd"
      >---</div>
      <!-- Header -->
      <div
        class="drawer-container__header"
        ref="drawerHeader"
        :style="getHeaderStyle"
        v-if="headerTitle"
      >
        <div class="header__title">
          {{ headerTitle }}
        </div>
        <div
          class="header__close"
          @click="drawerClose"
          v-if="close"
        >
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
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
  data() {
    return {
      drawer: false,
      initialTouch: 0,
      currentTouch: 0,
      changedTouch: 0,
      initialClientYTouch: 0,
      isMoving: false,
      isMobile: false,
      snap: 0,
      drawerHeight: 0,
      windowWidth: 0,
      containerHeight: 0,
      timeOutID: null,
    };
  },
  props: {
    modelValue: Boolean,
    value: Boolean,
    top: Boolean,
    right: Boolean,
    bottom: Boolean,
    left: Boolean,
    close: Boolean,
    shadow: Boolean,
    backdropBlur: Boolean,
    customStyle: Object,
    headerTitle: String,
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
  },
  watch: {
    value(value) {
      this.drawer = value;
    },
    modelValue(value) {
      this.drawer = value;
    },
  },
  methods: {
    drawerClose() {
      this.drawer = false;
      this.snap = this.drawerHeight;
      this.$emit('input', this.drawer);
      this.$emit('update:modelValue', this.drawer);
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
      this.isMobile = this.windowWidth <= 550 ? true : false;
      // In order to run the following code when resize is completed --optimisation
      clearTimeout(this.timeOutID);
      this.timeOutID = setTimeout(() => {
        this.containerHeight = this.$refs.drawerWrapper.clientHeight;
        this.drawerHeight = this.containerHeight - this.height + 'px';
        this.snap = this.drawerHeight;
        console.log('changed');
      }, 250);
    },
  },
  computed: {
    getTopPx() {
      const transformPercent = this.initialTouch - this.changedTouch;
      return transformPercent;
    },
    getDrawerStyle() {
      return {
        width: this.left || this.right ? this.width + 'px' : '100%',
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
      return this.isMobile ? this.getBottomTouchStyle : this.left ? this.getLeftStyle : this.right ? this.getRightStyle : this.getTopStyle;
    },
    getLeftStyle() {
      return {
        left: 0,
        top: 0,
        bottom: 0,
        transform: this.drawer ? 'translateX(0)' : 'translateX(-100%)',
      };
    },
    getRightStyle() {
      return {
        right: 0,
        top: 0,
        bottom: 0,
        left: '100%',
        transform: !this.drawer ? 'translateX(0)' : 'translateX(-100%)',
      };
    },
    getTopStyle() {
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: this.drawer ? this.drawerHeight : '100%',
      };
    },
    getBottomTouchStyle() {
      return {
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: 'auto',
        top: this.drawer ? (!this.isMoving ? this.snap : this.getTopPx + 'px') : '100%',
      };
    },
  },
  beforeMount() {
    this.windowWidth = window.innerWidth;
  },
  mounted() {
    this.isMobile = this.windowWidth <= 550 ? true : false;
    this.containerHeight = this.$refs.drawerWrapper.clientHeight;
    this.drawerHeight = this.containerHeight - this.height + 'px';
    this.snap = this.drawerHeight;
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
.lv-drawer__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .wrapper__drawer-container {
    position: absolute;
    z-index: 10;
    transition: all 0.1s ease;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    .touch-dragger {
      font-size: 30px;
      text-align: center;
      line-height: 20px;
      i {
        object-fit: cover;
        font-size: 50px;
        &::before,
        &::after {
          vertical-align: initial;
        }
      }
    }
    .drawer-container__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      touch-action: none;
      .header__title {
        padding: 10px;
      }
      .header__close {
        cursor: pointer;
        display: inline-block;
        padding: 10px;
        i {
          font-size: 20px;
          font-weight: 700;
          &::before,
          &::after {
            vertical-align: initial;
          }
        }
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .drawer-container__slot-content {
      overflow-y: auto;
    }
  }
  &.--close {
    visibility: hidden;
  }
  &.--shadow {
    .wrapper__drawer-container {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }
  }
  &.--mobile {
    .wrapper__drawer-container {
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
    }
  }
  &.--moving {
    .wrapper__drawer-container {
      transition: none;
    }
  }
  &.--absolute {
    position: absolute;
  }
  .wrapper__backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 100vh;
    min-width: 100vw;
    background-color: rgba(0, 0, 0, 0.1);
    // backdrop-filter: blur(3px);
  }
}
</style>
