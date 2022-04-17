<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" hasDocs :demoList="$options.demoList">
    <docs-card-vue v-for="demo in $options.demoList" :key="demo.id" :title="demo.title" :discription="demo.discription" :file="demo.file" :id="demo.id" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout';
import DocsCardVue from '@/components/docs-card/DocsCardVue';
import DocsCard from '@/components/docs-card/DocsCard';
import GettingStarted from '@/components/docs-card/GettingStarted';
import DocsAllApi from '@/components/docs-card/DocsAllApi';
import DialogAPI from 'lightvueDocs/example/dialog/DialogAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' Dialog Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Dialog Documentation | LightVue ',
      },
      {
        property: 'og:description',
        content: 'LightVue Dialog helps the user to have modal and additional dialog box with their data.',
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
  title: 'Dialog',
  description: `Lv Dialog helps the user to have modal and additional dialog box with their data.`,
  packageName: 'dialog',
  componentName: 'LvDialog',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: DialogAPI,
  demoList: [
    {
      id: 'basic-usage',
      title: 'Basic usage',
      file: 'dialog/DialogDemo',
      discription: 'LightVue comes with some stunning designs for dialog.There are different types of dialog present in lightVue you can go through this page for more info.LightVue dialog is Both compatible with Vue 2.x and Vue 3.x',
    },
    {
      id: 'model',
      title: 'Model',
      file: 'dialog/DialogDemoModel',
      discription: 'You can add left and right icons to the Button component using the <span> icon </span> and <span> icon-right </span> props respectively.(The icons can be String) </br>You can also use <span> Light Icons </span> from <span> LightVue</span> and pass it into the button.',
    },
    { id: 'confirmation', title: 'Confirmation', file: 'dialog/DialogeDemoConfirmation', discription: 'You can add left and right icons to the Button component using the <span> icon </span> and <span> icon-right </span> props respectively.(The icons can be String) </br>You can also use <span> Light Icons </span> from <span> LightVue</span> and pass it into the button.' },
    {
      id: 'maximizable',
      title: 'Maximizable',
      file: 'dialog/DialogDemoMaximizable',
      discription: 'You can add left and right icons to the Button component using the <span> icon </span> and <span> icon-right </span> props respectively.(The icons can be String) </br>You can also use <span> Light Icons </span> from <span> LightVue</span> and pass it into the button.',
    },
    {
      id: 'positions',
      title: 'Positions',
      file: 'dialog/DialogDemo_Position',
      discription: 'You can add left and right icons to the Button component using the <span> icon </span> and <span> icon-right </span> props respectively.(The icons can be String) </br>You can also use <span> Light Icons </span> from <span> LightVue</span> and pass it into the button.',
    },
  ],
};
</script>
