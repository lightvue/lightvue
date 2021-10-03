<template>
  <div class="breadcrumb">
    <div
      class="breadcrumb__item"
      :class="{
          '--disabled' : link.disabled,
      }"
      v-for="link in items"
      :key="link.href"
    >
      <a
        class="breadcrumb__item__link"
        :href="link.href"
        :style="{
            fontSize : `${fontSize}px`,
            color: `${link.disabled ? disabledLinkColor:linkColor}`
        }"
      >{{link.text}}</a>
      <span
        class="breadcrumb__item__slot"
        :style="{
          fontSize:`${parseInt(fontSize) + 8 }px`,
          color:`${slotColor}`
      }"
      >
        <slot>/</slot>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
    },
    linkColor: {
      type: String,
      default: '#6d6d79',
    },
    disabledLinkColor: {
      type: String,
      default: '#aaaaaa',
    },
    slotColor: {
      type: String,
      default: '#607c8a',
    },
    fontSize: {
      type: String,
      default: '16',
    },
  },
};
</script>
<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  // margin: 10px;
  .breadcrumb__item {
    display: flex;
    align-items: center;
    padding-left: 10px;
    .breadcrumb__item__link {
      text-decoration: none;
      &:hover {
        opacity: 0.8;
      }
    }
    .breadcrumb__item__slot {
      display: flex;
      align-items: center;
      padding-left: 10px;
      i {
        font-size: inherit;
      }
    }
    &:last-child {
      padding-right: 10px;
      .breadcrumb__item__slot {
        display: none;
      }
    }
    &:first-child {
      padding-left: 0;
    }
    // Modifiers
    &.--disabled {
      a {
        pointer-events: none;
      }
    }
  }
}
</style>
