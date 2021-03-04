<template>
  <div>
    <lv-input type="text" v-model="value1" label="First Name" placeholder="Enter your first name" rounded />
    <br />
    <lv-input type="text" v-model="value1" label="Email" help-text="Help text can also be given !!" placeholder="Enter your email" rounded />
    <br />
    <lv-input type="text" v-model="value1" label="First Name" placeholder="Enter your first name" rounded />
    <br />
    <lv-input id="username" type="text" v-model="value1" label="Material Effect" placeholder="Enter username here..." bottom-bar rounded />
    <br />
    <lv-input id="username" type="text" v-model="value1" label="Floating Label" placeholder="Enter username here..." floating-label rounded />
    <br />
    <lv-input type="text" v-model="value1" icon-left="light-icon-search" icon-right="light-icon-arrow-up-right-circle" label="Left Right Icons" rounded />
    <br />
    <lv-input type="text" v-model="value1" placeholder="Search" label="Prepend Append" rounded>
      <template #prepend>
        <LvButton icon="light-icon-search" class="lv--secondary" />
      </template>
      <template #append>
        <LvButton icon="light-icon-arrow-up-right-circle" class="lv--danger" />
      </template>
    </lv-input>
  </div>
</template>

<script>
import LvInput from 'lightvue/input/Input.vue';
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
