<template>
  <div class="rating_demo">
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
.rating_demo {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
</style>
