<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :demoList="$options.demoList" hasPlayground hasDocs>
    <button-best-demo />
    <docs-card-vue v-for="demo in $options.demoList" :key="demo.id" :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import ButtonBestDemo from 'lightvueDocs/example/button/ButtonBestDemo.vue';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout';
import DocsCardVue from '@/components/docs-card/DocsCardVue';
import DocsCard from '@/components/docs-card/DocsCard';
import GettingStarted from '@/components/docs-card/GettingStarted';
import DocsAllApi from '@/components/docs-card/DocsAllApi';
import ButtonAPI from 'lightvueDocs/example/button/ButtonAPI';

const pageDescription = 'Button is an extension to standard button element with an option to add icons and your custom theming.';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
    ButtonBestDemo,
  },
  head: {
    title: ' Buttons Documentation | LightVue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Buttons Documentation | LightVue',
      },
      {
        property: 'og:description',
        content: pageDescription,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  title: 'Button',
  description: pageDescription,
  packageName: 'button',
  componentName: 'LvButton',
  apiData: ButtonAPI,
  demoList: [
    {
      id: 'basic-usage',
      title: 'Basic usage',
      file: 'button/ButtonDemo_Basic',
      description: 'Use the buttons with some basic and complex use cases by passing either classes or props eg. for link button, pass <span>--link-button</span> For disable button, set the <span>disable</span> prop to true. LightVue Button is Both compatible with Vue 2.x and Vue 3.x',
    },
    {
      id: 'icon-button',
      title: 'Icon button',
      file: 'button/ButtonDemo_Icons',
      description: 'You can add left and right icons to the Button component using the <span> icon </span> and <span> icon-right </span> props respectively.(The icons can be String) </br>You can also use <span> Light Icons </span> from <span> LightVue</span> and pass it into the button.',
    },
    {
      id: 'color',
      title: 'Colors',
      description: 'You can simply change color by changing the class name.You can set the values to suffix to <span>lv--</span>  <span>primary</span> <span>secondary</span> <span>success</span> <span>info</span> <span>warning</span> <span>help</span> <span>danger</span>,<span>complementary</span>',
      file: 'button/ButtonDemo_Colors',
    },
    {
      id: 'text-button',
      title: 'Text button',
      description: 'You can set the button style to text by passing <span>--text-button</span> alongside with other variation classes ',
      file: 'button/ButtonDemo_Text',
    },
    {
      id: 'outlined-button',
      title: 'Outlined button',
      description: 'You can set the button style to outlined by setting <span>outlined</span> prop to true.You can use other variation classes with it.',
      file: 'button/ButtonDemo_Outlined',
    },
    {
      id: 'rounded-buttons',
      title: 'Rounded button',
      description: 'The button style in Material Components can be styled to appear as though it’s been rounded off and thus creating a smoother feel. This can be achieved by simply setting the <span>rounded</span> prop to true like so:',
      file: 'button/ButtonDemo_Rounded',
    },
    {
      id: 'button-size',
      title: 'Button size',
      description: 'You can customize size of the button by passing it through <span>size</span> prop. There are 5 different sizes avaliable: small, medium, large, extra large and x-large...You can set them as  <span>sm</span>,<span>md</span>,<span>lg</span>,<span>xl</span>',
      file: 'button/ButtonDemo_Sizes',
    },
    {
      id: 'button-group',
      title: 'Button group',
      description: 'You can group the buttons by wrapping them in <span>lv-buttonset</span> class. ',
      file: 'button/ButtonDemo_Group',
    },
    {
      id: 'push-button',
      title: 'Push button',
      description: 'By setting the style of a button to a <span>push</span> one, you can give it the appearance of a push button. In case there might be a need to provide further variations regarding the look and feel of your buttons (for example, you might want them to appear differently as they are being hovered or focused on), then we would recommend you read through this page',
      file: 'button/ButtonDemo_Raised',
    },
    {
      id: 'deep-shadow-hover',
      title: 'Deep shadow hover',
      description: 'You can use some deep shadow hover button variation by passing <span>deep-shadow-hover</span> prop',
      file: 'button/ButtonDemo_Shadow',
    },
    {
      id: 'push-buttons-shadow',
      title: 'Push with soft Shadow',
      description: 'You can use some Miscellaneous button variation by passing <span>deep-shadow</span> prop with other variations like <span>push</span> prop',
      file: 'button/ButtonDemo_push-shadow',
    },
    {
      id: 'miscellaneous',
      title: 'Miscellaneous',
      description: '',
      file: 'button/ButtonDemo_Misc',
    },
  ],
};
</script>
