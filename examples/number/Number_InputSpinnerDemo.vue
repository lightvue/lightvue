<template>
  <div style="display: flex; justify-content: space-around; width: 90%; flex-wrap: wrap">
    <lv-number placeholder="Enter Number" label="Input Number" :hideInputSpinner="false" />
    <lv-number placeholder="Enter Number" label="Input Number" :hideInputSpinner="false" :controls="false" />
  </div>
</template>

<script>
import LvNumber from 'lightvue/number';
export default {
  components: {
    LvNumber,
  },
};
</script>
