<template>
  <div class="page-nav__tabs">
    <div class="page-nav__tab" :class="{ active: selectedTab === 'icons' }" @click="selectTab('icons')">Icons</div>
    <div class="page-nav__tab" :class="{ active: selectedTab === 'api' }" @click="selectTab('api')">Installation</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'icons', //'api'
    };
  },
  created() {
    if (this.$route.hash?.includes('docs')) {
      this.selectedTab = 'api';
    } else {
      this.selectedTab = 'icons';
    }
  },
  methods: {
    selectTab(newTab) {
      this.selectedTab = newTab;
      this.$router.push({ hash: newTab === 'api' ? '#docs' : '' });
    },
  },
};
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
    color: #607c8a;

    background-color: #ffffff;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: #edf2f6;
    }
    &.active {
      background-color: #607c8a !important;
      color: #fff !important;
    }
  }
}
</style>
