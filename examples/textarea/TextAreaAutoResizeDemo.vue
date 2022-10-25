<template>
  <div style="width: 100%"><lv-textarea placeholder="" rows="9" label="Auto Resize" :autoResize="true" /> <br /></div>
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
