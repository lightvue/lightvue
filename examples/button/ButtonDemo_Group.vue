<template>
  <div class="lv-demo_layout">
    <span class="lv-buttonset">
      <LvButton label="Save" icon="light-icon-circle-check" class="lv--primary" />
      <LvButton label="Delete" icon="light-icon-trash" class="lv--danger" />
      <LvButton label="Complementary" icon="light-icon-x" class="lv--complementary" />
    </span>

    <span class="lv-buttonset">
      <LvButton label="Save" icon="light-icon-circle-check" rounded class="lv--primary" />
      <LvButton label="Delete" icon="light-icon-trash" class="lv--danger" rounded />
      <LvButton label="Complementary" icon="light-icon-x" class="lv--complementary" rounded />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.lv-button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.lv-buttonset {
  margin-right: 15px;
  margin-bottom: 15px;
  .lv-button {
    margin-right: 0;
    margin-bottom: 0;
  }
}
.lv-demo_layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
