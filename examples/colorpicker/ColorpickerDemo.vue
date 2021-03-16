<template>
  <div>
    <h4>Choosen color: {{ val1 }} (using v-bind)</h4>
    <LvColorpicker v-model="val1" style="max-width: 600px" />
  </div>
</template>

<script>
import LvColorpicker from 'lightvue/ColorPicker';
export default {
  data() {
    return {
      val1: '#607C8A',
    };
  },
  components: {
    LvColorpicker: LvColorpicker,
  },
};
</script>
