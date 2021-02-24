<template>
  <div>
    <docs-card-best title="Input Playground" componentName="LvInput">
      <!-- <lv-input :label="options.label" :floating-label="options.floating" :bottom-bar="options.bottom_bar" :rounded="options.rounded" :placeholder="options.placeholder" :help-text="options['help-text']" :placeholder-color="options.placeholderColor" :icon-left="options.iconLeft" :icon-right="options.iconRight" style="width: 80%" /> -->
      <lv-input v-bind="options" style="width: 80%" />
      <template #props>
        <lv-toggle-switch v-model="options['floating-label']" label="Floating Label" /> <br />
        <lv-toggle-switch v-model="options['bottom-bar']" label="Material Design" /> <br />
        <lv-toggle-switch v-model="options.rounded" label="Rounded" /> <br />
        <br />
        <lv-input v-model="options.label" label="Label" /> <br />
        <lv-input v-model="options.placeholder" label="Placeholder" /> <br />
        <lv-input v-model="options['help-text']" label="Help Text" /> <br />
        <lv-input v-model="options['icon-left']" label="Left Icons" /> <br />
        <lv-input v-model="options['icon-right']" label="Right Icons" /> <br />
        <Lv-colorpicker v-model="options['placeholder-color']" />
      </template>
      <template #code>
        <div class="code__wrapper">
          <CodeHighlight>
            <pre>
&lt;lv-inputs
<pre v-for="(option, name) in options" :key="option">
 <pre v-if="option">:{{ name }}="{{ option }}"</pre>
</pre>
&nbsp; /&gt;
            </pre>
          </CodeHighlight>
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
    };
  },
  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvColorpicker,
    CodeHighlight,
  },
};
</script>

<style>
.code__wrapper {
  display: flex;
  flex-direction: column;
}
</style>
