<template>
  <div>
    <h4>Options as array of objects</h4>
    <lv-radio-group v-model="chosenCities1" name="cities" :options="cities" optionLabel="name" pulse color="primary"></lv-radio-group>
    <h6>Chosen options (using v-model): {{ chosenCities1 }}</h6>
    <br />
    <h4>Options as array of objects (with optionValue="code")</h4>
    <lv-radio-group v-model="chosenCities2" name="cities2" :options="cities" optionLabel="name" pulse color="primary" optionValue="code"></lv-radio-group>
    <h6>Chosen options (using v-model): {{ chosenCities2 }}</h6>
    <br />
    <h4>Options as array of strings</h4>
    <lv-radio-group v-model="chosenCities3" name="countries" :options="countries" color="primary"></lv-radio-group>
    <h6>Chosen options (using v-model): {{ chosenCities3 }}</h6>
  </div>
  <!-- REFACTORING -->
</template>

<script>
import LvRadioGroup from 'lightvue/radio-group';
export default {
  components: {
    LvRadioGroup,
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
      chosenCities1: { name: 'New York', code: 'NY' },
      chosenCities2: 'IST',
      chosenCities3: 'USA',
    };
  },
};
</script>
