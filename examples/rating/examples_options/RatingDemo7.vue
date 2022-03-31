<template>
  <div class="lv-demo_layout">
    <lv-rating :show-rating="true" :star-size="40"></lv-rating>
    <lv-rating :show-rating="false" :star-size="40"></lv-rating>
  </div>
</template>

<script>
import LvRating from 'lightvue/rating';
export default {
  components: {
    LvRating,
  },

  data() {
    return {
      rating: null,
      resetableRating: 2,
      currentRating: 'No Rating',
      mouseOverRating: null,
    };
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
