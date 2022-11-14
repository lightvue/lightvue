<template><lv-date-picker v-model="value"></lv-date-picker></template>

<script>
import LvDatePicker from 'lightvue/date-picker';
export default {
  name: 'DatePickerDemo',
  components: {
    LvDatePicker: LvDatePicker,
  },
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style></style>
