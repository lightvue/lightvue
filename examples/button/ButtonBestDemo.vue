<template>
  <div>
    <docs-card-best title="Playground">
      <lv-button v-bind="allOptions" :style="{ padding: boxModelValue }" />

      <template #props>
        <lv-box-model v-model="boxModelValue" /><br />
        <lv-toggle-switch v-model="allOptions.outlined" label="outlined" /> <br />
        <lv-toggle-switch v-model="allOptions.push" label="Push" /> <br />
        <lv-toggle-switch v-model="allOptions.raised" label="Raised" /> <br />
        <lv-toggle-switch v-model="allOptions['deep-shadow']" label="Deep Shadow" /> <br />
        <lv-toggle-switch v-model="allOptions['deep-shadow-hover']" label="Deep Shadow Hover" /> <br />
        <lv-toggle-switch v-model="allOptions.rounded" label="Rounded" /> <br />

        <br />
        <lv-input v-model="allOptions.label" label="Label" /> <br />
        <lv-input v-model="allOptions.type" label="Type" /> <br />
        <lv-input v-model="allOptions['icon-right']" label="Right Icon" /> <br />
        <lv-input v-model="allOptions.size" label="Size" /> <br />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-button</span>
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
import LvBoxModel from 'lightvue/box-model';

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
      boxModelValue: '10px 10px 10px 10px',
      stringProps: ['label', 'icon-right', 'size', 'type'],
    };
  },
  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvColorpicker,
    LvBoxModel,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
};
</script>

<style lang="scss"></style>
