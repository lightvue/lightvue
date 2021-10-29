<template>
  <div class="slider-wrapper" @mouseenter="stopSlideTimer" @mouseout="startTimer">
    <div class="slider-wrapper__slider" ref="cardWrapper" @scroll="handleScroll" :class="{ '--no-scroll': !scroll }">
      <slot name="slide"></slot>
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
      default: true,
    },
    repeat: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 5000,
    },

    noPadding: Boolean,
  },
  methods: {
    startTimer() {
      if (this.autoplay) {
        console.log('hii from mouseleve');
        this.stopSlideTimer();
        this.slideInterval = setInterval(() => {
          this.nextSlide();
        }, this.interval);
      } else return;

      //     }
      // }, (this.interval || config.defaultCarouselInterval))
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
    nextSlide() {
      this.prevScroll = this.$refs.cardWrapper.scrollLeft;
      console.log('this is prevscroll' + this.prevScroll);
      const scrollLeft = this.prevScroll + 0.75 * this.$refs.cardWrapper.offsetWidth;
      this.$refs.cardWrapper.scrollLeft = scrollLeft;
    },
    prevSlide() {
      this.prevScroll = this.$refs.cardWrapper.scrollLeft;
      console.log('this is prevscroll' + this.prevScroll);
      const scrollLeft = this.prevScroll - 0.75 * this.$refs.cardWrapper.offsetWidth;
      console.log('this is prevscroll' + scrollLeft);
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
      console.log(event.key);
      if (event.keyCode === 39) {
        this.nextSlide();
      } else if (event.keyCode === 37) {
        this.prevSlide();
      } else {
        return;
      }
    },
    checkPause() {
      console.log('hello from mouseEnter');
      // if (this.pauseHover && this.autoplay) {
      //     this.pauseTimer()
      // }
    },
    //   autoplay(status) {
    //     status ? this.startTimer() : this.pauseTimer()
    // },
  },

  mounted() {
    this.$nextTick(() => {
      // console.log(this.$refs.cardWrapper);
      // console.log(this.$refs.cardWrapper.scrollWidth);
      this.setScroll();
    });
    this.startTimer();
  },
  beforeUnmount() {
    this.stopSlideTimer();
  },
  // beforeDestroy() {
  //     this.pauseTimer()
  // }
};
</script>
<style lang="scss">
@import './Carousel.scss';
</style>
