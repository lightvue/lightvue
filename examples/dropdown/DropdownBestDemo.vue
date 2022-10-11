<template>
  <div>
    <docs-card-best title="Playground" overflow>
      <LvDropdown v-bind="allOptions" v-model="allOptions.value"> </LvDropdown>

      <template #props>
        <lv-toggle-switch v-model="allOptions.clearable" label="clearable" /> <br />
        <lv-toggle-switch v-model="allOptions.disabled" label="disabled" /> <br />
        <lv-toggle-switch v-model="allOptions.editable" label="editable" /> <br />
        <lv-toggle-switch v-model="allOptions.filter" label="filter" /> <br />
        <lv-toggle-switch v-model="allOptions['floating-label']" label="Floating label" /> <br />
        <lv-toggle-switch v-model="allOptions.rounded" label="rounded" /> <br />
        <lv-toggle-switch v-model="allOptions['bottom-bar']" label="Bottom bar" /> <br />

        <br />

        <lv-input v-model="allOptions['optionsLabel']" label="optionsLabel" /> <br />
        <lv-input v-model="allOptions['optionsValue']" label="optionsValue" /> <br />
        <lv-input v-model="allOptions['scrollHeight']" label="scrollHeight" placeholder="success" /> <br />
        <lv-input v-model="allOptions['filterPlaceholder']" label="filterPlaceholder" /> <br />
        <lv-input v-model="allOptions['icon-right']" label="Right icon" /> <br />
        <lv-input v-model="allOptions['iconLeft']" label="left icon" /> <br />
        <lv-input v-model="allOptions['emptyFilterMessage']" label="emptyFilterMessage" /> <br />
        <lv-input v-model="allOptions['label']" label="label" /> <br />
        <br />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;LvDropdown </span>
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
import LvDropdown from 'lightvue/dropdown';
import LvInput from 'lightvue/input';
import LvNumber from 'lightvue/number';
import LvColorpicker from 'lightvue/color-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';
export default {
  data() {
    return {
      allOptions: {
        optionLabel: 'name',
        optionValue: 'code',
        placeholder: 'Select Option',
        emptyFilterMessage: 'No result found',
        'help-text': '',
        'icon-right': 'light-icon-arrow-down-circle',
        filterPlaceholder: 'Search',
        iconLeft: '',
        label: '',
        scrollHeight: '',

        value: null,

        options: [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' },
        ],
        clearable: false,
        disabled: false,
        editable: false,
        filter: true,
        'floating-label': false,
        rounded: false,
        'bottom-bar': true,
      },
      stringProps: ['optionLabel', 'filterPlaceholder', 'scrollHeight', 'label', 'optionValue', 'placeholder', 'emptyFilterMessage', 'help-text', 'icon-right', 'iconLeft', ''],
    };
  },

  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvColorpicker,
    LvDropdown,
    LvNumber,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
};
</script>

<style lang="scss" scoped>
.lv-dropdown {
  width: 18rem;
}
</style>
