<template>
  <div>
    <h5>Basic usage</h5>
    <LvToggleSwitch v-model="checked1" label="Click to toggle" icon="light-icon-x" />

    <h5>Basic switch with icon</h5>
    <LvToggleSwitch v-model="checked1" label="Click to toggle" icon="light-icon-x" />

    <h5>Dense Switch</h5>
    <LvToggleSwitch v-model="checked1" dense label="Click to toggle" />

    <h5>Dense Switch with Icon</h5>
    <LvToggleSwitch v-model="checked1" dense label="Click to toggle" icon="light-icon-check" />

    <h5>Placing label on left</h5>
    <LvToggleSwitch labelPosition="left" v-model="checked1" label="Click to toggle" />

    <h5>Predefining the toggle state</h5>
    <LvToggleSwitch v-model="checked2" /> Keep v-model's boolean true by default
  </div>
</template>

<script>
import LvToggleSwitch from 'lightvue/input-toggle/ToggleSwitch.vue';

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
