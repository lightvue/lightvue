<template>
  <div>
    <lv-input type="text" v-model="value1" label="First Name" placeholder="Enter your first name" />
    <br />
    <lv-input type="text" v-model="value1" label="Email" help-text="Help text can also be given !!" placeholder="Enter your email" />
    <br />
    <lv-input type="text" v-model="value1" label="First Name" placeholder="Enter your first name" />
    <br />
  </div>
</template>

<script>
import LvInput from 'lightvue/input';
export default {
  data() {
    return {
      value1: '',
    };
  },
  components: {
    LvInput,
  },
};
</script>

<style></style>
