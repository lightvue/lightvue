<template>
  <div>
    <h5>Basic</h5>
    <LvButton label="Submit" class="lv--primary" />
    <LvButton label="Disabled" disabled="disabled" class="lv--primary" />
    <LvButton label="Link" class="--link-button lv--primary" />

    <h5>Icons</h5>
    <LvButton icon="pi pi-check" class="lv--primary" />
    <LvButton label="Submit" icon="pi pi-check" class="lv--primary" />
    <LvButton label="Submit" icon-right="pi pi-check" class="lv--primary" />
    <br />
    <LvButton icon="pi pi-check" disabled="disabled" class="lv--primary" />
    <LvButton
      label="Submit"
      icon="pi pi-check"
      disabled="disabled"
      class="lv--primary"
    />
    <LvButton
      label="Submit"
      icon-right="pi pi-check"
      disabled="disabled"
      class="lv--primary"
    />
    <br />
    <LvButton icon="pi pi-check" class="--link-button lv--primary" />
    <LvButton
      label="Submit"
      icon="pi pi-check"
      class="--link-button lv--primary"
    />
    <LvButton
      label="Submit"
      icon-right="pi pi-check"
      class="--link-button lv--primary"
    />

    <h5>Severities</h5>
    <LvButton label="Primary" class="lv--primary" />
    <LvButton label="Secondary" class="lv--secondary" />
    <LvButton label="Success" class="lv--success" />
    <LvButton label="Info" class="lv--info" />
    <LvButton label="Warning" class="lv--warning" />
    <LvButton label="Help" class="lv--help" />
    <LvButton label="Danger" class="lv--danger" />
    <br />
    <LvButton icon="pi pi-check" class="lv--primary" />
    <LvButton icon="pi pi-check" class="lv--secondary" />
    <LvButton icon="pi pi-check" class="lv--success" />
    <LvButton icon="pi pi-check" class="lv--info" />
    <LvButton icon="pi pi-check" class="lv--warning" />
    <LvButton icon="pi pi-check" class="lv--help" />
    <LvButton icon="pi pi-check" class="lv--danger" />

    <h5>Raised Buttons</h5>
    <LvButton label="Primary" raised class="lv--primary" />
    <LvButton label="Secondary" class="lv--secondary" raised />
    <LvButton label="Success" class="lv--success" raised />
    <LvButton label="Info" class="lv--info" raised />
    <LvButton label="Warning" class="lv--warning" raised />
    <LvButton label="Help" class="lv--help" raised />
    <LvButton label="Danger" class="lv--danger" raised />
    <br />
    <LvButton icon="pi pi-check" raised class="lv--primary" />
    <LvButton icon="pi pi-check" class="lv--secondary" raised />
    <LvButton icon="pi pi-check" class="lv--success" raised />
    <LvButton icon="pi pi-check" class="lv--info" raised />
    <LvButton icon="pi pi-check" class="lv--warning" raised />
    <LvButton icon="pi pi-check" class="lv--help" raised />
    <LvButton icon="pi pi-check" class="lv--danger" raised />

    <h5>Text Buttons</h5>
    <LvButton label="Primary" class="--text-button lv--primary" />
    <LvButton label="Secondary" class="lv--secondary --text-button" />
    <LvButton label="Success" class="lv--success --text-button" />
    <LvButton label="Info" class="lv--info --text-button" />
    <LvButton label="Warning" class="lv--warning --text-button" />
    <LvButton label="Help" class="lv--help --text-button" />
    <LvButton label="Danger" class="lv--danger --text-button" />
    <LvButton label="Plain" class="--text-button lv--plain" />
    <br />
    <LvButton icon="pi pi-check" class="--text-button lv--primary" />
    <LvButton icon="pi pi-check" class="lv--secondary --text-button" />
    <LvButton icon="pi pi-check" class="lv--success --text-button" />
    <LvButton icon="pi pi-check" class="lv--info --text-button" />
    <LvButton icon="pi pi-check" class="lv--warning --text-button" />
    <LvButton icon="pi pi-check" class="lv--help --text-button" />
    <LvButton icon="pi pi-check" class="lv--danger --text-button" />

    <h5>Outlined Buttons</h5>
    <LvButton label="Primary" outlined class="lv--primary" />
    <LvButton label="Secondary" outlined class="lv--secondary" />
    <LvButton label="Success" outlined class="lv--success" />
    <LvButton label="Info" outlined class="lv--info" />
    <LvButton label="Warning" outlined class="lv--warning" />
    <LvButton label="Help" outlined class="lv--help" />
    <LvButton label="Danger" outlined class="lv--danger" />
    <br />
    <LvButton icon="pi pi-check" outlined class="lv--primary" />
    <LvButton icon="pi pi-check" class="lv--secondary" outlined />
    <LvButton icon="pi pi-check" class="lv--success" outlined />
    <LvButton icon="pi pi-check" class="lv--info" outlined />
    <LvButton icon="pi pi-check" class="lv--warning" outlined />
    <LvButton icon="pi pi-check" class="lv--help" outlined />
    <LvButton icon="pi pi-check" class="lv--danger" outlined />

    <!-- <h5>Append / Prepend [slots]</h5>
        <LvButton type="button" label="Emails" badge="8" />
        <LvButton type="button" label="Messages" icon="pi pi-users" class="lv--warning" badge="8" badgeClass="lv-badge-danger" /> -->

    <h5>Sizes</h5>
    <div class="sizes">
      <LvButton
        label="Small"
        size="sm"
        icon="pi pi-check"
        class="lv--primary"
      />
      <LvButton
        label="Normal"
        size="md"
        icon="pi pi-check"
        class="lv--primary"
      />
      <LvButton
        label="Large"
        size="lg"
        icon="pi pi-check"
        class="lv--primary"
      />
      <LvButton
        label="Extra Large"
        size="xl"
        icon="pi pi-check"
        class="lv--primary"
      />
      <br />
      <LvButton icon="pi pi-check" size="sm" class="lv--primary" />
      <LvButton icon="pi pi-check" size="md" class="lv--primary" />
      <LvButton icon="pi pi-check" size="lg" class="lv--primary" />
      <LvButton icon="pi pi-check" size="xl" class="lv--primary" />
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
