<template>
  <div>
    <LvIconpicker v-model="icon" hidePalette />
  </div>
</template>

<script>
import LvIconpicker from 'lightvue/icon-picker';
export default {
  data() {
    return {
      icon: 'light-icon-alarm',
    };
  },
  components: {
    LvIconpicker,
  },
};
</script>

<style></style>
