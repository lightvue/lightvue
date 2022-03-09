<template>
  <div>
    <lv-number placeholder="Enter Number" label="Input Number" rounded />
    <br />
    <lv-number placeholder="Enter Number" label="Help Text" help-text="You can add help text also" rounded />
    <br />
    <lv-number placeholder="Enter Number" label="Without Buttons" :controls="false" rounded />
    <br />
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
