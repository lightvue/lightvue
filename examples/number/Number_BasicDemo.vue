<template>
  <div style="display: flex; justify-content: space-around; width: 90%; flex-wrap: wrap">
    <lv-number placeholder="Enter Number" label="Input Number" />

    <lv-number placeholder="Enter Number" label="Help Text" help-text="You can add help text also" />
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
