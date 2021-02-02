<template>
      <div class="demo__wrapper">
        <div class="demo__item"><lv-loader type="ball-zig-zag-deflect"/></div>
        <div class="demo__item"><lv-loader type="ball-zig-zag-deflect" color="#38b2ac"/></div>
        <div class="demo__item"><lv-loader type="ball-zig-zag-deflect" :scale="2"/></div>
      </div>
</template>

<script>
import LvLoader from "@/collections/loaders/Loader.vue";

export default {
  data() {
    return {};
  },
  components: {
    LvLoader
  }
};
</script>

<style scoped>
.demo__wrapper {
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0px;
  padding: 0px;
  padding-bottom: 20px;
  height: max-content;
  border: 0px;
}

.demo__item {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border: 0px;
  height: 200px;
  min-height: max-content;
  margin: 0px;
  padding: 0px;
  width: max-content;
}
</style>
