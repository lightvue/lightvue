<template>
  <div class="lv-demo_layout">
    <LvButton label="Light Without Left Border" class="--mr-4" @click="showLight" />
    <LvButton label="Fill Without Left Border" class="lv--success --mr-4" @click="showFill" />
    <LvButton label="Light with Left Border" class="--mr-4" @click="showLightLeftBorder" />
    <LvButton label="Fill with Left Border" class="lv--success --mr-4" @click="showFillLeftBorder" />
  </div>
</template>

<script>
export default {
  methods: {
    showLight() {
      this.$notification.add({ type: 'success', title: 'Success Message', content: 'Message Content', duration: 3000 });
      this.$notification.set({ variant: 'light', position: 'top-right' });
    },
    showFill() {
      this.$notification.add({ type: 'success', title: 'Success Message', content: 'Message Content', duration: 3000 });
      this.$notification.set({ variant: 'fill', position: 'top-right' });
    },
    showLightLeftBorder() {
      this.$notification.add({ type: 'success', title: 'Success Message', content: 'Message Content', duration: 3000 });
      this.$notification.set({ variant: 'light-left-border', position: 'top-right' });
    },
    showFillLeftBorder() {
      this.$notification.add({ type: 'success', title: 'Success Message', content: 'Message Content', duration: 3000 });
      this.$notification.set({ variant: 'fill-left-border', position: 'top-right' });
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
