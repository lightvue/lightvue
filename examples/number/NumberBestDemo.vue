<template>
  <div>
    <docs-card-best title="Playground" componentName="Options">
      <lv-number v-bind="options" class="demo__positioning" />
      <template #props>
        <lv-toggle-switch v-model="options['bottom-bar']" label="Material Design" /> <br />
        <lv-toggle-switch v-model="options.rounded" label="Rounded" /> <br />
        <lv-toggle-switch v-model="options.controls" label="Show Controls" /> <br />
        <br />
        <lv-number v-model="options.max" label="Max Value" /> <br />
        <lv-number v-model="options.min" label=" Value" /> <br />
        <lv-number v-model="options.step" label="Increment Value" /> <br />
        <lv-input v-model="options.label" label="Label" /> <br />
        <lv-input v-model="options.placeholder" label="Placeholder" /> <br />
        <lv-input v-model="options['help-text']" label="Help Text" /> <br />
        <lv-input v-model="options.iconLeft" label="Left Icons" /> <br />
        <lv-input v-model="options.iconRight" label="Right Icons" /> <br />
        <Lv-colorpicker v-model="options['placeholder-color']" label="Placeholder Color" />
      </template>
      <template #code>
        <div class="code__wrapper">
          <CopyButton :text="getMarkup" />
          &nbsp;&lt;lv-input
          <span class="attribute__row" v-for="(option, name) in options" :key="name">
            <pre v-if="option">&nbsp; &nbsp; &nbsp;<span v-if="!stringProps.includes(name)">:</span>{{ name }}=<span>"{{ option }}"</span></pre>
          </span>
          &nbsp;/&gt;
        </div>
      </template>
    </docs-card-best>
  </div>
</template>

<script>
import DocsCardBest from '@/components/docs-card/DocsCardBest';
import LvInput from 'lightvue/input/Input';
import LvNumber from 'lightvue/number/Number';
import LvColorpicker from 'lightvue/colorpicker/ColorPicker';
import LvToggleSwitch from 'lightvue/input-toggle/ToggleSwitch';
import CodeHighlight from '@/components/docs-card/CodeHighlight';
import CopyButton from '@/components/docs-card/CopyButton';
export default {
  data() {
    return {
      options: {
        // 'floating-label': false,
        'bottom-bar': false,
        rounded: false,
        controls: true, //Back
        max: 100, //Back
        min: 0, //Back
        step: 1, //Back
        placeholder: 'default color rgba(0, 0, 0, 0.3)',
        'help-text': 'You can create your Component',
        label: 'This is the best demo',
        'placeholder-color': 'rgba(0, 0, 0, 0.3)',
        iconLeft: 'light-icon-minus',
        iconRight: 'light-icon-plus',
      },
      stringProps: ['label', 'placeholder-color', 'icon-left', 'icon-right', 'help-text', 'placeholder'],
    };
  },
  components: {
    DocsCardBest,
    LvInput,
    LvNumber,
    LvToggleSwitch,
    LvColorpicker,
    CodeHighlight,
    CopyButton,
  },
  methods: {
    getMarkup() {
      let abc = this.$el.querySelector('.code__wrapper').innerText;
      console.log(abc);
      return abc;
    },
  },
};
</script>

<style lang="scss">
.demo__positioning {
  margin: auto;
  width: 80%;
}
</style>
