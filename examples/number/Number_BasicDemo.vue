<template>
  <div>
    <lv-number placeholder="Enter Number" label="Input Number" />
    <br />
    <lv-number placeholder="Enter Number" label="Help Text" help-text="You can add help text also" />
    <br />
    <lv-number placeholder="0" label="Max Value 10" :max="10" />
    <br />
    <lv-number placeholder="0" label="Min Value 0" :min="0" />
    <br />
    <lv-number placeholder="0" label="Value 0 - 20" :min="0" :max="20" />
    <br />
    <lv-number placeholder="Enter Number" label="Without Buttons" :controls="false" />
    <br />
    <lv-number placeholder="Enter Number" label="Material Effect" bottom-bar />
    <br />
  </div>
</template>

<script>
import LvNumber from 'lightvue/Number.vue';

// import LvNumber from 'lightvue/number';
export default {
  components: {
    LvNumber,
  },
};
</script>
