<template>
  <section class="light-weight">
    <div class="light-weight__wrapper">
      <div class="light-weight__image-wrapper">
        <img src="../../assets/images/light-weight.svg" alt="Light weight UI" class="light-weight__image" />
      </div>
      <div class="light-weight__background"></div>
      <div class="light-weight__content">
        <div class="light-weight__content-heading">Light weight in Production</div>
        <br />
        <div class="light-weight__content-description">With Light-Vue , style light as a feather web components for your projects with dead simple responsive layout. There is only so much it can do to enhance performance and robustness of a your web app.</div>
        <br />
        <br />
        <lv-button :push="true" :deep-shadow="true"  type="button" size="xl" class="section-button__customise" style="--theme-color: #143a56; --theme-color-dark: #194a70">Know More</lv-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
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
    z-index: 100;
    .light-weight__image {
      width: 80%;
    }
  }
  .light-weight__background {
    position: absolute;
    z-index: 0;
    left: 15%;
    transform: translateX(15%);
    width: 500px;
    height: 400px;
    background: rgb(152 213 213 / 23%);
    border-radius: 20px;
  }
  .light-weight__content {
    width: 60%;
    text-align: left;
    z-index: 100;
    .light-weight__content-heading {
      font-size: 32px;
      line-height: 48px;
      font-weight: 600;
      color: #143a56;
      margin-bottom: 0.78em;
    }
    .light-weight__content-description {
      font-size: 20px;
      line-height: 26px;
      opacity: 0.7;
      color: #143a56;
      margin-bottom: 0.78em;
    }
  }
}
// @media (max-width: 934px) {
//   .light-weight__wrapper {
//     .light-weight__content {
//       .light-weight__content-heading {
//         font-size: 36px;
//       }
//     }
//   }
// }
@media (max-width: 768px) {
  .light-weight__wrapper {
    flex-direction: column-reverse;
    margin: 0px 0px 50px 0px;
    .light-weight__image-wrapper {
      width: 100%;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      .light-weight__image {
        width: 320px;
        // margin: auto;
      }
    }
    .light-weight__background {
      display: none;
    }
    .light-weight__content {
      width: 100%;
      padding: 20px;
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
      .light-weight__content-heading {
        font-size: 28px;
      }
    }
  }
}
</style>
