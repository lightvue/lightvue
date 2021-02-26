<template>
  <div>
    <docs-card-best title="Playground" componentName="Options">
      <!-- <lv-input :label="options.label" :floating-label="options.floating" :bottom-bar="options.bottom_bar" :rounded="options.rounded" :placeholder="options.placeholder" :help-text="options['help-text']" :placeholder-color="options.placeholderColor" :icon-left="options.iconLeft" :icon-right="options.iconRight" style="width: 80%" /> -->
      <div class="button__demo__wrapper">
      <lv-button v-bind="options" class="demo__positioning--button " />
      </div>
      <template #props>
        <lv-toggle-switch v-model="options.outlined" label="outlined" /> <br />
        <lv-toggle-switch v-model="options.push" label="Push" /> <br />
        <lv-toggle-switch v-model="options.raised" label="Raised" /> <br />
        <lv-toggle-switch v-model="options['deep-shadow']" label="Deep Shadow" /> <br />
        <lv-toggle-switch v-model="options['deep-shadow-hover']" label="Deep Shadow Hover" /> <br />
        <lv-toggle-switch v-model="options.rounded" label="Rounded" /> <br />

        <br />
        <lv-input v-model="options.label" label="Label" /> <br />
        <lv-input v-model="options.type" label="Type"  /> <br />        <lv-input v-model="options['icon-right']" label="Right Icon" /> <br />
        <lv-input v-model="options.size" label="Size"  /> <br />
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
        outlined:  false,
        push:  false,
        raised: false,
        'deep-shadow':  false,
        'deep-shadow-hover': false,
        rounded:  false,
        label: 'This is a Button',
        type: 'button',
        icon: '',
        'icon-right': '',
        size: 'xl',
      },
      stringProps: ['label', 'icon-right', 'size', 'type'],
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
.demo__positioning--button{
  width: 80%;
}
.button__demo__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
