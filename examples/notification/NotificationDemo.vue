<template>
  <div class="lv-demo_layout">
    <LvButton label="Default" class="--mr-4" @click="showSuccess" />
    <LvButton label="Info" class="lv--info --mr-4" @click="showInfo" />
    <LvButton label="Warn" class="lv--warning --mr-4" @click="showWarn" />
    <LvButton label="Error" class="lv--danger --mr-4" @click="showError" />
  </div>
</template>

<script>
export default {
  methods: {
    showSuccess() {
      this.$notification.set({ position: 'top-right' });
      this.$notification.add({ variant: 'light', type: 'success', title: 'Success Message', content: 'Message Content', duration: 3000 });
    },
    showInfo() {
      this.$notification.set({ position: 'top-right' });
      this.$notification.add({ variant: 'light-left-border', type: 'info', title: 'Info Message', content: 'Message Content', duration: 3000 });
    },
    showWarn() {
      this.$notification.set({ position: 'bottom-left' });
      this.$notification.add({ variant: 'dark', type: 'warn', title: 'Warn Message', content: 'Message Content', duration: 3000 });
    },
    showError() {
      this.$notification.set({ position: 'bottom-right' });
      this.$notification.add({ variant: 'dark-left-border', type: 'error', title: 'Error Message', content: 'Message Content', duration: 3000 });
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
