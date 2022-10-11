<template>
  <div class="docs-page__wrap">
    <div class="main-center-area">
      <div class="content-section introduction">
        <div class="feature-intro">
          <div class="feature-intro__title">
            <div style="display: flex">
              <h1>{{ title }}</h1>
              <div class="feature-intro__title-right">
                <LvBadge v-if="status" :color="status.color" :title="status.description">{{ status.label }}</LvBadge>
                <slot name="title-right"></slot>
              </div>

              <slot name="title-below"></slot>
            </div>
            <nuxt-link :to="{ hash: '#docs-api' }" class="documentation-link">
              <span>#</span> Documentation
              <!-- <i class="light-icon-arrow-narrow-down"></i> -->
            </nuxt-link>
          </div>

          <p style="opacity: 0.8">
            {{ description }}
          </p>
          <slot name="description-below"></slot>
        </div>
      </div>

      <div class="content-section implementation" style="min-height: calc(100vh - 220px)">
        <div>
          <slot></slot>
        </div>
        <div>
          <slot name="api"></slot>
        </div>
      </div>
    </div>

    <aside class="right-sidebar light-scrollbar">
      <ul>
        <li v-for="(item, i) in pageContents" :key="i" class="right-sidebar__nav-item">
          <DocsPageCardsObserver :item="item">
            <nuxt-link :to="{ hash: `#${item.id}` }" :class="{ '--active': visibleCardId === item.id }">{{ item.title }}</nuxt-link>
          </DocsPageCardsObserver>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import LvBadge from 'lightvue/badge';
import DocsPageCardsObserver from './DocsPageCardsObserver.vue';
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: Object,
    },
    demoList: {
      type: Array,
    },
    hasPlayground: {
      type: Boolean,
      default: false,
    },
    hasDocs: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    LvBadge,
    DocsPageCardsObserver,
  },

  data() {
    return {
      visibleCardId: '',
      selectedTab: 'collection', //'api'
      pageContents: [],
    };
  },

  created() {
    //   if (this.$route.hash?.includes('docs')) {
    //     this.selectedTab = 'api';
    //   } else {
    //     this.selectedTab = 'collection';
    //   }
    this.initPageContents();
  },
  mounted() {
    if (!this.demoList) {
      setTimeout(() => {
        this.generatePageContents();
      }, 500);
    }
  },
  methods: {
    selectTab(newTab) {
      this.selectedTab = newTab;
      this.$router.push({ hash: newTab === 'api' ? '#docs' : '' });
    },
    initPageContents() {
      let pageContents = [];
      if (this.hasPlayground) {
        pageContents.push({
          id: 'playground',
          title: 'Playground',
        });
      }
      if (this.demoList) {
        pageContents.push(...this.demoList);
      }
      if (this.hasDocs) {
        pageContents.push({
          id: 'docs-api',
          title: 'Docs API',
        });
      }
      this.pageContents = pageContents;
    },
    generatePageContents() {
      let allDocsCards;
      let playground;

      let pageContents = [];
      if (document.getElementsByClassName('docs-card')) {
        allDocsCards = document.getElementsByClassName('docs-card');
      }
      if (document.getElementsByClassName('best__demo__wrapper')) {
        playground = document.getElementsByClassName('best__demo__wrapper');
      }
      if (playground[0]) {
        pageContents.push({
          id: playground[0].id,
          title: 'Playground',
        });
      }
      if (allDocsCards) {
        Array.from(allDocsCards).forEach(card => {
          let id = card.id;
          let title = card.id
            .split('-')
            .join(' ')
            .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
          pageContents.push({ id: id, title: title === 'Docs Api' ? 'Docs API' : title });
        });
      }
      this.pageContents = pageContents;
    },
  },
};
</script>

<style lang="scss">
$primary-color: #38b2ac;
.docs-page__wrap {
  display: flex;
  justify-content: space-between;
}
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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .feature-intro__title-right {
    margin-left: 1rem;
    margin-bottom: 1rem; /** To normatize the default margin below H1 */
    display: flex;
    align-items: center;
  }
}
.right-sidebar {
  position: fixed;
  right: 16px;
  top: 6.3rem;
  max-height: calc(100vh - 6.3rem);
  padding-right: 16px;
  padding-bottom: 32px;
  // overflow-y: scroll;
  max-width: 200px;
  text-align: right;
}
.right-sidebar__nav-item {
  cursor: pointer;
  padding: 8px 0px;
  font-weight: 400;
  a {
    color: #9badb7;
    padding: 4px 12px 4px 12px;
    border-radius: 20px;
    // white-space: nowrap;
    &:hover {
      color: #79909c;
      // background-color: #e4f3f4;
    }
    &.active,
    &.--active {
      color: $primary-color;
      // font-weight: 600;
      background-color: rgba(56, 178, 172, 0.1);
    }
  }
}
.main-center-area {
  max-width: calc(100% - 200px);
  flex: 1;
}
.documentation-link {
  opacity: 0.8;
  font-size: 15px;
  font-weight: inherit;
  color: #566d79;
  cursor: pointer;
  span {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }
  &:hover {
    opacity: 1;
    span {
      opacity: 0.8;
    }
  }
}
@media only screen and (max-device-width: 1080px) {
  .main-center-area {
    max-width: 100%;
  }
  .right-sidebar {
    display: none;
  }
}
</style>
