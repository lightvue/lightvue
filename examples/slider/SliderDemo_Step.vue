<template>
  <div class="lv-demo_layout">
    <div>
      <p>step size :10</p>
      <LvRangeSlider v-model="valueStep" :step="10" />
    </div>
    <div>
      <p>step size :20</p>
      <LvRangeSlider v-model="valueRange1" :step="20" />
    </div>
  </div>
</template>

<script>
import LvRangeSlider from 'lightvue/range-slider'; // REFACTORING

export default {
  data() {
    return {
      valueRange1: 0,
      valueStep: 0,
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
  gap: 2rem;
  justify-content: center;
}
</style>
