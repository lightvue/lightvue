<template>
  <div class="subscribe-cover__wrap">
    <div class="subscribe-cover__bg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="margin-bottom: -8px"><path fill="#143a56" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <div class="subscribe-cover__bg-blank"></div>
    </div>
    <div class="subscribe-cover__illustration">
      <img src="/hero-bg.svg" alt="LightVue Illustration" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.subscribe-cover__wrap {
  width: 100%;
  position: relative;
  .subscribe-cover__bg {
    position: absolute;
    left: 0px;
    // top: 0px;
    bottom: 0px;
    width: 100%;
    z-index: 1;
  }
  .subscribe-cover__bg-blank {
    height: 20px;
    width: 100%;
    background-color: #143a56;
  }
  .subscribe-cover__illustration {
    display: flex;
    justify-content: center;
    img {
      max-height: 320px;
      max-width: 100vw;
      object-fit: contain;
      z-index: 2;
    }
  }
}
</style>
