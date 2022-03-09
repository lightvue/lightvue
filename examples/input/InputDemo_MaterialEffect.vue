<template>
  <div>
    <lv-input id="username" type="text" v-model="value1" label="Material Effect" placeholder="Enter username here..." bottom-bar />
    <br />
    <lv-input id="username" type="text" v-model="value1" label="Floating Label" placeholder="Enter username here..." floating-label />
    <br />
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
