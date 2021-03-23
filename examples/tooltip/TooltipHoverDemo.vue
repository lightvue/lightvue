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
import LvCard from 'lightvue/card';
import LvButton from 'lightvue/button';
// import LvRangeSlider from 'lightvue/slider'; REFACTORING
import Tooltip from 'lightvue/tooltip';

export default {
  data() {
    return {
      value1: 10,
      value2: 10,
    };
  },
  components: {
    LvCard,
    LvButton,
    // LvRangeSlider REFACTORING
  },
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

@media (max-width: 650px) {
  .tooltip-example-wrapper > div {
    margin-left: 0px;
    width: 100%;
    min-width: 0;
  }
}
</style>
