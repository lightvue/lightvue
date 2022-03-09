<template>
  <div>
    <lv-input type="text" v-model="value1" label="Clearable input" placeholder="Search" clearable />
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
