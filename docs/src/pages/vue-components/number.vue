<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <number-best-demo />

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
import NumberBestDemo from 'lightvueDocs/example/number/NumberBestDemo';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import NumberAPI from 'lightvueDocs/example/number/NumberAPI';

export default {
  head: {
    title: ' Number Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' Number Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Input Number component allows user to Take Number as a input.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic Usage',
          file: 'number/Number_BasicDemo',
          discription: 'You can use the Number Input component with some basic and complex use cases  like setting placeholder through <span>placeholder</span> prop. There is also a prop called <span>helpText</span> to specify a text that will display below the input. You can also specify a label by using the <span>label</span>  prop .',
        },
        {
          title: 'Customise Icons',
          discription: 'You can use the Number input with custom icons .You can set the left and right icon through <span>icon-left</span> and <span>icon-right</span> prop respectively.You can also speecify the button color through <span>button-color</span> prop. </br> You can also use <span> Light Icons</span> from <span>LightVue</span> and pass it into the input.',
          file: 'number/Number_IconDemo',
        },
        {
          title: 'Material Effect',
          file: 'number/Number_MaterialEffect',
          discription: 'You can set the bottom bar to Number input  by setting <span>bottom-bar</span> prop to true . ',
        },
        {
          title: 'Value',
          file: 'number/Number_ValueDemo',
          discription: 'You can specify the minimum and maximum value that can be entered in input through <span>min</span> and <span>max</span> prop respectively.you can also specify the range by combining both',
        },

        {
          title: 'Without Button',
          file: 'number/Number_WithoutButtonDemo',
          discription: 'You can remove left and right buttons from number input by setting <span>controls</span> prop to false.You can still use the other properties on number input.',
        },
        {
          title: 'Rounded',
          file: 'number/Number_RoundedDemo',
          discription: 'You can use the rounded variation of <span>lv-number</span> by setting <span>rounded</span> prop to true.',
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
    NumberBestDemo,
  },
  title: 'Number',
  description: `Input Number component allows user to Take Number as a input.`,
  packageName: 'number',
  componentName: 'LvNumber',
  // status: 'Stable',
  apiData: NumberAPI,
};
</script>
