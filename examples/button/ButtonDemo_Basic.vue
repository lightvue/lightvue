<template>
  <div>
    <h5>Basic</h5>
    <LvButton label="Submit" class="lv--primary" />
    <LvButton label="Disabled" disabled="disabled" class="lv--primary" />
    <LvButton label="Link" class="--link-button lv--primary" />
    <LvButton label="Cancel" class="lv--complementary" />

    <h5>With Icons</h5>
    <LvButton icon="light-icon-alert-circle" class="lv--primary" />
    <LvButton label="Submit" icon="light-icon-arrow-down-circle" class="lv--primary" />
    <LvButton label="Submit" icon-right="light-icon-arrow-down-circle" class="lv--primary" />
    <br />

    <h5>Colors</h5>
    <LvButton label="Primary" class="lv--primary" />
    <LvButton label="Secondary" class="lv--secondary" />
    <LvButton label="Success" class="lv--success" />
    <LvButton label="Info" class="lv--info" />
    <LvButton label="Warning" class="lv--warning" />
    <LvButton label="Help" class="lv--help" />
    <LvButton label="Danger" class="lv--danger" />
    <LvButton label="Cancel" class="lv--complementary" />
    <br/>
    <h5>Raised Buttons</h5>
    <LvButton label="Primary" raised class="lv--primary" />
    <LvButton label="Warning" raised class="lv--warning" />
    <LvButton label="Danger" raised class="lv--danger" />
    <LvButton label="Disabled" disabled="disabled" raised class="lv--primary" />
    <LvButton icon="light-icon-bookmark" raised class="lv--info" />
    <!-- <LvButton label="Secondary" class="lv--secondary" raised />
    <LvButton label="Success" class="lv--success" raised />
    <LvButton label="Info" class="lv--info" raised />
    <LvButton label="Warning" class="lv--warning" raised />
    <LvButton label="Help" class="lv--help" raised />
    <LvButton label="Danger" class="lv--danger" raised />
    <LvButton label="Complementary" class="lv--complementary" raised /> -->
    <br />
    <h5>Text Buttons</h5>
    <LvButton label="Primary" class="--text-button lv--primary" />
    <!-- <LvButton label="Secondary" class="lv--secondary --text-button" /> -->
    <!-- <LvButton label="Success" class="lv--success --text-button" /> -->
    <LvButton label="Info" class="lv--info --text-button" />
    <LvButton label="Warning" class="lv--warning --text-button" />
    <!-- <LvButton label="Help" class="lv--help --text-button" /> -->
    <LvButton label="Danger" class="lv--danger --text-button" />
    <LvButton label="Plain" class="--text-button lv--plain" />
    <!-- <LvButton label="Complementary" class="--text-button lv--complementary" /> -->
    <br />
    <h5>Outlined Buttons</h5>
    <LvButton label="Primary" outlined class="lv--primary" />
    <LvButton label="Complementary" outlined class="lv--complementary" />
    <LvButton disabled="disabled" label="Disabled" outlined class="lv--primary" />
    <LvButton icon="light-icon-heart" outlined class="lv--danger" />
    <!-- <LvButton label="Secondary" outlined class="lv--secondary" />
    <LvButton label="Success" outlined class="lv--success" />
    <LvButton label="Info" outlined class="lv--info" />
    <LvButton label="Warning" outlined class="lv--warning" />
    <LvButton label="Help" outlined class="lv--help" />
    <LvButton label="Danger" outlined class="lv--danger" />
    <LvButton label="Complementary" outlined class="lv--complementary" /> -->
    <br />
    <!-- <h5>Append / Prepend [slots]</h5>
        <LvButton type="button" label="Emails" badge="8" />
        <LvButton type="button" label="Messages" icon="pi pi-users" class="lv--warning" badge="8" badgeClass="lv-badge-danger" /> -->

    <h5>Sizes</h5>
    <div class="sizes">
      <LvButton label="Small" size="sm" icon="light-icon-arrow-down-circle" class="lv--primary" />
      <LvButton label="Normal" size="md" icon="light-icon-arrow-down-circle" class="lv--primary" />
      <LvButton label="Large" size="lg" icon="light-icon-arrow-down-circle" class="lv--primary" />
      <LvButton label="Extra Large" size="xl" icon="light-icon-arrow-down-circle" class="lv--primary" />
      <br />
    </div>
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
