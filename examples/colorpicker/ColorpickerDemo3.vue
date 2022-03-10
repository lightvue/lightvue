<template>
  <div>
    <LvColorpicker v-model="hexCode" hidePalette />
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
