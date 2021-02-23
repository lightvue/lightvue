<template>
  <div :class="containerClass" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="lv-toast-message-content">
      <span :class="iconClass"></span>
      <div class="lv-toast-message-text">
        <span class="lv-toast-summary">{{ message.summary }}</span>
        <div class="lv-toast-detail">{{ message.detail }}</div>
      </div>
      <button class="lv-toast-icon-close lv-link" @click="onCloseClick" v-if="message.closable !== false" type="button" v-ripple>
        <span class="lv-toast-icon-close-icon light-icon-x"></span>
      </button>
    </div>
  </div>
</template>

<script>
import Ripple from 'lightvue/ripple';

export default {
  props: {
    message: null,
  },
  closeTimeout: null,
  mounted() {
    if (this.message.life) {
      this.closeTimeout = setTimeout(() => {
        this.close();
      }, this.message.life);
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
  },
  computed: {
    containerClass() {
      return [
        'lv-toast-message',
        {
          'lv-toast-message-info': this.message.severity === 'info',
          'lv-toast-message-warn': this.message.severity === 'warn',
          'lv-toast-message-error': this.message.severity === 'error',
          'lv-toast-message-success': this.message.severity === 'success',
        },
      ];
    },
    iconClass() {
      return [
        'lv-toast-message-icon',
        {
          'light-icon-info-circle': this.message.severity === 'info',
          'light-icon-alert-triangle': this.message.severity === 'warn',
          'light-icon-circle-x': this.message.severity === 'error',
          'light-icon-circle-check': this.message.severity === 'success',
        },
      ];
    },
  },
  directives: {
    ripple: Ripple,
  },
};
</script>
