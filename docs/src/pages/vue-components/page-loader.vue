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
    return {};
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
  demoList: [
    {
      id: 'ball-scale',
      title: 'Ball scale',
      file: 'progressloader/BallTypeDemos/BallScaleDemo',
      discription: 'You can use the progress Loader for various purpose like loading animations or space-filler etc.LightVue comes with some stunning designs for progress loaders.There are different types of loaders are present in lightVue you can go through this page for more info.You can change the type of loaders by passing value in <span>type</span> prop.LightVue Progress Loaders is Both compatible with Vue <span>3.x</span> and Vue <span>2.x</span>',
    },
    {
      id: 'ball-scale-multiple',
      title: 'Ball scale multiple',
      file: 'progressloader/BallTypeDemos/BallScaleMultipleDemo',
      discription: 'Use the below type of loaders by passing in <span>ball-scale-multiple</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
    },
    {
      id: 'ball-scale-random',
      title: 'Ball scale random',
      discription: 'Use the below type of loaders by passing in <span>ball-scale-random</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallScaleRandomDemo',
    },
    {
      id: 'ball-scale-ripple',
      title: 'Ball scale ripple',
      discription: 'Use the below type of loaders by passing in <span>ball-scale-ripple</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallScaleRippleDemo',
    },
    {
      id: 'ball-scale-ripple-multiple',
      title: 'Ball scale ripple multiple',
      discription: 'Use the below type of loaders by passing in <span>ball-scale-ripple-multiple</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallScaleRippleMultipleDemo',
    },
    {
      id: 'ball-beat',
      title: 'Ball beat',
      discription: 'Use the below type of loaders by passing in <span>ball-beat</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallBeatDemo',
    },
    {
      id: 'ball-pulse',
      title: 'Ball pulse',
      discription: 'Use the below type of loaders by passing in <span>ball-pulse</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallPulseDemo',
    },
    {
      id: 'ball-pulse-sync',
      title: 'Ball pulse sync',
      discription: 'Use the below type of loaders by passing in <span>ball-pulse-sync</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallPulseSyncDemo',
    },
    {
      id: 'ball-pulse-rise',
      title: 'Ball pulse rise',
      discription: 'Use the below type of loaders by passing in <span>ball-pulse-rise</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallPulseRiseDemo',
    },
    {
      id: 'ball-rotate',
      title: 'Ball rotate',
      discription: 'Use the below type of loaders by passing in <span>ball-rotate</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallRotateDemo',
    },
    {
      id: 'ball-grid-beat',
      title: 'Ball grid beat',
      discription: 'Use the below type of loaders by passing in <span>ball-grid-beat</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallGridBeatDemo',
    },
    {
      id: 'ball-grid-pulse',
      title: 'Ball grid pulse',
      discription: 'Use the below type of loaders by passing in <span>ball-grid-pulse</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallGridPulseDemo',
    },
    {
      id: 'ball-spin-fade-loader',
      title: 'Ball spin fade loader',
      discription: 'Use the below type of loaders by passing in <span>ball-spin-fade-loader</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallSpinFadeLoaderDemo',
    },
    {
      id: 'ball-zig-zag',
      title: 'Ball zig zag',
      discription: 'Use the below type of loaders by passing in <span>ball-zig-zag</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallZigZagDemo',
    },
    {
      id: 'ball-zig-zag-deflect',
      title: 'Ball zig zag deflect',
      discription: 'Use the below type of loaders by passing in <span>ball-zig-zag-deflect</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallZigZagDeflectDemo',
    },
    {
      id: 'ball-triangle-path',
      title: 'Ball triangle path',
      discription: 'Use the below type of loaders by passing in <span>ball-triangle-path</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallTrianglePathDemo',
    },
    {
      id: 'ball-clip-rotate',
      title: 'Ball clip rotate',
      discription: 'Use the below type of loaders by passing in <span>ball-clip-rotate</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallClipRotateDemo',
    },
    {
      id: 'ball-clip-rotate-multiple',
      title: 'Ball clip rotate multiple',
      discription: 'Use the below type of loaders by passing in <span>ball-clip-rotate-multiple</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/BallTypeDemos/BallClipRotateMultipleDemo',
    },
    {
      id: 'line-scale',
      title: 'Line scale',
      discription: 'Use the below type of loaders by passing in <span>line-scale</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/LineTypeDemos/LineScaleDemo',
    },
    {
      id: 'line-scale-party',
      title: 'Line scale party',
      discription: 'Use the below type of loaders by passing in <span>line-scale-party</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/LineTypeDemos/LineScalePartyDemo',
    },
    {
      id: 'line-scale-pulse-out',
      title: 'Line scale pulse out',
      discription: 'Use the below type of loaders by passing in <span>line-scale-pulse-out</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/LineTypeDemos/LineScalePulseOutDemo',
    },
    {
      id: 'line-scale-pulse-out-rapid',
      title: 'Line scale pusle out rapid',
      discription: 'Use the below type of loaders by passing in <span>line-scale-pulse-out-rapid</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/LineTypeDemos/LineScalePulseOutRapidDemo',
    },
    {
      id: 'line-spin-fade-loader',
      title: 'Line spin fade loader',
      discription: 'Use the below type of loaders by passing in <span>line-spin-fade-loader</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/LineTypeDemos/LineSpinFadeLoaderDemo',
    },
    {
      id: 'square-spin',
      title: 'Square spin',
      discription: 'Use the below type of loaders by passing in <span>squar-spin</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/MiscTypeDemos/SquareSpinDemo',
    },
    {
      id: 'cube-transition',
      title: 'Cube transition',
      discription: 'Use the below type of loaders by passing in <span>cube-transition</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/MiscTypeDemos/CubeTransitionDemo',
    },
    {
      id: 'semi-circle-spin',
      title: 'Semi circle spin',
      discription: 'Use the below type of loaders by passing in <span>semi-circle-spin</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/MiscTypeDemos/SemiCircleSpinDemo',
    },
    {
      id: 'triangle-skew-spin',
      title: 'Triangle skew spin',
      discription: 'Use the below type of loaders by passing in <span>triangle-skew-spin</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/MiscTypeDemos/TriangleSkewSpinDemo',
    },
    {
      id: 'pacman',
      title: 'Pacman',
      discription: 'Use the below type of loaders by passing in <span>pacman</span> within the <span>type</span> prop. You can change the size of your loader by passing in a value in the <span>scale</span> prop. You can also change the color of your loader by passing a color string in your <span>color</span> prop.',
      file: 'progressloader/MiscTypeDemos/PacmanDemo',
    },
  ],
};
</script>
