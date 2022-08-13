<template>
  <div class="percentageLayout__wrap">
    <LvResponsivePanes class="splitpane" style="height: 35px; width: 250px" @resize="onResize">
      <Pane class="pane" v-for="(width, i) in modelValue" :key="i" :size="width">
        <span>{{ i + 1 }}</span>
      </Pane>
    </LvResponsivePanes>
  </div>
</template>

<script>
import { LvResponsivePanes, Pane } from 'lightvue/responsive-panes';
import { localValueMixin } from 'lightvue/mixins';

export default {
  name: 'LvPercentageController',
  mixins: [localValueMixin],
  components: { LvResponsivePanes, Pane },
  prop: {
    widthLayout: {
      type: String,
      default: '25%',
    },
  },
  computed: {
    dynamicStyle() {
      return {
        widthLayout: this.widthLayout,
      };
    },
  },

  methods: {
    onResize($event) {
      let result = $event.map(x => parseFloat(x.size.toFixed(2)));
      this.updateValue(result);
    },
    setAutoWidth(count) {
      if (count === undefined) {
        count = this.modelValue.length;
      }
      const newEqualValues = parseFloat((100 / count).toFixed(2));
      const newValueArr = Array(count - 1).fill(newEqualValues);
      const partSum = newValueArr.reduce((partialSum, a) => partialSum + a, 0);

      const lastAdjustedValue = parseFloat((100 - partSum).toFixed(2));
      newValueArr.push(lastAdjustedValue);
      this.updateValue(newValueArr);
    },

    addPane() {
      this.setAutoWidth(this.modelValue.length + 1);
    },
    removePane() {
      if (this.modelValue.length > 1) {
        this.setAutoWidth(this.modelValue.length - 1);
      }
    },
  },
};
</script>

<style lang="scss">
.splitpane {
  background: #edf2f7;
  border-radius: 2px;
  padding: 4px;
}
.pane {
  border-radius: 2px;
  margin-right: 3px;
  margin-left: 3px;
  color: #263846;
  background: rgba(0, 0, 0, 0.05);
  justify-content: center;
  display: flex;
  align-items: center;
}
.percentageLayout__wrap {
  .splitpanes__splitter {
    width: 6px !important;
    border-radius: 1px;
    background-color: #c4c4c4 !important;
    cursor: e-resize;
    transition: all 0.1s ease-in-out;
    &:hover {
      background-color: #008080 !important;
    }
  }
}
</style>
