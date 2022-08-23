<template>
  <div class="box-model-wrapper">
    <div class="output-wrapper">
      <div class="dummy-output" :style="{ padding: paddingValue, margin: marginValue }">
        <div class="internal-block">
          <div><b>Margin:</b> {{ marginValue }};</div>
          <div><b>Padding:</b> {{ paddingValue }};</div>
        </div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="controls">
      <lv-dropdown v-model="selectedProperty" :options="properties" optionLabel="name" optionValue="code" placeholder="Select control" bottom-bar />
      <lv-box-model v-model="computedModelValue" :units="units" />
    </div>
  </div>
</template>

<script>
import LvBoxModel from 'lightvue/box-model';
import LvDropdown from 'lightvue/dropdown';
export default {
  data() {
    return {
      allOptions: {},
      paddingValue: '12px',
      marginValue: '16px',
      selectedProperty: 'padding',
      properties: [
        { name: 'Padding', code: 'padding' },
        { name: 'Margin', code: 'margin' },
      ],
    };
  },
  components: {
    LvBoxModel,
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
.separator {
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
  border: 2px solid #dfe7eb;
  text-align: center;
  background-color: white;
  span {
    margin: auto;
  }
  .internal-block {
    background-color: #dee7ea;
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
  .separator {
    height: 3px;
    width: 100%;
    margin: 10px 0px;
  }
}
</style>
