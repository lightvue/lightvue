<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>{{ title }}</h1>
        <p style="opacity: 0.8">
          {{ description }}
        </p>
      </div>
    </div>

    <div
      class="content-section implementation"
      style="min-height: calc(100vh - 260px)"
    >
      <div class="content-header">
        <div
          class="demo-tab"
          :class="{ active: selectedTab === 'collection' }"
          @click="selectedTab = 'collection'"
        >
          Collection
        </div>
        <div
          class="demo-tab"
          :class="{ active: selectedTab === 'api' }"
          @click="selectedTab = 'api'"
        >
          Documentation
        </div>
      </div>
      <div v-show="selectedTab === 'collection'">
        <slot></slot>
      </div>
      <div v-show="selectedTab === 'api'">
        <slot name="api"></slot>
      </div>
    </div>
    <nuxt />
    <div class="content-section introduction">
      <div class="feature-intro">
        <app-footer />
      </div>
    </div>
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    AppFooter,
  },
  props: ["title", "description"],
  data() {
    return {
      selectedTab: "collection", //'api'
    };
  },
  created() {
    if (this.$route.hash?.includes("docs")) {
      this.selectedTab = "api";
    } else {
      this.selectedTab = "collection";
    }
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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

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
</style>
