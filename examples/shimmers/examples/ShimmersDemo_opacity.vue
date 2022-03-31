<template>
  <div class="lv-demo_layout">
    <div class="mr-1">
      <lv-skeleton :primaryOpacity="0.7" :width="275" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :primaryOpacity="0.7" :width="275" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :primaryOpacity="0.7" :width="275" :height="10" primaryColor="#607c8a" /> <br />
    </div>

    <div class="mr-1">
      <lv-skeleton :primaryOpacity="0.2" :width="275" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :primaryOpacity="0.2" :width="275" :height="10" primaryColor="#607c8a" /> <br />
      <lv-skeleton :primaryOpacity="0.2" :width="275" :height="10" primaryColor="#607c8a" /> <br />
    </div>

    <div class="mr-1">
      <lv-skeleton :secondaryOpacity="0.7" :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
      <lv-skeleton :secondaryOpacity="0.7" :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
      <lv-skeleton :secondaryOpacity="0.7" :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
    </div>

    <div class="mr-1">
      <lv-skeleton :secondaryOpacity="0.2" :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
      <lv-skeleton :secondaryOpacity="0.2" :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
      <lv-skeleton :secondaryOpacity="0.2" :width="275" :height="10" secondaryColor="#97c6de" primaryColor="#607c8a" /> <br />
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
  justify-content: center;
}
</style>
