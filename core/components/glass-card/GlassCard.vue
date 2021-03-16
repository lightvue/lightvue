<template>
  <div :style="`backdrop-filter: blur(${backgroundBlur}); width: 100%; height: 100%;`">
    <div class="lv-glasscard" :class="computedClass" :style="computedStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LvGlasscard',
  props: {
    backgroundBlur: {
      type: String,
      default: "15px",
    },
    padding: {
      type: String,
      default: "20px",
    },
    borderRadius: {
      type: String,
      default: "4px",
    },
    backgroundColor: {
      type: String,
      default: "#ffffff",
    },
    backgroundOpacity: {
      type: String,
      default: "70",
    },
    showBorder: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClass() {
      return [this.showBorder && "lv-glasscard--border"];
    },
    computedStyle() {
      let backgroundOpacity = this.backgroundOpacity + '';
      if (this.backgroundOpacity.length >= 3) {
        backgroundOpacity = '';
      }
      return {
        padding: this.padding,
        borderRadius: this.borderRadius,
        backgroundColor: this.backgroundColor + backgroundOpacity,
      };
    },
  },
};
</script>

<style scoped>
.lv-glasscard {
  height: 100%;
  width: 100%;
  opacity: 0.8;
  overflow: hidden;
}

.lv-glasscard--border {
  border: 3px solid #ffffff70;
}

.lv-glasscard--shadow {
  box-shadow: 2px 2px 20px #00000005, -2px -2px 20px #00000010;
}
</style>