<template>
  <div>
    <lv-number placeholder="Enter Number" label="Up Down Icon" icon-left="light-icon-arrow-down" icon-right="light-icon-arrow-up" />
    <br />
    <lv-number placeholder="Enter Number" label="Icon Button Color" button-color="lv--info" />
    <br />
    <lv-number placeholder="Enter Number" label="Icon with diffrent Color" icon-left="light-icon-arrow-down" icon-right="light-icon-arrow-up" button-color="lv--primary" />
    <br />
    <lv-number placeholder="Enter Number" label="Rounded with custom Icon" icon-left="light-icon-circle-minus" icon-right="light-icon-circle-plus" button-color="lv--help" rounded />
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
