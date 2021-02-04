<template>
  <div :class="`sidebar ${showDrawer ? 'show-drawer' : ''}`" @click="$emit('toggle-drawer')">
    <div class="nav-list">
      <div class="sidebar__logo" @click="$router.push('/')">
        <img src="/logo_v2.png" class="header-logo" />
        <!-- <h3>&nbsp; LightVue</h3> -->
      </div>
      <div class="nav-list__category-wrap" v-for="category in $options.categories" :key="category.category_name" :class="{ '--active': activeCategory === category.category_name }">
        <div class="nav-list__category" @click.stop="setActiveCategory(category.category_name)">
          <div class="nav-list__category-label">
            <i :class="category.category_icon"></i>
            {{ category.category_name }}
          </div>
          <i :class="activeCategory === category.category_name ? 'light-icon-chevron-up' : 'light-icon-chevron-down'"></i>
        </div>
        <div class="nav-list__category-items" v-show="activeCategory === category.category_name">
          <nuxt-link :to="page.page_path" class="nav-list__category-item --link" v-for="page in category.pages" :key="page.page_name">
            <div class="nav-list__item-line"></div>
            <div class="nav-list__item-bullet"></div>
            <div class="nac-list__item-label">
              {{ page.page_name }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showDrawer'],
  data() {
    return {
      activeCategory: 'Form',
    };
  },
  created() {
    this.getActiveCategory();
  },
  methods: {
    getActiveCategory() {
      for (let category of this.$options.categories) {
        for (let page of category.pages) {
          if (this.$route.path.includes(page.page_path)) {
            this.activeCategory = category.category_name;
            return;
          }
        }
      }
    },
    setActiveCategory(newCategory) {
      this.activeCategory = this.activeCategory === newCategory ? '' : newCategory;
    },
  },

  categories: [
    {
      category_name: 'Getting Started',
      category_icon: 'light-icon-info-circle',
      pages: [
        {
          page_name: 'Installation',
          page_path: '/getting-started/installation',
        },
        {
          page_name: 'Customization',
          page_path: '/vue-components/customize',
        },
      ],
    },
    {
      category_name: 'Form Elements',
      category_icon: 'light-icon-clipboard',
      pages: [
        {
          page_name: 'Button',
          page_path: '/vue-components/button',
        },
        {
          page_name: 'Checkbox',
          page_path: '/vue-components/checkbox',
        },
        {
          page_name: 'Color Picker',
          page_path: '/vue-components/color-picker',
        },
        {
          page_name: 'Dropdown',
          page_path: '/vue-components/dropdown',
        },
        {
          page_name: 'Input',
          page_path: '/vue-components/input',
        },
        {
          page_name: 'Rating',
          page_path: '/vue-components/rating',
        },
        {
          page_name: 'Slider',
          page_path: '/vue-components/slider',
        },
        {
          page_name: 'Toggle Switch',
          page_path: '/vue-components/toggle-switch',
        },
      ],
    },
    {
      category_name: 'Loaders',
      category_icon: 'light-icon-rotate-clockwise',
      pages: [
        {
          page_name: 'Progress Bar',
          page_path: '/vue-components/progress-bar',
        },
        {
          page_name: 'Progress Spinner',
          page_path: '/vue-components/progress-spinner',
        },
        {
          page_name: 'Quick Loader',
          page_path: '/vue-components/page-loader',
        },
        {
          page_name: 'Shimmer',
          page_path: '/vue-components/shimmer',
        },
      ],
    },
    {
      category_name: 'Misc.',
      category_icon: 'light-icon-square-plus',
      pages: [
        {
          page_name: 'Cards',
          page_path: '/vue-components/card',
        },
        {
          page_name: 'Glassmorphic Card',
          page_path: '/vue-components/glassmorphic-card',
        },
        {
          page_name: 'Overlay Panel',
          page_path: '/vue-components/overlay-panel',
        },
      ],
    },
  ],
};
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  left: 0;
  height: 100vh;
  overflow: auto;
  width: 250px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
  transition: -webkit-transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
  transition: transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
  transition: transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99), -webkit-transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  // background: #405364;
  background-color: #133a56;
  // border: 1px solid #1f2a35;
  z-index: 1000;
}
.nav-list__category-wrap {
  border-radius: 0px;
  // background: #3f5062;
  border-left: 5px solid rgba(0, 0, 0, 0);

  // border-bottom: 1px solid #314254;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  // box-shadow: inset 7px 7px 100px #364453, inset -7px -7px 100px #485c71;
  &.--active {
    box-shadow: inset 0px 0px 1px #212a33, inset 0px 0px 2px #212a33;
    background-color: rgba(255, 255, 255, 0.04);
    border-left: 5px solid #38b2ac;
  }
}

.nav-list__category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  .nav-list__category-label {
    display: flex;
    align-items: center;
  }
  i {
    font-size: 20px;
    margin-right: 8px;
    min-width: 20px;
    height: 20px;
  }

  color: #fafbff;
  cursor: pointer;
  font-size: 18px;
}
.nav-list {
  .nav-list__category-items {
    padding: 0px 16px 8px;
    margin-left: 8px;
    margin-top: -8px;
  }

  .nav-list__item-line {
    width: 20px;
    border-bottom: 1px dotted #566779;
  }

  .nav-list__item-bullet {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #566779;
  }
  .nav-list__category-item {
    display: flex;
    align-items: center;
    border-left: 1px dotted #57687a;
    padding: 8px 0px;
    text-indent: 10px;
    &.--link {
      cursor: pointer;
      color: #bdc4c8;
      &:hover,
      &:focus {
        color: #ffffff;
      }
      &.nuxt-link-active {
        color: #38b2ac;
        // border-left: 1px dotted #38b2ac;
        .nav-list__item-line {
          border-bottom: 1px dotted #38b2ac;
        }
        .nav-list__item-bullet {
          background-color: #38b2ac;
        }
      }
    }
  }
}

.sidebar__logo {
  padding: 12px;
  cursor: pointer;
  .header-logo {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .sidebar {
    height: 100%;
    top: 0px;
    z-index: 999;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;
  }
  .sidebar.show-drawer {
    transform: translateX(0px);
  }
  .menu-icon {
    display: none;
  }
  .sidebar__logo {
    display: flex;
  }
}
</style>
