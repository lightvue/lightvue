<template>
  <div class="nav-button__wrapper">
    <div class="nav-button --left" @click="$emit('prevSlide')" v-if="showLeft">
      <i class="light-icon-chevron-left"></i>
    </div>
    <div class="nav-button --right" @click="$emit('nextSlide')" v-if="showRight">
      <i class="light-icon-chevron-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavButtons',
  props: {
    showLeft: Boolean,
    showRight: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.nav-button__wrapper {
  .nav-button {
    z-index: 5;
    position: absolute;
    width: 50px;
    top: 26px;
    bottom: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* background-color: rgba($color: gray, $alpha: 0.1); */

    // FOR ROUNDED BUTTON
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    // top: 50%;
    // height: 50px;
    // background-color: #fff;
    // transform: translateY(-50%);
    // border-radius: 50%;
    // transition: all 0.5s ease;
    // opacity: 1;
    i {
      color: gray;
      filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
      font-size: 50px;
      font-weight: 600;
      // z-index: calc(inherit + 1);
    }
    &.--left {
      left: 0px;
      /* background: linear-gradient(90deg, rgba(0, 128, 128, 0.3) 0, rgba(0, 128, 128, 0.1) 40%, rgba(0, 0, 0, 0)); */
      // border-top-right-radius: 50%;
      // border-bottom-right-radius: 50%;
    }
    &.--right {
      right: 0px;
      /* background: linear-gradient(270deg, rgba(0, 128, 128, 0.3) 0, rgba(0, 128, 128, 0.1) 40%, rgba(0, 0, 0, 0)) */
      // border-top-left-radius: 50%;
      // border-bottom-left-radius: 50%;
    }
    &:hover {
      opacity: 1;
      // FOR ROUNDED
      // &.--left {
      //   left: 15px;
      // }
      // &.--right {
      //   right: 15px;
      // }
    }
  }
}
</style>
