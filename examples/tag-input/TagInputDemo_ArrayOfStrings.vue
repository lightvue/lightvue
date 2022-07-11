<template>
<div>
    <lv-tag-input label="Array of Strings (default)" v-model="sampleTags" placeholder="Add a Tag"/>
    <p>{{sampleTags}}</p>
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

