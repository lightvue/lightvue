<template>
  <div class="app-searchui-wrapper">
    <div id="searchbox">
      <lv-input icon-left="light-icon-search" type="search" bottom-bar placeholder="Type to start searching..." autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" v-model="searchQuery" @input="handleSearchInput" />
    </div>
    <div v-show="searchQuery" id="app-searchui__results-wrapper" class="hits-container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchClient: null,
      searchQuery: '',
    };
  },
  async mounted() {
    if (instantsearch) {
      this.initSearch();
    }
  },
  methods: {
    initSearch() {
      this.searchClient = instantsearch({
        indexName: 'lightvueDemo',
        searchClient: algoliasearch('CYDWBEXKQT', '96b5c074edda2e65f8548e6d61fb922d'),
      });

      this.searchClient.addWidgets([
        instantsearch.widgets.hits({
          container: '#app-searchui__results-wrapper',
          templates: {
            item(hit, { html, components }) {
              return html`
                <a href="/vue-components/${hit.docslink}">
                  <div class="app-searchui__results__title">
                    ${components.Highlight({
                      attribute: 'name',
                      highlightedTagName: 'mark',
                      hit,
                    })}
                  </div>
                  <i class="app-searchui__results__icon light-icon-arrow-right-circle"></i>

                  <div class="app-searchui__results__category">
                    ${components.Highlight({
                      attribute: 'category',
                      hit,
                    })}
                  </div>
                  <br />
                  <div class="app-searchui__results__desc">
                    ${components.Highlight({
                      attribute: 'description',
                      highlightedTagName: 'mark',
                      hit,
                    })}
                  </div>
                </a>
              `;
            },
          },
        }),
      ]);

      this.searchClient.start();
    },
    handleSearchInput() {
      this.searchClient.helper.setQuery(this.searchQuery).search();
    },
  },
};
</script>

<style>
@keyframes aisFadein {
  0% {
    opacity: 0;
    margin-top: -5px;
  }
}
.ais-Hits-item {
  cursor: pointer;
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

/* .ais-SearchBox-input {
  position: relative;
  padding: 10px;
  padding-left: 30px;
  height: 40px;
  transition: all 0.3s;
}

.ais-SearchBox-input:focus {
  border-color: #607c8a;
  outline: #607c8a;
} */

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
  animation: aisFadein 0.3s;
  border: none;
  border: none;
  width: 100%;
  border-bottom: solid 1px #00000020;
  background-color: white;
  margin-top: 0px;
  height: max-content;
  transition: all 0.3s;
}

.ais-Hits-item:hover {
  background-color: #f1f1f1;
}

.ais-Hits-item a {
  padding: 10px 20px;
  display: block;
}

.app-searchui__results__title .ais-Highlight {
  display: inline-block;
  color: rgba(0, 0, 0, 0.8);
  width: calc(100% - 80px);
  font-weight: bold;
  font-size: 1.25em;
}

.app-searchui__results__title .ais-Highlight-nonHighlighted {
  font-size: inherit;
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
.ais-Hits--empty {
  padding: 12px;
  background-color: #ffffff;
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
