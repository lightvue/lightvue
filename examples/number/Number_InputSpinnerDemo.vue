<template>
  <div style="display: flex; justify-content: space-around; width: 90%; flex-wrap: wrap">
    <lv-number placeholder="Enter Number" label="Input Number" showInputSpinner />
    <lv-number placeholder="Enter Number" label="Input Number" showInputSpinner :controls="false" />
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
