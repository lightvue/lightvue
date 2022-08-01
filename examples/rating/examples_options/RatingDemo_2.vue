<template>
  <div>
    <lv-rating :rating="3.8" :star-size="40" :read-only="true" :increment="0.01"></lv-rating>
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
