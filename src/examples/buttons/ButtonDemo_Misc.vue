<template>
  <div>
    <h5>Full Width</h5>
    <div class="lv-fluid">
      <LvButton label="FULL WIDTH" push rounded size="xl" class="lv--primary" />
    </div>

    <h5>Button Set with mixed shape</h5>
    <span class="lv-buttonset">
      <LvButton
        label="Save"
        size="xl"
        icon="pi pi-check"
        rounded
        class="lv--primary"
      />
      <LvButton size="xl" icon="light-icon-copy" class="lv--success" />
    </span>
    <span class="lv-buttonset">
      <LvButton label="Save" size="lg" icon="pi pi-check" class="lv--primary" />
      <LvButton size="lg" icon="light-icon-copy" class="lv--success" rounded />
    </span>
    <span class="lv-buttonset">
      <LvButton label="Save" size="xl" icon="pi pi-check" class="lv--primary" />
      <LvButton size="xl" icon="light-icon-copy" class="lv--success" rounded />
    </span>
    <span class="lv-buttonset">
      <LvButton label="Save" icon="pi pi-check" class="lv--primary" />
      <LvButton icon="light-icon-copy" class="lv--success" rounded />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.lv-button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.lv-buttonset {
  display: inline-block;
  margin-top: 15px;
  margin-right: 15px;
  .lv-button {
    margin-right: 0;
    margin-bottom: 0;
  }
}
</style>
