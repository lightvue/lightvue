<template>
  <div>
    <docs-card-best title="Playground" componentName="Options">
      <!-- <lv-input :label="options.label" :floating-label="options.floating" :bottom-bar="options.bottom_bar" :rounded="options.rounded" :placeholder="options.placeholder" :help-text="options['help-text']" :placeholder-color="options.placeholderColor" :icon-left="options.iconLeft" :icon-right="options.iconRight" style="width: 80%" /> -->
      <div class="demo__positioning">
        <lv-textarea v-bind="options" />
      </div>
      <template #props>
        <lv-toggle-switch v-model="options['floating-label']" label="Floating Label" v-if="!options['icon-left'] && !options['placeholder']" /> <br />
        <lv-toggle-switch v-model="options['bottom-bar']" label="Material Design" /> <br />
        <lv-toggle-switch v-model="options.rounded" label="Rounded" /> <br />
        <lv-toggle-switch v-model="options.showLimit" label="Show Limit" /> <br />
        <lv-toggle-switch v-model="options.autoResize" label="Auto Resize" /> <br />
        <br />
        <lv-number v-model="options.maxLength" label="Max Length" /> <br />
        <lv-input v-model="options.label" label="Label" /> <br />
        <lv-input v-model="options.placeholder" label="Placeholder" /> <br />
        <lv-input v-model="options['help-text']" label="Help Text" /> <br />
        <lv-input v-model="options['icon-left']" label="Left Icons" /> <br />
        <lv-input v-model="options['icon-right']" label="Right Icons" /> <br />
        <lv-input v-model="options.resize" label="Resize" /> <br />
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
import LvTextarea from 'lightvue/textarea/Textarea';
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
        'floating-label': false,
        'bottom-bar': false,
        rounded: false,
        showLimit: true,
        autoResize: true,
        maxLength: 100,
        placeholder: 'default color rgba(0, 0, 0, 0.3)',
        'help-text': 'You can create your Component',
        label: 'This is the best demo',
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
    CodeHighlight,
    CopyButton,
    LvTextarea,
    LvNumber,
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
