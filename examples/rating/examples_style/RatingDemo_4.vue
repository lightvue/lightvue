<template>
  <div class="lv-demo_layout">
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
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
