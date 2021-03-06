<template>
  <div>
    <div class="content-section implementation">
      <div class="card">
        <h5>Severities</h5>
        <LvButton label="Default" @click="showSuccess" />
        <LvButton label="Info" class="lv--info" @click="showInfo" />
        <LvButton label="Warn" class="lv--warning" @click="showWarn" />
        <LvButton label="Error" class="lv--danger" @click="showError" />

        <h5>Positions</h5>
        <LvButton label="Top Left" class="p-mr-2" @click="showTopLeft" />
        <LvButton label="Bottom Left" class="lv--warning" @click="showBottomLeft" />
        <LvButton label="Bottom Right" class="lv--danger" @click="showBottomRight" />

        <h5>Options</h5>
        <LvButton @click="showMultiple" label="Multiple" class="lv--warning" />
        <LvButton @click="showSticky" label="Sticky" />

        <h5>Remove All</h5>
        <LvButton @click="clear" label="Clear" />
      </div>
    </div>

    <!-- <ToastDoc/> -->
  </div>
</template>

<script>
// import ToastDoc from './ToastDoc';

export default {
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    showSuccess() {
      this.$notification.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
    },
    showInfo() {
      this.$notification.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
    },
    showWarn() {
      this.$notification.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
    },
    showError() {
      this.$notification.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
    },
    showTopLeft() {
      this.$notification.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000 });
    },
    showBottomLeft() {
      this.$notification.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group: 'bl', life: 3000 });
    },
    showBottomRight() {
      this.$notification.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 });
    },
    showSticky() {
      this.$notification.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content' });
    },
    showMultiple() {
      this.$notification.add({ severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 });
      this.$notification.add({ severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 });
      this.$notification.add({ severity: 'info', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 });
    },
    clear() {
      this.$notification.removeAllGroups();
    },
  },
  // components: {
  //     'ToastDoc': ToastDoc
  // }
};
</script>

<style lang="scss" scoped>
button {
  min-width: 10rem;
  margin-right: 0.5rem;
}

@media screen and (max-width: 960px) {
  button {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>
