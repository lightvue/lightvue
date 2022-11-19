<template>
  <div>
    <docs-card-best title="Playground">
      <LvInlineInput v-model="allOptions.value" v-bind="allOptions" />
      <template #props>
        <lv-input bottomBar v-model="allOptions.value" label="Content" /> <br />
        <Lv-colorpicker bottomBar v-model="allOptions.background" label="Background Color" /> <br /><br />
        <lv-input bottomBar v-model="allOptions.padding" label="Padding (in px)" /> <br />
        <lv-input bottomBar v-model="allOptions.borderRadius" label="Border Radius (in px)" /> <br />
        <lv-input bottomBar v-model="allOptions.placeholder" label="Placeholder" /> <br />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-inline-input</span>
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
import LvInlineInput from 'lightvue/inline-input';
import LvColorpicker from 'lightvue/color-picker';

export default {
  data() {
    return {
      allOptions: {
        padding: '16px',
        // margin: '-16px',
        value: 'Click to edit this',
        background: 'rgba(0, 0, 0, 0.02)',
        color: '#566d79',
        borderRadius: '4px',
        placeholder: 'Type here',
      },
      stringProps: ['borderRadius', 'value', 'background', 'padding', 'margin', 'color', 'placeholder'],
    };
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
  components: {
    DocsCardBest,
    LvInlineInput,
    LvColorpicker,
  },
};
</script>

<style lang="scss"></style>
