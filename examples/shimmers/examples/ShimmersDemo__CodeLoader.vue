<template>
  <div class="skeleton_demo-wrapper">
    <lv-code-loader :width="250" />
    <lv-code-loader :width="250" primaryColor="#607c8a" secondaryColor="#8aa6b5" />
    <lv-code-loader :width="250" primaryColor="#38b2ac" secondaryColor="#47d9d1" />
  </div>
</template>

<script>
import LvCodeLoader from 'lightvue/skeleton/preset/CodeLoader';
export default {
  components: {
    LvCodeLoader,
  },
};
</script>
<style scoped>
.skeleton_demo-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
