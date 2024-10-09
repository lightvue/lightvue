<template>
  <div>
    <div>Algolia Search</div>
    <div id="searchbox"></div>
    <div id="products"></div>
    <div id="brand"></div>
  </div>
</template>

<script>
// import { algoliasearch } from 'algoliasearch';
// import instantsearch from 'instantsearch.js';
// import { searchBox, hits, refinementList } from 'instantsearch.js/es/widgets';

export default {
  async mounted() {
    console.log('algoliasearch');
    const ALGOLIA_API_KEY = '96b5c074edda2e65f8548e6d61fb922d';
    const ALGOLIA_APPLICATION_ID = 'CYDWBEXKQT';
    const indexName = 'lightvueDemo';

    const search = instantsearch({
      indexName: indexName,
      searchClient: algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY),
    });
    console.log('search', search);

    const widgets = search.addWidgets([
      instantsearch.widgets.searchBox({
        container: '#searchbox',
        placeholder: 'Search for products',
      }),
      instantsearch.widgets.hits({
        container: '#products',
        templates: {
          item: `
    <div>
      <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
      <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
    </div>
    `,
        },
      }),
    ]);
    console.log('widgets', widgets);

    search.start();
  },
};
</script>

<style lang="scss" scoped></style>
