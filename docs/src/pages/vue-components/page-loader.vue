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
import ProgressLoaderAPI from 'lightvueDocs/example/loaders/ProgressLoaderAPI';

export default {
  head: {
    title: ' PageLoader Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' PageLoader Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: ' ',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Ball Scale',
          file: 'progressloader/BallTypeDemos/BallScaleDemo',
          discription: 'You can use the progress bar for various purpose like showing status,progress etc.LightVue comes with some stunning designs for progress bar.You can Update the progerss bar by Updating <span>value</span> prop.You can also hide or show the Value on progerss bar by setting <span>showValue</span> false.lightVue Progress bar is Both compatible with Vue 2.x and Vue 3.x',
        },
        {
          title: 'Ball Scale Multiple',
          file: 'progressloader/BallTypeDemos/BallScaleMultipleDemo',
          discription: 'You can use the progress bar for various purpose like showing status,progress etc.LightVue comes with some stunning designs for progress bar.You can Update the progerss bar by Updating <span>value</span> prop.You can also hide or show the Value on progerss bar by setting <span>showValue</span> false.lightVue Progress bar is Both compatible with Vue 2.x and Vue 3.x',
        },
        {
          title: 'Ball Scale Random',
          discription: 'You can also set the mode to intermidiate by settting <span>mode</span> prop to <span>indeterminate</span>',
          file: 'progressloader/BallTypeDemos/BallScaleRandomDemo',
        },
        {
          title: 'Ball Scale Ripple',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallScaleRippleDemo',
        },
        {
          title: 'Ball Scale Ripple Multiple',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallScaleRippleMultipleDemo',
        },
        {
          title: 'Ball Beat',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallBeatDemo',
        },
        {
          title: 'Ball Pulse',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallPulseDemo',
        },
        {
          title: 'Ball Pulse Sync',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallPulseSyncDemo',
        },
        {
          title: 'Ball Pulse Rise',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallPulseRiseDemo',
        },
        {
          title: 'Ball Rotate',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallRotateDemo',
        },
        {
          title: 'Ball Grid Beat',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallGridBeatDemo',
        },
        {
          title: 'Ball Grid Pulse',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: '"progressloader/BallTypeDemos/BallGridPulseDemo',
        },
        {
          title: 'Ball Spin Fade Loader',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallSpinFadeLoaderDemo',
        },
        {
          title: 'Ball Zig Zag',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallZigZagDemo',
        },
        {
          title: 'Ball Zig Zag Deflect',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallZigZagDeflectDemo',
        },
        {
          title: 'Ball Triangle Path',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallTrianglePathDemo',
        },
        {
          title: 'Ball Clip Rotate',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallClipRotateDemo',
        },
        {
          title: 'Ball Clip Rotate Multiple',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/BallTypeDemos/BallClipRotateMultipleDemo',
        },
        {
          title: 'Line Scale',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/LineTypeDemos/LineScaleDemo',
        },
        {
          title: 'Line Scale Party',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/LineTypeDemos/LineScalePartyDemo',
        },
        {
          title: 'Line Scale Pulse Out',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/LineTypeDemos/LineScalePulseOutDemo',
        },
        {
          title: 'Line Scale Pusle Out Rapid',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/LineTypeDemos/LineScalePulseOutRapidDemo',
        },
        {
          title: 'Line Spin Fade Loader',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/LineTypeDemos/LineSpinFadeLoaderDemo',
        },
        {
          title: 'Square Spin',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/LineTypeDemos/LineSpinFadeLoaderDemo',
        },
        {
          title: 'Cube Transition',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/MiscTypeDemos/CubeTransitionDemo',
        },
        {
          title: 'Semi Circle Spin',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/MiscTypeDemos/SemiCircleSpinDemo',
        },
        {
          title: 'Triangle Skew Spin',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/MiscTypeDemos/TriangleSkewSpinDemo',
        },
        {
          title: 'Pacman',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressloader/MiscTypeDemos/PacmanDemo',
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
  title: 'Progress Loaders',
  description: `Progress Loader components can be used as a loading animations or space-fillers while waiting for the actual content to load.`,
  packageName: 'progressloader',
  componentName: 'LvLoader',
  // status: 'Stable',
  apiData: ProgressLoaderAPI,
};
</script>
