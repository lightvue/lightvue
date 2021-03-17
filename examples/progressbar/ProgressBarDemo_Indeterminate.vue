<template>
  <div>
    <LvProgressBar mode="indeterminate" />
    <br />
    <LvProgressBar mode="indeterminate" color="#38b2ac" />
  </div>
</template>

<script>
import LvProgressBar from 'lightvue/progressbar';

export default {
  data() {
    return {};
  },
  components: {
    LvProgressBar: LvProgressBar,
  },
};
</script>
