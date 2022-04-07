<template>
  <div style="display: flex; justify-content: space-around; width: 90%; flex-wrap: wrap">
    <lv-number placeholder="Enter Number" label="Material Effect" bottom-bar clearable />

    <lv-number placeholder="Enter Number" label="Material Effect" bottom-bar rounded />
  </div>
</template>

<script>
import LvNumber from 'lightvue/number';

// import LvNumber from 'lightvue/number';
export default {
  components: {
    LvNumber,
  },
};
</script>
