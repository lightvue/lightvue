<template>
  <section class="light-weight">
    <div class="light-weight__wrapper">
      <div class="light-weight__image-wrapper">
        <img src="../../assets/images/demo/bamboo-watch.jpg" alt="" class="light-weight__image" />
      </div>
      <div class="light-weight__background"></div>
      <div class="light-weight__content">
        <div class="light-weight__content-heading">Ligh weight in Production</div>
        <div class="light-weight__content-description">With Light-Vue , style light as a feather web components for your projects with dead simple responsive layout. There is only so much it can do to enhance performance and robustness of a your web app.</div>
        <lv-button :push="true" :deep-shadow="true" label="Know More" type="button" size="xl" />
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
  margin: 100px auto 250px auto;

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
      font-size: 48px;
      color: #143a56;
      margin-bottom: 30px;
    }
    .light-weight__content-description {
      font-size: 20px;
      color: #143a56;
      margin-bottom: 30px;
    }
  }
}
</style>
