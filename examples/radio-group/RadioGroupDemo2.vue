<template>
  <div>
    <lv-radio-group v-model="chosenCities3" name="countries" :options="countries" color="primary"></lv-radio-group>
    <p style="margin-top: 1rem">Chosen options (using v-model): {{ chosenCities3 }}</p>
  </div>
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
      chosenCities1: [{ name: 'Paris', code: 'PRS' }],
      chosenCities2: ['LDN', 'NY'],
      chosenCities3: null,
      chosenCities4: ['USA'],
    };
  },
};
</script>
