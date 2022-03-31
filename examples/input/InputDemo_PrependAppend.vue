<template>
  <div style="display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap">
    <lv-input type="text" v-model="value1" placeholder="Search" label="Prepend Append" clearable>
      <template #prepend>
        <LvButton icon="light-icon-search" class="lv--secondary" />
      </template>
      <template #append>
        <LvButton icon="light-icon-arrow-up-right-circle" class="lv--secondary" />
      </template>
    </lv-input>

    <lv-input type="text" v-model="value1" placeholder="Search" label="Prepend Append" rounded bottom-bar>
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
