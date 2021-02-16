<template>
  <div>
    <lv-check-box v-for="option in options" :key="option">{{ option }}</lv-check-box>
  </div>
</template>
<script>
import LvCheckBox from '@/collections/checkbox/Checkbox';
export default {
  components: {
    LvCheckBox,
  },
  props: ['options'],
};
</script>
