<template>
  <div>
    <docs-card-best title="Playground">
      <LvDatepicker v-bind="allOptions" v-model="value"> </LvDatepicker>
      <div>
        {{ value }}
      </div>
      <template #props>
        <lv-toggle-switch v-model="allOptions.fullMonthName" label="Show full month name" /> <br />
        <lv-toggle-switch v-model="allOptions.useUtc" label="use UTC" /> <br />
        <lv-toggle-switch v-model="allOptions.disabled" label="Disable" /> <br />
        <lv-toggle-switch v-model="allOptions.calendarButton" label="calendar button" /> <br />
        <lv-toggle-switch v-model="allOptions.mondayFirst" label="monday first" /> <br />
        <lv-toggle-switch v-model="allOptions.inline" label="inline" /> <br />
        <lv-toggle-switch v-model="allOptions.typeable" label="typeable" /> <br />

        <br />

        <lv-input v-model="allOptions['placeholder']" label="placeholder" /> <br />

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

import LvDatepicker from 'lightvue/date-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';
export default {
  data() {
    return {
      value: null,
      allOptions: {
        placeholder: 'Select Date',
        // language: 'en',
        fullMonthName: false,
        inline: false,
        mondayFirst: false,
        calendarButton: false,
        disabled: false,
        required: false,
        typeable: false,
        useUtc: false,
        typeable: false,
      },
      stringProps: ['placeholder'],
    };
  },
  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvDatepicker,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
};
</script>

<style lang="scss"></style>
