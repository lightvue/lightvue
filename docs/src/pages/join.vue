<template></template>

<script>
const pageMeta = {
  title: 'Join Slack community | LightVue',
  meta: [
    { 'http-equiv': 'refresh', content: '0; URL=https://join.slack.com/t/lightvue/shared_invite/zt-1g6falep2-9v3887ttNrjrcPdxi1if_A' },
    { property: 'og:title', content: 'LightVue' },
    { property: 'og:image', content: 'https://lightvue.com/icon.png' },
    {
      property: 'og:site_name',
      content: ' The Ultimate Vue Component Library | LightVue ',
    },
    {
      property: 'og:description',
      content: 'The Ultimate Component Library for Vue 2 & Vue 3',
    },
  ],
};
export default {
  head: pageMeta,
  setup() {
    useHead(pageMeta);
  },
};
</script>

<style></style>
