<template>
  <div>
    <docs-card-best title="Playground">
      <lv-tag-input v-bind="allOptions">
      </lv-tag-input>
      <template #props>
        <lv-toggle-switch v-model="allOptions['bottom-bar']" label="Material Design" /> <br />
        <lv-toggle-switch v-model="allOptions.rounded" label="Rounded" /> <br />
        <br />
        <lv-input v-model="allOptions.label" label="Label" /> <br />
        <lv-input v-model="allOptions.placeholder" label="Placeholder" /> <br />
        <lv-input v-model="allOptions['help-text']" label="Help Text" /> <br />
        <Lv-colorpicker v-model="allOptions.tagColor" label="Tag color" /> <br><br>
        <Lv-colorpicker v-model="allOptions.tagTextColor" label="Tag text color" />
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


export default{
  data(){
    return{
    allOptions: {
        'bottom-bar': false,
        rounded: false,
        placeholder: 'Add a tag',
        'help-text': 'You can create your Component',
        label: 'This is the best demo',
        tagColor: '#38b2ac',
        tagTextColor: '#fff'
      },
       stringProps: ['label', 'placeholder-color', 'help-text', 'placeholder','tagColor','tagTextColor'],
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
    LvColorpicker
  }
}

</script>

<style lang="scss">
.custom-tag{
  display: flex;
  align-items: center;
  margin: 4px 0;
  background: lightgreen;
  border-radius: 10px;
  padding:0 12px ;
}
</style>