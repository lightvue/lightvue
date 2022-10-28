<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <template v-for="(demo, i) in demos">
      <docs-card-vue :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    </template>
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
  data() {
    return {
      demos: [
        {
          title: 'Basic Usage',
          file: 'dialog/DialogDemo',
          description: 'LightVue comes with some stunning designs for dialog.There are different types of dialog present in lightVue you can go through this page for more info. LightVue dialog is Both compatible with Vue 2.x and Vue 3.x',
        },
        {
          title: 'Modal',
          file: 'dialog/DialogDemoModel',
          description: 'LvDialog modal is a dialog box/popup window that is displayed on top of the current page: They are a user experience convention to direct a user’s attention to a piece of content that they need to read or interact with.',
        },
        {
          title: 'Confirmation',
          file: 'dialog/DialogeDemoConfirmation',
          description: 'Confirmation dialogs require users to confirm a choice before the dialog is dismissed.',
        },
        {
          title: 'Maximizable',
          file: 'dialog/DialogDemoMaximizable',
          description: 'Maximizable(Full-screen) dialogs fill the entire screen, containing actions that require a series of tasks to complete.',
        },
        {
          title: 'Positions',
          file: 'dialog/DialogDemo_Position',
          description: 'You can open LvDialog from any direction left, right, top, bottom as shown below.',
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
  title: 'Dialog',
    description: `Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. LvDialog helps the user to have modal and additional dialog box with their data.`,
  packageName: 'dialog',
  componentName: 'LvDialog',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: DialogAPI,
};
</script>
