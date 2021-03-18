<template>
  <component :is="type" :color="color" :scale="scale" />
</template>

<script>
import BallPulse from './BallComponents/BallPulse.vue';
import BallBeat from './BallComponents/BallBeat.vue';
import BallScale from './BallComponents/BallScale.vue';
import BallPulseRise from './BallComponents/BallPulseRise.vue';
import BallGridPulse from './BallComponents/BallGridPulse.vue';
import BallClipRotate from './BallComponents/BallClipRotate.vue';
import BallRotate from './BallComponents/BallRotate.vue';
import BallClipRotatePulse from './BallComponents/BallClipRotatePulse.vue';
import BallClipRotateMultiple from './BallComponents/BallClipRotateMultiple.vue';
import BallZigZag from './BallComponents/BallZigZag.vue';
import BallZigZagDeflect from './BallComponents/BallZigZagDeflect.vue';
import BallTrianglePath from './BallComponents/BallTrianglePath.vue';
import BallScaleMultiple from './BallComponents/BallScaleMultiple.vue';
import BallPulseSync from './BallComponents/BallPulseSync.vue';
import BallScaleRipple from './BallComponents/BallScaleRipple.vue';
import BallScaleRippleMultiple from './BallComponents/BallScaleRippleMultiple.vue';
import BallSpinFadeLoader from './BallComponents/BallSpinFadeLoader.vue';
import BallGridBeat from './BallComponents/BallGridBeat.vue';
import BallScaleRandom from './BallComponents/BallScaleRandom.vue';
import LineScale from './LineComponents/LineScale.vue';
import LineScaleParty from './LineComponents/LineScaleParty.vue';
import LineScalePulseOut from './LineComponents/LineScalePulseOut.vue';
import LineScalePulseOutRapid from './LineComponents/LineScalePulseOutRapid.vue';
import LineSpinFadeLoader from './LineComponents/LineSpinFadeLoader.vue';
import CubeTransition from './MiscComponents/CubeTransition.vue';
import Pacman from './MiscComponents/Pacman.vue';
import SemiCircleSpin from './MiscComponents/SemiCircleSpin.vue';
import SquareSpin from './MiscComponents/SquareSpin.vue';
import TriangleSkewSpin from './MiscComponents/TriangleSkewSpin.vue';
export default {
  name: 'LvLoader',
  components: {
    BallPulse,
    BallBeat,
    BallScale,
    BallPulseRise,
    BallGridPulse,
    BallClipRotate,
    BallClipRotatePulse,
    BallClipRotateMultiple,
    BallRotate,
    BallZigZag,
    BallZigZagDeflect,
    BallTrianglePath,
    BallScaleMultiple,
    BallPulseSync,
    BallScaleRipple,
    BallScaleRippleMultiple,
    BallSpinFadeLoader,
    BallGridBeat,
    BallScaleRandom,
    LineScale,
    LineScaleParty,
    LineScalePulseOut,
    LineScalePulseOutRapid,
    LineSpinFadeLoader,
    CubeTransition,
    Pacman,
    SemiCircleSpin,
    SquareSpin,
    TriangleSkewSpin,
  },
  props: {
    type: {
      type: String,
      default: 'ball-pulse',
    },
    color: {
      type: String,
    },
    scale: {
      type: [String, Number],
    },
  },
};
</script>
<style lang="scss">
@import './loaders.scss';
</style>
