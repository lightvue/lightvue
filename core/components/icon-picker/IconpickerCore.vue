<template>
  <div class="icons__wrap">
    <lv-input bottom-bar clearable icon-right="light-icon-search" placeholder="Search Icon" v-model="query" />
    <div class="icons-loader" v-if="loadingIcons">
      <lv-progress-spinner size="40px" />
    </div>
    <ul v-if="!loadingIcons" class="icons__list --all-icons light-scrollbar">
      <li @click="selectIcons(`light-icon-${iconName}`)" class="icons__list-item" v-for="iconName in filteredList" :key="iconName" :title="iconName">
        <i :class="`light-icon-${iconName}`"></i>
      </li>
    </ul>
    <ul class="icons__list --suggested-icons" v-if="!$attrs.hidePalette && !loadingIcons">
      <div class="suggested-icons__label">Suggested icons</div>
      <li @click="selectIcons(iconName)" class="icons__list-item" v-for="iconName in $attrs.icons" :key="iconName" :title="iconName">
        <i :class="iconName"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { trueValueMixin } from 'lightvue/mixins';
import LvInput from 'lightvue/input';
import LvProgressSpinner from 'lightvue/progress-spinner';

export default {
  data() {
    return {
      // apiPath: '/light-icon_list.json',
      query: '',
      allIcons: [],
      loadingIcons: false,
    };
  },
  components: {
    LvInput,
    LvProgressSpinner,
  },
  mixins: [trueValueMixin],
  computed: {
    filteredList: function () {
      return this.allIcons.filter(val => {
        return val.indexOf(this.query) !== -1;
      });
    },
  },
  created() {
    this.fetchAPI();
  },
  methods: {
    async fetchAPI() {
      this.loadingIcons = true;
      fetch('https://unpkg.com/light-icons/dist/light-icon_list.json')
        .then(_ => {
          return _.json();
        })
        .then(response => {
          this.allIcons = response;
          this.loadingIcons = false;
        });
    },
    selectIcons(iconName) {
      this.updateValue(iconName);
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
.icons-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}
.icons__wrap {
  width: 300px;
}
.icons__wrap .icons__list {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  // gap: 6px;
  &.--all-icons {
    max-height: 300px;
    overflow-y: scroll;
    margin-top: 12px;
    margin-right: -12px;
  }
  &.--suggested-icons {
    border-top: 1px solid rgba(100, 100, 100, 0.1);
    margin-top: 12px;
    padding-top: 12px;
    .suggested-icons__label {
      background-color: #f5f8fa;
      font-size: 12px;
      margin-top: -20px;
      position: absolute;
      padding: 0px 8px;
      color: #afb2b3;
    }
  }
}
.icons__list .icons__list-item {
  vertical-align: top;
  width: 36px;
  height: 36px;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  margin: 3px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  padding: 4px;
  &:hover {
    background-color: #607c8a;
    color: #fff;
  }
  i {
    font-size: 24px;
  }
}
</style>
