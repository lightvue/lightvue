<template>
  <loader-base loader-name="line-scale" :child-count="5" v-bind="$attrs" />
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
@import '../scss/animations/line-scale.scss';
</style>
