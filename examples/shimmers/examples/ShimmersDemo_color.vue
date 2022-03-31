<template>
  <div class="lv-demo_layout">
    <div>
      <lv-skeleton :width="275" :height="10" primaryColor="#38b2ac" /> <br />
      <lv-skeleton :width="275" :height="10" primaryColor="#38b2ac" /> <br />
      <lv-skeleton :width="275" :height="10" primaryColor="#38b2ac" /> <br />
    </div>

    <div>
      <lv-skeleton :width="275" :height="10" secondaryColor="#47d9d1" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="275" :height="10" secondaryColor="#47d9d1" primaryColor="#607c8a" /> <br />
      <lv-skeleton :width="275" :height="10" secondaryColor="#47d9d1" primaryColor="#607c8a" /> <br />
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

@media (max-width: 500px) {
  .shimmer-demo-wrapper {
    margin-left: 0;
    margin-right: 0;
    width: 280px;
  }
}
</style>
