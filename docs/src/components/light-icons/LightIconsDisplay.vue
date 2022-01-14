<template>
  <div class="icons__wrap" style="min-height: 90vh">
    <br /><br />
    <div class="icons__search-row" ref="searchRow">
      <div class="icons__search-bar">
        <input class="icons__search-input" placeholder="Search Icon" v-model="query" type="text" />
        <i class="light-icon-search search-icon"></i>
      </div>
    </div>

    <br /><br />
    <div class="icons__search-row --sticky" v-if="stickySearchBar">
      <div class="icons__search-bar">
        <input class="icons__search-input" placeholder="Search Icon" v-model="query" type="text" />
        <i class="light-icon-search search-icon"></i>
      </div>
    </div>
    <ul class="icons__list">
      <li @click="copyIconTag(iconName)" class="icons__list-item" :class="{ '--copied': copiedIcon === iconName }" v-for="iconName in filteredList" :key="iconName">
        <i :class="`light-icon-${iconName}`"></i>
        <p class="icons__list-item-name">{{ iconName }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { copyToClipboard } from '@/utils';
export default {
  data() {
    return {
      // apiPath: '/light-icon_list.json',
      query: '',
      allIcons: [],
      copiedIcon: '',
      stickySearchBar: false,
    };
  },
  computed: {
    filteredList: function () {
      return this.allIcons.filter(val => {
        return val.indexOf(this.query) !== -1;
      });
    },
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll);
  },
  created() {
    this.fetchAPI();
  },
  methods: {
    async fetchAPI() {
      fetch('https://unpkg.com/light-icons/dist/light-icon_list.json')
        .then(_ => {
          return _.json();
        })
        .then(response => {
          this.allIcons = response;
        });
    },
    copyIconTag(iconName) {
      const text = `<i class="light-icon-${iconName}"></i>`;
      this.copiedIcon = iconName;
      copyToClipboard(text)
        .then(() => {
          // this.copied = true;
          clearTimeout(this.timer);
          setTimeout(() => {
            // this.copied = false;
            this.copiedIcon = '';
            // this.timer = null;
          }, 2000);
        })
        .catch(() => {});
    },
    handleScroll(event) {
      this.stickySearchBar = window.top.scrollY > this.$refs.searchRow.offsetTop ? true : false;
    },
  },
};
</script>

<style lang="scss">
.icons__search-row {
  position: relative;
  top: 0px;
  // margin: px -30px;
  padding: 16px 0;
  background: #f5f8fa;
  z-index: 10;
  &.--sticky {
    box-shadow: -4px 4px 25px -4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 60px;
    right: 0px;
    width: 100%;
    z-index: 101;
  }
}
.icons__search-bar {
  position: relative;
  margin: 0 auto;
  max-width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.icons__search-input {
  outline: none;
  width: 100%;
  padding: 15px 40px 15px 20px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 20px;
  transition: all 0.25s ease;
  &:focus {
    outline: none;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
  }
}
.search-icon {
  position: absolute;
  right: 15px;
  font-size: 1.5rem;
  transition: all 0.25s ease;
  opacity: 0.5;
}

.icons__wrap {
  max-width: 1290px;
  margin: 0 auto;
  color: #566d79;
  background-color: #f5f8fa;
  font: 12px/1.5 roboto, arial, \5b8b\4f53, sans-serif;
}
.icons__wrap .icons__list {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
}
.icons__list .icons__list-item {
  vertical-align: top;

  width: 144px;
  max-width: 120px;
  min-width: 100px;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  padding: 8px;
  margin: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  flex: 1 1 0;
  &:hover {
    background-color: #607c8a;
    color: #fff;
  }
  i {
    font-size: 36px;
  }
  &.--copied::after {
    position: absolute;
    top: 0px;
    left: 0px;
    content: 'Icon Copied';
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #607c8a;
    color: #ffffff;
    border-radius: 12px;
  }
}
@media only screen and (max-width: 400px) {
  .icons__list-item {
  }
}
@media (min-width: 769px) {
  /** Same as main sidebar **/
  .icons__search-row.--sticky {
    width: calc(100% - 250px);
  }
}
</style>
