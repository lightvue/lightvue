<template>
  <div style="width: 80%">
    <lv-input type="text" v-model="value1" label="First Name" placeholder="Enter your first name" />
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
