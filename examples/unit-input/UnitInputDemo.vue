<template>
  <div>
    <LvUnitInput v-model="localValue" bottom-bar clearable></LvUnitInput>
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
      localValue: '50%',
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
