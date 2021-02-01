<template>
  <div>
    <h5>Basic usage</h5>
    <lv-dropdown v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" clearable />

    <h5>Field with floating label</h5>
    <lv-dropdown floating-label label="Select a City" v-model="selectedCity1" :options="cities" optionLabel="name" clearable />

    <h5>Rounded field</h5>
    <lv-dropdown v-model="selectedCity1" rounded :options="cities" optionLabel="name" placeholder="Select a City" clearable />

    <h5>Material styled field</h5>
    <lv-dropdown bottom-bar v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" clearable />

    <h5>Material styled rounded field</h5>
    <lv-dropdown bottom-bar rounded v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" clearable />

    <h5>Changing icon</h5>
    <lv-dropdown iconLeft="pi pi-heart" iconRight="pi pi-chevron-down " v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Icon on both sides" rounded bottom-bar clearable />
    <br />
    <lv-dropdown iconRight="pi pi-heart" iconLeft=" " v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Icon on right only" rounded bottom-bar clearable />
    <br />
    <lv-dropdown iconLeft="pi pi-heart" iconRight=" " v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Icon on left only" rounded bottom-bar clearable />
  </div>
</template>

<script>
import LvDropdown from '@/collections/dropdown/Dropdown.vue';

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
