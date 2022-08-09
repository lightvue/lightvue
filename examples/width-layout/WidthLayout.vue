<template>
  <div>
    <docs-card-best title="Playground">
      <lv-percentage-layout v-model="percentagelayout"></lv-percentage-layout><br />

      <!-- <template #props>
        <br />
      </template>
      <template #code>
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
        outlined: false,
        push: false,
        raised: false,
        'deep-shadow': false,
        'deep-shadow-hover': false,
        rounded: false,
        label: 'This is a Button',
        type: 'button',
        icon: '',
        'icon-right': '',
        size: 'xl',
      },
      stringProps: ['label', 'icon-right', 'size', 'type'],
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
