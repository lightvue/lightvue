<template>
  <div class="app-searchui-wrapper">
    <ais-instant-search index-name="lightvueDemo" :search-client="searchClient">
      <div class="app-searchui__bar-wrapper">
        <ais-search-box placeholder="Type to start searching..." class="searchbox">
          <div slot-scope="{ isSearchStalled, refine }">
            <lv-input icon-left="light-icon-search" type="search" :value="queryString" bottom-bar @input="handleOnType($event, refine)" placeholder="Type to start searching..." />
            <span :hidden="!isSearchStalled"></span>
          </div>
        </ais-search-box>
      </div>
      <div v-show="queryString" id="app-searchui__results-wrapper" @click="clearSearchbox">
        <ais-hits>
          <template slot="item" slot-scope="{ item }">
            <nuxt-link :to="`/vue-components/${item.docslink}`">
              <ais-highlight class="app-searchui__results__title" :hit="item" attribute="name" />
              <i class="app-searchui__results__icon light-icon-arrow-right-circle"></i>
              <br />
              <ais-highlight class="app-searchui__results__category" :hit="item" attribute="category" /> <br />
              <ais-highlight class="app-searchui__results__desc" :hit="item" attribute="description" />
            </nuxt-link>
          </template>
        </ais-hits>
      </div>
    </ais-instant-search>
  </div>
</template>

<script>
import { AisInstantSearch, AisHits, AisHighlight, AisSearchBox, createServerRootMixin } from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite';

export default {
  name: 'AppSearch',
  data() {
    return {
      resultsOpen: false,
      queryString: '',
      searchClient: algoliasearch(process.env.ALGOLIA_PROJECT_ID, process.env.ALGOLIA_API_KEY),
    };
  },
  methods: {
    clearSearchbox() {
      this.queryString = '';
    },
    handleOnType(value, refine) {
      refine(value);
      this.queryString = value;
    },
  },
  components: {
    algoliasearch,
    AisInstantSearch,
    AisSearchBox,
    AisHits,
    AisHighlight,
    createServerRootMixin,
  },
};
</script>
<style>
@keyframes fadein {
  0% {
    opacity: 0;
    margin-top: -5px;
  }
}

.app-searchui-wrapper {
  position: relative;
  width: 100%;
  height: max-content;
  top: -20px;
  padding: 5px;
  padding-top: 0;
  background-color: white;
  background-color: transparent;
}

.ais-SearchBox-input {
  position: relative;
  padding: 10px;
  padding-left: 30px;
  height: 40px;
  transition: all 0.3s;
}

.ais-SearchBox-input:focus {
  border-color: #607c8a;
  outline: #607c8a;
}

#app-searchui__results-wrapper {
  margin-top: 0px;
  height: max-content;
  overflow: hidden;
  padding-top: 15px;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 1px 10px 10px -4px rgba(0, 0, 0, 0.1), -1px 0px 10px -1px rgba(0, 0, 0, 0.1);
}

.ais-Hits-item {
  display: block;
  animation: fadein 0.3s;
  border: none;
  border: none;
  width: 100%;
  border-bottom: solid 1px #00000020;
  background-color: white;
  padding: 10px 20px;
  margin-top: 0px;
  height: max-content;
  transition: all 0.3s;
}

.ais-Hits-item:hover {
  background-color: #f1f1f1;
}

.ais-Highlight {
  display: inline-block;
}
.app-searchui__results__title {
  color: rgba(0, 0, 0, 0.8);
  width: calc(100% - 80px);
  font-weight: bold;
  font-size: 1.25em;
}

.app-searchui__results__category {
  color: gray;
  font-size: 0.8em;
  width: max-content;
  padding: 2px 8px;
  border: solid 1px grey;
  display: block;
  position: relative;
  top: 8px;
  border-radius: 4px;
}

.app-searchui__results__desc {
  color: gray;
  font-size: 1em;
  display: block;
  width: calc(100% - 30px);
}

.ais-Highlight-highlighted {
  background-color: rgba(153, 230, 255, 0.45);
  /* color: #607c8a; */
  font-size: inherit;
}

.app-searchui__results__icon {
  position: relative;
  font-size: 1.25em;
  color: grey;
  height: max-content;
  transform: scale(1.7);
  float: right;
  text-align: right;
  opacity: 0.8;
  left: 0px;
  top: 4px;
  padding-top: 0px;
}

@media (max-width: 768px) {
  .app-searchui__results__title {
    font-size: 18px;
    width: calc(100% - 40px);
  }

  .app-searchui__results__desc {
    font-size: 14px;
    width: calc(100% - 40px);
  }

  .app-searchui__results__icon {
    font-size: 20px;
    top: 0px;
  }
}
</style>
