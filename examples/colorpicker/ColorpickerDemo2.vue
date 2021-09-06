<template>
  <h4>Chosen color: {{ hexCode }} : <LvColorpicker v-model="hexCode" style="max-width: 600px" withoutInput /></h4>
</template>

<script>
import LvColorpicker from 'lightvue/color-picker';
export default {
  data() {
    return {
      hexCode: '#607C8A',
    };
  },
  components: {
    LvColorpicker,
  },
};
</script>

<style></style>
