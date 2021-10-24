<template>
  <svg :width="width" :height="height" version="1.1" :preserveAspectRatio="preserveAspectRatio" :viewBox="viewBox || `0 0 ${width} ${height}`">
    <rect :style="`fill: url(${baseUrl}#${idGradient})`" :clip-path="`url(${baseUrl}#${idClip})`" x="0" y="0" width="100%" height="100%" />

    <defs>
      <clipPath :id="idClip">
        <slot>
          <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
        </slot>
      </clipPath>

      <linearGradient :id="idGradient">
        <gradient-stop offset="0%" :stop-color="primaryColor" :stop-opacity="primaryOpacity" values="-2; 1" :dur="`${speed}s`" :animate="animate" />
        <gradient-stop offset="50%" :stop-color="secondaryColor" :stop-opacity="secondaryOpacity" values="-1.5; 1.5" :dur="`${speed}s`" :animate="animate" />
        <gradient-stop offset="100%" :stop-color="primaryColor" :stop-opacity="primaryOpacity" values="-1; 2" :dur="`${speed}s`" :animate="animate" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
import GradientStop from './GradientStop.vue';
export default {
  name: 'LvSkeleton',
  components: {
    GradientStop,
  },
  props: {
    width: {
      type: [Number, String],
      default: 200
    },
    height: {
      type: [Number, String],
      default: 20
    },
    viewBox: {
      type: String,
    },
    preserveAspectRatio: {
      type: String,
      default: 'xMinYMin meet',
    },
    speed: {
      type: Number,
      default: 2,
    },
    baseUrl: {
      type: String,
      default: '',
    },
    primaryColor: {
      type: String,
      default: '#f9f9f9',
    },
    secondaryColor: {
      type: String,
      default: '#ecebeb',
    },
    primaryOpacity: {
      type: Number,
      default: 1,
    },
    secondaryOpacity: {
      type: Number,
      default: 1,
    },
    uniqueKey: {
      type: String,
      //   required: true,
      //   default: 'skeleton' // Must be unique
    },
    animate: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    idClip() {
      return `${this.uniqueKey || this.uid()}-idClip`;
    },
    idGradient() {
      return `${this.uniqueKey || this.uid()}-idGradient`;
    },
  },
  methods: {
    uid() {
      return Math.random().toString(36).substring(2);
    },
  },
};
</script>
