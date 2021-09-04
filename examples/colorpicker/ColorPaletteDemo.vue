<template>
  <div>
    <h4>Chosen color: {{ hexCode }}</h4>
    <LvColorpicker v-model="hexCode" style="max-width: 600px" hide-palette bottom-bar />
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
