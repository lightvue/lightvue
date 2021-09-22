<template>
  <lv-input type="tel" v-model="phone" clearable v-bind="$attrs" pattern="\d.*">
    <template #prepend>
      <lv-dropdown iconLeft="light-icon-phone" v-model="selectedCountry" :options="countries" optionLabel="name" filter placeholder="Country code">
        <template #value="slotProps">
          <div class="country-item country-item-value" v-if="slotProps.value">
            <div>{{ slotProps.value.callingCode }}</div>
          </div>
        </template>
        <template #option="slotProps">
          <div class="country-item">
            <img v-if="showFlag" :src="slotProps.option.flag" width="20" class="flag" />
            <div>{{ slotProps.option.callingCode }}</div>
            <div v-if="showCountryName" style="margin-left: 5px">{{ slotProps.option.name }}</div>
          </div>
        </template>
      </lv-dropdown>
    </template>
    {{ countries }}
  </lv-input>
</template>

<script>
import LvInput from 'lightvue/input';
import LvDropdown from 'lightvue/dropdown';
import res from './info.json';

export default {
  components: {
    LvInput,
    LvDropdown,
  },
  props: {
    showFlag: {
      type: Boolean,
      default: true,
    },
    showCountryName: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedCountry: '',
      countries: [],
      phone: '',
    };
  },
  computed: {
    fullPhoneNumber() {
      return this.selectedCountry && this.selectedCountry.callingCode + this.phone;
    },
  },
  created() {
    // const res = await fetch('https://restcountries.eu/rest/v2/all');
    // const data = await res.json();
    // const countries = data.map(({ alpha3Code, callingCodes, flag, name }) => ({
    //   alpha3Code,
    //   callingCode: `+${callingCodes[0]}`,
    //   flag,
    //   name,
    // }));
    this.countries = res;
  },
};
</script>

<style></style>
