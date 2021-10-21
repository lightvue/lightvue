<template>
  <div class="slider-wrapper">
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
      scroll: true,
      prevScroll: 0,
      showLeft: false,
      showRight: true,
    };
  },
  props: {
    start: { type: Boolean, default: false },
    noPadding: Boolean,
  },
  methods: {
    nextSlide() {
      this.prevScroll = this.$refs.cardWrapper.scrollLeft;
      const scrollLeft = this.prevScroll + 0.75 * this.$refs.cardWrapper.offsetWidth;
      this.$refs.cardWrapper.scrollLeft = scrollLeft;
    },
    prevSlide() {
      this.prevScroll = this.$refs.cardWrapper.scrollLeft;
      const scrollLeft = this.prevScroll - 0.75 * this.$refs.cardWrapper.offsetWidth;
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
  },

  mounted() {
    this.$nextTick(() => {
      // console.log(this.$refs.cardWrapper);
      // console.log(this.$refs.cardWrapper.scrollWidth);
      this.setScroll();
    });
  },
};
</script>
<style lang="scss" scoped>
.slider-wrapper {
  position: relative;
  width: 100%;
  .slider-wrapper__slider {
    overflow-x: auto;
    scroll-behavior: smooth;
    display: flex;
    align-items: center;
    padding: 16px 10px;
    &::-webkit-scrollbar {
      height: 0;
      width: 0;
    }
    &.--no-scroll {
      justify-content: center;
    }
  }
}
@media only screen and (max-width: '525px') {
  .slider-wrapper {
    .slider-wrapper__nav-buttons {
      display: none;
    }
  }
}
</style>
