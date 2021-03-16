<template>
  <div>
    <lv-number placeholder="Enter Number" label="Input Number" rounded />
    <br />
    <lv-number placeholder="Enter Number" label="Help Text" help-text="You can add help text also" rounded />
    <br />
    <lv-number placeholder="0" label="Max Value 10" :max="10" rounded />
    <br />
    <lv-number placeholder="0" label="Min Value 0" :min="0" rounded />
    <br />
    <lv-number placeholder="0" label="Value 0 - 20" :min="0" :max="20" rounded />
    <br />
    <lv-number placeholder="Enter Number" label="Without Buttons" :controls="false" rounded />
    <br />
    <lv-number placeholder="Enter Number" label="Material Effect" bottom-bar rounded />
    <br />
  </div>
</template>

<script>
import LvNumber from 'lightvue/Number.vue';
export default {
  components: {
    LvNumber,
  },
};
</script>
