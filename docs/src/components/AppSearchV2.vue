<template>
  <div class="app-search-v2">
    <ais-instant-search :index-name="indexName" :search-client="algolia">
      <div class="app-searchui__bar-wrapper">
        <ais-search-box placeholder="Type to start searching..." class="searchbox">
          <div slot-scope="{ isSearchStalled, refine }">
            <lv-input icon-left="light-icon-search" type="search" :value="queryString" bottom-bar @input="handleOnType($event)" placeholder="Type to start searching..." />
            <span :hidden="!isSearchStalled"></span>
          </div>
        </ais-search-box>
      </div>
      <div style="position: relative">
        <!-- {{ result }} -->
        <div v-if="queryString.length && result && result.hits" id="app-searchui__results-wrapper" @click="clearSearchbox">
          <template v-for="item in result.hits" :key="item">
            <div class="app-search__results">
              <nuxt-link :to="`/vue-components/${item.docslink}`">
                <div class="app-searchui__results__title">
                  <div>{{ item.name }}</div>
                </div>
                <i class="app-searchui__results__icon light-icon-arrow-right-circle"></i>
                <div class="app-searchui__results__category">
                  <div>
                    {{ item.category }}
                  </div>
                </div>
                <div class="app-searchui__results__desc">
                  <div>
                    {{ item.description }}
                  </div>
                </div>
              </nuxt-link>
            </div>
          </template>
        </div>
      </div>
      <!-- <ais-hits>
        <template #item="{ item }">
          <nuxt-link :to="`/vue-components/button`">
            <ais-highlight class="app-searchui__results__title" :hit="item" attribute="name" />
            <i class="app-searchui__results__icon light-icon-arrow-right-circle"></i>
            <br />
            <ais-highlight class="app-searchui__results__category" :hit="item" attribute="category" />
            <br />
            <ais-highlight class="app-searchui__results__desc" :hit="item" attribute="description" />
          </nuxt-link>
        </template>
      </ais-hits> -->
      <ais-hits :escapeHTML="false" />
    </ais-instant-search>
  </div>
  <!-- <div>
    {{ result.hits }}
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      resultsOpen: false,
      queryString: '',
    };
  },
  setup() {
    const indexName = 'lightvueDemo';
    const queryString = ref('');
    const { search, algolia } = useAlgoliaSearch(indexName);
    const result = ref([]);

    const handleOnType = async value => {
      queryString.value = value;

      if (!value.length) {
        result.value = [];
        return;
      }

      const { data } = await useAsyncData('ssr-search-results', () => search({ query: value }));

      if (data.value && data.value.hits) {
        result.value = data.value;
      } else {
        result.value = [];
      }
    };

    const clearSearchbox = () => {
      queryString.value = '';
      result.value = [];
    };

    return {
      result,
      algolia,
      indexName,
      queryString,
      handleOnType,
      clearSearchbox,
    };
  },
  //   methods: {
  //     async handleOnType(value) {
  //       console.log('value', value);
  //       this.queryString = value;
  //       await search({ query: value }); // Example query, adjust as necessary
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
@keyframes fadein {
  0% {
    opacity: 0;
    margin-top: -5px;
  }
}
.app-search-v2 {
  width: 350px;
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
  position: absolute;
  margin-top: 0px;
  height: max-content;
  overflow: hidden;
  padding-top: 15px;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 1px 10px 10px -4px rgba(0, 0, 0, 0.1), -1px 0px 10px -1px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.app-search__results {
  padding: 10px 16px;
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    bottom: 0;
    // left: 5%;
    width: 90%;
    height: 1px;
    background-color: #e0e0e0;
  }

  &:last-child::after {
    content: none;
  }
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
  margin-top: 12px;
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
.app-search__separator {
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
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

@media (max-width: 900px) {
  .app-search-v2 {
    display: none;
  }
}
</style>
