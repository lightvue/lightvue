<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <docs-card-vue title="TYPE: ball-scale" file="loaders/BallTypeDemos/BallScaleDemo" />
    <docs-card-vue title="TYPE: ball-scale-multiple" file="loaders/BallTypeDemos/BallScaleMultipleDemo" />
    <docs-card-vue title="TYPE: ball-scale-random" file="loaders/BallTypeDemos/BallScaleRandomDemo" />
    <docs-card-vue title="TYPE: ball-scale-ripple" file="loaders/BallTypeDemos/BallScaleRippleDemo" />
    <docs-card-vue title="TYPE: ball-scale-ripple-multiple" file="loaders/BallTypeDemos/BallScaleRippleMultipleDemo" />
    <docs-card-vue title="TYPE: ball-beat" file="loaders/BallTypeDemos/BallBeatDemo" />
    <docs-card-vue title="TYPE: ball-pulse" file="loaders/BallTypeDemos/BallPulseDemo" />
    <docs-card-vue title="TYPE: ball-pulse-sync" file="loaders/BallTypeDemos/BallPulseSyncDemo" />
    <docs-card-vue title="TYPE: ball-pulse-rise" file="loaders/BallTypeDemos/BallPulseRiseDemo" />
    <docs-card-vue title="TYPE: ball-rotate" file="loaders/BallTypeDemos/BallRotateDemo" />
    <docs-card-vue title="TYPE: ball-grid-beat" file="loaders/BallTypeDemos/BallGridBeatDemo" />
    <docs-card-vue title="TYPE: ball-grid-pulse" file="loaders/BallTypeDemos/BallGridPulseDemo" />
    <docs-card-vue title="TYPE: ball-spin-fade-loader" file="loaders/BallTypeDemos/BallSpinFadeLoaderDemo" />
    <docs-card-vue title="TYPE: ball-zig-zag" file="loaders/BallTypeDemos/BallZigZagDemo" />
    <docs-card-vue title="TYPE: ball-zig-zag-deflect" file="loaders/BallTypeDemos/BallZigZagDeflectDemo" />
    <docs-card-vue title="TYPE: ball-triangle-path" file="loaders/BallTypeDemos/BallTrianglePathDemo" />
    <docs-card-vue title="TYPE: ball-clip-rotate" file="loaders/BallTypeDemos/BallClipRotateDemo" />
    <docs-card-vue title="TYPE: ball-clip-rotate-multiple" file="loaders/BallTypeDemos/BallClipRotateMultipleDemo" />
    <docs-card-vue title="TYPE: line-scale" file="loaders/LineTypeDemos/LineScaleDemo" />
    <docs-card-vue title="TYPE: line-scale-party" file="loaders/LineTypeDemos/LineScalePartyDemo" />
    <docs-card-vue title="TYPE: line-scale-pulse-out" file="loaders/LineTypeDemos/LineScalePulseOutDemo" />
    <docs-card-vue title="TYPE: line-scale-pusle-out-rapid" file="loaders/LineTypeDemos/LineScalePulseOutRapidDemo" />
    <docs-card-vue title="TYPE: line-spin-fade-loader" file="loaders/LineTypeDemos/LineSpinFadeLoaderDemo" />
    <docs-card-vue title="TYPE: square-spin" file="loaders/MiscTypeDemos/SquareSpinDemo" />
    <docs-card-vue title="TYPE: cube-transition" file="loaders/MiscTypeDemos/CubeTransitionDemo" />
    <docs-card-vue title="TYPE: semi-circle-spin" file="loaders/MiscTypeDemos/SemiCircleSpinDemo" />
    <!-- Needs color fix -->
    <docs-card-vue title="TYPE: pacman" file="loaders/MiscTypeDemos/PacmanDemo" />
    <!-- Needs color fix -->
    <docs-card-vue title="TYPE: triangle-skew-spin" file="loaders/MiscTypeDemos/TriangleSkewSpinDemo" />
    <!-- Needs color fix -->
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
    title: ' Loaders Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Loaders Documentation | LightVue ',
      },
      {
        property: 'og:description',
        content: ' ',
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
  title: 'Progress Loaders',
  description: `Progress Loader components can be used as a loading animations or space-fillers while waiting for the actual content to load.`,
  packageName: 'progressloader',
  componentName: 'LvLoader',
  // status: 'Updated',
  apiData: ProgressLoaderAPI,
};
</script>
