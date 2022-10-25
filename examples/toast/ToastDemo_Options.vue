<template>
  <div>
    <LvButton @click="showMultiple" label="Multiple" class="lv--warning --mr-4" />
    <LvButton @click="showSticky" label="Sticky" />
  </div>
</template>

<script>
export default {
  methods: {
    showSticky() {
      this.$toast.add({ type: 'info', title: 'Sticky Message', content: 'Message Content' });
    },
    showMultiple() {
      this.$toast.add({ type: 'info', title: 'Message 1', content: 'Message 1 Content', duration: 3000 });
      this.$toast.add({ type: 'warn', title: 'Message 2', content: 'Message 2 Content', duration: 3000 });
      this.$toast.add({ title: 'Message 3', content: 'Message 3 Content', duration: 3000 });
    },
  },
};
</script>
<style lang="scss" scoped>
.--mr-4 {
  margin-right: 8px;
}
</style>
