<template>
  <div>
    <docs-card-best title="Playground">
      <lv-percentage-layout v-model="percentagelayout"></lv-percentage-layout><br />

      <template #props>
        <!-- <lv-button>Add pane</lv-button>
        <lv-button>Remove pane</lv-button> -->
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-width</span>
        <span class="dy-code-row --attribute-row" v-for="(option, name) in enabledOptions" :key="name">
          <pre v-if="option">&nbsp; &nbsp; &nbsp;<span v-if="!stringProps.includes(name)">:</span>{{ name }}=<span>"{{ option }}"</span></pre>
        </span>
        <span class="dy-code-row --tag-row">&nbsp;/&gt;</span>
        <span class="dy-code-row --empty-row"></span>
      </template>
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
      percentagelayout: '',
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
};
</script>

<style lang="scss"></style>
