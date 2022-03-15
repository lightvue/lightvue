<template><lv-skeleton primaryColor="#607c8a" secondaryColor="#8aa6b5" /></template>

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
.skeleton_demo-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 80%; */
}
</style>
