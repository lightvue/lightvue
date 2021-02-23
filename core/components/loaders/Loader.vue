<template>
    <component :is="type" :color="color" :scale="scale"/>
</template>

<script>
import './loaders.scss';
import BallPulse from "./BallComponents/BallPulse";
import BallBeat from "./BallComponents/BallBeat";
import BallScale from "./BallComponents/BallScale";
import BallPulseRise from "./BallComponents/BallPulseRise";
import BallGridPulse from "./BallComponents/BallGridPulse";
import BallClipRotate from "./BallComponents/BallClipRotate";
import BallRotate from "./BallComponents/BallRotate";
import BallClipRotatePulse from "./BallComponents/BallClipRotatePulse";
import BallClipRotateMultiple from "./BallComponents/BallClipRotateMultiple";
import BallZigZag from "./BallComponents/BallZigZag";
import BallZigZagDeflect from "./BallComponents/BallZigZagDeflect";
import BallTrianglePath from "./BallComponents/BallTrianglePath";
import BallScaleMultiple from "./BallComponents/BallScaleMultiple";
import BallPulseSync from "./BallComponents/BallPulseSync";
import BallScaleRipple from "./BallComponents/BallScaleRipple";
import BallScaleRippleMultiple from "./BallComponents/BallScaleRippleMultiple";
import BallSpinFadeLoader from "./BallComponents/BallSpinFadeLoader";
import BallGridBeat from "./BallComponents/BallGridBeat";
import BallScaleRandom from "./BallComponents/BallScaleRandom";
import LineScale from "./LineComponents/LineScale";
import LineScaleParty from "./LineComponents/LineScaleParty";
import LineScalePulseOut from "./LineComponents/LineScalePulseOut";
import LineScalePulseOutRapid from "./LineComponents/LineScalePulseOutRapid";
import LineSpinFadeLoader from "./LineComponents/LineSpinFadeLoader";
import CubeTransition from "./MiscComponents/CubeTransition";
import Pacman from "./MiscComponents/Pacman";
import SemiCircleSpin from "./MiscComponents/SemiCircleSpin";
import SquareSpin from "./MiscComponents/SquareSpin";
import TriangleSkewSpin from "./MiscComponents/TriangleSkewSpin";
export default {
    name: 'LvLoader',
    components: {
        BallPulse, BallBeat, BallScale, BallPulseRise, BallGridPulse, BallClipRotate, BallClipRotatePulse, BallClipRotateMultiple, BallRotate, BallZigZag, BallZigZagDeflect,
        BallTrianglePath, BallScaleMultiple, BallPulseSync, BallScaleRipple, BallScaleRippleMultiple, BallSpinFadeLoader, BallGridBeat, BallScaleRandom,
        LineScale, LineScaleParty, LineScalePulseOut, LineScalePulseOutRapid, LineSpinFadeLoader, CubeTransition, Pacman, SemiCircleSpin, SquareSpin, TriangleSkewSpin
    },
    props:{
        type: {
            type: String,
            default: 'ball-pulse'
        },
        color: {
            type: String,
        },
        scale: {
            type: [String, Number]
        }
    }
}
</script>
