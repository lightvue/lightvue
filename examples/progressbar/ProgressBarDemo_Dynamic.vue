<template>
  <div style="width: 100%">
    <LvProgressBar :value="value" />
    <br />
    <LvProgressBar :value="value" :showValue="false" color="#38b2ac" />
  </div>
</template>

<script>
import LvProgressBar from 'lightvue/progress-bar';

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
    LvProgressBar: LvProgressBar,
  },
};
</script>
