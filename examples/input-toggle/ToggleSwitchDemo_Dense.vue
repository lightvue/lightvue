<template>
  <div style="display: flex; justify-content: space-between; width: 60%">
    <LvToggleSwitch v-model="checked1" dense label="Click to toggle" />

    <LvToggleSwitch v-model="checked1" dense label="Click to toggle" icon="light-icon-check" />
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
