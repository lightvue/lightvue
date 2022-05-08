<template>
  <div>
    <docs-card-best title="Playground">
      <LvTyper :words="['Arya Stark', 'Jon Snow', 'Daenerys Targaryen', 'Melisandre', 'Tyrion Lannister']" v-bind="allOptions"></LvTyper>

      <template #props>
        <lv-toggle-switch v-model="allOptions.cursorLine" label="cursorLine" /> <br />

        <br />
        <!-- <lv-number v-model="allOptions.maxLength" label="Max Length" /> <br /> -->
        <lv-number v-model="allOptions.typingSpeed" label="typingSpeed" /> <br />
        <lv-number v-model="allOptions.erasingSpeed" label="erasingSpeed" /> <br />
        <lv-number v-model="allOptions.newTextDelay" label="newTextDelay" /> <br />
        <lv-number v-model="allOptions.fontWeight" label="fontWeight" /> <br />

        <lv-input v-model="allOptions['fontSize']" label="fontSize" /> <br />

        <Lv-colorpicker v-model="allOptions['textColor']" label="Text Color" />
        <Lv-colorpicker v-model="allOptions['backgroundColor']" label="Background Color" />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;LvTyper</span>
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
import LvTyper from 'lightvue/typer';
import LvInput from 'lightvue/input';
import LvNumber from 'lightvue/number';
import LvColorpicker from 'lightvue/color-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';
export default {
  data() {
    return {
      allOptions: {
        typingSpeed: 160,
        erasingSpeed: 80,
        newTextDelay: 2000,
        fontWeight: 300,
        fontSize: '2rem',

        cursorLine: false,
        backgroundColor: '#fff',
        textColor: 'teal',
      },
      stringProps: ['fontSize', 'textColor', 'backgroundColor'],
    };
  },

  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvColorpicker,
    LvTyper,
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
