<template>
  <div class="content-section implementation slider-example-wrapper">
    <h5>Basic: {{ value }}</h5>
    <LvRangeSlider class="slider" v-model="value" />

    <h5>Input:</h5>
    <LvInput v-model="value" style="width: 196px" />
    <LvRangeSlider class="slider" v-model="value" :showValue="false" />

    <h5>Setting custom range</h5>
    PROP: max, min (default 0,100):<br /><br />
    0-10: <br />
    <LvRangeSlider :min="0" :max="10" v-model="valueRange1" />
    <br />
    <br />
    500-550: <br />
    <LvRangeSlider :min="500" :max="550" v-model="valueRange2" />
    <br />
    <br />

    <h5>Show/hide floating value label:</h5>
    showValue = true: <br />
    <LvRangeSlider class="slider" v-model="value" /> <br />
    <br />
    showValue = false: <br />
    <LvRangeSlider class="slider" v-model="value" :showValue="false" />
    <h5>Step (step-size: 20):</h5>
    <LvRangeSlider v-model="valueStep" :step="20" />

    <h5>Custom color:</h5>
    Slider Color (default: #607C8A)<br />
    <LvRangeSlider v-model="value" sliderColor="#38b2ac" />
    <br />
    <br />
    <LvRangeSlider v-model="value" sliderColor="#03fc5e" />
    <br />
    <br />
    Track Color (default: #E5E5E5)<br />
    <LvRangeSlider v-model="value" trackColor="#38b2ac" />
    <br />
    <br />
    <LvRangeSlider v-model="value" trackColor="#03fc5e" />
    <br />
    <br />
  </div>
</template>

<script>
// import LvSlider from 'lightvue/slider/Slider';
import LvRangeSlider from 'lightvue/rangeslider';

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
    LvRangeSlider,
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
  width: max-content;
}
</style>
