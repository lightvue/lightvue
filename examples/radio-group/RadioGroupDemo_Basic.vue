<template>
  <div>
    <lv-radio-group v-model="chosenCities1" name="cities" :options="cities" optionLabel="name" pulse color="primary"></lv-radio-group>
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
      chosenCities1: { name: 'New York', code: 'NY' },
    };
  },
};
</script>
