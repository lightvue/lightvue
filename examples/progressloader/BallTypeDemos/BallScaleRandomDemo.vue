<template>
  <div class="demo__wrapper">
    <lv-loader type="ball-scale-random" color="#38b2ac" />
    <lv-loader type="ball-scale-random" />
    <lv-loader type="ball-scale-random" :scale="2" />
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
.demo__wrapper {
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
}
</style>
