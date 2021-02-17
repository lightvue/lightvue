<template>
  <div>
    <lv-textarea label="Textarea" placeholder="Enter your text here ..." rows="3" /> <br />
    <lv-textarea label="Character Count" placeholder="count no of words.." rows="3" show-limit :max-length="100" />
    <lv-textarea placeholder="" rows="3" label="Auto Resize" :autoResize="true" /> <br />
    <lv-textarea label="Verticle Resize" rows="3" resize="vertical" />
  </div>
</template>

<script>
import LvTextarea from '@/collections/textarea/Textarea';
import LvButton from '@/collections/buttons/Button';
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
