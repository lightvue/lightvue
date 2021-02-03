<template>
  <div>
    <h3>Primary Color</h3>
    <div class="shimmer-demo-wrapper">
      <h5>PROP: primaryColor (default: #f9f9f9)</h5>
      <lv-skeleton :width="300" :height="10" /> <br />
      <lv-skeleton :width="300" :height="10" /> <br />
      <lv-skeleton :width="300" :height="10" /> <br />
    </div>
    <div class="shimmer-demo-wrapper">
      <h5>primaryColor = #607C8A</h5>
      <lv-skeleton :width="300" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="300" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="300" :height="10" primaryColor="#607c8a" /> <br />
    </div>
    <div class="shimmer-demo-wrapper">
      <h5>primaryColor = #382BAC</h5>
      <lv-skeleton :width="300" :height="10" primaryColor="#38b2ac" /> <br />
      <lv-skeleton :width="300" :height="10" primaryColor="#38b2ac" /> <br />
      <lv-skeleton :width="300" :height="10" primaryColor="#38b2ac" /> <br />
    </div>

    <h3>Secondary Color</h3>
    <div class="shimmer-demo-wrapper">
      <h5>PROP: secondaryColor (default: #ecebeb)</h5>
      <lv-skeleton :width="300" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="300" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="300" :height="10" primaryColor="#607c8a" /> <br />
    </div>
    <div class="shimmer-demo-wrapper">
      <h5>secondaryColor = #97C6DE</h5>
      <lv-skeleton :width="300" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="300" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="300" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
    </div>
    <div class="shimmer-demo-wrapper">
      <h5>secondaryColor = #47D9D1</h5>
      <lv-skeleton :width="300" :height="10" secondaryColor="#47d9d1" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="300" :height="10" secondaryColor="#47d9d1" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="300" :height="10" secondaryColor="#47d9d1" primaryColor="#607c8a" /> <br />
    </div>
  </div>
</template>

<script>
import LvSkeleton from '@/collections/skeleton/Skeleton.vue';
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
</style>
