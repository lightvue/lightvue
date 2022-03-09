<template>
  <div>
    <br />
    <lv-number placeholder="Enter Number" label="Without Buttons" :controls="false" />
    <br />
    <lv-number placeholder="Enter Number" label="Without Buttons" :controls="false" rounded />
    <br />
    <lv-number placeholder="Enter Number" label="Without Buttons" :controls="false" bottom-bar />
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
