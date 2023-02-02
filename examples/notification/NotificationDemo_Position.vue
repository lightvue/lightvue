<template>
  <div class="lv-demo_layout">
    <LvButton label="Top Left" class="lv--success --mr-4" @click="showTopLeft" />
    <LvButton label="Top Right" class="lv--info --mr-4" @click="showTopRight" />
    <LvButton label="Bottom Right" class="lv--error --mr-4" @click="showBottomRight" />
    <LvButton label="Bottom Left" class="lv--warning --mr-4" @click="showBottomLeft" />
  </div>
</template>

<script>
export default {
  methods: {
    showTopRight() {
      this.$notification.add({ type: 'info', title: 'Info Message', content: 'Message Content', position: 'top-right', duration: 3000 });
    },
    showTopLeft() {
      this.$notification.add({ type: 'success', title: 'Success Message', content: 'Message Content', position: 'top-left', duration: 3000 });
    },
    showBottomLeft() {
      this.$notification.add({ type: 'warn', title: 'Warn Message', content: 'Message Content', position: 'bottom-left', duration: 3000 });
    },
    showBottomRight() {
      this.$notification.add({ type: 'error', title: 'Error Message', content: 'Message Content', position: 'bottom-right', duration: 3000 });
    },
  },
};
</script>
<style lang="scss" scoped>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
