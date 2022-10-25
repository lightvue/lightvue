<template>
  <div class="glasscard-demo-wrapper">
    <div class="glasscard-demo">
      <LvGlassCard> <div v-html="dummyContent('default (#ffffff, 20px)')"></div> </LvGlassCard>
    </div>
    <div class="glasscard-demo">
      <LvGlassCard backgroundColor="#ff0000"> <div style="color: #fff" v-html="dummyContent('backgroundColor = #ff0000')"></div> </LvGlassCard>
    </div>
    <div class="glasscard-demo">
      <LvGlassCard backgroundColor="#000000"> <div style="color: #fff" v-html="dummyContent('backgroundColor = #000000')"></div> </LvGlassCard>
    </div>
    <div class="glasscard-demo">
      <LvGlassCard backgroundColor="#00bab1" padding="10px"> <div style="color: #fff" v-html="dummyContent('backgroundColor = #00bab1, padding = 10px')"></div> </LvGlassCard>
    </div>
  </div>
</template>

<script>
import LvGlassCard from 'lightvue/glass-card';

export default {
  data() {
    return {};
  },
  methods: {
    dummyContent(propValue) {
      return `<div>
                <h4><span>PROP: </span>${propValue}</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>`;
    },
  },
  components: {
    LvGlassCard,
  },
};
</script>

<style>
.glasscard-demo-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  background-image: url('./glasscard-demo-bg.jpg');
  background-attachment: cover;
}

.glasscard-demo {
  height: 400px;
  width: 300px;
  margin: 30px;
}

.glasscard-demo h4 > span {
  font-size: 0.9em;
  opacity: 0.8;
  display: block;
  font-weight: lighter;
}

.glasscard-demo p {
  margin-top: 30px;
  opacity: 0.8;
}
@media (max-width: 500px) {
  .glasscard-demo {
    height: 100%;
    width: 100%;
  }
}
</style>
