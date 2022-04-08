<template>
  <div>
    <docs-card-best title="Playground">
      <h2 style="display: flex; justify-content: center">
        <LvCheckBox v-bind="allOptions">I'm smart</LvCheckBox>
      </h2>
      <template #props>
        <lv-toggle-switch v-model="allOptions.disabled" label="disabled" /> <br />
        <lv-toggle-switch v-model="allOptions.rounded" label="rounded" /> <br />
        <lv-toggle-switch v-model="allOptions.filled" label="filled" /> <br />
        <lv-toggle-switch v-model="allOptions.thick" label="thick" /> <br />
        <lv-toggle-switch v-model="allOptions.pulse" label="pulse" /> <br />
        <lv-toggle-switch v-model="allOptions.outline" label="outline" /> <br />
        <lv-toggle-switch v-model="allOptions.plain" label="plain" /> <br />
        <lv-toggle-switch v-model="allOptions.icon" label="icon" /> <br />
        <lv-toggle-switch v-model="allOptions.bigger" label="bigger" /> <br />
        <lv-toggle-switch v-model="allOptions.locked" label="locked" /> <br />

        <br />

        <lv-input v-model="allOptions['type']" label="type" /> <br />
        <lv-input v-model="allOptions['name']" label="name" /> <br />
        <lv-input v-model="allOptions['color']" label="color class" placeholder="success" /> <br />
        <lv-input v-model="allOptions['offColor']" label="offColor class" /> <br />
        <lv-input v-model="allOptions['hoverColor']" label="hoverColor class" /> <br />
        <lv-input v-model="allOptions['indeterminateColor']" label="indeterminateColor class" /> <br />
        <br />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;LvCheckBox</span>
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
import LvCheckBox from 'lightvue/checkbox';
import LvInput from 'lightvue/input';
import LvNumber from 'lightvue/number';
import LvColorpicker from 'lightvue/color-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';
export default {
  data() {
    return {
      allOptions: {
        type: this.type,
        name: 'demo',
        color: 'success',
        offColor: '',
        hoverColor: '',
        indeterminateColor: '',

        disabled: false,
        rounded: false,
        filled: false,
        thick: true,
        pulse: true,
        outline: true,
        plain: false,
        icon: false,
        bigger: false,
        locked: false,
      },
      stringProps: ['type', 'name', 'color', 'offColor', 'hoverColor', 'indeterminateColor'],
    };
  },
  props: {
    type: {
      default: 'checkbox',
    },
  },
  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvColorpicker,
    LvCheckBox,
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
