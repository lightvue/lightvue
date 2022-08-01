<template>
  <div>
    <lv-checkbox name="check" v-model="checked" value="Hello" icon toggle plain>
      <i class="icon light-icon-volume" slot="extra"></i>
      <i class="icon light-icon-volume-3" slot="off-extra"></i>
      <label slot="off-label">Volume off</label>
      Volume On</lv-checkbox
    >

    <lv-checkbox name="check" v-model="checked" value="Hello" icon toggle plain>
      <i class="icon light-icon-circle-check" slot="extra"></i>
      <i class="icon light-icon-circle" slot="off-extra"></i>
      <label slot="off-label">Switch off</label>
      Switch On
    </lv-checkbox>
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
