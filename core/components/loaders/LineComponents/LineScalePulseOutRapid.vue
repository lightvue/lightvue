<template>
  <loader-base loader-name="line-scale-pulse-out-rapid" :child-count="5" v-bind="$attrs" />
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
export default {
  components: {
    LoaderBase,
  },
};
</script>
<style lang="scss">
@import '../scss/animations/line-scale-pulse-out-rapid.scss';
</style>
