<template>
  <div>
    <docs-card-best title="Playground" id="glassmorphic-best-card">
      <LvGlassCard v-bind="allOptions">
        <div v-html="dummyContent('Heading')" style="color: #ffffff"></div>
      </LvGlassCard>
      <template #props>
        <lv-toggle-switch v-model="allOptions.showBorder" label="showBorder" /> <br />

        <br />
        <!-- <lv-number v-model="allOptions.maxLength" label="Max Length" /> <br /> -->

        <lv-input v-model="allOptions['backgroundBlur']" label="backgroundBlur" /> <br />
        <lv-input v-model="allOptions['backgroundOpacity']" label="backgroundOpacity" /> <br />
        <lv-input v-model="allOptions['padding']" label="padding" /> <br />
        <lv-input v-model="allOptions['borderRadius']" label="borderRadius" /> <br />

        <Lv-colorpicker v-model="allOptions['backgroundColor']" label="Background Color" />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;LvGlassCard</span>
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
import LvGlassCard from 'lightvue/glass-card';
import LvInput from 'lightvue/input';

import LvColorpicker from 'lightvue/color-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';
export default {
  data() {
    return {
      allOptions: {
        backgroundBlur: '10px',
        backgroundOpacity: '80',
        padding: '20px',
        borderRadius: '8px',
        showBorder: false,

        backgroundColor: '#374D57',
      },
      stringProps: ['backgroundBlur', 'backgroundOpacity', 'padding', 'borderRadius', 'backgroundColor'],
    };
  },
  methods: {
    dummyContent(propValue) {
      return `<div>
                <h4><span> </span>${propValue}</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>`;
    },
  },
  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvColorpicker,
    LvGlassCard,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
};
</script>

<style lang="scss">
#glassmorphic-best-card .responsive-area {
  background: url('./glasscard-demo-bg.jpg');
  background-attachment: cover;
}
</style>
