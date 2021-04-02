<template>
  <div>
    <div class="content-section implementation">
      <h5>Basic {{ val1 }}</h5>
      <lv-rating v-model="val1" />

      <h5>Without Cancel</h5>
      <lv-rating v-model="val2" :cancel="false" />

      <h5>ReadOnly</h5>
      <lv-rating :value="5" :readonly="true" :stars="10" :cancel="false" />

      <h5>Disabled</h5>
      <lv-rating :value="8" :disabled="true" :stars="10" />
    </div>
  </div>
</template>

<script>
import LvRating from 'lightvue/rating';
// REFACTORING;

export default {
  data() {
    return {
      val1: null,
      val2: 3,
    };
  },
  components: {
    LvRating,
  },
};
</script>
