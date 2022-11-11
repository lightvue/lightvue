<template>
  <div>
    <h6>Chosen icon: {{ icon }} : <LvIconpicker v-model="icon" withoutInput /></h6>
  </div>
</template>

<script>
import LvIconpicker from 'lightvue/icon-picker';
export default {
  data() {
    return {
      icon: 'light-icon-ban',
    };
  },
  components: {
    LvIconpicker,
  },
};
</script>

<style></style>
