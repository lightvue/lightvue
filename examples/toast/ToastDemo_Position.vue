<template>
  <div class="lv-demo_layout">
    <LvButton label="Top" class="lv--info --mr-4" @click="showTop" />
    <LvButton label="Center" class="lv--success --mr-4" @click="showCenter" />
    <LvButton label="Bottom" class="lv--warning --mr-4" @click="showBottom" />
  </div>
</template>

<script>
export default {
  methods: {
    showTop() {
      this.$toast.add({ type: 'info', title: 'Info Message', content: 'Message Content', duration: 3000 });
      this.$toast.set({ position: 'top' });
    },
    showCenter() {
      this.$toast.add({ type: 'success', title: 'Success Message', content: 'Message Content', duration: 3000 });
      this.$toast.set({ position: 'center' });
    },
    showBottom() {
      this.$toast.add({ type: 'warn', title: 'Warn Message', content: 'Message Content', duration: 3000 });
      this.$toast.set({ position: 'bottom' });
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
