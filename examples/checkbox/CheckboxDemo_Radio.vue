<template>
  <div>
    <lv-checkbox type="radio" name="check" color="success" v-model="radio" value="Hello">Basic</lv-checkbox>
    <lv-checkbox type="radio" name="check" color="warning" v-model="radio" value="World">Rounded </lv-checkbox>
    <lv-checkbox type="radio" name="check" color="primary" v-model="radio">Filled </lv-checkbox>
    <lv-checkbox type="radio" name="check" color="info" v-model="radio" thick>Thick </lv-checkbox>
    <lv-checkbox type="radio" name="check-3" color="success" v-model="radio"> Plain </lv-checkbox>
  </div>
</template>

<script>
import LvCheckbox from 'lightvue/checkbox';

export default {
  data() {
    return {
      checked: false,
      radio: '',
      cities: [],
      categories: [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' },
      ],
      selectedCategories: [],
    };
  },
  created() {
    this.selectedCategories = this.categories.slice(1, 3);
  },
  components: {
    LvCheckbox,
  },
};
</script>
