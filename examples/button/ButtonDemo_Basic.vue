<template>
  <div class="lv-demo_layout">
    <LvButton label="Submit" class="lv--primary" />
    <LvButton label="Disabled" disabled="disabled" class="lv--primary" />
    <LvButton label="Link" class="--link-button lv--primary" />
    <LvButton label="Cancel" class="lv--complementary" />
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
<script>
export default {
  methods: {},
};
</script>
