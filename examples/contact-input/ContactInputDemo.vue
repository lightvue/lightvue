<template>
  <div>
    <lv-contact-input label="With flag" />
    <br />
    <lv-contact-input :showFlag="false" />
    <br />
    <lv-contact-input showCountryName />
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
