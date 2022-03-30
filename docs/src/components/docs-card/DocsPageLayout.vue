<template>
  <div class="d-flex">
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
            <div class="documentation-title" @click="scrollTo('docs-api')">
              <h4>Documentation</h4>
              <!-- <i class="light-icon-arrow-narrow-down"></i> -->
            </div>
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

    <aside class="right-sidebar">
      <ul>
        <li v-for="(item, i) in fakeitems" :key="i">
          <Observer :item="item">
            <div @click="scrollTo(item.id, $event)" class="list-item" :class="{ '--active': visibleCardId === item.id }">{{ item.title }}</div>
          </Observer>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import LvBadge from 'lightvue/badge';
import Observer from './Observer.vue';
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    // cards: {
    //   type: Array,
    //   default: [],
    // },
    status: {
      type: Object,
    },
  },
  components: {
    LvBadge,
    Observer,
  },

  data() {
    return {
      visibleCardId: '',
      selectedTab: 'collection', //'api'
      // fakeitems: [
      //   {
      //     title: 'Getting Started',
      //     discription: 'Initial setup instructions',
      //   },
      //   {
      //     title: 'Docs Api',
      //     discription: 'Api info',
      //   },
      // ],
      fakeitems: [],
    };
  },

  // created() {
  //   if (this.$route.hash?.includes('docs')) {
  //     this.selectedTab = 'api';
  //   } else {
  //     this.selectedTab = 'collection';
  //   }
  //   // this.fakeitems = [{ title: 'Playground' }, ...this.cards, ...this.fakeitems];
  // },
  methods: {
    selectTab(newTab) {
      this.selectedTab = newTab;
      this.$router.push({ hash: newTab === 'api' ? '#docs' : '' });
    },
    scrollTo(item, e) {
      const element = document.getElementById(item);

      if (element) {
        this.$router.push({ hash: `#${item}` });
        // window.scrollTo({ top: element.offsetTop + 1, behavior: 'smooth' });
      }

      // e.target.classList.add('active');
    },
    isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    },
  },
  mounted() {
    setTimeout(() => {
      let cards;
      let playground;
      if (document.getElementsByClassName('docs-card')) {
        cards = document.getElementsByClassName('docs-card');
      }
      if (document.getElementsByClassName('best__demo__wrapper')) {
        playground = document.getElementsByClassName('best__demo__wrapper');
      }
      if (playground[0]) {
        this.fakeitems.push({
          id: playground[0].id,
          title: 'Playground',
        });
      }
      if (cards) {
        Array.from(cards).forEach(card => {
          let id = card.id;
          let title = card.id
            .split('-')
            .join(' ')
            .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
          this.fakeitems.push({ id: id, title: title });
        });
      }
    }, 1000);
  },
};
</script>

<style lang="scss">
$primary-color: #38b2ac;
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
  right: 30px;
  top: 6.3rem;
  max-height: calc(100vh - 6.5rem);
  overflow-y: scroll;
  max-width: 200px;
  text-align: right;
}
.d-flex {
  display: flex;
  justify-content: space-between;
}
.list-item {
  cursor: pointer;
  padding: 10px 3px;
  font-weight: 400;
  color: #9badb7;
  &:hover {
    /* background: #ddd;
    border-radius: 10px; */
    color: #79909c;
  }
}
.active {
  color: $primary-color;
  font-weight: 600;
}
.main-center-area {
  max-width: calc(100% - 200px);
  flex: 1;
}
.documentation-title {
  h4 {
    opacity: 0.8;
    font-size: 15px;
    font-weight: inherit;
    color: #566d79;
    cursor: pointer;
    &:hover {
      opacity: 1;
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
