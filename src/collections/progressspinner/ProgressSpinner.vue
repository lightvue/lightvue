<template>
    <span class="lv-progress-spinner" role="alert" aria-busy="true" :style="{display: 'inline-block', height: size, width: size}">
        <svg class="lv-progress-spinner-svg" viewBox="25 25 50 50" :style="svgStyle">
            <circle class="lv-progress-spinner-circle" cx="50" cy="50" r="20" :fill="fill" :stroke-width="strokeWidth" :style="animStyle" strokeMiterlimit="10" />
        </svg>
    </span>
</template>

<script>
export default {
    name: 'LvProgressspinner',
    props: {
        strokeWidth: {
            type: String,
            default: '2'
        },
        fill: {
            type: String,
            default: 'none'
        },
        animationDuration: {
            type: String,
            default: '2s'
        },
        size: {
            type: String,
            default: '75px'
        },
        color: {
            type: String,
            default: "#607c8a",
        },
    },
    computed: {
        svgStyle() {
            return {
                'animation-duration': this.animationDuration
            };
        },
        animStyle() {
            return {
                'animation-duration': this.animationDuration,
                stroke: this.color
            };
        }
    }
}
</script>

<style>
.lv-progress-spinner {
    position: relative;
    margin: 0 auto;
    /* width: 100px; */
    /* height: 100px; */
    display: inline-block;
}

.lv-progress-spinner::before {
     content: '';
     display: block;
     padding-top: 100%;
}

.lv-progress-spinner-svg {
    animation: lv-progress-spinner-rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.lv-progress-spinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: #d62d20;
    animation: lv-progress-spinner-dash 1.5s ease-in-out infinite;
     /* lv-progress-spinner-color 6s ease-in-out infinite; */
    stroke-linecap: round;
}

@keyframes lv-progress-spinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes lv-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes lv-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}
</style>
