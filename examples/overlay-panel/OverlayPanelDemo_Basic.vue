<template>
  <div class="lv-demo_layout">
    <LvButton class="lv--primary" type="button" icon="light-icon-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria:haspopup="true" aria-controls="overlay_panel" />

    <LvOverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 450px">
      <img src="@/assets/images/demo/bamboo-watch.jpg" class="product-image --auto" />
    </LvOverlayPanel>

    <LvButton type="button" label="Image Overlay" @click="toggleImageOverlay" aria:haspopup="true" aria-controls="image_overlay_panel" />

    <LvOverlayPanel ref="imageOverlay" append-to="body" :show-close-icon="true" id="image_overlay_panel" align-right>
      <h3>Right-aligned overlay panel [PROP: alignRight]</h3>
      <img src="@/assets/images/demo/bamboo-watch.jpg" class="product-image --large" />
    </LvOverlayPanel>
  </div>
</template>

<script>
import LvButton from 'lightvue/button';
// import ProductService from '@/service/ProductService';
import LvOverlayPanel from 'lightvue/overlay-panel';

export default {
  data() {
    return {
      products: null,
      selectedProduct: null,
    };
  },
  // productService: null,
  // created() {
  //   this.productService = new ProductService();
  // },
  // mounted() {
  //   this.productService.getProductsSmall().then(data => (this.products = data));
  // },
  methods: {
    toggle(event) {
      this.$refs.op.toggle(event);
    },
    toggleImageOverlay(event) {
      this.$refs.imageOverlay.toggle(event);
    },
    // formatCurrency(value) {
    //   return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // },
    // onProductSelect(event) {
    //   this.$refs.op.hide();
    //   this.$toast.add({ type: 'info', title: 'Product Selected', content: event.data.name, duration: 3000 });
    // },
  },
  components: {
    LvOverlayPanel,
    LvButton,
  },
};
</script>

<style lang="scss" scoped>
button {
  min-width: 15rem;
}
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.product-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &.--large {
    width: 300px;
  }
  &.--auto {
    width: 100%;
  }
}
</style>
