<template>
  <div class="content-section implementation breadcrumb-example-wrapper">
    <h5>Basic:</h5>
    <LvBreadcrumb :items="items"></LvBreadcrumb>

    <h5>Custom Slot Item</h5>
    <LvBreadcrumb :items="items"> > </LvBreadcrumb>

    <h5>Custom Slot Item with LightIcons</h5>
    <LvBreadcrumb :items="items"> <i class="light-icon-arrow-narrow-right"></i> </LvBreadcrumb>

    <h5>Custom Size</h5>
    fontSize = "20"
    <br />
    <br />
    <LvBreadcrumb
      :items="items"
      fontSize="20"
    ></LvBreadcrumb>

    <h5>Colored Links </h5>
    linkColor = '#38b2ac'
    <br />
    <br />
    <LvBreadcrumb
      :items="items"
      linkColor="#38b2ac"
    ></LvBreadcrumb>

    <h5>Colored disabled Link</h5>
    disabledLinkColor = "#cccccc"
    <br />
    <br />
    <LvBreadcrumb
      :items="items"
      disabledLinkColor="#cccccc"
    ></LvBreadcrumb>

    <h5>Colored slots</h5>
    slotColor = "38b2ac"
    <br />
    <br />
    <LvBreadcrumb
      :items="items"
      slotColor="#38b2ac"
    ></LvBreadcrumb>

  </div>
</template>
<script>
import LvBreadcrumb from '../../core/components/breadcrumb/Breadcrumb';
export default {
  components: {
    LvBreadcrumb,
  },
  data: () => ({
    items: [
      {
        text: 'Link 0',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.breadcrumb-example-wrapper {
  width: max-content;
}
</style>