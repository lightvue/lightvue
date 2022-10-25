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
          description: 'You can use the progress Loader for various purpose like loading animations or space-filler etc. LightVue comes with some stunning designs for progress loaders.There are different types of loaders are present in lightVue you can go through this page for more info.You can change the type of loaders by passing value in <span>type</span> prop. LightVue Progress Loaders is Both compatible with Vue <span>3.x</span> and Vue <span>2.x</span>',
        },
        {
          title: 'Ball Scale Multiple',
          file: 'progressloader/BallTypeDemos/BallScaleMultipleDemo',

          description: 'Use the below type of loaders by passing in <span>ball-scale-multiple</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
        },
        {
          title: 'Ball Scale Random',
          description: 'Use the below type of loaders by passing in <span>ball-scale-random</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallScaleRandomDemo',
        },
        {
          title: 'Ball Scale Ripple',
          description: 'Use the below type of loaders by passing in <span>ball-scale-ripple</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallScaleRippleDemo',
        },
        {
          title: 'Ball Scale Ripple Multiple',
          description: 'Use the below type of loaders by passing in <span>ball-scale-ripple-multiple</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallScaleRippleMultipleDemo',
        },
        {
          title: 'Ball Beat',
          description: 'Use the below type of loaders by passing in <span>ball-beat</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallBeatDemo',
        },
        {
          title: 'Ball Pulse',
          description: 'Use the below type of loaders by passing in <span>ball-pulse</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallPulseDemo',
        },
        {
          title: 'Ball Pulse Sync',
          description: 'Use the below type of loaders by passing in <span>ball-pulse-sync</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallPulseSyncDemo',
        },
        {
          title: 'Ball Pulse Rise',
          description: 'Use the below type of loaders by passing in <span>ball-pulse-rise</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallPulseRiseDemo',
        },
        {
          title: 'Ball Rotate',
          description: 'Use the below type of loaders by passing in <span>ball-rotate</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallRotateDemo',
        },
        {
          title: 'Ball Grid Beat',
          description: 'Use the below type of loaders by passing in <span>ball-grid-beat</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallGridBeatDemo',
        },
        {
          title: 'Ball Grid Pulse',
          description: 'Use the below type of loaders by passing in <span>ball-grid-pulse</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallGridPulseDemo',
        },
        {
          title: 'Ball Spin Fade Loader',
          description: 'Use the below type of loaders by passing in <span>ball-spin-fade-loader</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallSpinFadeLoaderDemo',
        },
        {
          title: 'Ball Zig Zag',
          description: 'Use the below type of loaders by passing in <span>ball-zig-zag</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallZigZagDemo',
        },
        {
          title: 'Ball Zig Zag Deflect',
          description: 'Use the below type of loaders by passing in <span>ball-zig-zag-deflect</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallZigZagDeflectDemo',
        },
        {
          title: 'Ball Triangle Path',
          description: 'Use the below type of loaders by passing in <span>ball-triangle-path</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallTrianglePathDemo',
        },
        {
          title: 'Ball Clip Rotate',
          description: 'Use the below type of loaders by passing in <span>ball-clip-rotate</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallClipRotateDemo',
        },
        {
          title: 'Ball Clip Rotate Multiple',
          description: 'Use the below type of loaders by passing in <span>ball-clip-rotate-multiple</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/BallTypeDemos/BallClipRotateMultipleDemo',
        },
        {
          title: 'Line Scale',
          description: 'Use the below type of loaders by passing in <span>line-scale</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/LineTypeDemos/LineScaleDemo',
        },
        {
          title: 'Line Scale Party',
          description: 'Use the below type of loaders by passing in <span>line-scale-party</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/LineTypeDemos/LineScalePartyDemo',
        },
        {
          title: 'Line Scale Pulse Out',
          description: 'Use the below type of loaders by passing in <span>line-scale-pulse-out</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/LineTypeDemos/LineScalePulseOutDemo',
        },
        {
          title: 'Line Scale Pusle Out Rapid',
          description: 'Use the below type of loaders by passing in <span>line-scale-pulse-out-rapid</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/LineTypeDemos/LineScalePulseOutRapidDemo',
        },
        {
          title: 'Line Spin Fade Loader',
          description: 'Use the below type of loaders by passing in <span>line-spin-fade-loader</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/LineTypeDemos/LineSpinFadeLoaderDemo',
        },
        {
          title: 'Square Spin',
          description: 'Use the below type of loaders by passing in <span>squar-spin</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/MiscTypeDemos/SquareSpinDemo',
        },
        {
          title: 'Cube Transition',
          description: 'Use the below type of loaders by passing in <span>cube-transition</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/MiscTypeDemos/CubeTransitionDemo',
        },
        {
          title: 'Semi Circle Spin',
          description: 'Use the below type of loaders by passing in <span>semi-circle-spin</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/MiscTypeDemos/SemiCircleSpinDemo',
        },
        {
          title: 'Triangle Skew Spin',
          description: 'Use the below type of loaders by passing in <span>triangle-skew-spin</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
          file: 'progressloader/MiscTypeDemos/TriangleSkewSpinDemo',
        },
        {
          title: 'Pacman',
          description: 'Use the below type of loaders by passing in <span>pacman</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
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
