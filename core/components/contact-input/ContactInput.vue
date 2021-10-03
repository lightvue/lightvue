<template>
  <lv-input type="tel" v-model.trim="phone" clearable v-bind="$attrs" :help-text="help">
    <template #prepend>
      <lv-dropdown v-bind="$attrs" v-model="selectedCountry" :options="countries" optionLabel="name" filter label="">
        <template #value="slotProps">
          <div class="country-item country-item-value" v-if="slotProps.value">
            <div>{{ slotProps.value.callingCode }}</div>
          </div>
        </template>
        <template #option="slotProps">
          <div class="country-item">
            <img v-if="showFlag" :src="slotProps.option.flag" class="flag" />
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
import countries from './info.json';

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
      countries,
      phone: '',
    };
  },
  computed: {
    fullPhoneNumber() {
      return this.selectedCountry && this.selectedCountry.callingCode + this.phone;
    },
    help() {
      // let message = this.phone ? (/^[0-9]+$/g.test(this.phone) ? '' : 'Contain Digits') : '';
      // if (this.selectedCountry.callingCode === '+91') {
      //   message = /^[789]{1}[0-9]{9}$/g.test(this.phone) ? '' : !/^[789]/.test(this.phone) ? '789 beginning' : '10 digits';
      // }
      // return message;
    },
  },
};
</script>

<style></style>
