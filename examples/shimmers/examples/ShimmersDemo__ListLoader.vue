<template>
  <div class="lv-demo_layout">
    <lv-list-loader :width="300" :height="100" primaryColor="#607c8a" secondaryColor="#8aa6b5" />
    <lv-list-loader primaryColor="#38b2ac" secondaryColor="#47d9d1" />
    <!-- REFACTORING -->
  </div>
</template>

<script>
import LvListLoader from 'lightvue/skeleton/preset/ListLoader';
export default {
  components: {
    LvListLoader,
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
