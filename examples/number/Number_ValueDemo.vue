<template>
  <div style="display: flex; justify-content: space-around; width: 100%; flex-wrap: wrap">
    <lv-number placeholder="0" label="Max Value 10" :max="10" />

    <lv-number placeholder="0" label="Min Value 0" :min="0" />

    <lv-number placeholder="0" label="Value 0 - 20" :min="0" :max="20" />
  </div>
</template>

<script>
import LvNumber from 'lightvue/number';

// import LvNumber from 'lightvue/number';
export default {
  components: {
    LvNumber,
  },
};
</script>
