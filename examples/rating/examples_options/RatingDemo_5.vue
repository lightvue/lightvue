<template>
  <div style="width: 30%">
    <lv-rating :star-size="40" :increment="0.5"></lv-rating>
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
