<template>
  <div ref="mask" :class="maskClass" v-if="maskVisible" @click="closable ? close() : ''">
    <transition name="lv-dialog" @before-enter="onBeforeEnter" @enter="onEnter" @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave" @appear="onAppear">
      <div ref="dialog" :class="dialogClass" :style="dialogStyle" v-if="modelValue" v-bind="$attrs" v-on="listeners" role="dialog" :aria-labelledby="ariaLabelledById" :aria-modal="modal" @click.stop>
        <div class="lv-dialog-header" v-if="showHeader">
          <slot name="header">
            <span :id="ariaLabelledById" class="lv-dialog-title" v-if="header">{{ header }}</span>
          </slot>
          <div class="lv-dialog-header-icons">
            <LvButton class="lv-dialog-header-icon lv-dialog-header-maximize lv-link" @click="maximize" v-if="maximizable" type="button" tabindex="-1" v-ripple>
              <span :class="maximizeIconClass"></span>
            </LvButton>
            <LvButton class="lv-dialog-header-icon lv-dialog-header-close lv-link" @click="close" v-if="closable" :aria-label="ariaCloseLabel" type="button" tabindex="-1" v-ripple>
              <span class="lv-dialog-header-close-icon light-icon-x"></span>
            </LvButton>
          </div>
        </div>
        <div class="lv-dialog-content" :style="contentStyle">
          <slot></slot>
        </div>
        <div class="lv-dialog-footer" v-if="footer || $slots.footer">
          <slot name="footer">{{ footer }}</slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { uniqueComponentId } from 'lightvue/utils';
import { DomHandler } from 'lightvue/utils';

import Ripple from 'lightvue/ripple';
import { trueValueMixin, preventBrowserBackMixin } from 'lightvue/mixins';

export default {
  inheritAttrs: false,
  mixins: [trueValueMixin, preventBrowserBackMixin],
  emits: ['hide', 'show', 'close'],
  props: {
    header: null,
    footer: null,
    // visible: Boolean,
    modal: {
      type: Boolean,
      default: true,
    },
    contentStyle: null,
    rtl: Boolean,
    maximizable: Boolean,
    closable: {
      type: Boolean,
      default: true,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    baseZIndex: {
      type: Number,
      default: 1000,
    },
    autoZIndex: {
      type: Boolean,
      default: true,
    },
    ariaCloseLabel: {
      type: String,
      default: 'close',
    },
    position: {
      type: String,
      default: 'center',
    },
  },
  data() {
    return {
      dialogClasses: null,
      dialogStyles: null,
      maskVisible: this.modelValue,
      maximized: false,
    };
  },
  documentKeydownListener: null,
  updated() {
    this.removeStylesFromMask();

    if (this.modelValue && !this.maskVisible) {
      this.maskVisible = true;
    }

    if (this.modal && this.$refs.mask && !DomHandler.hasClass(this.$refs.mask, 'lv-component-overlay')) {
      DomHandler.addClass(this.$refs.mask, 'lv-component-overlay');
    }
  },
  mounted() {
    this.removeStylesFromMask();
  },
  beforeDestroy() {
    this.disableDocumentSettings();
  },
  watch: {
    modelValue(value) {
      if (value === true) {
        this.preventPopstate(); // from Mixin
      } else {
        this.manuallyClosePopstate(); // From Mixin
      }
    },
  },

  methods: {
    close() {
      // this.$emit('update:visible', false);
      this.$emit('close');
      this.updateValue(false);
    },
    onBeforeEnter(el) {
      if (this.autoZIndex) {
        el.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
      }
    },
    onEnter() {
      this.$refs.mask.style.zIndex = String(parseInt(this.$refs.dialog.style.zIndex, 10) - 1);

      this.$emit('show');
      this.focus();
      this.enableDocumentSettings();
    },
    onBeforeLeave() {
      DomHandler.addClass(this.$refs.mask, 'lv-dialog-mask-leave');
    },
    onLeave() {
      this.$emit('hide');
    },
    onAfterLeave() {
      this.maskVisible = false;
      this.disableDocumentSettings();
    },
    onAppear() {
      if (this.modelValue) {
        this.onEnter();
      }
    },
    focus() {
      let focusTarget = this.$refs.dialog.querySelector('[autofocus]');
      if (focusTarget) {
        focusTarget.focus();
      }
    },
    maximize() {
      this.maximized = !this.maximized;

      if (!this.modal) {
        if (this.maximized) DomHandler.addClass(document.body, 'lv-overflow-hidden');
        else DomHandler.removeClass(document.body, 'lv-overflow-hidden');
      }
    },
    enableDocumentSettings() {
      if (this.modal) {
        DomHandler.addClass(document.body, 'lv-overflow-hidden');
        this.bindDocumentKeydownListener();
      } else if (this.maximizable && this.maximized) {
        DomHandler.addClass(document.body, 'lv-overflow-hidden');
      }
    },
    disableDocumentSettings() {
      if (this.modal) {
        DomHandler.removeClass(document.body, 'lv-overflow-hidden');
        this.unbindDocumentKeydownListener();
      } else if (this.maximizable && this.maximized) {
        DomHandler.removeClass(document.body, 'lv-overflow-hidden');
      }
    },
    onKeyDown(event) {
      if (event.which === 9) {
        event.preventDefault();
        let focusableElements = DomHandler.getFocusableElements(this.$refs.dialog);
        if (focusableElements && focusableElements.length > 0) {
          if (!document.activeElement) {
            focusableElements[0].focus();
          } else {
            let focusedIndex = focusableElements.indexOf(document.activeElement);
            if (event.shiftKey) {
              if (focusedIndex == -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();
              else focusableElements[focusedIndex - 1].focus();
            } else {
              if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();
              else focusableElements[focusedIndex + 1].focus();
            }
          }
        }
      }
    },
    bindDocumentKeydownListener() {
      if (!this.documentKeydownListener) {
        this.documentKeydownListener = this.onKeyDown.bind(this);
        window.document.addEventListener('keydown', this.documentKeydownListener);
      }
    },
    unbindDocumentKeydownListener() {
      if (this.documentKeydownListener) {
        window.document.removeEventListener('keydown', this.documentKeydownListener);
        this.documentKeydownListener = null;
      }
    },
    getPositionClass() {
      const positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
      const pos = positions.find(item => item === this.position);

      return pos ? `lv-dialog-${pos}` : '';
    },
    removeStylesFromMask() {
      if (this.$refs.mask) {
        this.dialogStyles = this.$attrs.style ? this.$attrs.style : this.$vnode.data ? this.$vnode.data.style : '';
        if (this.dialogStyles) {
          Object.keys(this.dialogStyles).forEach(key => {
            this.$refs.mask.style[key] = '';
          });
        }

        this.dialogClasses = this.$attrs.class ? this.$attrs.class : this.$vnode ? this.$vnode.data.class : '' || this.$attrs.staticClass ? this.$attrs.staticClass : this.$vnode ? this.$vnode.data.staticClass : '';
        if (this.dialogClasses) {
          this.$refs.mask.classList = 'lv-dialog-mask' + (this.modal && ' lv-component-overlay ') + this.getPositionClass();
        }
      }
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
      };
    },
    maskClass() {
      return ['lv-dialog-mask', this.getPositionClass()];
    },
    dialogClass() {
      return [
        'lv-dialog lv-component',
        {
          'lv-dialog-rtl': this.rtl,
          'lv-dialog-maximized': this.maximizable && this.maximized,
        },
        this.dialogClasses,
      ];
    },
    maximizeIconClass() {
      return [
        'lv-dialog-header-maximize-icon',
        {
          'light-icon-arrows-maximize': !this.maximized,
          'light-icon-arrows-minimize': this.maximized,
        },
      ];
    },
    dialogStyle() {
      return this.dialogStyles;
    },
    ariaId() {
      return uniqueComponentId();
    },
    ariaLabelledById() {
      return this.header != null ? this.ariaId + '_header' : null;
    },
  },
  directives: {
    ripple: Ripple,
  },
};
</script>
<style lang="scss">
@import './Dialog.scss';

.lv-dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  background-color: transparent;
  transition-property: background-color;
  z-index: 1000;
}

.lv-dialog-mask.lv-component-overlay {
  pointer-events: auto;
}

.lv-dialog {
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  max-height: 90%;
  transform: scale(1);
}

.lv-dialog-content {
  overflow-y: auto;
}

.lv-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.lv-dialog-title {
  list-style: 1;
}

.lv-dialog .lv-dialog-header-icons {
  display: flex;
  align-items: center;
}

.lv-dialog .lv-dialog-header-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

/* Fluid */
.lv-fluid .lv-dialog-footer .lv-button {
  width: auto;
}

/* Animation */
/* Center */
.lv-dialog-enter-active {
  transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.lv-dialog-leave-active {
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.lv-dialog-enter,
.lv-dialog-leave-to {
  opacity: 0;
  transform: scale(0.7);
}

.lv-dialog-mask.lv-dialog-mask-leave {
  background-color: transparent;
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.lv-dialog-top .lv-dialog,
.lv-dialog-bottom .lv-dialog,
.lv-dialog-left .lv-dialog,
.lv-dialog-right .lv-dialog,
.lv-dialog-topleft .lv-dialog,
.lv-dialog-topright .lv-dialog,
.lv-dialog-bottomleft .lv-dialog,
.lv-dialog-bottomright .lv-dialog {
  margin: 0.75rem;
  transform: translate3d(0px, 0px, 0px);
}
.lv-dialog-top .lv-dialog-enter-active,
.lv-dialog-top .lv-dialog-leave-active,
.lv-dialog-bottom .lv-dialog-enter-active,
.lv-dialog-bottom .lv-dialog-leave-active,
.lv-dialog-left .lv-dialog-enter-active,
.lv-dialog-left .lv-dialog-leave-active,
.lv-dialog-right .lv-dialog-enter-active,
.lv-dialog-right .lv-dialog-leave-active,
.lv-dialog-topleft .lv-dialog-enter-active,
.lv-dialog-topleft .lv-dialog-leave-active,
.lv-dialog-topright .lv-dialog-enter-active,
.lv-dialog-topright .lv-dialog-leave-active,
.lv-dialog-bottomleft .lv-dialog-enter-active,
.lv-dialog-bottomleft .lv-dialog-leave-active,
.lv-dialog-bottomright .lv-dialog-enter-active,
.lv-dialog-bottomright .lv-dialog-leave-active {
  transition: all 0.3s ease-out;
}
.lv-dialog-top .lv-dialog-enter,
.lv-dialog-top .lv-dialog-leave-to {
  transform: translate3d(0px, -100%, 0px);
}
.lv-dialog-bottom .lv-dialog-enter,
.lv-dialog-bottom .lv-dialog-leave-to {
  transform: translate3d(0px, 100%, 0px);
}
.lv-dialog-left .lv-dialog-enter,
.lv-dialog-left .lv-dialog-leave-to,
.lv-dialog-topleft .lv-dialog-enter,
.lv-dialog-topleft .lv-dialog-leave-to,
.lv-dialog-bottomleft .lv-dialog-enter,
.lv-dialog-bottomleft .lv-dialog-leave-to {
  transform: translate3d(-100%, 0px, 0px);
}
.lv-dialog-right .lv-dialog-enter,
.lv-dialog-right .lv-dialog-leave-to,
.lv-dialog-topright .lv-dialog-enter,
.lv-dialog-topright .lv-dialog-leave-to,
.lv-dialog-bottomright .lv-dialog-enter,
.lv-dialog-bottomright .lv-dialog-leave-to {
  transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.lv-dialog-maximized {
  -webkit-transition: none;
  transition: none;
  transform: none;
  width: 100vw !important;
  max-height: 100%;
  height: 100%;
}
.lv-dialog-maximized .lv-dialog-content {
  flex-grow: 1;
}

/* Position */
.lv-dialog-left {
  justify-content: flex-start;
}
.lv-dialog-right {
  justify-content: flex-end;
}
.lv-dialog-top {
  align-items: flex-start;
}
.lv-dialog-topleft {
  justify-content: flex-start;
  align-items: flex-start;
}
.lv-dialog-topright {
  justify-content: flex-end;
  align-items: flex-start;
}
.lv-dialog-bottom {
  align-items: flex-end;
}
.lv-dialog-bottomleft {
  justify-content: flex-start;
  align-items: flex-end;
}
.lv-dialog-bottomright {
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
