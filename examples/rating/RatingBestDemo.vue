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
        <lv-number v-model="allOptions.increment" label="Increment" step="0.5" /> <br />
        <lv-number v-model="allOptions.fixedPoints" label="Fixed point" /> <br />
        <lv-number v-model="allOptions.maxRating" label="Max rating" /> <br />
        <lv-number v-model="allOptions.starSize" label="Star size" step="5" /> <br />
        <lv-number v-model="allOptions.padding" label="Padding" /> <br />
        <lv-number v-model="allOptions.borderWidth" label="Border width" /> <br />

        <lv-colorpicker v-model="allOptions.activeColor" label="Active color" /> <br />
        <lv-colorpicker v-model="allOptions.inactiveColor" label="Inactive color" /> <br />

        <lv-number v-model="allOptions.glow" label="Glow" step="5" :min="0" :max="20" /> <br />
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
export default {
  components: {
    DocsCardBest,
    LvRating,
    LvToggleSwitch,
    LvNumber,
    LvColorpicker,
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
        fixedPoints: 0,
        glow: 0,
        glowColor: '#39b1ac',
        inactiveColor: '#d8d8d8',
        increment: 1,
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
