<template>
  <div>   
    <lv-tag-input label="Default" placeholder="Add a Tag"/>
    <br>
    <lv-tag-input label="Rounded"  placeholder="Add a tag" rounded="true"/>
    <br>
    <lv-tag-input label="Custom tag Component" placeholder="Add a tag">
    <template #tag="{content,deleteTag}">
      <div class="custom-tag">
        {{content}}
         <i class="light-icon-trash delete-icon" @click="deleteTag"></i>

      </div>
    </template>
    </lv-tag-input>
  </div>
</template>

<script>
import DocsCardBest from '@/components/docs-card/DocsCardBest';
import LvTagInput from 'lightvue/tag-input'

export default{
  data() {
    return {
      allOptions: {
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
    LvTagInput
  },
}
</script>

<style lang="scss">
.custom-tag{
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: space-around;
  background: rgb(0, 119, 255);
  color:#fff;
  border-radius: 10px;
  padding:0 0.5rem ;
  cursor: pointer;
}

.delete-icon {
  padding: 2px;
  border-radius:3rem;
  background:rgb(0, 94, 201) ;
}
</style>