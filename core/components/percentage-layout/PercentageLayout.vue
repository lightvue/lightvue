<template>
  <div>
    <!-- <lv-button @click="addPane">Add pane</lv-button>
    <lv-button @click="removePane">Remove pane</lv-button>
    <br /> -->
    <br />
    <!-- <div v-for="i in panesNumber" :key="i">
      <div class="column">{{ i }}</div>
    </div> -->

    <div class="percentageLayout__wrap">
      <LvResponsivePanes class="splitpane" style="height: 35px; width: 250px" @resize="onResize">
        <Pane class="pane" v-for="i in panesNumber" :key="i">
          <span>{{ i }}</span>
        </Pane>
      </LvResponsivePanes>
    </div>
  </div>
</template>

<script>
import { LvResponsivePanes, Pane } from 'lightvue/responsive-panes';
import { localValueMixin } from 'lightvue/mixins';

export default {
  name: 'LvPercentageLayout',
  mixins: [localValueMixin],
  components: { LvResponsivePanes, Pane },
  data() {
    return {
      panesNumber: 2,
    };
  },
  prop: {
    widthLayout: {
      type: String,
      default: '25%',
    },
  },
  mounted() {
    this.localValue = this.modelValue;
  },
  watch: {
    localValue() {
      if (this.localValue !== this.modelValue) {
        this.updateValue(this.localValue);
      }
    },
  },
  computed: {
    // modelValue() {
    //   const value = this.$attrs.modelValue ? this.$attrs.modelValue : this.value;
    //   return this.onResize(value);
    // },
    dynamicStyle() {
      return {
        widthLayout: this.widthLayout,
      };
    },
  },

  methods: {
    onResize($event) {
      this.panesArray = $event;
      // console.log('resize', $event);
      // for (var i in this.a) {
      //   var value = this.a[i].size;
      //   console.log('single value', value);
      // }
      let result = $event.map(x => x.size);
      console.log('array value', result);
      this.updateValue(result);
    },

    addPane() {
      this.panesNumber++;
    },
    removePane() {
      this.panesNumber--;
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
