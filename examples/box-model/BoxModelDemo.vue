<template>
  <div class="box-model-wrapper">
    <div class="output-wrapper">
      <div class="dummy-output" :style="{ padding: paddingValue, margin: marginValue }"><span>Set padding or margin</span></div>
    </div>
    <div class="seperator"></div>
    <div class="controls">
      <lv-dropdown v-model="selectedProperty" :options="properties" optionLabel="name" optionValue="code" placeholder="Select control" bottom-bar />
      <lv-box-model v-model="computedModelValue" :units="units" />
    </div>
  </div>
</template>

<script>
import LvBoxModel from 'lightvue/box-model';
import LvSkeleton from 'lightvue/skeleton';
import LvDropdown from 'lightvue/dropdown';
export default {
  data() {
    return {
      allOptions: {},
      paddingValue: '10px 10px 10px 10px',
      marginValue: '10px 10px 10px 10px',
      selectedProperty: 'padding',
      properties: [
        { name: 'Padding', code: 'padding' },
        { name: 'Margin', code: 'margin' },
      ],
    };
  },
  components: {
    LvBoxModel,
    LvSkeleton,
    LvDropdown,
  },
  computed: {
    computedModelValue: {
      get: function () {
        return this.selectedProperty === 'padding' ? this.paddingValue : this.marginValue;
      },
      set: function (newValue) {
        this.selectedProperty === 'padding' ? (this.paddingValue = newValue) : (this.marginValue = newValue);
      },
    },
    units() {
      return this.selectedProperty === 'padding' ? ['px', 'em', 'rem', '%'] : ['px', 'em', 'rem', '%', 'auto'];
    },
  },
};
</script>

<style lang="scss">
.box-model-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.seperator {
  background: #edf2f6;
  height: 100%;
  width: 3px;
  margin: 0px 20px;
}
.output-wrapper {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 50%;
  /* height: 100%; */
  border: 3px solid #dfe7eb;
  background-color: rgba(55, 179, 171, 0.04);
  /* border-radius: 8px; */
  overflow: hidden;
}
.dummy-output {
  /* border-radius: 8px; */
  /* background-color: #607c8a; */
  border: 2px solid #dfe7eb;
  text-align: center;
  display: flex;
  background-color: white;
  margin: 10px;
  padding: 10px;
  span {
    margin: auto;
    /* padding: 8px; */
  }
}
.controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
@media (max-width: 768px) {
  .box-model-wrapper {
    flex-direction: column;
    justify-content: flex-start;
    height: unset;
    flex-wrap: wrap;
  }
  .output-wrapper {
    height: 100px;
    width: 100%;
  }
  .seperator {
    height: 3px;
    width: 100%;
    margin: 10px 0px;
  }
}
</style>
