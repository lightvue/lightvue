<template>
  <div>
    <lv-list-loader :width="300" :height="100" />
    <lv-list-loader />
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

<style scoped></style>
