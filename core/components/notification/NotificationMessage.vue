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
  },
  closeTimeout: null,
  mounted() {
    if (this.message.duration) {
      this.calculatePercentage();
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
          console.log(el.style.width);
        }
      }, interval);
    },
  },
  computed: {
    containerClass() {
      if (this.message.variant === 'light') {
        return [
          'lv-notification__message',
          {
            '--info-light': this.message.type === 'info',
            '--warn-light': this.message.type === 'warn',
            '--error-light': this.message.type === 'error',
            '--success-light': this.message.type === 'success',
          },
        ];
      } else if (this.message.variant === 'dark') {
        return [
          'lv-notification__message',
          {
            '--info-dark': this.message.type === 'info',
            '--warn-dark': this.message.type === 'warn',
            '--error-dark': this.message.type === 'error',
            '--success-dark': this.message.type === 'success',
          },
        ];
      } else if (this.message.variant === 'dark-left-border') {
        return [
          'lv-notification__message',
          {
            '--info-dark-left-border': this.message.type === 'info',
            '--warn-dark-left-border': this.message.type === 'warn',
            '--error-dark-left-border': this.message.type === 'error',
            '--success-dark-left-border': this.message.type === 'success',
          },
        ];
      } else if (this.message.variant === 'light-left-border') {
        return [
          'lv-notification__message',
          {
            '--info-light-left-border': this.message.type === 'info',
            '--warn-light-left-border': this.message.type === 'warn',
            '--error-light-left-border': this.message.type === 'error',
            '--success-light-left-border': this.message.type === 'success',
          },
        ];
      } else {
        return [
          'lv-notification__message',
          {
            '--info-light': this.message.type === 'info',
            '--warn-light': this.message.type === 'warn',
            '--error-light': this.message.type === 'error',
            '--success-light': this.message.type === 'success',
          },
        ];
      }
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
