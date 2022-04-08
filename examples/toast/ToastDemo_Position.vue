<template>
  <div class="lv-demo_layout">
    <LvButton label="Top" class="--mr-4" @click="showTop" />
    <LvButton label="Center" class="--mr-4" @click="showCenter" />
    <LvButton label="Bottom" class="lv--warning --mr-4" @click="showBottom" />
  </div>
</template>

<script>
export default {
  methods: {
    showTop() {
      this.$toast.add({ type: 'info', title: 'Info Message', content: 'Message Content', position: 'top', duration: 3000 });
    },
    showCenter() {
      this.$toast.add({ type: 'info', title: 'Info Message', content: 'Message Content', position: 'center', duration: 3000 });
    },
    showBottom() {
      this.$toast.add({ type: 'warn', title: 'Warn Message', content: 'Message Content', position: 'bottom', duration: 3000 });
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
