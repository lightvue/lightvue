<template>
  <div class="lv-demo_layout">
    <lv-checkbox type="radio" name="check" color="danger" v-model="radio" smooth> Smooth </lv-checkbox>
    <lv-checkbox type="radio" name="check" color="success" v-model="radio" pulse> Pulse </lv-checkbox>
    <lv-checkbox type="radio" name="check" color="success" v-model="radio" pulse outline> Pulse </lv-checkbox>
    <lv-checkbox type="radio" name="check" color="success" v-model="radio" pulse outline> Outline </lv-checkbox>
    <lv-checkbox type="radio" name="check-3" color="success" v-model="radio" thick pulse outline>Thick Outline </lv-checkbox>
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
