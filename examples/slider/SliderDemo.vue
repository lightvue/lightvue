<template>
  <div class="content-section implementation slider-example-wrapper">

    <h5>Basic: {{ value }}</h5>
    <LvSlider v-model="value" />

    <h5>Input</h5>
    <LvInput
      v-model="value"
      style="width: 196px"
    />
    <LvSlider v-model="value" />

    <h5>Setting custom range</h5>
    max,min (default 0,100)
    <LvSlider v-model="value" />

    <h5>Show/hide floating value label:</h5>
    showValue = true
    <LvSlider
      v-model="value"
      showValue
    />
    showValue = false
    <LvSlider v-model="value" />

    <h5>Scales</h5>
    scale = true
    <LvSlider
      v-model="value"
      scale
    />

    <br />
    <h5>Scales with precision</h5>
    precision = "2" (type = number)
    <LvSlider
      v-model="value"
      :precision="4"
      scale
    />

    <br />
    <h5>Custom Step size</h5>
    step = "20" (type = number)
    <LvSlider
      v-model="value"
      :step="20"
    />

    <h5>Slider with range</h5>
    range = true
    <LvSlider
      v-model="valueRange"
      :precision="4"
      showValue
      range
    />

    <h5>Range with scale</h5>
    range = true, scale = true
    <LvSlider
      v-model="valueRange"
      :precision="4"
      range
      scale
    />

    <br />
    <h5>Fully Customizable Color Options</h5>
    sliderColor = "#4066E0"
    <LvSlider
      sliderColor="#4066E0"
      v-model="value"
    />
    trackColor = "#B9BFFF"
    <LvSlider
      sliderColor="#4066E0"
      trackColor="#B9BFFF"
      v-model="value"
      showValue
    />
    thumbColor = "#ffffff", thumbBorderColor = "#663399"
    <LvSlider
      sliderColor="#4066E0"
      trackColor="#B9BFFF"
      thumbBorderColor="#663399"
      thumbColor="#ffffff"
      v-model="value"
      showValue
    />
    <br />
    <br />
  </div>
</template>

<script>
import LvSlider from '../../core/components/slider/Slider';
export default {
  data() {
    return {
      value: 20,
      valueRange: [0, 10],
    };
  },
  components: {
    LvSlider,
  },
};
</script>

<style scoped>
.slider-example-wrapper {
  width: max-content;
}
</style>
