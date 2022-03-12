<template>
  <div class="content-section implementation slider-example-wrapper">
    <div>
      <p>step size :20</p>
      <LvRangeSlider v-model="valueStep" :step="20" />
    </div>
    <div>
      <p>step size :20</p>
      <LvRangeSlider v-model="valueRange1" :step="10" />
    </div>
  </div>
</template>

<script>
import LvRangeSlider from 'lightvue/range-slider'; // REFACTORING

export default {
  data() {
    return {
      valueRange1: 0,

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
