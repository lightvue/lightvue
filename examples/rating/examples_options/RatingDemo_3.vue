<template>
  <div class="rating_demo">
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
.rating_demo {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
</style>
