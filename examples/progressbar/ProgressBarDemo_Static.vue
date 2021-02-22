<template>
  <div>
    <LvProgressBar :value="value" />
    <br />
    <LvProgressBar :value="value" :showValue="false" color="#38b2ac" />
  </div>
</template>

<script>
import LvProgressBar from 'lightvue/progressbar/ProgressBar';

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
