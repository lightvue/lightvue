<template>
  <div>
    <lv-dropdown scrollHeight="100px" v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Scroll height: 100px" clearable />
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
