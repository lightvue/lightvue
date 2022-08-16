<template>
  <div>
    <docs-card-best title="Playground">
      <div style="width: 100%">
        <div style="display: flex">
          <div v-for="(width, i) in value" :key="i" :style="`width: ${width}%`">
            <div class="width-controller__column">
              <div>{{ width }}%</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <LvWidthController ref="widthController" v-model="value"></LvWidthController>
      </div>
      <template #props>
        <lv-button @click="add">Add Block</lv-button>
        <lv-button @click="remove">Remove Block</lv-button>
        <br />
        <br />

        <lv-button @click="autoWidth">Equal Width</lv-button>
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
import LvWidthController from 'lightvue/width-controller';

export default {
  data() {
    return {
      allOptions: {},
      value: [20, 80],
    };
  },
  // watch: {
  //   value(val) {
  //     console.log('value', val);
  //   },
  // },
  components: {
    DocsCardBest,
    LvWidthController,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
  methods: {
    add() {
      this.$refs.widthController.addPane();
    },
    remove() {
      this.$refs.widthController.removePane();
    },
    autoWidth() {
      this.$refs.widthController.setAutoWidth();
    },
  },
};
</script>

<style lang="scss">
.width-controller__column {
  height: 150px;
  border: 1px dashed;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
