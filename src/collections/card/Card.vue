<template>
  <div class="lv-card" :class="computedClass" :style="computedStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LvCard',
  props: {
    shadowStyle: {
      type: Number,
      default: 1,
    },
    padding: {
      type: String,
      default: '20px',
    },
    borderRadius: {
      type: String,
      default: '4px',
    },
    showBorder: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: '#fff',
    },
  },
  computed: {
    computedClass() {
      return [`lv-card--shadow-${this.shadowStyle}`, this.showBorder && 'lv-card--border'];
    },
    computedStyle() {
      return {
        padding: this.padding,
        borderRadius: this.borderRadius,
        backgroundColor: this.backgroundColor,
      };
    },
  },
};
</script>

<style scoped>
.lv-card {
  height: 100%;
  width: 100%;
}

.lv-card--border {
  border: 1px solid #00000020;
}

.lv-card--shadow-0 {
  box-shadow: none;
}

.lv-card--shadow-1 {
  box-shadow: 2px 2px 20px #00000005, -2px -2px 20px #00000010;
}

.lv-card--shadow-2 {
  box-shadow: 0px 14px 10px -6px #00000020;
}

.lv-card--shadow-3 {
  box-shadow: 5px 8px 5px #00000020;
}

.lv-card--shadow-4 {
  box-shadow: 0px 8px 5px #00000020;
}

.lv-card--shadow-5 {
  box-shadow: 5px 0px 5px #00000020;
}
.lv-card--shadow-6 {
  box-shadow: 0 1px 3px 0 #0000001a, 0 1px 2px 0 #0000000f;
}
</style>
