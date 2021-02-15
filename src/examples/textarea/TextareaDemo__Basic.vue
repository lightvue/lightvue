<template>
  <div id="textapp">
    <lv-textarea rows="3" v-model="value1" placeholder="" label="Label Test" show-limit :max-length="20" />
    <lv-textarea rows="3" placeholder="" label="Label Test" floating-label show-limit />
    <lv-textarea rows="3" placeholder="" label="Label Test" rounded floating-label />
    <lv-textarea rows="3" placeholder="" label="Label Test" icon-left="light-icon-phone" />
    <lv-textarea :max-length="10" rows="3" label="Label Test" />
    <lv-textarea rows="3" placeholder="auto-size" label="Auto-resize" :autoResize="true" />
  </div>
</template>

<script>
import LvTextarea from '@/collections/textarea/textarea';
export default {
  components: {
    LvTextarea,
  },
  data() {
    return {
      value1: '11',
    };
  },
};
</script>

<style></style>
