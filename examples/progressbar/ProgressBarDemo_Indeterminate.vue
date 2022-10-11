<template>
  <div style="width: 100%">
    <LvProgressBar mode="indeterminate" />
    <br />
    <LvProgressBar mode="indeterminate" color="#38b2ac" />
  </div>
</template>

<script>
import LvProgressBar from 'lightvue/progress-bar';

export default {
  data() {
    return {};
  },
  components: {
    LvProgressBar: LvProgressBar,
  },
};
</script>
