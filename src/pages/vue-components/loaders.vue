<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="TYPE: ball-scale" file="examples/loaders/BallTypeDemos/BallScaleDemo" />
    <docs-card-vue title="TYPE: ball-scale-multiple" file="examples/loaders/BallTypeDemos/BallScaleMultipleDemo" />
    <docs-card-vue title="TYPE: ball-scale-random" file="examples/loaders/BallTypeDemos/BallScaleRandomDemo" />
    <docs-card-vue title="TYPE: ball-scale-ripple" file="examples/loaders/BallTypeDemos/BallScaleRippleDemo" />
    <docs-card-vue title="TYPE: ball-scale-ripple-multiple" file="examples/loaders/BallTypeDemos/BallScaleRippleMultipleDemo" />
    <docs-card-vue title="TYPE: ball-beat" file="examples/loaders/BallTypeDemos/BallBeatDemo" />
    <docs-card-vue title="TYPE: ball-pulse" file="examples/loaders/BallTypeDemos/BallPulseDemo" />
    <docs-card-vue title="TYPE: ball-pulse-sync" file="examples/loaders/BallTypeDemos/BallPulseSyncDemo" />
    <docs-card-vue title="TYPE: ball-pulse-rise" file="examples/loaders/BallTypeDemos/BallPulseRiseDemo" />
    <docs-card-vue title="TYPE: ball-rotate" file="examples/loaders/BallTypeDemos/BallRotateDemo" />
    <docs-card-vue title="TYPE: ball-grid-beat" file="examples/loaders/BallTypeDemos/BallGridBeatDemo" />
    <docs-card-vue title="TYPE: ball-grid-pulse" file="examples/loaders/BallTypeDemos/BallGridPulseDemo" />
    <docs-card-vue title="TYPE: ball-spin-fade-loader" file="examples/loaders/BallTypeDemos/BallSpinFadeLoaderDemo" />
    <docs-card-vue title="TYPE: ball-zig-zag" file="examples/loaders/BallTypeDemos/BallZigZagDemo" />
    <docs-card-vue title="TYPE: ball-zig-zag-deflect" file="examples/loaders/BallTypeDemos/BallZigZagDeflectDemo" />
    <docs-card-vue title="TYPE: ball-triangle-path" file="examples/loaders/BallTypeDemos/BallTrianglePathDemo" />
    <docs-card-vue title="TYPE: ball-clip-rotate" file="examples/loaders/BallTypeDemos/BallClipRotateDemo" />
    <docs-card-vue title="TYPE: ball-clip-rotate-multiple" file="examples/loaders/BallTypeDemos/BallClipRotateMultipleDemo" />
    <docs-card-vue title="TYPE: line-scale" file="examples/loaders/LineTypeDemos/LineScaleDemo" />
    <docs-card-vue title="TYPE: line-scale-party" file="examples/loaders/LineTypeDemos/LineScalePartyDemo" />
    <docs-card-vue title="TYPE: line-scale-pulse-out" file="examples/loaders/LineTypeDemos/LineScalePulseOutDemo" />
    <docs-card-vue title="TYPE: line-scale-pusle-out-rapid" file="examples/loaders/LineTypeDemos/LineScalePulseOutRapidDemo" />
    <docs-card-vue title="TYPE: line-spin-fade-loader" file="examples/loaders/LineTypeDemos/LineSpinFadeLoaderDemo" />
    <docs-card-vue title="TYPE: square-spin" file="examples/loaders/MiscTypeDemos/SquareSpinDemo" />
    <docs-card-vue title="TYPE: cube-transition" file="examples/loaders/MiscTypeDemos/CubeTransitionDemo" />
    <docs-card-vue title="TYPE: semi-circle-spin" file="examples/loaders/MiscTypeDemos/SemiCircleSpinDemo" />
    <!-- Needs color fix -->
    <docs-card-vue title="TYPE: pacman" file="examples/loaders/MiscTypeDemos/PacmanDemo" />
    <!-- Needs color fix -->
    <docs-card-vue title="TYPE: triangle-skew-spin" file="examples/loaders/MiscTypeDemos/TriangleSkewSpinDemo" />
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
import ProgressLoaderAPI from '@/collections/loaders/ProgressLoaderAPI';

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
