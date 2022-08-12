<template>
  <div>
    <lv-button @click="panesNumber++">Add pane</lv-button>
    <lv-button @click="panesNumber--">Remove pane</lv-button>
    <br />
    <br />
    <LvResponsivePanes class="splitpane" style="height: 35px" @resize="onResize">
      <Pane class="pane" v-for="i in panesNumber" :key="i" :style="dynamicStyle">
        <span>{{ i }}</span>
      </Pane>
    </LvResponsivePanes>
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
      panesNumber: 3,
      panesArray: [],
    };
  },
  prop: {
    widthLayout: {
      type: String,
      default: '25%',
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
      let result = this.panesArray.map(x => x.size);
      console.log('array value', result);
      return result;
    },
    getValue(value) {
      var value = this.onResize();
      console.log('getValue', value);
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
</style>
