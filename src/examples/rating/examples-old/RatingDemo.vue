<template>
  <div>
    <div class="content-section implementation">
      <h5>Basic {{ val1 }}</h5>
      <Rating v-model="val1" />

      <h5>Without Cancel</h5>
      <Rating v-model="val2" :cancel="false" />

      <h5>ReadOnly</h5>
      <Rating :value="5" :readonly="true" :stars="10" :cancel="false" />

      <h5>Disabled</h5>
      <Rating :value="8" :disabled="true" :stars="10" />
    </div>
  </div>
</template>

<script>
import Rating from '@/collections/rating/rating-old/RatingOld.vue';

export default {
  data() {
    return {
      val1: null,
      val2: 3,
    };
  },
  components: {
    Rating,
  },
};
</script>
