<template>
  <div class="glasscard-demo-wrapper">
    <div class="glasscard-demo" :style="{ borderRadius: '4px' }">
      <LvGlassCard backgroundOpacity="100" backgroundColor="#ffffff" backgroundBlur="100px"> <div v-html="dummyContent('default (false, 4px)')"></div> </LvGlassCard>
    </div>
    <div class="glasscard-demo" :style="{ borderRadius: '20px' }">
      <LvGlassCard backgroundOpacity="100" backgroundColor="#ffffff" backgroundBlur="100px" borderRadius="20px"> <div v-html="dummyContent('borderRadius = 20px')"></div> </LvGlassCard>
    </div>
    <div class="glasscard-demo" :style="{ borderRadius: '15px' }">
      <LvGlassCard backgroundOpacity="100" backgroundColor="#ffffff" backgroundBlur="100px" borderRadius="15px" :showBorder="true"> <div v-html="dummyContent('showBorder = true, borderRadius = 15px')"></div> </LvGlassCard>
    </div>
    <div class="glasscard-demo">
      <LvGlassCard backgroundOpacity="100" backgroundColor="#ffffff" backgroundBlur="100px" :showBorder="true"> <div v-html="dummyContent('showBorder = true')"></div> </LvGlassCard>
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
                <h4><span>PROP: </span><span>${propValue}</span></h4>
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
  color: black;
}

.glasscard-demo p {
  margin-top: 30px;
  opacity: 0.8;
  color: black;
}

@media (max-width: 500px) {
  .glasscard-demo h4 > span {
    display: block;
  }
  .glasscard-demo {
    height: 100%;
    width: 100%;
  }
}

.glasscard-demo p {
  margin-top: 30px;
  opacity: 0.8;
}
</style>
