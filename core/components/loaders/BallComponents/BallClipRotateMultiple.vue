<template>
  <loader-base loader-name="ball-clip-rotate-multiple" :child-count="2" v-bind="$attrs" :border-color="color" />
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
export default {
  components: {
    LoaderBase,
  },
  props: {
    color: {
      type: String,
    },
  },
};
</script>
<style lang="scss">
@import '../scss/animations/ball-clip-rotate-multiple.scss';
</style>
