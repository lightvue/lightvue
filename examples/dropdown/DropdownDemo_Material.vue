<template>
  <div style="display: flex; justify-content: space-between; width: 80%; flex-wrap: wrap; gap: 1rem">
    <lv-dropdown bottom-bar v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" clearable />

    <lv-dropdown bottom-bar rounded v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" clearable />
  </div>
</template>

<script>
import LvDropdown from 'lightvue/dropdown';

export default {
  data() {
    return {
      selectedCity1: null,
      selectedCity2: null,
      selectedCountry: null,
      cities: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
      ],
      countries: [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR', disabled: true },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' },
      ],
    };
  },
  components: {
    LvDropdown,
  },
};
</script>

<style lang="scss" scoped>
.lv-dropdown {
  width: 18rem;
}

.country-item-value {
  img.flag {
    width: 17px;
  }
}
</style>
