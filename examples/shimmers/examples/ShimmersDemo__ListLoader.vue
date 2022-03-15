<template>
  <div class="skeleton_demo-wrapper">
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
.skeleton_demo-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
}
</style>
