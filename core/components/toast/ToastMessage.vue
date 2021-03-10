<template>
  <div :class="containerClass" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="lv-toast-message-content">
      <!-- <div class="lv-toast-message-text"> -->
      <div class="lv-toast-content">{{ message.content }}</div>
      <!-- </div> -->
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
  },
  computed: {
    containerClass() {
      return [
        'lv-toast-message',
        {
          'lv-toast-message-info': this.message.type === 'info',
          'lv-toast-message-warn': this.message.type === 'warn',
          'lv-toast-message-error': this.message.type === 'error',
          'lv-toast-message-success': this.message.type === 'success',
        },
      ];
    },
  },
  directives: {
    ripple: Ripple,
  },
};
</script>
