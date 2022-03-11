<template>
  <div style="width: 100%">
    <lv-textarea label="Character Count" placeholder="count no of words.." rows="9" show-limit :max-length="100" clearable />
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
