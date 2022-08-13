<template>
  <div>
    <div style="display: flex">
      <LvButton label="Save" icon="light-icon-circle-check" class="lv--primary" :style="`width: ${percentagelayout[0]}%`" />
      <LvButton label="Delete" icon="light-icon-trash" class="lv--danger" :style="`width: ${percentagelayout[1]}%`" />
    </div>
    <LvPercentageController v-model="percentagelayout" />
  </div>
</template>
<script>
import LvPercentageController from 'lightvue/percentage-controller';

export default {
  data() {
    return {
      percentagelayout: [60, 40],
    };
  },
  components: {
    LvPercentageController,
  },
};
</script>
<style lang="scss" scoped>
.lv-button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
