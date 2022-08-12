<template>
  <div>
    <docs-card-best title="Playground">
      <div>
        <div style="border: 1px dashed"></div>
        <lv-percentage-layout v-bind="allOptions" ref="layout"></lv-percentage-layout><br />
      </div>
      <template #props>
        <lv-button @click="add">Add pane</lv-button>
        <lv-button @click="remove">Remove pane</lv-button>
         <lv-input v-model="allOptions['widthLayout']" label='widthLayout' bottomBar/> 
         {{allOptions['widthLayout']}}
         </br />
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
      allOptions: {
        widthLayout: '25%',
      },
      stringProps: ['widthLayout', ],
    };
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
  methods:{
    add(){
      this.$refs.layout.addPane();
    },
    remove(){
      this.$refs.layout.removePane();
    }
  }
};
</script>

<style lang="scss"></style>
