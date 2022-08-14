<template>
  <div>
    <div ref="outerIconsWrap" class="icons__wrap">
      <div class="icons__search-row" ref="searchRow">
        <div class="icons__search-bar">
          <input class="icons__search-input" placeholder="Search Icon" v-model="query" type="text" />
          <i class="light-icon-search search-icon"></i>
        </div>
      </div>

      <div class="icons__search-row --sticky" v-if="stickySearchBar">
        <div class="icons__search-bar">
          <input class="icons__search-input" placeholder="Search Icon" v-model="query" type="text" />
          <i class="light-icon-search search-icon"></i>
        </div>
      </div>

      <ul class="icons__list">
        <li @click="selectIcons(iconName)" class="icons__list-item" v-for="iconName in filteredList" :key="iconName">
          <i :class="`light-icon-${iconName}`"></i>
          <p class="icons__list-item-name">{{ iconName }}</p>
        </li>
      </ul>
    </div>

    <div class="icon__palette-container" v-if="!$attrs.hidePalette">
      <div class="lv-iconpicker__iconblock-wrap" style="transform: scale(0.55); height: 35px; flex-basis: 12.5%" v-for="(icon, i) in $attrs.icons" :key="i" @click="handlePaletteIcon(icon)">
        <i :class="icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { trueValueMixin } from 'lightvue/mixins';
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
      fetch('https://unpkg.com/light-icons/dist/light-icon_list.json')
        .then(_ => {
          return _.json();
        })
        .then(response => {
          this.allIcons = response;
        });
    },
    selectIcons(iconName) {
      this.updateValue(`light-icon-${iconName}`);
      this.$emit('close');
    },
    handlePaletteIcon(icon) {
      this.updateValue(icon);
      this.$emit('close');
    },
    handleScroll(event) {
      this.stickySearchBar = this.$refs.searchRow.top.scrollY > this.$refs.outerIconsWrap.offsetTop ? true : false;
    },
  },
  mounted() {
    // this.$refs.outerIconsWrap.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    // this.$refs.outerIconsWrap.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss">
.icons__search-row {
  top: 0px;
  padding-top: 2px;
  padding-bottom: 10px;
  z-index: 10;
  &.--sticky {
    box-shadow: -4px 4px 25px -4px rgba(0, 0, 0, 0.15);
    position: relative;
    top: 0px;
    left: 2px;
    z-index: 101;
  }
}
.icons__search-bar {
  position: relative;
  margin: 0 auto;
  padding: 2px 7px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.icons__search-input {
  outline: none;
  height: 4vh;
  width: 100%;
  padding: 7px 5px 7px 20px;
  font-size: 0.8rem;
  box-sizing: border-box;
  border: 0px;
  border-radius: 20px;
  transition: all 0.25s ease;
  color: #3a3f42;
  &:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 3px rgba(235, 237, 239, 0.8);
  }
}
.icons__search-input::placeholder {
  color: #ccc;
}
.search-icon {
  position: absolute;
  right: 15px;
  font-size: 0.8rem;
  transition: all 0.25s ease;
  opacity: 0.5;
}

.icons__wrap {
  margin: -1rem;
  padding: 1rem;
  width: 50vw;
  height: 40vh;
  overflow-y: scroll;
  color: #566d79;
  font: 12px/1.5 roboto, arial, \5b8b\4f53, sans-serif;
}
.icons__wrap .icons__list {
  text-align: center;
  padding: 0 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
}
.icons__list .icons__list-item {
  vertical-align: top;
  width: 10vw;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  margin: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  flex: 1 1 0;
  &:hover {
    background-color: #607c8a;
    color: #fff;
  }
  i {
    font-size: 30px;
  }
  p {
    font-size: 5px;
    cursor: pointer;
  }
}
.icon__palette-container {
  border-top: 1px solid rgba(100, 100, 100, 0.4);
  margin-top: 25px;
  width: 42vw;
  padding: 8px 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.icon__palette-container .lv-iconpicker__iconblock-wrap {
  i {
    cursor: pointer;
    font-size: 20px;
  }
}
@media only screen and (min-width: 640px) {
  .icon__palette-container {
    width: 35vw;
  }
  .icon__palette-container .lv-iconpicker__iconblock-wrap {
    i {
      font-size: 30px;
    }
  }
  .icons__list .icons__list-item {
    width: 20vw;
    i {
      font-size: 50px;
    }
    p {
      font-size: 8px;
    }
  }
  .icons__wrap {
    width: 38vw;
  }
  .search-icon {
    font-size: 1.2rem;
  }
  .icons__search-input {
    height: 6vh;
    font-size: 1.2rem;
  }
}
@media (min-width: 769px) {
  /** Same as main sidebar **/
  .icons__search-row.--sticky {
    // width: calc(100% - 250px);
  }
}
</style>
