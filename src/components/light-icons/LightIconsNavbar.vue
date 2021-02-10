<template>
  <div class="page-nav__tabs">
    <nuxt-link :to="{ hash: '' }" class="page-nav__tab"> Icons </nuxt-link>
    <nuxt-link :to="{ hash: 'docs' }" class="page-nav__tab"> Installation </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.page-nav__tabs {
  display: flex;
  margin: 5rem auto;
  margin-bottom: 0px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  .page-nav__tab {
    width: 50%;
    text-align: center;
    padding: 0.8rem 0;
    cursor: pointer;
    user-select: none;
    text-decoration: none;

    background-color: #ffffff;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: #edf2f6;
    }
    &.active,
    &.nuxt-link-exact-active {
      background-color: #607c8a !important;
      color: #fff !important;
    }
  }
}
</style>
