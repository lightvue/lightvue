<template>
  <div class="lv-demo_layout">
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

<style lang="scss" scoped>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
