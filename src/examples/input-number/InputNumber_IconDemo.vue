<template>
  <div>
    <lv-input-number placeholder="Enter Number" label="Up Down Icon" LeftIcon="light-icon-arrow-up" RightIcon="light-icon-arrow-down" />
    <br />
    <lv-input-number placeholder="Enter Number" label="Icon Button Color" ButtonColor="lv--info" />
    <br />
    <lv-input-number placeholder="Enter Number" label="Icon with diffrent Color" LeftIcon="light-icon-arrow-up" RightIcon="light-icon-arrow-down" ButtonColor="lv--primary" />
    <br />
    <lv-input-number placeholder="Enter Number" label="Rounded with custom Icon" LeftIcon="light-icon-circle-minus" RightIcon="light-icon-circle-plus" ButtonColor="lv--help" rounded />
    <br />
  </div>
</template>

<script>
import LvInputNumber from '@/collections/input-number/InputNumber';
export default {
  components: {
    LvInputNumber,
  },
  data() {
    return {
      value1: '11',
    };
  },
};
</script>

<style></style>
