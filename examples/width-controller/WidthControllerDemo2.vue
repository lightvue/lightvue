<template>
  <div>
    <!-- <div class="lv-demo_layout" DEMO 2>
      <!-- <div class="lv-buttonset"> -->

    <div style="display: flex">
      <LvButton label="Save" icon="light-icon-circle-check" class="lv--primary" :style="`width: ${percentagelayout[0]}%`" />
      <LvButton label="Delete" icon="light-icon-trash" class="lv--danger" :style="`width: ${percentagelayout[1]}%`" />
      <!-- <LvButton label="Complementary" icon="light-icon-x" class="lv--complementary" :style="`width: ${percentagelayout[2]}%`" /> -->
    </div>
    <!-- </div>
    </div> -->
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

.lv-buttonset {
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 15px;
  .lv-button {
    margin-right: 0;
    margin-bottom: 0;
  }
}
.lv-demo_layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
