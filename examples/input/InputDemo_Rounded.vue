<template>
  <div style="display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap">
    <lv-input type="text" v-model="value1" label="First Name" placeholder="Enter your first name" rounded />

    <lv-input type="text" v-model="value1" icon-left="light-icon-search" icon-right="light-icon-arrow-up-right-circle" label="Left Right Icons" rounded />

    <lv-input type="text" v-model="value1" placeholder="Search" label="Prepend Append" rounded style="width: 70%">
      <template #prepend>
        <LvButton icon="light-icon-search" class="lv--secondary" />
      </template>
      <template #append>
        <LvButton icon="light-icon-arrow-up-right-circle" class="lv--secondary" />
      </template>
    </lv-input>
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
