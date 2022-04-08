<template>
  <div style="width: 100%"><lv-textarea icon-left="light-icon-search" icon-right="light-icon-arrow-up-right-circle" rows="9" label="Left Right Icons" /> <br /></div>
</template>

<script>
import LvTextarea from 'lightvue/textarea';
import LvButton from 'lightvue/button';
export default {
  components: {
    LvTextarea,
    LvButton,
  },
  data() {
    return {
      value1: '',
    };
  },
};
</script>

<style></style>
