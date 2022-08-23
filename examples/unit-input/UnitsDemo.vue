<template>
  <div>
    <LvUnitInput v-model="localValue" :units="units" bottom-bar></LvUnitInput>
    <strong> Final Value: {{ localValue }} </strong>
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
      units: ['inch', 'cm', 'mm', '%'],
    };
  },
};
</script>
<style lang="scss" scoped>
strong {
  display: block;
  margin-top: 1rem;
}
</style>
