<template>
  <div style="width: 80%">
    <lv-input id="username" type="text" v-model="value1" label="Material Effect" placeholder="Enter username here..." bottom-bar />
  </div>
</template>

<script>
import LvInput from 'lightvue/input';
export default {
  data() {
    return {
      value1: '',
    };
  },
  components: {
    LvInput,
  },
};
</script>

<style></style>
