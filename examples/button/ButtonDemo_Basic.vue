<template>
  <div>
    <h5>Basic</h5>
    <LvButton label="Submit" class="lv--primary" />
    <LvButton label="Disabled" disabled="disabled" class="lv--primary" />
    <LvButton label="Link" class="--link-button lv--primary" />
    <LvButton label="Cancel" class="lv--complementary" />
    <!-- <h5>Append / Prepend [slots]</h5>
        <LvButton type="button" label="Emails" badge="8" />
        <LvButton type="button" label="Messages" icon="pi pi-users" class="lv--warning" badge="8" badgeClass="lv-badge-danger" /> -->
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
