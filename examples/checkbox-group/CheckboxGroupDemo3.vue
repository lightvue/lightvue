<template>
  <div class="lv-demo_layout">
    <!-- <h4>Options as array of strings [No Preselected]</h4> -->
    <lv-checkbox-group v-model="chosenCities4" name="countries" :options="countries" color="primary"></lv-checkbox-group>
    <p style="margin-top: 1rem">Chosen options (using v-model): {{ chosenCities4 }}</p>
  </div>
</template>

<script>
import LvCheckboxGroup from 'lightvue/checkbox-group';
export default {
  components: {
    LvCheckboxGroup,
  },
  data() {
    return {
      cities: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM', disabled: true },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST', checked: true },
        { name: 'Paris', code: 'PRS' },
      ],
      countries: ['India', 'USA', 'Japan', 'France'],
      chosenCities1: [{ name: 'Paris', code: 'PRS' }],
      chosenCities2: ['LDN', 'NY'],
      chosenCities3: null,
      chosenCities4: ['USA'],
    };
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
