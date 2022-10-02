<template>
  <div>
    <lv-tag-input label="Array of Objects with ( data-type='object' )" v-model="objectSampleTags" data-type="object" option-label="label" option-value="value" placeholder="Add a Tag" />
    <p>{{ objectSampleTags }}</p>
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
