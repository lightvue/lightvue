<template>
  <div class="lv-demo_layout">
    <lv-checkbox name="check" color="danger" v-model="checked" smooth> Smooth </lv-checkbox>
    <lv-checkbox name="check" color="danger" v-model="checked" rounded thick pulse> Pulse </lv-checkbox>
    <lv-checkbox name="check" color="danger" v-model="checked" rounded thick pulse outline> Outline </lv-checkbox>
    <lv-checkbox name="check" color="danger" v-model="checked" thick pulse outline> Outline </lv-checkbox>
    <lv-checkbox name="check" color="danger" v-model="checked" filled pulse> Outline </lv-checkbox>
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
<style lang="scss" scoped>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
