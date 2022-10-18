<template>
  <div>
    <docs-card-best title="Playground">
      <lv-text-editor v-bind="allOptions" />
      <template #props>
        <lv-toggle-switch v-model="allOptions['bottomBar']" label="Material Design" /> <br />
        <!-- <lv-toggle-switch v-model="allOptions.rounded" label="Rounded" /> <br /> -->
        <lv-toggle-switch v-model="allOptions.showCharacterCount" label="Show Character Count" /> <br /><br />
        <lv-input v-model="allOptions.buttonSize" label="Toolbar Icon Size" /> <br />

        <Lv-colorpicker v-model="allOptions['theme']" label="Theme Color" bottomBar clearable />
        <br /><br />
        <Lv-colorpicker v-model="allOptions['color']" label="Icon Color" bottomBar clearable />
        <br /><br />
        <Lv-colorpicker v-model="allOptions['editorBgColor']" label="Editor Bg Color" bottomBar clearable />
        <br /><br />
        <label for="menu">Menu</label>
        <lv-checkbox-group id="menu" class="text-editor_demo-menu" v-model="allOptions['menu']" name="menu" :options="menu" color="primary"></lv-checkbox-group>
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-text-editor</span>
        <span class="dy-code-row --attribute-row" v-for="(option, name) in enabledOptions" :key="name">
          <!-- // TODO indentation for attribute value wrap -->
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
import LvTextEditor from 'lightvue/text-editor';
import LvInput from 'lightvue/input';
import LvColorpicker from 'lightvue/color-picker';
import LvCheckboxGroup from 'lightvue/checkbox-group';
import LvToggleSwitch from 'lightvue/toggle-switch';

export default {
  data() {
    return {
      allOptions: {
        color: '#0D2131',
        theme: '#f9f9f9',
        editorBgColor: '#edf2f7',
        showCharacterCount: false,
        bottomBar: false,
        rounded: false,
        buttonSize: 'lg',
        menu: ['Bold', 'Italic', 'Strikethrough', 'Code', 'Link', 'List', 'Image'],
      },
      menu: ['Bold', 'Italic', 'Strikethrough', 'Underline', 'Heading 1', 'Heading 2', 'Align', 'Link', 'Code', 'List', 'Image'],
      stringProps: ['color', 'theme', 'editorBgColor'],
    };
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
  components: {
    DocsCardBest,
    LvTextEditor,
    LvInput,
    LvCheckboxGroup,
    LvColorpicker,
    LvToggleSwitch,
  },
};
</script>
<style lang="scss">
.text-editor_demo-menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
