<template>
  <div>
    <lv-input-number placeholder="Enter Number" label="Input Number" />
    <br />
    <lv-input-number placeholder="Enter Number" label="Help Text" help-text="You can add help text also" />
    <br />
    <lv-input-number placeholder="0" label="Max Value 10" :MaxNumber="10" />
    <br />
    <lv-input-number placeholder="0" label="Min Value 0" :MinNumber="0" />
    <br />
    <lv-input-number placeholder="0" label="Value 0 - 20" :MinNumber="0" :MaxNumber="20" />
    <br />
    <lv-input-number placeholder="Enter Number" label="Without Buttons" :DisipayUpdateButtons="false" />
    <br />
    <lv-input-number placeholder="Enter Number" label="Material Effect" bottom-bar />
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
