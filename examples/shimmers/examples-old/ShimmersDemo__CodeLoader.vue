<template>
  <div>
    <lv-code-loader :width="300" />
    <lv-code-loader :width="300" primaryColor="#607c8a" secondaryColor="#8aa6b5" />
    <lv-code-loader :width="300" primaryColor="#38b2ac" secondaryColor="#47d9d1" />
    <h5>Responsive with max-width</h5>
    <lv-code-loader style="max-width: 600px" />
  </div>
</template>

<script>
import LvCodeLoader from 'lightvue/preset/CodeLoader';
export default {
  components: {
    LvCodeLoader,
  },
};
</script>

<style scoped></style>
