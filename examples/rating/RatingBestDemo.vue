<template>
  <div>
    <docs-card-best title="Playground">
      <lv-rating v-bind="allOptions" />
      <template #props>
        <lv-toggle-switch v-model="allOptions.showRating" label="Show rating" /><br />
        <lv-toggle-switch v-model="allOptions.readOnly" label="Read only" /><br />
        <lv-toggle-switch v-model="allOptions.roundedCorners" label="Rounded corners" /><br />
        <lv-toggle-switch v-model="allOptions.rtl" label="Right to left layout" /><br />
        <br />
        <lv-number v-model="allOptions.increment" label="Increment" :step="0.1" /> <br />
        <lv-number v-model="allOptions.fixedPoints" label="Fixed point" /> <br />
        <lv-number v-model="allOptions.maxRating" label="Max rating" /> <br />

        <div>Star size</div>

        <LvSlider v-model="allOptions.starSize" :min="0" :max="100" sliderColor="#607C8A" />
        <br /><br />

        <div>Padding</div>

        <LvSlider v-model="allOptions.padding" :min="0" :max="25" sliderColor="#607C8A" />
        <br /><br />

        <div>Border width</div>
        <LvSlider v-model="allOptions.borderWidth" :min="0" :max="10" sliderColor="#607C8A" />
        <br /><br />

        <lv-colorpicker v-model="allOptions.activeColor" label="Active color" /> <br />
        <lv-colorpicker v-model="allOptions.inactiveColor" label="Inactive color" /> <br />

        <lv-number v-model="allOptions.glow" label="Glow" :step="1" :min="0" :max="20" /> <br />
        <lv-colorpicker v-model="allOptions.glowColor" label="Glow color" /> <br />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-rating</span>
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
import LvRating from 'lightvue/rating';
import LvToggleSwitch from 'lightvue/toggle-switch';
import LvNumber from 'lightvue/number';
import LvColorpicker from 'lightvue/color-picker';
import LvSlider from 'lightvue/range-slider';

export default {
  components: {
    DocsCardBest,
    LvRating,
    LvToggleSwitch,
    LvNumber,
    LvColorpicker,
    LvSlider,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
  data() {
    return {
      allOptions: {
        activeColor: '#38b2ac',
        borderWidth: 0,
        fixedPoints: 2,
        glow: 0,
        glowColor: '#39b1ac',
        inactiveColor: '#d8d8d8',
        increment: 0.1,
        maxRating: 5,
        padding: 0,
        readOnly: false,
        roundedCorners: false,
        rtl: false,
        showRating: true,
        starSize: 50,
      },
      stringProps: ['activeColor', 'glowColor', 'inactiveColor'],
    };
  },
};
</script>
