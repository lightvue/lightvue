<template>
  <div class="content-section implementation slider-example-wrapper">
    <h5>Basic: {{ value }}</h5>
    <LvSlider v-model="value" />
    <h5>Input</h5>
    <LvInput
      v-model="value"
      style="width: 196px"
    />
    <br />
    <LvSlider v-model="value" />
    <h5>Setting custom range</h5>
    PROP: max, min (default 0,100):
    <br />
    <br />
    0-10: <br />
    <LvSlider
      v-model="value"
      :showValue="true"
      :min="0"
      :max="10"
    />
    <br />
    500-550:
    <br />
    <LvSlider
      v-model="value"
      :showValue="true"
      :min="500"
      :max="550"
    />
    <h5>Show/hide floating value label:</h5>
    showValue = true:
    <br />
    <LvSlider
      v-model="value"
      :showValue="true"
    />
    <br />
    showValue = false:
    <br />
    <LvSlider v-model="value" />
    <h5>Step (step-size: 20):</h5>

    <LvSlider
      v-model="value"
      :step="20"
    />

    <h5>Vertical Orientation</h5>
    orientation = vertical (default: horizontal)
    <br />
    verticalHeight = 200 (default: 200)
    <LvSlider
      :showValue="true"
      orientation="vertical"
      verticalHeight="200"
      v-model="value"
    />

    <h5>Slider Color</h5>
    sliderColor (default: #38b2ac)
    <br />
    <LvSlider
      :showValue="true"
      sliderColor="#03fc5e"
      v-model="value"
    />
    <h5>Track Color</h5>
    trackColor (default: #cccccc)
    <br />
    <LvSlider
      :showValue="true"
      sliderColor="#03fc5e"
      trackColor="#38bcac"
      v-model="value"
    />

  </div>
</template>

<script>
import LvSlider from '../../core/components/slider/Slider';
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
    LvSlider,
  },
};
</script>

<style scoped>
.slider-example-wrapper {
  width: max-content;
}
</style>
