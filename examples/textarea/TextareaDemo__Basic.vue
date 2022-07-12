<template>
  <div style="width: 100%; height: 100%"><lv-textarea label="Textarea" placeholder="Enter your text here ..." rows="9" /> <br /></div>
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
