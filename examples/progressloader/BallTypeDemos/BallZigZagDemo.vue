<template>
  <div class="demo__wrapper">
    <lv-loader type="ball-zig-zag" />
    <lv-loader type="ball-zig-zag" color="#38b2ac" />
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
  width: 60%;
}
</style>
