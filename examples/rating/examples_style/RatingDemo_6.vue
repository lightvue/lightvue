<template>
  <div class="rating_demo">
    <lv-rating></lv-rating>
    <lv-rating inactive-color="#BCD7E2"></lv-rating>
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
