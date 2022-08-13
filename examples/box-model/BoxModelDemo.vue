<template>
  <div class="box-model-wrapper">
    <div class="output-wrapper" :style="{ padding: boxModelValue }">
      <div class="dummy-output"></div>
    </div>
    <div class="seperator"></div>
    <lv-box-model v-model="boxModelValue" />
  </div>
</template>

<script>
import LvBoxModel from 'lightvue/box-model';
import LvSkeleton from 'lightvue/skeleton';

export default {
  data() {
    return {
      allOptions: {},
      boxModelValue: '10px 10px 10px 10px',
    };
  },
  components: {
    LvBoxModel,
    LvSkeleton,
  },
};
</script>

<style lang="scss">
.box-model-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.seperator {
  background: #edf2f6;
  height: 100%;
  width: 3px;
  margin: 0px 20px;
}
.output-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  border: 1px solid #607c8a;
  border-radius: 8px;
}
.dummy-output {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background-color: #607c8a;
}
</style>
