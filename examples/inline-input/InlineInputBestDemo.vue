<template>
  <div>
    <docs-card-best title="Playground">
      <LvInlineInput v-model="allOptions.content" v-bind="allOptions" />

      <template #props>
        <lv-input v-model="allOptions.content" label="Content" /> <br />
        <Lv-colorpicker v-model="allOptions.color" label="Text Color" /> <br /><br />
        <Lv-colorpicker v-model="allOptions.background" label="Background Color" /> <br /><br />
        <lv-input v-model="allOptions.padding" label="Padding (in px)" /> <br />
        <lv-input v-model="allOptions.borderRadius" label="Border Radius (in px)" /> <br />
        <lv-input v-model="allOptions.margin" label="Margin (in px)" /> <br />
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
        padding: '16',
        margin: '-16',
        content: 'Inline Input',
        background: '#0000001a',
        color: '#566d79',
        borderRadius: '4',
      },
      stringProps: ['borderRadius', 'content', 'background', 'padding', 'margin', 'color'],
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
