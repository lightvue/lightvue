<template>
  <section class="vue-migrate" id="vue-migrate">
    <div class="vue-migrate__wrapper">
      <div class="vue-migrate__image-wrapper">
        <img src="../../assets/images/migrate-vue.svg" alt="migrate-vue" class="vue-migrate__image" />
      </div>
      <div class="vue-migrate__content">
        <div class="vue-migrate__content-heading">Swift Migration from Vue 2.x to Vue 3.x</div>
        <br />
        <div class="vue-migrate__content-description">Developing modern cutting-edge projects, just got simpler. With just <strong>one step upgradation</strong>, <strong>100% backward compatibility</strong> and <strong>identical APIs in both the environments</strong>. LightVue offers a hassle free migration from your Vue 2.x to Vue 3.x projects in just two ticks.</div>
        <br /><br />
        <nuxt-link :to="{ hash: '#light-weight' }" class="page-button --dark">Know More</nuxt-link>
        <!-- <lv-button :push="true" :deep-shadow="true" label="Know More" type="button" size="xl" class="section-button__customise" style="--theme-color: #143a56; --theme-color-dark: #194a70" /> -->
      </div>
      <!-- <div class="vue-migrate__background"></div> -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.vue-migrate__wrapper {
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  max-width: 1400px;
  margin: 0px auto;
  padding: 100px 20px;

  .vue-migrate__image-wrapper {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    z-index: 100;
    .vue-migrate__image {
      width: 100%;
    }
  }
  .vue-migrate__background {
    position: absolute;
    z-index: 0;
    right: 15%;
    transform: translateX(-15%);
    // transform: translateX(-50%);
    width: 500px;
    height: 400px;
    background: rgba(152, 213, 213, 0.23);
    border-radius: 20px;
  }
  .vue-migrate__content {
    width: 60%;
    max-width: 650px;
    // text-align: right;
    z-index: 100;
    .vue-migrate__content-heading {
      font-size: 32px;
      line-height: 48px;
      font-weight: 600;
      color: #143a56;
      margin-bottom: 0.78em;
    }
    .vue-migrate__content-description {
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

@media (max-width: 934px) {
  .vue-migrate__wrapper {
    .vue-migrate__content {
      .vue-migrate__content-heading {
        font-size: 36px;
      }
    }
  }
}
@media (max-width: 768px) {
  .vue-migrate__wrapper {
    flex-direction: column;
    margin: 0px;
    padding: 0px 20px;
    .vue-migrate__image-wrapper {
      width: 100%;
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      .vue-migrate__image {
        width: 80%;
      }
    }
    .vue-migrate__background {
      display: none;
    }
    .vue-migrate__content {
      width: 100%;
      text-align: left;
    }
  }
}
@media (max-width: 425px) {
  .vue-migrate__wrapper {
    .vue-migrate__image-wrapper {
      .vue-migrate__image {
        width: 100%;
      }
    }
    .vue-migrate__content {
      .vue-migrate__content-heading {
        font-size: 28px;
      }
    }
  }
}
</style>
