<template>
  <div>
    <LvToggleSwitch v-model="checked1" label="Click to toggle" :disabled="true" />
  </div>
</template>

<script>
import LvToggleSwitch from 'lightvue/toggle-switch';

export default {
  data() {
    return {
      checked1: false,
      checked2: true,
      checked3: false,
      checked4: false,
    };
  },
  components: {
    LvToggleSwitch,
  },
};
</script>

<style></style>
