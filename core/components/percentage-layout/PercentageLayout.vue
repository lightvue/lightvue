<template>
  <div>
    <lv-button @click="panesNumber++">Add pane</lv-button>
    <lv-button @click="panesNumber--">Remove pane</lv-button>
    <br />
    <br />
    <LvResponsivePanes class="splitpane" style="height: 35px" @resize="onResize" @resized="log('resized', $event)">
      <Pane class="pane" v-for="i in panesNumber" :key="i">
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
    };
  },
  methods: {
    onResize($event) {
      console.log('resize', $event);
    },
    log(a, b) {
      console.log(a, b);
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
