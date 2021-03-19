<template>
  <section class="vue-migrate">
    <div class="vue-migrate__wrapper">
      <div class="vue-migrate__content">
        <div class="vue-migrate__content-heading">Migrate to vue 3.x</div>
        <div class="vue-migrate__content-description">Easy to migrate to Vue 3: With just a one step groundwork, Light Vue offers a hastle free migration from your vue2.x to Vue 3.x projects.</div>
        <lv-button :push="true" :deep-shadow="true" label="Know More" type="button" size="xl" />
      </div>
      <div class="vue-migrate__background"></div>
      <div class="vue-migrate__image-wrapper">
        <img src="../../assets/images/demo/bamboo-watch.jpg" alt="" class="vue-migrate__image" />
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
  margin: 250px auto;

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
      font-size: 48px;
      color: #143a56;
      margin-bottom: 30px;
    }
    .vue-migrate__content-description {
      font-size: 20px;
      color: #143a56;
      margin-bottom: 30px;
    }
  }
}
</style>
