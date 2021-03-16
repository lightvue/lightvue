<template>
  <div>
    <h5>Basic</h5>
    <lv-dropdown v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" clearable rounded />

    <h5>Basic + disabled</h5>
    <lv-dropdown v-model="selectedCity1" :options="cities" optionLabel="name" placeholder="Select a City" disabled clearable rounded help-text="Help text can also be given !!" />

    <h5>Editable Example</h5>
    <lv-dropdown v-model="selectedCity2" :options="cities" optionLabel="name" label="Select City Name" :editable="true" bottom-bar />

    <h5>Editable + Floating Label</h5>
    <lv-dropdown v-model="selectedCity3" :options="cities" optionLabel="name" label="Select City Name" :editable="true" bottom-bar floating-label placeholder="Select the City" clearable />
    <h5>Editable + Left Icon</h5>
    <lv-dropdown v-model="selectedCity4" :options="cities" optionLabel="name" label="Select City Name" :editable="true" bottom-bar placeholder="Select the City" rounded icon-left="light-icon-search"> </lv-dropdown>
    <h5>Editable + Right Icon</h5>
    <lv-dropdown v-model="selectedCity5" :options="cities" optionLabel="name" label="Select City Name" :editable="true" bottom-bar placeholder="Select the City" clearable icon-right="light-icon-search"> </lv-dropdown>
    <!-- <h5>Editable + Prepend</h5>
        <lv-dropdown
            v-model="selectedCity6"
            :options="cities"
            optionLabel="name"
            label="Select City Name"
            :editable="true"
            bottom-bar
            placeholder="Select the City"
            clearable
        >
        <template slot="prepend">
            <Button icon="pi pi-check" class="p-button-secondary" />
        </template>
        </lv-dropdown>
        <h5>Editable + Append</h5>
        <lv-dropdown
            v-model="selectedCity7"
            :options="cities"
            optionLabel="name"
            label="Select City Name"
            :editable="true"
            bottom-bar
            placeholder="Select the City"
            clearable
        >
            <template slot="append">
                <Button icon="pi pi-check" class="p-button-secondary" />
            </template>
        </lv-dropdown> -->

    <h5>Advanced with Templating, Filtering and Clear Icon</h5>
    <lv-dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Select a Country" :clearable="true" optionDisabled="disabled" rounded>
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
import LvDropdown from 'lightvue/Dropdown.vue';

export default {
  data() {
    return {
      selectedCity1: null,
      selectedCity2: null,
      selectedCity3: null,
      selectedCity4: null,
      selectedCity5: null,
      selectedCity6: null,
      selectedCity7: null,
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
