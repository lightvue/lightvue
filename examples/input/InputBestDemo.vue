<template>
  <div>
    <docs-card-best title="Playground">
      <lv-input v-bind="allOptions" />
      <template #props>
        <lv-toggle-switch v-model="allOptions['floating-label']" label="Floating Label" v-if="!allOptions['icon-left'] && !allOptions['Placeholder']" /> <br />
        <lv-toggle-switch v-model="allOptions['bottom-bar']" label="Bottom Bar" /> <br />
        <lv-toggle-switch v-model="allOptions.rounded" label="Rounded" /> <br />
        <br />
        <lv-input v-model="allOptions.label" label="Label" /> <br />
        <lv-input v-model="allOptions.placeholder" label="Placeholder" /> <br />
        <lv-input v-model="allOptions['help-text']" label="Help Text" /> <br />
        <lv-input v-model="allOptions['icon-left']" label="Left Icons" /> <br />
        <lv-input v-model="allOptions['icon-right']" label="Right Icons" /> <br />
        <Lv-colorpicker v-model="allOptions['placeholder-color']" label="Placeholder Color" />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-input</span>
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
        'floating-label': false,
        'bottom-bar': true,
        rounded: false,
        placeholder: 'Acme Corp.',
        'help-text': 'Place where you work...',
        label: 'Organization Name',
        'placeholder-color': 'rgba(0, 0, 0, 0.3)',
        'icon-left': 'light-icon-search',
        'icon-right': 'light-icon-arrow-up-right-circle',
      },
      stringProps: ['label', 'placeholder-color', 'icon-left', 'icon-right', 'help-text', 'placeholder'],
    };
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvColorpicker,
  },
};
</script>

<style lang="scss"></style>
