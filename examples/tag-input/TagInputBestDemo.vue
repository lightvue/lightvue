<template>
  <div>
    <docs-card-best title="Playground">
      <lv-tag-input v-bind="allOptions" v-model="demoTags">
      </lv-tag-input>
      <br>
      <p>{{demoTags}}</p>
      <template #props>
        <lv-toggle-switch v-model="allOptions['bottom-bar']" label="Material Design" /> <br />
        <lv-toggle-switch v-model="allOptions.rounded" label="Rounded" /> <br />
        <br />
        <lv-input v-model="allOptions.label" label="Label" /> <br />
        <lv-input v-model="allOptions.placeholder" label="Placeholder" /> <br />
        <lv-input v-model="allOptions['help-text']" label="Help Text" /> <br />
        <Lv-colorpicker v-model="allOptions['tag-color']" label="Tag color" /> <br><br>
        <Lv-colorpicker v-model="allOptions['tag-text-color']"  label="Tag text color" />
      </template>
        <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-tag-input</span>
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
import LvTagInput from 'lightvue/tag-input';
import LvToggleSwitch from 'lightvue/toggle-switch';
import LvInput from 'lightvue/input';
import LvColorpicker from 'lightvue/color-picker'
import LvDropdown from 'lightvue/dropdown';

export default{
  data(){
    return{
    allOptions: {
        'bottom-bar': false,
        rounded: false,
        placeholder: 'Add a tag',
        'help-text': 'You can create your Component',
        label: 'This is the best demo',
        'tag-color': '#38b2ac',
        'tag-text-color': '#fff',
      },
    demoTags: ['Demo','Tags'],  
    stringProps: ['label', 'placeholder-color', 'help-text', 'placeholder','tag-color','tag-text-color'],
    }
  },

  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
  components: {
    DocsCardBest,
    LvTagInput,
    LvToggleSwitch,
    LvInput,
    LvColorpicker,
    LvDropdown
  }
}

</script>

