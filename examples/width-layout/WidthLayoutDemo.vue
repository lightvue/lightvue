<template>
  <div>
    <docs-card-best title="Playground">
      <div style="display: flex; flex-direction: column; align-items: center">
        <div style="width: 550px">
          <div v-for="i in value" :key="i">
            <div class="column" :style="`width: ${i}%`">
              <span class="value">{{ i }}</span>
            </div>
          </div>
        </div>
        <!-- {{ value }} -->
        <div>
          <lv-percentage-layout ref="layout" v-model="value"></lv-percentage-layout>
        </div>
      </div>
      <template #props>
        <lv-button @click="add">Add pane</lv-button>
        <lv-button @click="remove">Remove pane</lv-button>
        <!-- <lv-input v-model="allOptions['widthLayout']" label='widthLayout' bottomBar/> 
         {{allOptions['widthLayout']}}
         </br /> -->
      </template>
      <!-- <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-width</span>
        <span class="dy-code-row --attribute-row" v-for="(option, name) in enabledOptions" :key="name">
          <pre v-if="option">&nbsp; &nbsp; &nbsp;<span v-if="!stringProps.includes(name)">:</span>{{ name }}=<span>"{{ option }}"</span></pre>
        </span>
        <span class="dy-code-row --tag-row">&nbsp;/&gt;</span>
        <span class="dy-code-row --empty-row"></span>
      </template> -->
    </docs-card-best>
  </div>
</template>

<script>
import DocsCardBest from '@/components/docs-card/DocsCardBest';
import LvPercentageLayout from 'lightvue/percentage-layout';

export default {
  data() {
    return {
      allOptions: {},
      value: ['50', '50'],
      panesNumber: 4,
    };
  },
  watch: {
    value(val) {
      console.log('value', val);
    },
  },
  components: {
    DocsCardBest,
    LvPercentageLayout,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
  methods: {
    add() {
      this.$refs.layout.addPane();
    },
    remove() {
      this.$refs.layout.removePane();
    },
  },
};
</script>

<style lang="scss">
.column {
  float: left;
  width: 50px;
  height: 150px;
  border: 1px dashed;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
