<template>
  <div>
    <h5>Basic usage</h5>
    <lv-dropdown v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" clearable />

    <h5>Disabled</h5>
    <lv-dropdown v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" disabled clearable />

    <h5>With editable input field</h5>
    <lv-dropdown v-model="selectedCity2" :options="cities" optionLabel="name" placeholder="Select a City" label="Your City?" editable clearable />

    <h5>Advanced dropdown with Templating, Filtering and Clear Button</h5>
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

    <h5>Adding help text</h5>
    <lv-dropdown v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" help-text="Help text content" clearable />

    <h5>Adjusting scroll-height (default: 200px)</h5>
    <lv-dropdown scrollHeight="100px" v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Scroll height: 100px" clearable />

    <h5>Changing default icon (default: 'light-icon-arrow-down')</h5>
    <lv-dropdown iconRight="light-icon-arrow-down" v-model="selectedCity1" :options="cities" placeholder="Default dropdown icon" optionLabel="name" clearable />
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
