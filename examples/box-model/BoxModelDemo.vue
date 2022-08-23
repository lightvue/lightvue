<template>
  <div class="box-model-wrapper">
    <div class="output-wrapper">
      <div class="dummy-output" :style="{ padding: paddingModel, margin: marginModel }"><span>Set padding or margin</span></div>
    </div>
    <div class="seperator"></div>
    <div class="controls">
      <lv-dropdown v-model="selectedOrientation" :options="orientation" optionLabel="name" optionValue="code" placeholder="Select control" bottom-bar />
      <lv-box-model v-model="computedModelValue" />
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
      paddingModel: '10px 10px 10px 10px',
      marginModel: '10px 10px 10px 10px',
      selectedOrientation: 'padding',
      orientation: [
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
        return this.selectedOrientation === 'padding' ? this.paddingModel : this.marginModel;
      },
      set: function (newValue) {
        this.selectedOrientation === 'padding' ? (this.paddingModel = newValue) : (this.marginModel = newValue);
      },
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
