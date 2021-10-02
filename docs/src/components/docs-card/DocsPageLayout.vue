<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <div class="feature-intro__title">
          <h1>{{ title }}</h1>
          <div class="feature-intro__title-right">
            <slot name="title-right"></slot>
          </div>
        </div>
        <slot name="title-below"></slot>

        <p style="opacity: 0.8">
          {{ description }}
        </p>
        <slot name="description-below"></slot>
      </div>
    </div>

    <div class="content-section implementation" style="min-height: calc(100vh - 220px)">
      <div class="content-header">
        <div class="demo-tab" :class="{ active: selectedTab === 'collection' }" @click="selectTab('collection')">Collection</div>
        <div class="demo-tab" :class="{ active: selectedTab === 'api' }" @click="selectTab('api')">Documentation</div>
      </div>
      <div v-show="selectedTab === 'collection'">
        <slot></slot>
      </div>
      <div v-show="selectedTab === 'api'">
        <slot name="api"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description'],
  data() {
    return {
      selectedTab: 'collection', //'api'
    };
  },
  created() {
    if (this.$route.hash?.includes('docs')) {
      this.selectedTab = 'api';
    } else {
      this.selectedTab = 'collection';
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
.content-header {
  display: flex;
  width: 100%;
  //   border: 1px solid #cccccc;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 0 2rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  .demo-tab {
    width: 50%;
    text-align: center;
    padding: 0.8rem 0;
    cursor: pointer;
    user-select: none;

    background-color: #ffffff;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: #edf2f6;
    }
    &.active {
      background-color: #607c8a;
      color: #fff;
    }
  }
}
.feature-intro__title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .feature-intro__title-right {
    margin-left: 1rem;
    margin-bottom: 1rem; /** To normatize the default margin below H1 */
  }
}
</style>
