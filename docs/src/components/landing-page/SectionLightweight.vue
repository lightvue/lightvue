<template>
  <section class="light-weight" id="light-weight">
    <img src="../../assets/images/light-weight-bg-top.svg" width="100%" class="light-weight__bg --top" />
    <div class="light-weight__wrapper">
      <div class="light-weight__content">
        <div class="light-weight__content-heading">Fastest, LIGHT UI Elements in the Planet</div>
        <br />
        <div class="light-weight__content-description">Every element of the LightVue is standalone &amp; designed to ensure <strong>Optimal Performance</strong> across devices. LightVue web components are even lighter than feather with dead simple responsive layouts. There is so much that LightVue does natively to enhance <strong> performance</strong> and <strong>robustness</strong> of your web app.</div>
        <br />
        <br />
        <nuxt-link :to="{ hash: '#light-icons' }" class="page-button --dark">Know More</nuxt-link>
        <!-- <lv-button :push="true" :deep-shadow="true" type="button" size="xl" class="section-button__customise" style="--theme-color: #143a56; --theme-color-dark: #194a70">Know More</lv-button> -->
      </div>
      <div class="light-weight__image-wrapper">
        <img src="../../assets/images/light-weight.svg" alt="Light weight UI" class="light-weight__image" />
      </div>
    </div>
    <img src="../../assets/images/light-weight-bg-bottom.svg" width="100%" class="light-weight__bg --bottom" />
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.light-weight {
  position: relative;
  .light-weight__bg {
    position: absolute;
    &.--bottom {
      bottom: -180px;
    }
  }
}
.light-weight__wrapper {
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  max-width: 1400px;
  margin: 100px auto 50px auto;
  padding: 20px;

  .light-weight__image-wrapper {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    z-index: 100;
    .light-weight__image {
      width: 70%;
      animation: ballonFloat 5s infinite ease-in-out alternate-reverse 2s;
      // transform-origin: bottom;
    }
  }
  .light-weight__content {
    width: 60%;
    max-width: 650px;
    text-align: left;
    margin-top: 100px;
    z-index: 100;
    padding: 20px;
    .light-weight__content-heading {
      font-size: 32px;
      line-height: 48px;
      font-weight: 600;
      color: #143a56;
      margin-bottom: 0.78em;
    }
    .light-weight__content-description {
      font-size: 20px;
      line-height: 30px;
      opacity: 0.7;
      font-weight: 300;
      color: #143a56;
      margin-bottom: 0.5em;
      strong {
        font-weight: 500;
      }
    }
  }
}
@media (max-width: 768px) {
  .light-weight {
    .light-weight__bg {
      &.--bottom {
        display: none;
      }
    }
  }
  .light-weight__wrapper {
    flex-direction: column-reverse;
    margin: 50px 0px 50px 0px;
    .light-weight__image-wrapper {
      width: 100%;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      .light-weight__image {
        height: 300px;
        object-fit: contain;
      }
    }
    .light-weight__background {
      display: none;
    }
    .light-weight__content {
      width: 100%;
      padding: 20px;
      margin-top: 0px;
    }
  }
}
@media (max-width: 425px) {
  .light-weight__wrapper {
    .light-weight__image-wrapper {
      .light-weight__image {
        width: 100%;
      }
    }
    .light-weight__content {
      padding: 20px 0px;
      .light-weight__content-heading {
        font-size: 28px;
      }
    }
  }
}
@media (min-width: 1900px) {
  .light-weight {
    position: relative;
    .light-weight__bg {
      position: absolute;
      &.--top {
        top: -120px;
      }
      &.--bottom {
        bottom: -350px;
      }
    }
  }
}

@keyframes ballonFloat {
  from {
    transform: translate(-5%, -5%);
  }
  to {
    transform: translate(5%, 5%);
  }
}
</style>
