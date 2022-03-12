<template>
  <div class="rating_demo" style="width: 92%">
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
.rating_demo {
  display: flex;
  justify-content: space-between;
}
</style>
