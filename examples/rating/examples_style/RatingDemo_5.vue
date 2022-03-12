<template>
  <div class="rating_demo">
    <div>
      <p>Combining props to create custom style</p>
      <lv-rating :star-size="40" :rounded-corners="true" :border-width="4" :star-points="[23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17]"></lv-rating>
    </div>
    <div>
      <p>Right To Left layout</p>
      <lv-rating :rtl="true" :increment="0.01"></lv-rating>
    </div>
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
