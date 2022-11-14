<template>
  <div>
    <docs-card-best title="Playground">
      <div>
        <LvDatepicker v-bind="allOptions" v-model="value"> </LvDatepicker>
        <br />
        {{ value }}
      </div>
      <template #props>
        <lv-toggle-switch v-model="allOptions.fullMonthName" label="Show full month name" /> <br />
        <lv-toggle-switch v-model="allOptions.useUtc" label="use UTC" /> <br />
        <lv-toggle-switch v-model="allOptions.disabled" label="Disable" /> <br />
        <lv-toggle-switch v-model="allOptions.calendarButton" label="calendar button" /> <br />
        <lv-toggle-switch v-model="allOptions.mondayFirst" label="monday first" /> <br />
        <!-- <lv-toggle-switch v-model="allOptions.inline" label="inline" /> <br /> -->
        <lv-toggle-switch v-model="allOptions.typeable" label="typeable" /> <br />
        <br />
        <lv-dropdown label="format" v-model="Selectedformat" :options="format" optionLabel="name" placeholder="Select a Format" clearable />
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
import LvDropdown from 'lightvue/dropdown';

import LvDatepicker from 'lightvue/date-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';
export default {
  data() {
    return {
      value: null,
      format: [
        { name: 'd MMM yyyy', code: 'd MMM yyyy' },
        { name: 'd MMMM yyyy', code: 'd MMMM yyyy' },
        { name: 'yyyy-MM-dd', code: 'yyyy-MM-dd' },
        { name: 'dsu MMM yyyy', code: 'dsu MMM yyyy' },
        { name: 'D dsu MMM yyyy', code: 'D dsu MMM yyyy' },
      ],
      Selectedformat: null,
      allOptions: {
        format: this.Selectedformat ? this.Selectedformat.name : 'd MMM yyyy',
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
    LvDropdown,
  },
  watch: {
    Selectedformat(val) {
      this.allOptions.format = val.name;
    },
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
};
</script>

<style lang="scss"></style>
