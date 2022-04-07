<template>
  <div style="display: flex; justify-content: space-around; width: 100%; flex-wrap: wrap">
    <lv-number placeholder="Enter Number" label="Input Number" rounded />

    <lv-number placeholder="Enter Number" label="Help Text" help-text="You can add help text also" rounded />

    <lv-number placeholder="Enter Number" label="Without Buttons" :controls="false" rounded />
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
