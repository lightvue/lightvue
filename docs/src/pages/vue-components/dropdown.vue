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
import DropdownAPI from 'lightvueDocs/example/dropdown/DropdownAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' Dropdown Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' Dropdown Documentation | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Dropdown component allows user to choose an option from the provided options.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic Usage',
          file: 'dropdown/DropdownDemo_Basic',
          discription: 'You can use the <span>LvDropdown</span> with some basic and complex use cases.You can use v-model for two way binding and updating value.You can get the selected value as a model value',
        },
        {
          title: 'Disabled',
          file: 'dropdown/DropdownDemo_Disable',
          discription: 'You can disable the dropdown by setting <span>disabled</span> prop true',
        },
        {
          title: 'Editable Input',
          file: 'dropdown/DropdownDemo_EditableInput',
          discription: 'You can use the editable input for dropdown by setting <span>editable</span> Prop true',
        },
        {
          title: 'Search',
          file: 'dropdown/DropdownDemo_Search',
          discription: 'You can also insert the search input inside the dropdown for filtering the result by setting <span>filter</span> true',
        },
        {
          title: 'Help Text',
          file: 'dropdown/DropdownDemo_HelpText',
          discription: 'You can add a help text to an <span>dropdown</span> by passing a string into <span>help-text</span> prop ',
        },
        {
          title: 'Set Height',
          file: 'dropdown/DropdownDemo_ScrollHeight',
          discription: 'You can set the scroll height of the dropdown by passing height to <span>scrollHeight</span> prop.the dropdown will be scrollable',
        },
        {
          title: 'Floating Label',
          file: 'dropdown/DropdownDemo_Floating',
          discription: 'You can add floating label to the dropdown by setting <span>floating-label</span> prop true',
        },
        {
          title: 'Rounded',
          file: 'dropdown/DropdownDemo_Rounded',
          discription: 'You can use the rounded variation of the dropdown by setting <span>rounded</span> prop true',
        },
        {
          title: 'Material',
          file: 'dropdown/DropdownDemo_Material',
          discription: 'You can add the animated bottom bar to the  the dropdown by setting <span>bottom-bar</span> prop true',
        },
        {
          title: 'Custom icons',
          file: 'dropdown/DropdownDemo_Styled',
          discription: 'You can also custmize the right and left icons by passing them into <span>iconLeft</span> & <span>iconRight</span> props respectively',
        },
      ],
    };
  },
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Dropdown',
  description: `Dropdown component allows user to choose an option from the provided options.`,
  packageName: 'dropdown',
  componentName: 'LvDropdown',
  status: COMPONENT_STATUS.UPDATED,
  apiData: DropdownAPI,
};
</script>
