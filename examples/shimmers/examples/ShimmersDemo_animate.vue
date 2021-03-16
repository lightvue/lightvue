<template>
  <div>
    <div class="shimmer-demo-wrapper">
      <h5>PROP: animate</h5>
      <lv-skeleton :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
      <lv-skeleton :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
      <lv-skeleton :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
    </div>
    <div class="shimmer-demo-wrapper">
      <h5>animate = false</h5>
      <lv-skeleton :animate="false" :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
      <lv-skeleton :animate="false" :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
      <lv-skeleton :animate="false" :width="275" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
    </div>
  </div>
</template>

<script>
import LvSkeleton from 'lightvue/Skeleton.vue';
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
