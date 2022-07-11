<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :cards="demos">
    <checkbox-best-demo></checkbox-best-demo>
    <template v-for="demo in demos">
      <docs-card-vue :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    </template>
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import CheckboxBestDemo from 'lightvueDocs/example/checkbox/CheckboxBestDemo.vue';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import CheckboxAPI from 'lightvueDocs/example/checkbox/CheckboxAPI';

export default {
  head: {
    title: ' Checkbox Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' Checkbox Documentation | LightVue',
      },
      {
        property: 'og:description',
        content: 'Checkbox component can be used in projects where a way is required for user to select or deselect an option.',
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
    CheckboxBestDemo,
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic',
          file: 'checkbox/CheckboxDemo_Basic',
          description: 'You can use the checkbox with various predefined colors by passing them in <span>color</span> prop, avaliable colors are <span>sucess</span>,<span>warning</span>,<span>primary</span>,<span>info</span>,<span>danger</span>. You can set the corners of checkbox to round by setting <span>rounded</span> prop to true.you can change the appearence of checkbox through <span>thick</span>,<span>filled</span>,<span>plain</span>,<span>smooth</span>. LightVue checkbox is Both compatible with Vue 2.x and Vue 3.x',
        },
        {
          title: 'With Animations',
          file: 'checkbox/CheckboxDemo_Animation',
          description: 'You can use the checkbox with various predefined  Transitions by setting <span>smooth</span>,<span>pulse</span> props to true',
        },
        {
          title: 'Radio',
          file: 'checkbox/CheckboxDemo_Radio',
          description: 'You can use the checkbox component as a <span>Radio</span> by setting <span>type</span> prop to <span>radio</span> all the other variations you use with the checkbox you can use them with radio also in the same way ',
        },

        {
          title: 'Disabled',
          file: 'checkbox/CheckboxDemo_Disabled',
          description: 'You can use the checkbox to Disable by passing <span>disabled</span> prop to true',
        },
        {
          title: 'With Icons',
          file: 'checkbox/CheckboxDemo_Icons',
          description: 'You can use the icons with checkbox by passing then in the slot and setting <span>icon</span> prop to true',
        },
        {
          title: 'Scalable sizes',
          file: 'checkbox/CheckboxDemo_Size',
          description: 'You can set the checkbox size by wrapping it inside a element',
        },
      ],
    };
  },
  title: 'Checkbox',
  description: `LvCheckbox component can be used in projects where a way is required for user to select or deselect an option.`,
  packageName: 'CheckBox',
  componentName: 'LvCheckBox',
  apiData: CheckboxAPI,
};
</script>
