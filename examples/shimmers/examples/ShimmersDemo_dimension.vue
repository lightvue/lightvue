<template>
  <div>
    <h3>Adjusting height</h3>
    <lv-skeleton :width="200" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
    <lv-skeleton :width="200" :height="20" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
    <lv-skeleton :width="200" :height="30" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
    <br />
    <h3>Adjusting width</h3>
    <lv-skeleton :width="200" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
    <lv-skeleton :width="225" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
    <lv-skeleton :width="250" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
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

<style scoped></style>
