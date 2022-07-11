<template>
    <div>   
    <lv-tag-input label="Default" v-model="sampleTags" placeholder="Add a Tag"/>
    <br>
    </div>
</template>

<script>
import LvTagInput from 'lightvue/tag-input'

export default {
    components: {LvTagInput  },
    data() {
    return {
     sampleTags : ['Tag 1', 'Tag 2', 'Tag 3'] ,
    //  objectSampleTags : [{label:"India",value:"IN"},{label:"United States", value:"US"}]
    }
  },
    
}
</script>