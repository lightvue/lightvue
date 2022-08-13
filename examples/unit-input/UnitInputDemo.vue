<template>
  <div>
    <LvUnitInput v-model="localValue"></LvUnitInput>
    {{ localValue }}
  </div>
</template>
<script>
import LvUnitInput from 'lightvue/unit-input';
export default {
  components: {
    LvUnitInput,
  },
  data() {
    return {
      localValue: null,
    };
  },
};
</script>
<style lang="scss" scoped></style>
