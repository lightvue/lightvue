<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <button-best-demo />

    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
    <template v-for="(demo, i) in demos">
      <docs-card-vue :title="demo.title" :discription="demo.discription" :file="demo.file" :id="demo.id" />
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

export default {
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
        content: 'Button is an extension to standard button element with an option to add icons and your custom theming',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic Usage',
          file: 'button/ButtonDemo_Basic',
          discription: 'You can use the buttons with some basic use cases by simply passing classes or by passing props eg.for link button you can pass <span>--link-button</span> for disable button set the <span>disable</span> prop to true',
        },
        {
          title: 'With Icons',
          file: 'button/ButtonDemo_Icons',
          discription: 'You can add left and right icons to the Button component using the <span> icon </span> and <span> icon-right </span> props respectively.(The icons can be String) </br>You can also use <span> Light Icons </span> from <span> LightVue</span> and pass it into the button.',
        },
        {
          title: 'Colors',
          discription: 'You can simply change color by changing the class name.You can set the values to suffix to <span>lv--</span>  <span>primary</span> <span>secondary</span> <span>success</span> <span>info</span> <span>warning</span> <span>help</span> <span>danger</span>,<span>complementary</span>',
          file: 'button/ButtonDemo_Colors',
        },
        {
          title: 'Text Buttons',
          discription: 'You can set the button style to text by passing <span>--text-button</span> alongside with other variation classes ',
          file: 'button/ButtonDemo_Text',
        },
        {
          title: 'Outlined Buttons',
          discription: 'You can set the button style to outlined by setting <span>outlined</span> prop to true.You can use other variation classes with it.',
          file: 'button/ButtonDemo_Outlined',
        },
        {
          title: 'Rounded Buttons',
          discription: 'You can set the button style to rounded by setting <span>rounded</span> prop to true',
          file: 'button/ButtonDemo_Rounded',
        },
        {
          title: 'Sizes',
          discription: 'You can set the button size by passing size to <span>size</span> prop. The avaliable sizes are <span>sm</span>,<span>md</span>,<span>lg</span>,<span>xl</span>',
          file: 'button/ButtonDemo_Sizes',
        },
        {
          title: 'Button Groups',
          discription: 'You can group the buttons by wrapping them in <span>lv-buttonset</span> class. ',
          file: 'button/ButtonDemo_Group',
        },
        {
          title: 'Push Buttons',
          discription: 'You can set the button style to the push button by passing <span>push</span> prop.You can still use other variation classes on button',
          file: 'button/ButtonDemo_Raised',
          id: 'push',
        },
        {
          title: 'Miscellaneous Usage',
          discription: 'You can use some Miscellaneous button variation by passing <span>deep-shadow</span> prop with other variations like <span>push</span> prop',
          file: 'button/ButtonDemo_Shadow',
        },
        {
          title: 'Miscellaneous Usage',
          file: 'button/ButtonDemo_Misc',
          id: 'Miscellaneous Usage v1',
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
    ButtonBestDemo,
  },
  title: 'Button',
  description: `Button is an extension to standard button element with an option to add icons and your custom theming.`,
  packageName: 'button',
  componentName: 'LvButton',
  apiData: ButtonAPI,
};
</script>
