<template>
  <div style="display: flex; justify-content: space-around; width: 100%; flex-wrap: wrap">
    <lv-number placeholder="Enter Number" label="Without Buttons" :controls="false" />

    <lv-number placeholder="Enter Number" label="Without Buttons" :controls="false" rounded />

    <lv-number placeholder="Enter Number" label="Without Buttons" :controls="false" bottom-bar />
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
