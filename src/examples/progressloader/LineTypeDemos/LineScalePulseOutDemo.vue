<template>
      <div class="demo__wrapper">
        <div class="demo__item"><lv-loader type="line-scale-pulse-out"/></div>
        <div class="demo__item"><lv-loader type="line-scale-pulse-out" color="#38b2ac"/></div>
        <div class="demo__item"><lv-loader type="line-scale-pulse-out" :scale="2"/></div>
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
