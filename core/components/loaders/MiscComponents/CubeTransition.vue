<template>
  <loader-base loader-name="cube-transition" :child-count="2" v-bind="$attrs" />
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
@import '../scss/animations/cube-transition.scss';
</style>
