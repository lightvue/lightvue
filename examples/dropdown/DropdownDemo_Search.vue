<template>
  <div>
    <lv-dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Select a Country" :clearable="true" optionDisabled="disabled">
      <template #value="slotProps">
        <div class="country-item country-item-value" v-if="slotProps.value">
          <img src="@/assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.value.code.toLowerCase()" />
          <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="country-item">
          <img src="@/assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" />
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </lv-dropdown>
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
