<template>
  <div class="ripple-example-wrapper">
    <div>
      <LvCard showBorder v-ripple backgroundColor="#607c8a"> <h3 style="color: #fff">Click on me!</h3> </LvCard>
    </div>

    <div>
      <LvInput type="text" placeholder="Click on me!" v-ripple />
    </div>

    <div>
      <LvButton v-ripple style="background-color: #607c8a">Click on me!</LvButton>
    </div>

    <div>
      <LvButton v-ripple label="Click on me!" class="teal-ripple --link-button lv--primary" />
    </div>
  </div>
</template>

<script>
import LvCard from 'lightvue/Card';
import LvButton from 'lightvue/Button';
import ripple from 'lightvue/Ripple';

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
}

.ripple-example-wrapper > div {
  width: 200px;
  margin: 60px 10px;
}

.teal-ripple .lv-ink {
  background-color: #38b2ac;
}

@media (max-width: 500px) {
  .ripple-example-wrapper {
    display: block;
  }

  .ripple-example-wrapper > div {
    margin-left: 0;
    display: block;
    width: 200px;
  }
}
</style>
