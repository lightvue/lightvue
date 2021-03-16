<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="TYPE: ball-scale" file="progressloader/BallTypeDemos/BallScaleDemo" />
    <docs-card-vue title="TYPE: ball-scale-multiple" file="progressloader/BallTypeDemos/BallScaleMultipleDemo" />
    <docs-card-vue title="TYPE: ball-scale-random" file="progressloader/BallTypeDemos/BallScaleRandomDemo" />
    <docs-card-vue title="TYPE: ball-scale-ripple" file="progressloader/BallTypeDemos/BallScaleRippleDemo" />
    <docs-card-vue title="TYPE: ball-scale-ripple-multiple" file="progressloader/BallTypeDemos/BallScaleRippleMultipleDemo" />
    <docs-card-vue title="TYPE: ball-beat" file="progressloader/BallTypeDemos/BallBeatDemo" />
    <docs-card-vue title="TYPE: ball-pulse" file="progressloader/BallTypeDemos/BallPulseDemo" />
    <docs-card-vue title="TYPE: ball-pulse-sync" file="progressloader/BallTypeDemos/BallPulseSyncDemo" />
    <docs-card-vue title="TYPE: ball-pulse-rise" file="progressloader/BallTypeDemos/BallPulseRiseDemo" />
    <docs-card-vue title="TYPE: ball-rotate" file="progressloader/BallTypeDemos/BallRotateDemo" />
    <docs-card-vue title="TYPE: ball-grid-beat" file="progressloader/BallTypeDemos/BallGridBeatDemo" />
    <docs-card-vue title="TYPE: ball-grid-pulse" file="progressloader/BallTypeDemos/BallGridPulseDemo" />
    <docs-card-vue title="TYPE: ball-spin-fade-loader" file="progressloader/BallTypeDemos/BallSpinFadeLoaderDemo" />
    <docs-card-vue title="TYPE: ball-zig-zag" file="progressloader/BallTypeDemos/BallZigZagDemo" />
    <docs-card-vue title="TYPE: ball-zig-zag-deflect" file="progressloader/BallTypeDemos/BallZigZagDeflectDemo" />
    <docs-card-vue title="TYPE: ball-triangle-path" file="progressloader/BallTypeDemos/BallTrianglePathDemo" />
    <docs-card-vue title="TYPE: ball-clip-rotate" file="progressloader/BallTypeDemos/BallClipRotateDemo" />
    <docs-card-vue title="TYPE: ball-clip-rotate-multiple" file="progressloader/BallTypeDemos/BallClipRotateMultipleDemo" />
    <docs-card-vue title="TYPE: line-scale" file="progressloader/LineTypeDemos/LineScaleDemo" />
    <docs-card-vue title="TYPE: line-scale-party" file="progressloader/LineTypeDemos/LineScalePartyDemo" />
    <docs-card-vue title="TYPE: line-scale-pulse-out" file="progressloader/LineTypeDemos/LineScalePulseOutDemo" />
    <docs-card-vue title="TYPE: line-scale-pusle-out-rapid" file="progressloader/LineTypeDemos/LineScalePulseOutRapidDemo" />
    <docs-card-vue title="TYPE: line-spin-fade-loader" file="progressloader/LineTypeDemos/LineSpinFadeLoaderDemo" />
    <docs-card-vue title="TYPE: square-spin" file="progressloader/MiscTypeDemos/SquareSpinDemo" />
    <docs-card-vue title="TYPE: cube-transition" file="progressloader/MiscTypeDemos/CubeTransitionDemo" />
    <docs-card-vue title="TYPE: semi-circle-spin" file="progressloader/MiscTypeDemos/SemiCircleSpinDemo" />
    <!-- Needs color fix -->
    <docs-card-vue title="TYPE: pacman" file="progressloader/MiscTypeDemos/PacmanDemo" />
    <!-- Needs color fix -->
    <docs-card-vue title="TYPE: triangle-skew-spin" file="progressloader/MiscTypeDemos/TriangleSkewSpinDemo" />
    <!-- Needs color fix -->
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <!-- <docs-all-api :api-data="$options.apiData" /> -->
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import ProgressLoaderAPI from 'lightvue/loaders/ProgressLoaderAPI';

export default {
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
  apiData: ProgressLoaderAPI,
};
</script>
