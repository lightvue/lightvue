<template>
  <div>
    <docs-card-best title="Playground">
      <LvRangeSlider v-bind="allOptions" v-model="value"> </LvRangeSlider>

      <template #props>
        <lv-toggle-switch v-model="allOptions.disabled" label="disabled" /> <br />
        <!-- <lv-toggle-switch v-model="allOptions.showValue" label="showValue" /> <br /> -->

        <br />
        <lv-number v-model="allOptions.max" label="Max Value" /> <br />
        <lv-number v-model="allOptions.min" label="Min Value" /> <br />
        <lv-number v-model="allOptions.step" label="Step" /> <br />

        <lv-colorpicker v-model="allOptions.sliderColor" label="sliderColor" /> <br />
        <lv-colorpicker v-model="allOptions.trackColor" label="trackColor" placeholder="success" /> <br />

        <br />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;LvRangeSlider</span>
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
import LvRangeSlider from 'lightvue/range-slider';
import LvNumber from 'lightvue/number';
import LvColorpicker from 'lightvue/color-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';
export default {
  data() {
    return {
      allOptions: {
        sliderColor: '#607c8a',
        trackColor: '#e2e2e2',
        min: 10,
        max: 100,
        step: 5,
        orientation: '',

        disabled: false,
        showValue: true,
      },
      value: 0,
      stringProps: ['sliderColor', 'trackColor'],
    };
  },

  components: {
    DocsCardBest,
    LvToggleSwitch,
    LvColorpicker,
    LvRangeSlider,
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
