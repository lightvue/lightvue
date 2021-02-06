<template>
  <div class="icons__wrap">
    <div class="icons__search-row">
      <div class="icons__search-bar">
        <input class="icons__search-input" placeholder="Search Icons" v-model="query" type="text" />
        <i class="light-icon-search search-icon"></i>
      </div>
    </div>
    <ul class="icons__list">
      <li @click="copyIconTag(iconName)" class="icons__list-item" :class="{ '--copied': copiedIcon === iconName }" v-for="iconName in filteredList" :key="iconName">
        <i :class="`light-icon-${iconName}`"></i>
        <p class="icons__list-item-name">{{ iconName }}</p>
      </li>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="copy-btn-tag" v-show="copied"><i class="light-icon-circle-check" /> Copied to clipboard</div>
      </transition>
    </ul>
  </div>
</template>

<script>
import { copyToClipboard } from '@/utils';
export default {
  data() {
    return {
      apiPath: '/light-icon_list.json',
      query: '',
      allIcons: [],
      copiedIcon: '',
    };
  },
  computed: {
    filteredList: function () {
      return this.allIcons.filter(val => {
        return val.indexOf(this.query) !== -1;
      });
    },
  },
  created() {
    if (this.apiPath) {
      this.fetchAPI();
    }
  },
  methods: {
    async fetchAPI() {
      fetch(`${this.apiPath}`)
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
  },
};
</script>

<style scoped lang="scss">
.icons__search-row {
  position: sticky;
  top: 0px;
  margin: auto;
  padding: 40px 0;
  background: #f5f8fa;
  z-index: 10;
}
.icons__search-bar {
  position: relative;
  margin: 0 auto;
  width: 360px;
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
  width: 150px;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  padding: 10px 0 10px 0;
  margin: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #607c8a;
    color: #fff;
  }
  i {
    font-size: 50px;
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

.icons__list-item-name {
  margin: 0 0 10px 0 !important;
}

@media only screen and (max-width: 400px) {
  .icons__search-row {
    width: 250px;
  }
}
</style>
