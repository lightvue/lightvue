<template>
  <div :class="containerClass" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="lv-notification__message-content">
      <span :class="iconClass"></span>
      <div class="lv-notification__message-text">
        <span class="lv-notification__title">{{ message.title }}</span>
        <div class="lv-notification__content">{{ message.content }}</div>
      </div>
      <button class="lv-notification__icon-close lv-link" @click="onCloseClick" v-if="message.closable !== false" type="button" v-ripple>
        <span class="lv-notification__icon-close-icon light-icon-x"></span>
      </button>
    </div>
    <div class="lv-notification__progress" ref="progress"></div>
  </div>
</template>

<script>
import Ripple from 'lightvue/ripple';

export default {
  props: {
    message: null,
    variant: {
      type: String,
      default: 'light',
    },
  },

  closeTimeout: null,
  mounted() {
    this.calculatePercentage();
    if (this.message.duration) {
      this.closeTimeout = setTimeout(() => {
        this.close();
      }, this.message.duration);
    }
  },
  methods: {
    close() {
      this.$emit('close', this.message);
    },
    onCloseClick() {
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
      }
      this.close();
    },
    calculatePercentage() {
      let width = 0;
      let interval = 100;
      let updateCounter = this.message.duration / interval;
      let increment = 100 / updateCounter;
      let el = this.$refs.progress;
      setInterval(() => {
        if (width > 100) {
          clearInterval();
        } else {
          width += increment;
          el.style.width = width + '%';
        }
      }, interval);
    },
  },
  computed: {
    containerClass() {
      return [
        `lv-notification__message  --${this.variant}`,
        {
          '--info': this.message.type === 'info',
          '--warn': this.message.type === 'warn',
          '--error': this.message.type === 'error',
          '--success': this.message.type === 'success',
        },
      ];
    },
    iconClass() {
      return [
        'lv-notification__message-icon',
        {
          'light-icon-info-circle': this.message.type === 'info',
          'light-icon-alert-triangle': this.message.type === 'warn',
          'light-icon-circle-x': this.message.type === 'error',
          'light-icon-circle-check': this.message.type === 'success',
        },
      ];
    },
  },
  directives: {
    ripple: Ripple,
  },
};
</script>
