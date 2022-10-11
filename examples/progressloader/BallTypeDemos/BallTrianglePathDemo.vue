<template>
  <div class="demo__wrapper">
    <lv-loader type="ball-triangle-path" />
    <lv-loader type="ball-triangle-path" color="#38b2ac" />
    <div class="push-up"><lv-loader type="ball-triangle-path" :scale="2" /></div>
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
  top: -70px;
}
.demo__wrapper {
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
}
</style>
