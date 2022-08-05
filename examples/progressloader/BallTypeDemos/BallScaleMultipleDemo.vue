<template>
  <div class="demo__wrapper">
    <lv-loader type="ball-scale-multiple" />
    <lv-loader type="ball-scale-multiple" color="#38b2ac" />
    <div class="push-up"><lv-loader type="ball-scale-multiple" :scale="2" /></div>
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
  width: 80%;
}
</style>
