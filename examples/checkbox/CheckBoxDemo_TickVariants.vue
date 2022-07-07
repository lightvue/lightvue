<template>
  <div class="lv-demo_layout">
    <lv-checkbox name="check" color="success" v-model="tick" value="Hello">Basic</lv-checkbox>
    <lv-checkbox name="check" color="warning" v-model="tick" rounded value="World">Teal </lv-checkbox>
    <lv-checkbox name="check" color="primary" v-model="tick" rounded filled>Filled </lv-checkbox>
    <lv-checkbox name="check" color="info" v-model="tick" rounded thick>Thick </lv-checkbox>
    <lv-checkbox name="check" color="danger" v-model="tick" plain smooth> Plain </lv-checkbox>
  </div>
</template>

<script>
import LvCheckbox from 'lightvue/checkbox';

export default {
  data() {
    return {
      tick: false,
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
