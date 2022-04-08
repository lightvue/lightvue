<template>
  <div>
    <docs-card-best title="Playground">
      <LvColorpicker v-bind="allOptions"> </LvColorpicker>

      <template #props>
        <lv-toggle-switch v-model="allOptions.hidePalette" label="Hide Palette" /> <br />
        <lv-toggle-switch v-model="allOptions.withoutInput" label="Without Input" /> <br />
        <lv-toggle-switch v-model="allOptions.clearable" label="Clearable" /> <br />
        <lv-toggle-switch v-model="allOptions.bottomBar" label="Bottom Bar" /> <br />

        <br />

        <lv-input v-model="allOptions['label']" label="label" /> <br />

        <br />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;LvColorPicker</span>
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

import LvInput from 'lightvue/input';

import LvColorpicker from 'lightvue/color-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';
export default {
  data() {
    return {
      allOptions: {
        label: 'Choose Color',
        value: '#38b2ac',

        hidePalette: false,
        withoutInput: false,
        clearable: true,
        bottomBar: true,
        colors: ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#795548'],
      },
      stringProps: ['label'],
    };
  },
  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvColorpicker,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
};
</script>

<style lang="scss"></style>
