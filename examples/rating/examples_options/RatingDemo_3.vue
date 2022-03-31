<template>
  <div class="lv-demo_layout">
    <lv-rating :star-size="40"></lv-rating>
    <lv-rating :star-size="40" :max-rating="2"></lv-rating>
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
