<template>
  <div class="lv-demo_layout">
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

<style lang="scss" scoped>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
