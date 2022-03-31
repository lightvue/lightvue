<template>
  <div class="lv-demo_layout">
    <div class="lv-fluid">
      <LvButton label="FULL WIDTH" push rounded size="xl" class="lv--primary" />
    </div>

    <span class="lv-buttonset">
      <LvButton label="Save" size="xl" icon="light-icon-check" rounded class="lv--primary" />
      <LvButton size="xl" icon="light-icon-copy" class="lv--success" />
    </span>
    <span class="lv-buttonset">
      <LvButton label="Save" size="lg" icon="light-icon-check" class="lv--primary" />
      <LvButton size="lg" icon="light-icon-copy" class="lv--success" rounded />
    </span>
    <span class="lv-buttonset">
      <LvButton label="Save" size="xl" icon="light-icon-check" class="lv--primary" />
      <LvButton size="xl" icon="light-icon-copy" class="lv--success" rounded />
    </span>
    <span class="lv-buttonset">
      <LvButton label="Save" icon="light-icon-check" class="lv--primary" />
      <LvButton icon="light-icon-copy" class="lv--success" rounded />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
