<template>
  <div>
    <h4>Choosen color: {{ val1 }} (using v-bind)</h4>
    <LvColorpicker v-model="val1" />
  </div>
</template>

<script>
import LvColorpicker from '@/collections/colorpicker/ColorPicker';
export default {
  data() {
    return {
      val1: '#607C8A',
      val2: 3,
    };
  },
  components: {
    LvColorpicker: LvColorpicker,
  },
};
</script>
