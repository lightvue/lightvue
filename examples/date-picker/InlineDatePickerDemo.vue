<template>
  <div class="demo-wrapper">
    <lv-date-picker v-model="value" :format="Selectedformat ? Selectedformat.name : 'd MMM yyyy'"></lv-date-picker>
    <lv-dropdown v-model="Selectedformat" :options="format" optionLabel="name" placeholder="Select a Format" clearable />
  </div>
</template>

<script>
import LvDatePicker from 'lightvue/date-picker';
import LvDropdown from 'lightvue/dropdown';
export default {
  name: 'DatePickerDemo',
  components: {
    LvDatePicker: LvDatePicker,
    LvDropdown,
  },
  data() {
    return {
      format: [
        { name: 'd MMM yyyy', code: 'd MMM yyyy' },
        { name: 'd MMMM yyyy', code: 'd MMMM yyyy' },
        { name: 'yyyy-MM-dd', code: 'yyyy-MM-dd' },
        { name: 'dsu MMM yyyy', code: 'dsu MMM yyyy' },
        { name: 'D dsu MMM yyyy', code: 'D dsu MMM yyyy' },
      ],
      Selectedformat: null,
      value: new Date().toJSON().slice(0, 10),
    };
  },
};
</script>

<style scoped>
.demo-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
}
.demo-wrapper .lv-dropdown {
  width: 100% !important;
}
</style>
