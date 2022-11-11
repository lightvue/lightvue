<template>
  <div>
    <LvIconpicker v-model="icon" clearable />
  </div>
</template>

<script>
import LvIconpicker from 'lightvue/icon-picker';
export default {
  data() {
    return {
      icon: 'light-icon-code',
    };
  },
  components: {
    LvIconpicker: LvIconpicker,
  },
};
</script>
