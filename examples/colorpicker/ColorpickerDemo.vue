<template>
  <div>
    <h4>Chosen color: {{ val1 }} (using v-bind)</h4>
    <LvColorpicker v-model="val1" style="max-width: 600px" />
  </div>
</template>

<script>
import LvColorpicker from 'lightvue/color-picker';
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
