<template>
  <div class="lv-demo_layout">
    <lv-checkbox name="check" color="success" v-model="checked" checkedIcon outline thick >Basic</lv-checkbox>
    <lv-checkbox name="check" type="radio"  color="warning" v-model="radio" thick checkedIcon>Orange</lv-checkbox>
    <lv-checkbox name="check" type="radio" color="primary" v-model="radio"  checkedIcon>Blue </lv-checkbox>
    <lv-checkbox name="check" color="info" v-model="checked" checkedIcon rounded thick>Light Blue </lv-checkbox>
    <lv-checkbox name="check" color="danger" v-model="checked" checkedIcon > Red </lv-checkbox>
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
