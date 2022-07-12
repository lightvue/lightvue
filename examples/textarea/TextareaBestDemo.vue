<template>
  <div>
    <docs-card-best title="Playground">
      <lv-textarea v-bind="allOptions" style="width: 100%" />
      <template #props>
        <lv-toggle-switch v-model="allOptions['floating-label']" label="Floating Label" v-if="!allOptions['icon-left'] && !allOptions['placeholder']" /> <br />
        <lv-toggle-switch v-model="allOptions['bottom-bar']" label="Material Design" /> <br />
        <lv-toggle-switch v-model="allOptions.rounded" label="Rounded" /> <br />
        <lv-toggle-switch v-model="allOptions.showLimit" label="Show Limit" /> <br />
        <lv-toggle-switch v-model="allOptions.autoResize" label="Auto Resize" /> <br />
        <br />
        <!-- <lv-number v-model="allOptions.maxLength" label="Max Length" /> <br /> -->
        <lv-input v-model="allOptions.label" label="Label" /> <br />
        <lv-input v-model="allOptions.placeholder" label="Placeholder" /> <br />
        <lv-input v-model="allOptions['help-text']" label="Help Text" /> <br />
        <lv-input v-model="allOptions['icon-left']" label="Left Icons" /> <br />
        <lv-input v-model="allOptions['icon-right']" label="Right Icons" /> <br />
        <lv-input v-model="allOptions.resize" label="Resize" /> <br />
        <Lv-colorpicker v-model="allOptions['placeholder-color']" label="Placeholder Color" />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-textarea</span>
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
import LvTextarea from 'lightvue/textarea';
import LvInput from 'lightvue/input';
import LvNumber from 'lightvue/number';
import LvColorpicker from 'lightvue/color-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';
export default {
  data() {
    return {
      allOptions: {
        'floating-label': false,
        'bottom-bar': true,
        rounded: false,
        showLimit: true,
        autoResize: true,
        maxLength: 100,
        rows: 3,
        placeholder: 'Textarea Placeholder',
        'help-text': '',
        label: 'Textarea Label',
        'placeholder-color': 'rgba(0, 0, 0, 0.3)',
        'icon-left': '',
        'icon-right': '',
        resize: null,
      },
      stringProps: ['label', 'placeholder-color', 'icon-left', 'icon-right', 'help-text', 'placeholder'],
    };
  },
  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvColorpicker,
    LvTextarea,
    LvNumber,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
};
</script>

<style lang="scss"></style>
