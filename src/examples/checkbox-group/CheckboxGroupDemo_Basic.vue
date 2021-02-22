<template>
  <lv-checkbox-group :options="cities"></lv-checkbox-group>
</template>

<script>
import LvCheckboxGroup from '@/collections/checkbox-group/ChechboxGroup';
export default {
  components: {
    LvCheckboxGroup,
  },
  data() {
    return {
      cities: ['New York', 'Rome', 'London'],
    };
  },
};
</script>

<style></style>
