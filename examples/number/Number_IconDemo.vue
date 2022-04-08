<template>
  <div style="display: flex; justify-content: space-around; width: 100%; flex-wrap: wrap">
    <lv-number placeholder="Enter Number" label="Up Down Icon" icon-left="light-icon-arrow-down" icon-right="light-icon-arrow-up" />

    <lv-number placeholder="Enter Number" label="Icon with different color" icon-left="light-icon-arrow-down" icon-right="light-icon-arrow-up" button-color="lv--primary" />

    <lv-number placeholder="Enter Number" label="Rounded with custom Icon" icon-left="light-icon-circle-minus" icon-right="light-icon-circle-plus" button-color="lv--help" rounded />
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
