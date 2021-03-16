<template>
  <loader-base loader-name="ball-clip-rotate" :child-count="1" v-bind="$attrs" :border-color="color" />
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
@import '../scss/animations/ball-clip-rotate.scss';
</style>
