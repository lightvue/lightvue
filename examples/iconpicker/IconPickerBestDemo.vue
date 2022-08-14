<template>
  <div>
    <docs-card-best title="Playground">
      <LvIconpicker v-bind="allOptions"> </LvIconpicker>

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
        <span class="dy-code-row --tag-row">&nbsp;&lt;LvIconPicker</span>
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
import LvIconpicker from 'lightvue/icon-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';

export default {
  data() {
    return {
      allOptions: {
        label: 'Choose Icon',
        value: 'light-icon-search',
        hidePalette: false,
        withoutInput: false,
        clearable: true,
        bottomBar: true,
        icons: ['light-icon-brand-twitter', 'light-icon-brand-linkedin', 'light-icon-brand-facebook', 'light-icon-brand-instagram', 'light-icon-brand-telegram', 'light-icon-brand-github', 'light-icon-brand-whatsapp', 'light-icon-brand-youtube', 'light-icon-settings', 'light-icon-download', 'light-icon-bell', 'light-icon-book', 'light-icon-copy', 'light-icon-code'],
      },
      stringProps: ['label'],
    };
  },
  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvIconpicker,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
};
</script>

<style lang="scss"></style>
