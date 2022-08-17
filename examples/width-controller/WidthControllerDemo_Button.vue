<template>
  <div>
    <div style="display: flex">
      <LvButton label="Save" icon="light-icon-circle-check" class="lv--primary" :style="`width: ${width[0]}%`" />
      <LvButton label="Delete" icon="light-icon-trash" class="lv--danger" :style="`width: ${width[1]}%`" />
    </div>
    <LvWidthController v-model="width" />
  </div>
</template>
<script>
import LvWidthController from 'lightvue/width-controller';

export default {
  data() {
    return {
      width: [60, 40],
    };
  },
  components: {
    LvWidthController,
  },
};
</script>
<style lang="scss" scoped>
.lv-button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
