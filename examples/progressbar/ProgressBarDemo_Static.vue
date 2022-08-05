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
      value: 35,
    };
  },
  components: {
    LvProgressBar: LvProgressBar,
  },
};
</script>
