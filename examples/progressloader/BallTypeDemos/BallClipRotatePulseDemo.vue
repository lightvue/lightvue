<template>
  <div class="demo__wrapper">
    <lv-loader type="ball-clip-rotate-pulse" />
    <lv-loader type="ball-clip-rotate-pulse" color="#38b2ac" />
    <lv-loader type="ball-clip-rotate-pulse" :scale="2" />
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
