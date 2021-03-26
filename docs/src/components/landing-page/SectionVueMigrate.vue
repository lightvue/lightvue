<template>
  <section class="vue-migrate">
    <div class="vue-migrate__wrapper">
      <div class="vue-migrate__content">
        <div class="vue-migrate__content-heading">Migrate to vue 3.X</div>
        <br />
        <div class="vue-migrate__content-description">Easy to migrate to Vue 3: With just a one step groundwork, Light Vue offers a hastle free migration from your vue2.x to Vue 3.x projects.</div>
        <br /><br />
        <lv-button :push="true" :deep-shadow="true" label="Know More" type="button" size="xl" style="--theme-color: #143a56; --theme-color-dark: #194a70" />
      </div>
      <div class="vue-migrate__background"></div>
      <div class="vue-migrate__image-wrapper">
        <img src="../../assets/images/migrate-vue.svg" alt="migrate-vue" class="vue-migrate__image" />
      </div>
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
  margin: 150px auto;
  padding: 20px;

  .vue-migrate__image-wrapper {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    z-index: 100;
    .vue-migrate__image {
      width: 80%;
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
    background: rgb(152 213 213 / 23%);
    border-radius: 20px;
  }
  .vue-migrate__content {
    width: 60%;
    text-align: right;
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
      line-height: 26px;
      opacity: 0.7;
      color: #143a56;
      margin-bottom: 0.78em;
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
    .vue-migrate__image-wrapper {
      width: 100%;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      .vue-migrate__image {
        width: 350px;
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
