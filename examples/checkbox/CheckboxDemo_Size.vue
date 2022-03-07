<template>
  <div>
    <h6>
      <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Big </lv-checkbox>
    </h6>
    <h5>
      <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
    </h5>
    <h4>
      <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
    </h4>
    <h3>
      <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
    </h3>
    <h2>
      <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
    </h2>
    <h1>
      <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
    </h1>
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
