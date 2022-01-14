<template>
  <div>
    <docs-card-best title="Playground">
      <lv-tag-input v-bind="allOptions" icon-left="light-icon-user">
        <template #prepend>
          <button>Hello</button>
        </template>
        <template #tag="{content,deleteTag}">
          <div class="custom-tag">
           {{content}}
          <button @click="deleteTag()">X</button>
          </div>
        </template>
      </lv-tag-input>
      
      <!-- <template #props>
        <lv-toggle-switch v-model="allOptions['bottom-bar']" label="Material Design" /> <br />
        <lv-toggle-switch v-model="allOptions.rounded" label="Rounded" /> <br />
        <br />
        <lv-input v-model="allOptions.label" label="Label" /> <br />
        <lv-input v-model="allOptions.placeholder" label="Placeholder" /> <br />
        <lv-input v-model="allOptions['help-text']" label="Help Text" /> <br />
      </template> -->
    </docs-card-best>
  </div>
</template>
<script> 
import DocsCardBest from '@/components/docs-card/DocsCardBest';
import LvTagInput from 'lightvue/tag-input';
import LvInputToggle from 'lightvue/toggle-switch';
import LvInput from 'lightvue/input';
export default{
  data(){
    return{
    allOptions: {
        'bottom-bar': false,
        rounded: false,
        placeholder: 'Add a tag',
        'help-text': 'You can create your Component',
        label: 'This is the best demo',
      },
    }
  },
  components: {
    DocsCardBest,
    LvTagInput,
    LvInputToggle,
    LvInput,
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