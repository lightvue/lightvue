<template>
  <div>
    <h4>Options as array of objects</h4>
    <lv-checkbox-group v-model="chosenCities1" name="cities" :options="cities" optionLabel="name" optionValue="code" pulse></lv-checkbox-group>
    <h6>Chosen options (using v-model): {{ chosenCities1 }}</h6>
    <br />
    <h4>Options as array of strings</h4>
    <lv-checkbox-group v-model="chosenCities2" name="countries" :options="countries"></lv-checkbox-group>
    <h6>Chosen options (using v-model): {{ chosenCities2 }}</h6>
  </div>
</template>

<script>
import LvCheckboxGroup from 'lightvue/chechboxgroup';
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
      chosenCities1: [],
      chosenCities2: ['USA'],
    };
  },
};
</script>

<style></style>
