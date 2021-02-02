<template>
  <div>
    <LvButton type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria:haspopup="true" aria-controls="overlay_panel" />

    <LvOverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 450px">
      <DataTable :value="products" :selection.sync="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
        <Column field="name" header="Name" sortable></Column>
        <Column header="Image">
          <template #body="slotProps">
            <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" />
          </template>
        </Column>
        <Column field="price" header="Price" sortable>
          <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
          </template>
        </Column>
      </DataTable>
    </LvOverlayPanel>
    <h5>Auto Width and right-aligned overlay-panel</h5>
    <LvButton type="button" label="Image Overlay" @click="toggleImageOverlay" aria:haspopup="true" aria-controls="image_overlay_panel" />

    <LvOverlayPanel ref="imageOverlay" append-to="body" :show-close-icon="true" id="image_overlay_panel" alignRight>
      <h3>Right-aligned overlay panel [PROP: alignRight]</h3>
      <img :src="'demo/images/product/bamboo-watch.jpg'" class="product-image --large" />
    </LvOverlayPanel>
  </div>
</template>

<script>
import ProductService from '@/service/ProductService';
import LvOverlayPanel from '@/collections/overlay-panel/OverlayPanel.vue';

export default {
  data() {
    return {
      products: null,
      selectedProduct: null,
    };
  },
  productService: null,
  created() {
    this.productService = new ProductService();
  },
  mounted() {
    this.productService.getProductsSmall().then(data => (this.products = data));
  },
  methods: {
    toggle(event) {
      this.$refs.op.toggle(event);
    },
    toggleImageOverlay(event) {
      this.$refs.imageOverlay.toggle(event);
    },
    formatCurrency(value) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    },
    onProductSelect(event) {
      this.$refs.op.hide();
      this.$toast.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name, life: 3000 });
    },
  },
  components: {
    LvOverlayPanel,
  },
};
</script>

<style lang="scss" scoped>
button {
  min-width: 15rem;
}

.product-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &.--large {
    width: 300px;
  }
}
</style>
