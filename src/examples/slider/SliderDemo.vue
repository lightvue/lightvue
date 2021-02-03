<template>
  <div>
    <div class="content-section implementation slider-example-wrapper">
      <h5>Basic: {{ value1 }}</h5>
      <LvSlider v-model="value1" />

      <h5>Input: {{ value2 }}</h5>
      <InputText v-model.number="value2" />
      <LvSlider v-model="value2" />

      <h5>Step: {{ value3 }}</h5>
      <LvSlider v-model="value3" :step="20" />

      <h5>Range: {{ value4 }}</h5>
      <LvSlider v-model="value4" :range="true" />

      <h5>Custom color:</h5>
      <LvSlider v-model="value5" sliderColor="#607c8a" />
      <br />
      <LvSlider v-model="value5" sliderColor="#03fc5e" />

      <h5>Vertical: {{ value6 }}</h5>
      <LvSlider v-model="value6" orientation="vertical" />
    </div>
  </div>
</template>

<script>
import LvSlider from '@/collections/slider/Slider';

export default {
  data() {
    return {
      value1: null,
      value2: 50,
      value3: 20,
      value4: [20, 80],
      value5: 50,
      value6: 50,
    };
  },
  components: {
    LvSlider,
  },
};
</script>

<style scoped>
.p-slider-horizontal,
.p-inputtext {
  width: 14rem;
}

.p-slider-vertical {
  height: 14rem;
}

.slider-example-wrapper {
  width: max-content;
}
</style>
