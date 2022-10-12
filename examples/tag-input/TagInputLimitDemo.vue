<template>
  <div>
    <lv-tag-input label="Default" v-model="sampleTags" placeholder="Add a Tag" :limit="2" />
  </div>
</template>

<script>
import LvTagInput from 'lightvue/tag-input';

export default {
  data() {
    return {
      sampleTags: ['Tag 1', 'Tag 2', 'Tag 3'],
      objectSampleTags: [
        { label: 'India', value: 'IN' },
        { label: 'United States', value: 'US' },
      ],
    };
  },
  components: {
    LvTagInput,
  },
};
</script>

<style lang="scss"></style>
