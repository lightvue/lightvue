<template>
  <div>
    <lv-contact-input label="With flags" iconLeft="light-icon-phone" />
    <br />
    <lv-contact-input :showFlag="false" label="Without flags" />
    <br />
    <lv-contact-input showCountryName label="With country name" />
  </div>
</template>

<script>
import LvContactInput from 'lightvue/contact-input';

export default {
  components: {
    LvContactInput,
  },
};
</script>

<style></style>
