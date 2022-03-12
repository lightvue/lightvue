<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <template v-for="(demo, i) in demos">
      <docs-card-vue :title="demo.title" :discription="demo.discription" :file="demo.file" :id="demo.id" />
    </template>
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import ToggleSwitchAPI from 'lightvueDocs/example/input-toggle/ToggleSwitchAPI';

export default {
  head: {
    title: ' ToggleSwitch Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' ToggleSwitch Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'ToggleSwitch is used to select a boolean value.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic Usage',
          file: 'input-toggle/ToggleSwitchDemo_Basic',
          discription: 'Use the <span>LvToggleSwitch</span> with some basic and complex use cases by passing either classes or props eg. for setting label you can pass a string into <span>label</span> prop.',
        },
        {
          title: 'With Icons',
          file: 'input-toggle/ToggleSwitchDemo_Icon',
          discription: 'You can set the icon on the <span>LvToggleSwitch</span> by passing a icon string into <span>icon</span> prop.(The icons can be String) </br>You can also use <span> Light Icons </span> from <span> LightVue</span> and pass it into the button.',
        },

        {
          title: 'Dense Switch',
          discription: 'You can use the dense version of <span>LvToggleSwitch</span> by setting <span>dense</span> prop true.you can also use set the icon to dense toggle switch by passing the icon in <span>icon</span> prop',
          file: 'input-toggle/ToggleSwitchDemo_Dense',
        },
        {
          title: 'Predefining state',
          discription: 'You can Predefine the state of  <span>LvToggleSwitch</span> by setting modal-value true.by default the value if false',
          file: 'input-toggle/ToggleSwitchDemo_State',
        },
        {
          title: 'Rounded Buttons',
          discription: 'You can change the label position by through <span>labelPosition</span> prop',
          file: 'input-toggle/ToggleSwitchDemo_labelPosition',
        },
        {
          title: 'Disable',
          discription: 'You can also disable the  <span>LvToggleSwitch</span>  by setting the <span>disabled</span> prop true',
          file: 'input-toggle/ToggleSwitchDemo_Colors',
        },
      ],
    };
  },
  title: 'Toggle Switch',
  description: `ToggleSwitch is used to select a boolean value i.e. it allows you to select or deselect an attribute.`,
  packageName: 'toggle-switch',
  componentName: 'LvToggleSwitch',
  // status: 'Stable',
  apiData: ToggleSwitchAPI,
};
</script>
