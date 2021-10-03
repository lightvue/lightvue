<template>
  <div class="hero-cover__wrap">
    <div class="hero-cover__bg">
      <div class="hero-cover__bg-blank"></div>
      <svg viewBox="0 0 1440 380" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-wave__svg">
        <path d="M1440 0H0V78.7375C265.747 120.349 397.724 150 718.001 150C1038.28 150 1152.27 131.392 1440 78.7375V0Z" fill="#143A56" />
      </svg>
    </div>
    <div class="hero-cover__illustration">
      <img src="/hero-bg.svg" alt="LightVue Illustration" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero-cover__wrap {
  width: 100%;
  position: relative;
  .hero-cover__bg {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 1;
  }
  .hero-cover__bg-blank {
    height: 210px;
    width: 100%;
    background-color: #143a56;
  }
  .hero-cover__illustration {
    display: flex;
    justify-content: center;
    img {
      max-height: 720px;
      max-width: 100vw;
      object-fit: contain;
      z-index: 2;
    }
  }
}
</style>
