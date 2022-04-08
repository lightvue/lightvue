<template>
  <div class="lv-demo_layout">
    <lv-rating :star-size="30"></lv-rating>
    <lv-rating :star-size="50"></lv-rating>
  </div>
</template>

<script>
import LvRating from 'lightvue/rating';
export default {
  components: {
    LvRating,
  },
};
</script>
<style>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
