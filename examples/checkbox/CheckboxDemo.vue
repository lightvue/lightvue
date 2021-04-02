<template>
  <div>
    <div class="content-section implementation">
      <h5>Basic</h5>
      <div class="lv-field-checkbox">
        <Checkbox id="binary" v-model="checked" :binary="true" />
        <label for="binary">{{ checked }}</label>
      </div>

      <h5>Multiple</h5>
      <div class="lv-field-checkbox">
        <Checkbox id="city1" name="city" value="Chicago" v-model="cities" />
        <label for="city1">Chicago</label>
      </div>
      <div class="lv-field-checkbox">
        <Checkbox id="city2" name="city" value="Los Angeles" v-model="cities" />
        <label for="city2">Los Angeles</label>
      </div>
      <div class="lv-field-checkbox">
        <Checkbox id="city3" name="city" value="New York" v-model="cities" />
        <label for="city3">New York</label>
      </div>
      <div class="lv-field-checkbox">
        <Checkbox id="city4" name="city" value="San Francisco" v-model="cities" />
        <label for="city4">San Francisco</label>
      </div>

      <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
      <div v-for="category of categories" :key="category.key" class="lv-field-checkbox">
        <Checkbox :id="category.key" name="category" :value="category" v-model="selectedCategories" :disabled="category.key === 'R'" />
        <label :for="category.key">{{ category.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from 'lightvue/checkbox';

export default {
  data() {
    return {
      checked: false,
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
    Checkbox: Checkbox,
  },
};
</script>
