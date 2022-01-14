<template>
  <section class="section-lighticons" id="light-icons">
    <div class="section-lighticons__wrapper">
      <div class="section-lighticons__image-wrapper">
        <img src="../../assets/images/section-lighticons.svg" alt="Light icon" class="section-lighticons__image" />
      </div>
      <!-- <div class="section-lighticons__background"></div> -->
      <div class="section-lighticons__content">
        <div class="section-lighticons__content-heading">Packed with Premium Collection of LIGHT ICONS</div>
        <br />
        <div class="section-lighticons__content-description">Your imagination has no boundaries and so does our handpicked collection of premium &amp; light-weighted icons. Explore and choose icons from the vast landscape of <strong>LIGHT ICONS</strong>.</div>
        <br />
        <br />
        <nuxt-link :to="{ hash: 'contact' }" class="page-button --dark">Know More</nuxt-link>
        <!-- <lv-button :push="true" :deep-shadow="true" label="Know More" type="button" size="xl" class="section-button__customise" style="--theme-color: #143a56; --theme-color-dark: #194a70" /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.section-lighticons__wrapper {
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  max-width: 1400px;
  margin: 250px auto 50px auto;
  padding: 20px;

  .section-lighticons__image-wrapper {
    width: 40%;
    z-index: 100;
    .section-lighticons__image {
      width: 80%;
    }
  }
  .section-lighticons__background {
    position: absolute;
    z-index: 0;
    left: 15%;
    transform: translateX(15%);
    width: 500px;
    height: 400px;
    background: rgba(152, 213, 213, 0.23);
    border-radius: 20px;
  }
  .section-lighticons__content {
    width: 60%;
    text-align: left;
    z-index: 100;
    .section-lighticons__content-heading {
      font-size: 32px;
      line-height: 48px;
      font-weight: 600;
      color: #143a56;
      margin-bottom: 0.78em;
    }
    .section-lighticons__content-description {
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
// @media (max-width: 934px) {
//   .section-lighticons__wrapper {
//     .section-lighticons__content {
//       .section-lighticons__content-heading {
//         font-size: 36px;
//       }
//     }
//   }
// }
@media (max-width: 768px) {
  .section-lighticons__wrapper {
    flex-direction: column;
    margin: 0px 0px 50px 0px;
    .section-lighticons__image-wrapper {
      width: 100%;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      .section-lighticons__image {
        height: 350px;
        // margin: auto;
      }
    }
    .section-lighticons__background {
      display: none;
    }
    .section-lighticons__content {
      width: 100%;
      padding: 20px;
    }
  }
}
@media (max-width: 425px) {
  .section-lighticons__wrapper {
    .section-lighticons__image-wrapper {
      .section-lighticons__image {
        width: 100%;
      }
    }
    .section-lighticons__content {
      padding: 0px;
      .section-lighticons__content-heading {
        font-size: 28px;
      }
    }
  }
}
</style>
