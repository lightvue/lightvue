<template>
  <div>
    <h4>Chosen color: {{ hexCode }}: <LvColorpicker v-model="hexCode" style="max-width: 600px" block /></h4>
  </div>
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
