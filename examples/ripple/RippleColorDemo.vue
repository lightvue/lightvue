<template>
  <div class="ripple-example-wrapper">
    <LvCard class="teal-ripple" v-ripple> <h3>Click on me!</h3> </LvCard>

    <LvCard class="blue-ripple" v-ripple> <h3>Click on me!</h3> </LvCard>

    <LvCard class="red-ripple" v-ripple> <h3>Click on me!</h3> </LvCard>
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

<style lang="scss">
.ripple-example-wrapper {
  display: flex;
  justify-content: space-evenly;
}

.ripple-example-wrapper > div {
  width: 200px;
  margin: 60px 10px;
}

.teal-ripple {
  border-left: solid 4px #38b2ac;
  border-radius: 8px;

  .lv-ink {
    background-color: #38b2ac;
  }
}

.blue-ripple {
  border-left: solid 4px #4285f4;
  border-radius: 8px;

  .lv-ink {
    background-color: #4285f4;
  }
}

.red-ripple {
  border-left: solid 4px #db4437;
  border-radius: 8px;

  .lv-ink {
    background-color: #db4437;
  }
}

.grey-ripple {
  border-left: solid 4px #616161;
  border-radius: 8px;

  .lv-ink {
    background-color: #616161;
  }
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
