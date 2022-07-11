<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <TextareaBestDemo />

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
import TextareaBestDemo from 'lightvueDocs/example/textarea/TextareaBestDemo';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import TextareaAPI from 'lightvueDocs/example/textarea/TextareaAPI';

export default {
  head: {
    title: ' TextArea Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: 'TextArea Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Textarea component allows user to write long text/ paragraphs.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic',
          file: 'textarea/TextareaDemo__Basic',
          description: 'You can use the <span>LvTextarea</span> with some basic and complex use cases by passing either classes or props eg. If you want to set the placeholder you can pass it to <span>placeholder</span>, You can also set the number of visible rows through <span>rows</span> prop, You can set the Label by passing a string into <span>label</span> prop. LightVue textarea is Both compatible with Vue 2.x and Vue 3.x',
        },

        {
          title: 'Character Count',
          description: 'You can also specify the max-character count to the <span>LvTextArea</span> by passing a number <span>max-length</span> prop,You can also set the visible character count at the bottom-right by setting <span>show-limit</span> prop true',
          file: 'textarea/TextAreaCharacterCount',
        },
        {
          title: 'Auto resize',
          description: 'You can define the behaviour of <span>LvTextarea</span> after characters exceed text area height either it will scroll or get resize the scrollable behaviour is default but if you want to auto resize the text area ,You have to set <span>autoResize</span> prop true',
          file: 'textarea/TextAreaAutoResizeDemo',
        },
        {
          title: 'Vertical Resize',
          description: 'You can define the behaviour of <span>LvTextarea</span> after characters exceed text area height either it will scroll or get resize the scrollable behaviour is default but if you want to auto resize the text area vertically ,You have to set <span>resize</span> prop to <span>vertical</span>',
          file: 'textarea/TextAreaVerticalResize',
        },
        {
          title: 'Material design',
          description: 'You can set the animated bottom bar to the <span>Lvtextarea</span> by setting <span>bottomBar</span> prop true',
          file: 'textarea/TextareaDemo__Customised',
        },

        {
          title: 'Floating Label',
          description: 'You can set the label as a floating label by setting the <span>floatingLabel</span>',
          file: 'textarea/TextAreaFloatingLabel',
        },
        {
          title: 'Rounded',
          file: 'textarea/TextAreaDemo_Rounded',
          description: 'You can use the rounded variation of <span>LvTextarea</span> by setting <span>rounded</span> prop true.',
        },
        {
          title: 'Custom Icons',
          description: 'You can add left and right icons to the <span>LvTextarea</span> component using the <span> icon-left </span> and <span> icon-right </span> props respectively.(The icons can be String) </br>You can also use <span> Light Icons </span> from <span> LightVue</span> and pass it into the textarea. ',
          file: 'textarea/TextAreaIcon',
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
    TextareaBestDemo,
  },
  title: 'Textarea',
  description: `Textarea component allows user to write long text/ paragraphs.`,
  packageName: 'textarea',
  componentName: 'LVTextarea',
  // status: 'Stable',
  apiData: TextareaAPI,
};
</script>
