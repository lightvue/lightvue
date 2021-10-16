<template>
  <div>
    <lv-textarea label="Textarea" placeholder="Enter your text here ..." rows="3" /> <br />
    <lv-textarea label="Character Count" placeholder="count no of words.." rows="3" show-limit :max-length="100" clearable />
    <lv-textarea placeholder="" rows="3" label="Auto Resize" :autoResize="true" /> <br />
    <lv-textarea label="Vertical Resize" rows="3" resize="vertical" />
  </div>
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
