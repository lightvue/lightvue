<template>
  <div class="d-flex">
    <div style="max-width: 80%; flex: 1" id="leftContainer">
      <div class="content-section introduction">
        <div class="feature-intro">
          <div class="feature-intro__title">
            <h1>{{ title }}</h1>
            <div class="feature-intro__title-right">
              <LvBadge v-if="status" :color="status.color" :title="status.description">{{ status.label }}</LvBadge>
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

    <div style="max-width: 15%" id="rightContainer" class="light-scrollbar right-sidebar --theme-light">
      <ul v-for="(item, i) in fakeitems" :key="i">
        <ListItem :item="item">
          <li @click="navigate(item.id, $event)" class="list-item">{{ item.title }}</li>
        </ListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import LvBadge from 'lightvue/badge';
import ListItem from './ListItem.vue';
export default {
  props: ['title', 'description', 'status'],
  components: {
    LvBadge,
    ListItem,
  },

  data() {
    return {
      selectedTab: 'collection', //'api'
      fakeitems: [],
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
    navigate(item, e) {
      const element = document.getElementById(item);
      console.log(element);
      if (element) {
        window.scrollTo({ top: element.offsetTop + 1, behavior: 'smooth' });
      }

      e.target.classList.add('active');
    },
    computedStyle() {
      // setTimeout(() => {
      //   console.log(this.$refs.leftContainer.offsetWidth);
      //   console.log(this.$refs.rightContainer.offsetWidth);
      //   this.$refs.leftContainer.style.width = this.$refs.leftContainer.offsetWidth - this.$refs.rightContainer.offsetWidth + 'px';
      // }, 1500);
      // console.log(document.getElementById('leftContainer'));
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
        // cards.forEach(card => {
        //   let id = card.id;
        //   let title = card.id.split('-').join(' ').toUpperCase();
        //   this.fakeitems.push({ id: id, title: title });
        // });
      }

      console.log(this.fakeitems);
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
  justify-content: flex-start;
  align-items: center;
  .feature-intro__title-right {
    margin-left: 1rem;
    margin-bottom: 1rem; /** To normatize the default margin below H1 */
    display: flex;
    align-items: center;
  }
}
.right-sidebar {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  overflow: auto;

  padding-right: 1rem;
  text-align: right;
  padding-right: 2rem;
  padding-top: 6.3rem;
}
.d-flex {
  display: flex;
  justify-content: space-between;
}
.list-item {
  cursor: pointer;
  padding: 10px 3px;
  font-weight: 400;
  &:hover {
    background: #ddd;
    border-radius: 10px;
  }
}
.active {
  color: $primary-color;
}
</style>
