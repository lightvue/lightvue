<template>
  <div class="slider-wrapper" @mouseover="stopSlideTimer" @mouseout="startTimer">
    <div class="slider-wrapper__slider" ref="cardWrapper" @scroll="handleScroll" :class="{ '--no-scroll': !scroll }">
      <slot></slot>
    </div>
    <nav-buttons class="slider-wrapper__nav-buttons" v-if="scroll" :showLeft="showLeft" :showRight="showRight" @nextSlide="nextSlide" @prevSlide="prevSlide" />
  </div>
</template>

<script>
import NavButtons from './NavButtons.vue';

export default {
  components: { NavButtons },
  name: 'LvCarousel',
  data() {
    return {
      prevScroll: 0,
      showLeft: false,
      showRight: true,
      slideInterval: null,
      scroll: true,
      timer: null,
      isPause: false,
    };
  },
  props: {
    start: { type: Boolean, default: false },
    pauseHover: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 5000,
    },
  },
  methods: {
    startTimer() {
      if (this.autoplay) {
        this.stopSlideTimer();
        this.slideInterval = setInterval(() => {
          this.nextSlide();
        }, this.interval);
      } else return;
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
    nextSlide() {
      this.prevScroll = this.$refs.cardWrapper.scrollLeft;
      const wrapperOffsetWidth = this.$refs.cardWrapper.offsetWidth;
      const scrollLeft = this.prevScroll + (wrapperOffsetWidth > 700 ? 0.5 : 1) * wrapperOffsetWidth;
      this.$refs.cardWrapper.scrollLeft = scrollLeft;
    },
    prevSlide() {
      this.prevScroll = this.$refs.cardWrapper.scrollLeft;
      const wrapperOffsetWidth = this.$refs.cardWrapper.offsetWidth;
      const scrollLeft = this.prevScroll - (wrapperOffsetWidth > 700 ? 0.5 : 1) * wrapperOffsetWidth;
      this.$refs.cardWrapper.scrollLeft = scrollLeft;
    },
    setLeft() {
      this.showLeft = this.$refs.cardWrapper.scrollLeft == 0 ? false : true;
    },
    handleScroll(e) {
      if (e.target.scrollLeft > 50 && e.target.scrollLeft < this.$refs.cardWrapper.scrollWidth - this.$refs.cardWrapper.clientWidth - 50) return;
      this.showRight = e.target.scrollLeft >= this.$refs.cardWrapper.scrollWidth - this.$refs.cardWrapper.clientWidth - 10 ? false : true;
      this.showLeft = e.target.scrollLeft <= 0 ? false : true;
    },
    setScroll() {
      this.scroll = this.start ? true : this.$refs.cardWrapper.scrollWidth > this.$refs.cardWrapper.clientWidth ? true : false;
    },
    checkSlide(event) {
      if (event.keyCode === 39) {
        this.nextSlide();
      } else if (event.keyCode === 37) {
        this.prevSlide();
      } else {
        return;
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.setScroll();
    });
    this.startTimer();
  },
  beforeUnmount() {
    this.stopSlideTimer();
  },
};
</script>
<style lang="scss">
@import './Carousel.scss';
</style>
