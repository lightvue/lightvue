<template>
  <section class="video-section">
    <div class="light--wrapper">
      <div class="light-image--wrapper">
        <img src="./img/undraw_videographer_nnc7.svg" alt="camera man svg" class="vue-video__image" />
      </div>
      <div class="light-video">
        <iframe width="600" height="300" src="https://www.youtube.com/embed/fjYPDdf4rGA" title="LightVue introduction Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.light--wrapper {
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  max-width: 1400px;
  margin: 0px auto;
  padding: 100px 20px;
}

.light-image--wrapper {
  width: 40%;
  display: flex;

  z-index: 100;
  .vue-video__image {
    width: 100%;
  }
}
.light-video {
  max-width: 650px;

  z-index: 100;
}
/* .video-illustration {
  height: 50%;
  width: 50%;
} */
</style>
