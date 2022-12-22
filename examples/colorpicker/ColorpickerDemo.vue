<template>
  <div>
    <LvColorpicker v-model="val1" clearable />
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
