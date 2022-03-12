<template>
  <div class="content-section implementation slider-example-wrapper">
    <LvRangeSlider class="slider" v-model="value" /> <br />

    <LvRangeSlider class="slider" v-model="value" :showValue="false" />
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
