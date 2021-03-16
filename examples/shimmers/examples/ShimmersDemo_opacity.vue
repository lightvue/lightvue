<template>
  <div>
    <div class="shimmer-demo-wrapper">
      <h5>PROP: primaryOpacity</h5>
      <lv-skeleton :width="275" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="275" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="275" :height="10" primaryColor="#607c8a" /> <br />
    </div>
    <div class="shimmer-demo-wrapper">
      <h5>primaryOpacity = 0.7</h5>
      <lv-skeleton :primaryOpacity="0.7" :width="275" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :primaryOpacity="0.7" :width="275" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :primaryOpacity="0.7" :width="275" :height="10" primaryColor="#607c8a" /> <br />
    </div>
    <div class="shimmer-demo-wrapper">
      <h5>primaryOpacity = 0.2</h5>
      <lv-skeleton :primaryOpacity="0.2" :width="275" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :primaryOpacity="0.2" :width="275" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :primaryOpacity="0.2" :width="275" :height="10" primaryColor="#607c8a" /> <br />
    </div>
    <br />
    <div class="shimmer-demo-wrapper">
      <h5>PROP: secondaryOpacity (default: 1)</h5>
      <lv-skeleton :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
    </div>
    <div class="shimmer-demo-wrapper">
      <h5>secondaryOpacity = 0.7</h5>
      <lv-skeleton :secondaryOpacity="0.7" :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
      <lv-skeleton :secondaryOpacity="0.7" :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
      <lv-skeleton :secondaryOpacity="0.7" :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
    </div>
    <div class="shimmer-demo-wrapper">
      <h5>secondaryOpacity = 0.2</h5>
      <lv-skeleton :secondaryOpacity="0.2" :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
      <lv-skeleton :secondaryOpacity="0.2" :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
      <lv-skeleton :secondaryOpacity="0.2" :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
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
