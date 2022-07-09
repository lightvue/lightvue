<template>
  <div class="progress-spinner-demo-wrapper">
    <LvProgressSpinner />
    <LvProgressSpinner color="#38b2ac" />
    <LvProgressSpinner color="red" />
  </div>
</template>

<script>
import LvProgressSpinner from 'lightvue/progress-spinner';

export default {
  data() {
    return {
      value: 0,
    };
  },
  interval: null,
  methods: {
    startProgress() {
      this.interval = setInterval(() => {
        let newValue = this.value + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
          newValue = 0;
        }
        this.value = newValue;
      }, 2000);
    },
    endProgress() {
      clearInterval(this.interval);
      this.interval = null;
    },
  },
  mounted() {
    this.startProgress();
  },
  beforeDestroy() {
    this.endProgress();
  },
  components: {
    LvProgressSpinner,
  },
};
</script>

<style scoped>
.progress-spinner-demo-wrapper {
  display: flex;
  flex-flow: row wrap;
  width: 80%;
}
</style>
