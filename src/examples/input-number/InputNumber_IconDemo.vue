<template>
  <div>
    <lv-input-number placeholder="Enter Number" label="Up Down Icon" icon-left="light-icon-arrow-up" icon-right="light-icon-arrow-down" />
    <br />
    <lv-input-number placeholder="Enter Number" label="Icon Button Color" button-color="lv--info" />
    <br />
    <lv-input-number placeholder="Enter Number" label="Icon with diffrent Color" icon-left="light-icon-arrow-up" icon-right="light-icon-arrow-down" button-color="lv--primary" />
    <br />
    <lv-input-number placeholder="Enter Number" label="Rounded with custom Icon" icon-left="light-icon-circle-minus" icon-right="light-icon-circle-plus" button-color="lv--help" rounded />
    <br />
  </div>
</template>

<script>
import LvInputNumber from '@/collections/input-number/InputNumber';
export default {
  components: {
    LvInputNumber,
  },
};
</script>

<style></style>
