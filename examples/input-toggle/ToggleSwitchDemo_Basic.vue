<template>
  <div>
    <h5>Basic usage</h5>
    <LvToggleSwitch v-model="checked1" label="Click to toggle" icon="light-icon-x" />

    <h5>Variants</h5>
    <LvToggleSwitch v-model="checked1" variant="primary" label="Primary" icon="light-icon-x" />
    <LvToggleSwitch v-model="checked1" variant="secondary" label="Secondary" icon="light-icon-x" />
    <LvToggleSwitch v-model="checked1" variant="success" label="Success" icon="light-icon-x" />
    <LvToggleSwitch v-model="checked1" variant="info" label="Info" icon="light-icon-x" />
    <LvToggleSwitch v-model="checked1" variant="warning" label="Warning" icon="light-icon-x" />
    <LvToggleSwitch v-model="checked1" variant="help" label="Help" icon="light-icon-x" />
    <LvToggleSwitch v-model="checked1" variant="danger" label="Danger" icon="light-icon-x" />
    <LvToggleSwitch v-model="checked1" variant="plain" label="Plain" icon="light-icon-x" />


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
