<template>
  <loader-base loader-name="ball-scale-multiple" :child-count="3" v-bind="$attrs" />
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-scale-multiple.scss';

export default {
  components: {
    LoaderBase,
  },
};
</script>
