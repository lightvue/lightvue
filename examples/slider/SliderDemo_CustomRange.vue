<template>
  <div class="content-section implementation slider-example-wrapper">
    <LvRangeSlider :min="0" :max="10" v-model="valueRange1" />
    <LvRangeSlider :min="500" :max="550" v-model="valueRange2" />
  </div>
</template>

<script>
import LvRangeSlider from 'lightvue/range-slider'; // REFACTORING

export default {
  data() {
    return {
      value: 20,
      valueRange1: 0,
      valueRange2: 500,
      valueStep: 20,
    };
  },
  components: {
    LvRangeSlider, // REFACTORING
  },
};
</script>

<style scoped>
.lv-slider-horizontal,
.lv-inputtext {
  width: 14rem;
}

.lv-slider-vertical {
  height: 14rem;
}

.slider-example-wrapper {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
</style>
