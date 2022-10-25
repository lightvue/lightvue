<template>
  <div class="lv-demo_layout">
    <div>
      <lv-skeleton :width="200" :height="10" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
      <lv-skeleton :width="225" :height="20" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
      <lv-skeleton :width="250" :height="30" primaryColor="#607c8a" secondaryColor="#8aa6b5" /> <br />
    </div>
  </div>
</template>

<script>
import LvSkeleton from 'lightvue/skeleton';
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
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
