<template>
  <div class="demo__wrapper">
    <lv-loader type="cube-transition" />
    <lv-loader type="cube-transition" color="#38b2ac" />
    <div class="push-up"><lv-loader type="cube-transition" :scale="2" /></div>
  </div>
</template>

<script>
import LvLoader from 'lightvue/loaders';

export default {
  data() {
    return {};
  },
  components: {
    LvLoader,
  },
};
</script>

<style scoped>
.push-up {
  position: relative;
  top: -60px;
}

.demo__wrapper {
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
}
</style>
