<template>
  <div :class="containerClass">
    <span class="lv-rating-icon lv-rating-cancel pi pi-ban" :tabindex="focusIndex" v-if="cancel" @click="onCancelClick"></span>
    <span :key="i" v-for="i in stars" @click="onStarClick($event, i)" :tabindex="focusIndex" @keydown.enter.prevent="onStarClick($event, i)" :class="['lv-rating-icon', { 'pi pi-star-o': i > value, 'pi pi-star': i <= value }]"></span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    stars: {
      type: Number,
      default: 5,
    },
    cancel: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onStarClick(event, value) {
      if (!this.readonly && !this.disabled) {
        this.updateModel(event, value);
      }
    },
    onCancelClick() {
      if (!this.readonly && !this.disabled) {
        this.updateModel(event, null);
      }
    },
    updateModel(event, value) {
      this.$emit('input', value);
      this.$emit('change', {
        originalEvent: event,
        value: value,
      });
    },
  },
  computed: {
    containerClass() {
      return [
        'lv-rating',
        {
          'lv-readonly': this.readonly,
          'lv-disabled': this.disabled,
        },
      ];
    },
    focusIndex() {
      return this.disabled || this.readonly ? null : '0';
    },
  },
};
</script>

<style>
.lv-rating-icon {
  cursor: pointer;
}

.lv-rating.lv-rating-readonly .lv-rating-icon {
  cursor: default;
}
</style>
