<template>
  <div style="display: flex; justify-content: space-between; gap: 1rem; align-items: center; flex-wrap: wrap">
    <span>
      <h6>
        <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Big </lv-checkbox>
      </h6>
      <h5>
        <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
      </h5>
      <h4>
        <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
      </h4>
    </span>
    <span>
      <h3>
        <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
      </h3>
      <h2>
        <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
      </h2>
      <h1>
        <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
      </h1>
    </span>
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
