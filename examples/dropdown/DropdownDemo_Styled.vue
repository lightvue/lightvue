<template>
  <div style="display: flex; justify-content: space-between; width: 100%; flex-wrap: wrap; gap: 1rem">
    <lv-dropdown iconLeft="light-icon-heart" iconRight="light-icon-arrow-down-circle " v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Icon on both sides" rounded bottom-bar clearable />

    <lv-dropdown iconRight="light-icon-heart" iconLeft=" " v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Icon on right only" rounded bottom-bar clearable />

    <lv-dropdown iconLeft="light-icon-heart" iconRight=" " v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Icon on left only" rounded bottom-bar clearable />
  </div>
</template>

<script>
import LvDropdown from 'lightvue/dropdown';

export default {
  data() {
    return {
      selectedCity1: null,

      cities: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
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
