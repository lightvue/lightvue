<template>
  <div class="content-section implementation slider-example-wrapper">
    <LvRangeSlider v-model="value" sliderColor="#38b2ac" />

    <LvRangeSlider v-model="valueRange1" sliderColor="#9973ff" />
  </div>
</template>

<script>
import LvRangeSlider from 'lightvue/range-slider'; // REFACTORING

export default {
  data() {
    return {
      value: 20,
      valueRange1: 0,
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
