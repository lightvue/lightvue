<template>
  <div>
    <h5>Button Set (Single row)</h5>
    <span class="lv-buttonset">
      <LvButton label="Save" icon="light-icon-circle-check" class="lv--primary" />
      <LvButton label="Delete" icon="light-icon-trash" class="lv--danger" />
      <LvButton label="Complementary" icon="light-icon-x" class="lv--complementary" />
    </span>

    <span class="lv-buttonset">
      <LvButton label="Save" size="lg" icon="light-icon-circle-check" class="lv--primary" />
      <LvButton label="Delete" size="lg" icon="light-icon-trash" class="lv--danger" />
      <LvButton label="Complementary" size="lg" icon="light-icon-x" class="lv--complementary" />
    </span>

    <span class="lv-buttonset">
      <LvButton label="Save" size="xl" icon="light-icon-circle-check" class="lv--primary" />
      <LvButton label="Delete" size="xl" icon="light-icon-trash" class="lv--danger" />
      <LvButton label="Complementary" size="xl" icon="light-icon-x" class="lv--complementary" />
    </span>

    <br />

    <span class="lv-buttonset">
      <LvButton label="Save" icon="light-icon-circle-check" rounded class="lv--primary" />
      <LvButton label="Delete" icon="light-icon-trash" class="lv--danger" rounded />
      <LvButton label="Complementary" icon="light-icon-x" class="lv--complementary" rounded />
    </span>

    <span class="lv-buttonset">
      <LvButton label="Save" size="lg" icon="light-icon-circle-check" rounded class="lv--primary" />
      <LvButton label="Delete" size="lg" icon="light-icon-trash" class="lv--danger" rounded />
      <LvButton label="Complementary" size="lg" icon="light-icon-x" class="lv--complementary" rounded />
    </span>

    <span class="lv-buttonset">
      <LvButton label="Save" size="xl" icon="light-icon-circle-check" rounded class="lv--primary" />
      <LvButton label="Delete" size="xl" icon="light-icon-trash" class="lv--danger" rounded />
      <LvButton label="Complementary" size="xl" icon="light-icon-x" class="lv--complementary" rounded />
    </span>

    <h5>2D Icon Grids</h5>

    <span class="lv-buttonset">
      <LvButton size="xl" icon="light-icon-circle-check" style="border-radius: 0px" class="lv--primary" />
      <LvButton size="xl" icon="light-icon-trash" class="lv--danger" style="border-radius: 0px" />
      <br />
      <LvButton size="xl" icon="light-icon-search" class="lv--warning" style="border-radius: 0px" />
      <LvButton size="xl" icon="light-icon-x" class="lv--complementary" style="border-radius: 0px" />
    </span>

    <span class="lv-buttonset">
      <LvButton size="xl" icon="light-icon-circle-check" style="border-radius: 0px" class="lv--primary" />
      <LvButton size="xl" icon="light-icon-trash" class="lv--danger" style="border-radius: 0px" />
      <LvButton size="xl" icon="light-icon-heart" class="lv--warning" style="border-radius: 0px" />
      <br />
      <LvButton size="xl" icon="light-icon-search" class="lv--help lv--primary" style="border-radius: 0px" />
      <LvButton size="xl" icon="light-icon-x" class="lv--complementary" style="border-radius: 0px" />
      <LvButton size="xl" icon="light-icon-user" class="lv--info" style="border-radius: 0px" />
    </span>

    <span class="lv-buttonset">
      <LvButton size="xl" icon="light-icon-circle-check" class="lv--primary" />
      <LvButton size="xl" icon="light-icon-trash" class="lv--danger" />
      <br />
      <LvButton size="xl" icon="light-icon-search" class="lv--warning" />
      <LvButton size="xl" icon="light-icon-x" class="lv--complementary" />
      <br />
      <LvButton size="xl" icon="light-icon-heart" class="lv--help" />
      <LvButton size="xl" icon="light-icon-user" class="lv--info" />
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
  margin-right: 15px;
  margin-bottom: 15px;
  .lv-button {
    margin-right: 0;
    margin-bottom: 0;
  }
}
</style>
