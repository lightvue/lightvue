<template>
  <loader-base loader-name="ball-clip-rotate-pulse" :child-count="2" v-bind="$attrs" />
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
@import '../scss/animations/ball-grid-beat.scss';
</style>
