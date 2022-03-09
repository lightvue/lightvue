<template>
  <div>
    <lv-number placeholder="Enter Number" label="Material Effect" bottom-bar clearable />
    <br />
    <lv-number placeholder="Enter Number" label="Material Effect" bottom-bar rounded />
    <br />
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
