<template>
  <div>
    <docs-card-best title="Playground">
      <lv-number v-bind="allOptions" style="width: 100%" />
      <template #props>
        <lv-toggle-switch v-model="allOptions['bottom-bar']" label="Material Design" /> <br />
        <lv-toggle-switch v-model="allOptions.rounded" label="Rounded" /> <br />
        <lv-toggle-switch v-model="allOptions.controls" label="Show Controls" /> <br />
        <lv-toggle-switch v-model="allOptions.showInputSpinner" label="Show Input Spinner" /> <br />

        <br />
        <lv-number v-model="allOptions.max" label="Max Value" /> <br />
        <lv-number v-model="allOptions.min" label="Min Value" /> <br />
        <lv-number v-model="allOptions.step" label="Increment Value" /> <br />
        <lv-input v-model="allOptions.label" label="Label" /> <br />
        <lv-input v-model="allOptions.placeholder" label="Placeholder" /> <br />
        <lv-input v-model="allOptions['help-text']" label="Help Text" /> <br />
        <lv-input v-model="allOptions.iconLeft" label="Left Icons" /> <br />
        <lv-input v-model="allOptions.iconRight" label="Right Icons" /> <br />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-number</span>
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
import LvNumber from 'lightvue/number';
// import LvColorpicker from 'lightvue/color-picker/ColorPicker';
import LvToggleSwitch from 'lightvue/toggle-switch';

export default {
  data() {
    return {
      allOptions: {
        // 'floating-label': false,
        'bottom-bar': false,
        rounded: false,
        controls: true, //Back
        max: 100, //Back
        min: 0, //Back
        step: 1, //Back
        placeholder: 'default color rgba(0, 0, 0, 0.3)',
        'help-text': 'You can create your Component',
        label: 'This is the best demo',
        'placeholder-color': 'rgba(0, 0, 0, 0.3)',
        iconLeft: 'light-icon-minus',
        iconRight: 'light-icon-plus',
        showInputSpinner: false,
      },
      stringProps: ['label', 'placeholder-color', 'icon-left', 'icon-right', 'help-text', 'placeholder'],
    };
  },
  components: {
    DocsCardBest,
    LvInput,
    LvNumber,
    LvToggleSwitch,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
};
</script>

<style lang="scss"></style>
