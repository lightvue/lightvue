<template>
  <div class="lv-demo_layout">
    <LvButton label="Top Left" class="--mr-4" @click="showTopLeft" />
    <LvButton label="Bottom Left" class="lv--warning --mr-4" @click="showBottomLeft" />
    <LvButton label="Bottom Right" class="lv--danger --mr-4" @click="showBottomRight" />
  </div>
</template>

<script>
export default {
  methods: {
    showTopLeft() {
      this.$notification.add({ type: 'info', title: 'Info Message', content: 'Message Content', position: 'top-left', duration: 3000 });
    },
    showBottomLeft() {
      this.$notification.add({ type: 'warn', title: 'Warn Message', content: 'Message Content', position: 'bottom-left', duration: 3000 });
    },
    showBottomRight() {
      this.$notification.add({ type: 'success', title: 'Success Message', content: 'Message Content', position: 'bottom-right', duration: 3000 });
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
