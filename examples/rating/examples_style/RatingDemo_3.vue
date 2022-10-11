<template>
  <div class="lv-demo_layout">
    <lv-rating :border-width="0" :star-size="40"></lv-rating>

    <lv-rating :border-width="4" :star-size="35"></lv-rating>

    <lv-rating :rounded-corners="true" :border-width="4" :star-size="40"></lv-rating>
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
