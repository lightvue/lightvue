<template>
  <div class="lv-colorpicker-wrapper">
    <h6>Chosen color: {{ hexCode }} : <LvColorpicker v-model="hexCode" withoutInput /></h6>
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

<style>

.lv-colorpicker-wrapper {
  display: inline-block;
  vertical-align: middle;
}

</style>
