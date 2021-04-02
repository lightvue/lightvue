<template>
  <div :style="computedStyle">
    <div class="lv-progress-spinner--2" :style="computedStyle">
      <span :style="computedStyle"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    strokeWidth: {
      type: String,
      default: "2",
    },
    fill: {
      type: String,
      default: "none",
    },
    animationDuration: {
      type: String,
      default: "5s",
    },
    size: {
      type: String,
      default: "75px",
    },
    color: {
      type: String,
      default: "#607c8a",
    },
  },
  computed: {
    computedStyle() {
      return {
        "animation-duration": this.animationDuration,
        height: this.size,
        width: this.size,
        "border-color": this.color,
      };
    },
  },
};
</script>

<style>
.lv-progress-spinner--2 {
  height: 100%;
  width: 100%;
}
.lv-progress-spinner--2 span {
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.lv-progress-spinner--2 span::before,
.lv-progress-spinner--2 span::after {
  content: "";
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
  border: 2px solid;
  border-color: inherit;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: lv-progress-spinner--2-1 2s
    cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
  animation: lv-progress-spinner--2-1 2s cubic-bezier(0.075, 0.82, 0.165, 1)
    infinite;
}

.lv-progress-spinner--2 span::after {
  position: relative;
  top: calc(-1 * (100% + 4px));
}
@-webkit-keyframes lv-progress-spinner--2-1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0) scale(0);
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0) scale(1.25);
    opacity: 0;
  }
}
@keyframes lv-progress-spinner--2-1 {
  0% {
    transform: translate3d(0, 0, 0) scale(0);
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1.25);
    opacity: 0;
  }
}
.lv-progress-spinner--2 span::after {
  -webkit-animation: lv-progress-spinner--2-2 2s
    cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s infinite;
  animation: lv-progress-spinner--2-2 2s cubic-bezier(0.075, 0.82, 0.165, 1)
    0.25s infinite;
}
@-webkit-keyframes lv-progress-spinner--2-2 {
  0% {
    -webkit-transform: translate3d(0, 0, 0) scale(0);
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0) scale(1);
    opacity: 0;
  }
}
@keyframes lv-progress-spinner--2-2 {
  0% {
    transform: translate3d(0, 0, 0) scale(0);
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0;
  }
}
</style>
