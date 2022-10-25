<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <input-best-demo />
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
import InputBestDemo from 'lightvueDocs/example/input/InputBestDemo.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue';
import DocsCard from '@/components/docs-card/DocsCard';
import GettingStarted from '@/components/docs-card/GettingStarted';
import DocsAllApi from '@/components/docs-card/DocsAllApi';
import InputAPI from 'lightvueDocs/example/input/InputAPI';

export default {
  head: {
    title: ' Input Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' Input Documentation | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Light-input provides with a variety of input fields with various available customizations which helps it to fulfil the need of almost every web application/project',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic Usage',
          file: 'input/InputDemo_Basic',
          description: 'You can use the input component with some basic and complex use cases  like setting placeholder through <span>placeholder</span> prop. There is also a prop called <span>helpText</span> to specify a text that will display below the input. You can also specify a label by using the <span>label</span> prop. LightVue input is Both compatible with Vue 2.x and Vue 3.x',
          // description: 'You can use the buttons with some basic use cases by simply passing classes or by passing props eg.for link button you can pass <span>--link-button</span> for disable button set the <span>disable</span> prop to true',
        },
        {
          title: 'Icons',
          description: 'You can use the input with icons.You can set the left and right icon through <span>icon-left</span> and <span>icon-right</span> prop respectively.</br> You can also use <span> Light Icons</span> from <span>LightVue</span> and pass it into the input.',
          file: 'input/InputDemo_Icons',
        },
        {
          title: 'Material Effect',
          file: 'input/InputDemo_MaterialEffect',
          description: 'You can set the bottom bar to input  by setting <span>bottom-bar</span> prop to true . You can also set the floating lable by passing label into <span>label</span> prop and setting <span>floating-label</span> prop true',
        },
        {
          title: 'Floating Label',
          file: 'input/InputDemo_FloatingLabel',
          description: 'You can also set the floating lable by passing label into <span>label</span> prop and setting <span>floating-label</span> prop true',
        },
        {
          title: 'Clearable',
          file: 'input/InputDemo_Clearable',
          description: 'You can set the clearable input by setting the <span>clearable</span> prop to true.',
        },

        {
          title: 'Prepend Append',
          file: 'input/InputDemo_PrependAppend',
          description: 'You can prepend append the content inside the input through <span>prepend</span> <span>append</span> slots.',
        },
        {
          title: 'Rounded',
          file: 'input/InputDemo_Rounded',
          description: 'You can use the rounded variation of <span>LvInput</span> by setting <span>rounded</span> prop to true.',
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
    InputBestDemo,
  },
  title: 'Light-input',
  description: `Light-input provides with a variety of input fields with various available customizations which helps it to fulfil the need of almost every web application/project.`,
  packageName: 'input',
  componentName: 'LvInput',
  // status: 'Rc',
  apiData: InputAPI,
};
</script>
