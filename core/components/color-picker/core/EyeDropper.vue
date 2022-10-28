<template>
  <div @click="start">
    <i class="light-icon-color-picker" :style="`font-size : ${iconSize}`"></i>
  </div>
</template>

<script>
import tinycolor from './tinycolor2';

export default {
  props: {
    iconSize: {
      type: String,
      default: '24px',
    },
  },

  methods: {
    async start() {
      if (window.EyeDropper) {
        // Check for Browser Compatibility
        const instance = new EyeDropper();
        try {
          const result = await instance.open();
          const hexFormat = tinycolor(result.sRGBHex).toHexString();
          this.$emit('color-selected', hexFormat);
        } catch {
          // This catch block is executed when promise gets rejected when user presses escape button instead of selecting any pixel
        }
      } else this.$toast.add({ type: 'error', title: 'Browser InCompatible', content: 'Your Browser does not support EyeDropper. Please use Google Chrome.', duration: 3000 });
    },
  },
};
</script>
