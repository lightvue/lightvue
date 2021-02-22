<template>
  <div>
    <div class="shimmer-demo-wrapper">
      <h5>PROP: speed</h5>
      <lv-skeleton :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
      <lv-skeleton :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
      <lv-skeleton :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
    </div>
    <div class="shimmer-demo-wrapper">
      <h5>speed = 1</h5>
      <lv-skeleton :speed="1" :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
      <lv-skeleton :speed="1" :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
      <lv-skeleton :speed="1" :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
    </div>
    <div class="shimmer-demo-wrapper">
      <h5>speed = 4</h5>
      <lv-skeleton :speed="4" :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
      <lv-skeleton :speed="4" :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
      <lv-skeleton :speed="4" :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
    </div>
  </div>
</template>

<script>
import LvSkeleton from 'lightvue/skeleton/Skeleton.vue';
export default {
  components: {
    LvSkeleton,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.shimmer-demo-wrapper {
  margin: 30px;
  height: max-content;
  width: 350px;
  display: inline-block;
}

@media (max-width: 500px) {
  .shimmer-demo-wrapper {
    margin-left: 0;
    margin-right: 0;
    width: 280px;
  }
}
</style>
