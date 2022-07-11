<template>
<div>
    <lv-tag-input label="Custom tag Component" v-model="sampleTags" placeholder="Add a tag" >
   <template #tag="{content,deleteTag}">
      <div class="custom-tag">
        {{content}}
         <i class="light-icon-trash delete-icon" @click="deleteTag"></i>
      </div>
    </template>
    </lv-tag-input>
    <br>
</div>
</template>
<script>
import LvTagInput from 'lightvue/tag-input'

export default{
  data() {
    return {
     sampleTags : ['Tag 1', 'Tag 2', 'Tag 3'] ,
    //  objectSampleTags : [{label:"India",value:"IN"},{label:"United States", value:"US"}]
    }
  },
  components: {
    // DocsCardBest,
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
