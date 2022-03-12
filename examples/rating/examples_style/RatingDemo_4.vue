<template>
  <div class="rating_demo" style="width: 92%">
    <lv-rating :star-size="40" :glow="10" glow-color="#ffd055" active-color="#ffd055"></lv-rating>

    <lv-rating :star-size="40" :glow="10" glow-color="#d4d4d4" active-color="#d4d4d4"></lv-rating>

    <lv-rating :star-size="40" :glow="10" glow-color="#38b2ac"></lv-rating>
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
