<template>
  <div>
    <docs-card-best title="Playground" componentName="Options">
      <!-- <lv-input :label="options.label" :floating-label="options.floating" :bottom-bar="options.bottom_bar" :rounded="options.rounded" :placeholder="options.placeholder" :help-text="options['help-text']" :placeholder-color="options.placeholderColor" :icon-left="options.iconLeft" :icon-right="options.iconRight" style="width: 80%" /> -->
      <lv-input v-bind="options" class="demo__positioning " />
      <template #props>
        <lv-toggle-switch v-model="options['floating-label']" label="Floating Label" v-if="!options['icon-left'] && !options['Placeholder']"/> <br />
        <lv-toggle-switch v-model="options['bottom-bar']" label="Material Design" /> <br />
        <lv-toggle-switch v-model="options.rounded" label="Rounded" /> <br />
        <br />
        <lv-input v-model="options.label" label="Label" /> <br />
        <lv-input v-model="options.placeholder" label="Placeholder"  /> <br />
        <lv-input v-model="options['help-text']" label="Help Text" /> <br />
        <lv-input v-model="options['icon-left']" label="Left Icons"  /> <br />
        <lv-input v-model="options['icon-right']" label="Right Icons" /> <br />
        <Lv-colorpicker v-model="options['placeholder-color']" label="Placeholder Color" />
      </template>
      <template #code>
        <div class="code__wrapper">
            <CopyButton :text="getMarkup" />
            &nbsp;&lt;lv-input
            <span class="attribute__row" v-for="(option, name) in options" :key="name">
              <pre v-if="option">&nbsp; &nbsp; &nbsp;<span v-if="!stringProps.includes(name)">:</span class="pros__passed">{{ name }}=<span>"{{ option }}"</span></pre>
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
        placeholder: 'default color rgba(0, 0, 0, 0.3)',
        'help-text': 'You can create your Component',
        label: 'This is the best demo',
        'placeholder-color': 'rgba(0, 0, 0, 0.3)',
        'icon-left': 'light-icon-search',
        'icon-right': 'light-icon-arrow-up-right-circle',
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
.demo__positioning{
  margin: auto;
  width: 80%;
}
</style>
