<template>
  <div>
    <LvToggleSwitch v-model="checked1" label="Click to toggle" icon="light-icon-x" />
  </div>
</template>

<script>
import LvToggleSwitch from 'lightvue/toggle-switch';

export default {
  data() {
    return {
      checked1: false,
    };
  },
  components: {
    LvToggleSwitch,
  },
};
</script>

<style></style>
