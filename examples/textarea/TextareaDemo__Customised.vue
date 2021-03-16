<template>
  <div>
    <lv-textarea label="Material Design" rows="3" bottom-bar /><br />
    <lv-textarea label="Floating Label" rows="3" floating-label /> <br />
    <lv-textarea icon-left="light-icon-search" icon-right="light-icon-arrow-up-right-circle" rows="3" label="Left Right Icons" /> <br />
    <lv-textarea label="Rounded" placeholder="Enter your text here ..." rows="3" rounded /> <br />
  </div>
</template>

<script>
import LvTextarea from 'lightvue/Textarea';
import LvButton from 'lightvue/Button';
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
