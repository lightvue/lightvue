<template>
  <div class="button-align">
    <LvButton @click="showMultiple" label="Multiple" class="lv--warning --mr-4" />
    <LvButton @click="showSticky" label=" Sticky " class="lv-error --mr-4" />
  </div>
</template>

<script>
export default {
  methods: {
    showSticky() {
      this.$notification.add({ title: 'Sticky Message', content: 'Message Content' });
    },
    showMultiple() {
      this.$notification.add({ type: 'info', title: 'Message 1', content: 'Message 1 Content', duration: 3000 });
      this.$notification.add({ type: 'warn', title: 'Message 2', content: 'Message 2 Content', duration: 3000 });
      this.$notification.add({ type: 'error', title: 'Message 3', content: 'Message 3 Content', duration: 3000 });
    },
  },
};
</script>
<style lang="scss" scoped>
.button-align {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.--mr-4 {
  margin-right: 8px;
  margin-top: 3px;
}
</style>
