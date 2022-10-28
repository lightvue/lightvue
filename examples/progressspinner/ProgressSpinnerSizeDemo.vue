<template>
  <div class="progress-spinner-demo-wrapper">
    <LvProgressSpinner />
    <LvProgressSpinner size="105px" />
    <br />
    <LvProgressSpinner size="135px" class="progress-spinner-demo__last-spinner" />
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
    LvProgressSpinner: LvProgressSpinner,
  },
};
</script>

<style scoped>
.progress-spinner-demo-wrapper {
  display: flex;
  flex-flow: row wrap;
  /* height: 150px; */
  align-items: center;
  width: 80%;
}

@media (max-width: 450px) {
  .progress-spinner-demo-wrapper {
    height: max-content;
  }
}
</style>
