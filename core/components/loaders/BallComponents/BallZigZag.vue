<template>
  <loader-base loader-name="ball-zig-zag" :child-count="2" v-bind="$attrs" />
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
@import '../scss/animations/ball-zig-zag.scss';
</style>
