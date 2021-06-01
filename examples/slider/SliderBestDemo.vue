<template>
  <div>
    <docs-card-best title="Playground">
      <div class="input-wrapper">
        <lv-input
          v-model="allOptions.rangeValue"
          :label="allOptions.range ? 'rangeValue' : 'value'"
          v-if="allOptions.range"
        />
        <lv-input
          v-model="allOptions.value"
          :label="allOptions.range ? 'rangeValue' : 'value'"
          v-else
        />
      </div>
      <div class="slider-container">
        <lv-slider
          v-bind="allOptions"
          v-model="allOptions.rangeValue"
          v-if="allOptions.range"
        />
        <lv-slider
          v-bind="allOptions"
          v-model="allOptions.value"
          v-if="!allOptions.range"
        />
      </div>
      <template #props>
        <lv-toggle-switch
          v-model="allOptions.showValue"
          label="Show Floating Value"
        /> <br />
        <lv-toggle-switch
          v-model="allOptions.range"
          label="Make 2-way Range Slider"
        /> <br />
        <lv-toggle-switch
          v-model="allOptions.scale"
          label="Show Scale"
        /> <br />
        <br />
        <lv-input
          v-model="allOptions.min"
          label="Min Value"
        /> <br />
        <lv-input
          v-model="allOptions.max"
          label="Max Value"
        /> <br />
        <lv-input
          v-model="allOptions.step"
          label="Step Value"
        /> <br />
        <lv-input
          v-model="allOptions.precision"
          label="Scale Precision (Turn On scale)"
        /> <br />
        <lv-input
          v-model="allOptions.iconLeft"
          label="Left Icon"
        /> <br />
        <lv-input
          v-model="allOptions.iconRight"
          label="Right Icon"
        /> <br />
        <Lv-colorpicker
          v-model="allOptions.sliderColor"
          label="Slider Color"
        />
        <Lv-colorpicker
          v-model="allOptions.trackColor"
          label="Track Color"
        />
        <Lv-colorpicker
          v-model="allOptions.thumbColor"
          label="Thumb Color"
        />
        <Lv-colorpicker
          v-model="allOptions.thumbBorderColor"
          label="Thumb Border Color"
        />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-slider</span>

        <span
          class="dy-code-row --attribute-row"
          v-for="(option, name) in enabledOptions"
          :key="name"
        >
          <pre v-if="option && name != 'value' && name != 'rangeValue'">&nbsp; &nbsp; &nbsp;<span v-if="!stringProps.includes(name)">:</span>{{ name }}=<span>"{{ option }}"</span></pre>
          <pre v-else>&nbsp; &nbsp; &nbsp;v-model=<span>"{{ name }}"</span></pre>
        </span>
        <span class="dy-code-row --tag-row">&nbsp;/&gt;</span>
        <span class="dy-code-row --empty-row"></span>
      </template>
    </docs-card-best>
  </div>
</template>

<script>
import DocsCardBest from '@/components/docs-card/DocsCardBest';
import LvSlider from 'lightvue/slider';
import LvInput from 'lightvue/input';
import LvColorpicker from 'lightvue/color-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';
export default {
  data() {
    return {
      allOptions: {
        min: 5,
        max: 100,
        step: 1,
        showValue: false,
        range: false,
        scale: false,
        precision: 10,
        sliderColor: '#38b2ac',
        trackColor: '#c2ebe9',
        thumbColor: '',
        thumbBorderColor: '',
        iconLeft: '',
        iconRight: '',
        value: 20,
        rangeValue: [10, 20],
      },
      stringProps: ['showValue', 'range', 'sliderColor', 'trackColor', 'thumbColor', 'thumbBorderColor'],
    };
  },
  computed: {
    enabledOptions() {
      return this.allOptions.range ? Object.entries(this.allOptions).reduce((a, [k, v]) => (v && k != 'value' ? ((a[k] = v), a) : a), {}) : Object.entries(this.allOptions).reduce((a, [k, v]) => (v && k != 'rangeValue' ? ((a[k] = v), a) : a), {});
    },
  },
  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvColorpicker,
    LvSlider,
  },
};
</script>

<style lang="scss"></style>
