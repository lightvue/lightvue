<template>
  <div>   
    <lv-tag-input label="Default" v-model="sampleTags" placeholder="Add a Tag"/>
    <br>
    <lv-tag-input label="Rounded" v-model="sampleTags"  placeholder="Add a tag" rounded="true"/>
    <br>
    <lv-tag-input label="Custom tag Component" v-model="sampleTags" placeholder="Add a tag">
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
     sampleTags : ['Tag 1', 'Tag 2', 'Tag 3'] ,
    }
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
  padding: 0.2rem;
  border-radius: 1rem;
  background:rgb(0, 94, 201) ;
}
</style>