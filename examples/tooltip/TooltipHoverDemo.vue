<template>
  <div>
    <div class="tooltip-example-wrapper">
      <div>
        <LvInput type="text" placeholder="Hover over me!" v-tooltip.right="'Tooltip message'" />
      </div>
      <div>
        <LvInput type="text" placeholder="Hover over me!" v-tooltip.left="'Tooltip message'" />
      </div>
      <div>
        <LvRangeSlider style="width: 100%" v-model="value1" v-tooltip.top="`Tooltip message (value: ${value1})`" />
      </div>
      <div>
        <LvRangeSlider style="width: 100%" v-model="value2" v-tooltip.bottom="`Tooltip message (value: ${value2})`" />
      </div>
    </div>
    <div class="tooltip-example-wrapper">
      <div>
        <LvCard showBorder v-tooltip.top="'Tooltip message'"> <h3>Hover over me!</h3> </LvCard>
      </div>
      <div>
        <LvCard showBorder v-tooltip.bottom="'Tooltip message'"> <h3>Hover over me!</h3> </LvCard>
      </div>
    </div>
    <div class="tooltip-example-wrapper">
      <div>
        <LvButton v-tooltip.right="'Tooltip message'" style="background-color: #607c8a">Hover over me!</LvButton>
      </div>
      <div>
        <LvButton v-tooltip.left="'Tooltip message'">Hover over me!</LvButton>
      </div>
    </div>
  </div>
</template>

<script>
import LvCard from 'lightvue/card/Card';
import LvButton from 'lightvue/button/Button';
import LvRangeSlider from 'lightvue/rangeslider/RangeSlider';
import Tooltip from 'lightvue/tooltip/Tooltip';

export default {
  data() {
    return {
      value1: 10,
      value2: 10,
    };
  },
  components: { LvCard, LvButton, LvRangeSlider },
  directives: {
    tooltip: Tooltip,
  },
};
</script>

<style scoped>
.tooltip-example-wrapper > div {
  display: inline-block;
  width: 40%;
  min-width: 300px;
  margin-left: 100px;
  margin-bottom: 60px;
}
</style>
