<template>
  <div class="ripple-example-wrapper">
    <LvCard showBorder v-ripple backgroundColor="#607c8a"> <h3 style="color: #fff">Click on me!</h3> </LvCard>

    <LvInput type="text" placeholder="Click on me!" v-ripple />

    <LvButton v-ripple style="background-color: #607c8a">Click on me!</LvButton>
  </div>
</template>

<script>
import LvCard from 'lightvue/card';
import LvButton from 'lightvue/button';
import ripple from 'lightvue/ripple';

export default {
  data() {
    return {
      value1: 10,
      value2: 10,
    };
  },
  components: { LvCard, LvButton },
  directives: {
    ripple: ripple,
  },
};
</script>

<style scoped>
.ripple-example-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}

.teal-ripple .lv-ink {
  background-color: #38b2ac;
}
</style>
