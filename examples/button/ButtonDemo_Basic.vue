<template>
  <div>
    <LvButton label="Submit" class="lv--primary" />
    <LvButton label="Disabled" disabled="disabled" class="lv--primary" />
    <LvButton label="Link" class="--link-button lv--primary" />
    <LvButton label="Cancel" class="lv--complementary" />
  </div>
</template>

<style lang="scss" scoped>
.lv-button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.lv-buttonset {
  .lv-button {
    margin-right: 0;
    margin-bottom: 0;
  }
}
</style>
<script>
export default {
  methods: {},
};
</script>
