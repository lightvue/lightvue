<template>
  <transition name="lv-overlaypanel__transition" @enter="onEnter" @leave="onLeave">
    <div class="lv-overlaypanel lv-component" v-if="visible" ref="overlayRef">
      <div class="lv-overlaypanel__content" @click="onContentClick">
        <slot></slot>
      </div>
      <LvButton :class="{ 'lv-overlaypanel__close-btn': true, '--right-align': alignRight }" icon="light-icon-x" rounded @click="hide" v-if="showCloseIcon" :aria-label="ariaCloseLabel" type="button" />
    </div>
  </transition>
</template>

<script>
import { ConnectedOverlayScrollHandler } from 'lightvue/utils';
import { preventBrowserBackMixin } from 'lightvue/mixins';

import { DomHandler } from 'lightvue/utils';

export default {
  name: 'LvOverlaypanel',
  mixins: [preventBrowserBackMixin],
  props: {
    dismissable: {
      type: Boolean,
      default: true,
    },
    showCloseIcon: {
      type: Boolean,
      default: false,
    },
    appendTo: {
      type: String,
      default: null,
    },
    baseZIndex: {
      type: Number,
      default: 0,
    },
    autoZIndex: {
      type: Boolean,
      default: true,
    },
    ariaCloseLabel: {
      type: String,
      default: 'close',
    },
    alignRight: {
      type: Boolean,
      default: false,
    },
    closeOnResize: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      visible: false,
    };
  },
  selfClick: false,
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  // container: null,
  beforeDestroy() {
    this.onBeforeUnmount();
  },
  beforeUnmount() {
    this.onBeforeUnmount();
  },

  methods: {
    handleOnBrowserBack() {
      // Called from Mixin
      if (this.visible === true) {
        this.hide();
      }
    },
    toggle(event, target) {
      let domTarget = event ? event.currentTarget : target;
      // console.log(domTarget);
      if (this.visible) this.hide();
      else this.show(domTarget);
    },
    show(target) {
      this.visible = true;
      this.target = target;
      this.preventPopstate(); // from Mixin
    },
    hide() {
      this.visible = false;
      this.manuallyClosePopstate(); // From Mixin
    },
    onContentClick() {
      this.selfClick = true;
    },

    onEnter() {
      this.appendContainer();
      this.alignOverlay();
      if (this.dismissable) {
        this.bindOutsideClickListener();
      }
      if (this.closeOnResize) {
        this.bindScrollListener();
        this.bindResizeListener();
      }
      if (this.autoZIndex) {
        this.$refs.overlayRef.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
      }
    },

    onLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
    },
    alignOverlay() {
      DomHandler.absolutePosition(this.$refs.overlayRef, this.target);

      const containerOffset = DomHandler.getOffset(this.$refs.overlayRef);
      const targetOffset = DomHandler.getOffset(this.target);
      let arrowLeft = 0;

      if (containerOffset.left < targetOffset.left) {
        arrowLeft = targetOffset.left - containerOffset.left;
      }
      this.$refs.overlayRef.style.setProperty('--overlay-arrow-left', `${arrowLeft}px`);
      this.$refs.overlayRef.style.setProperty('--overlay-arrow-pos', `calc(var(--overlay-arrow-left, 0) + 1.25rem)`);

      if (containerOffset.top < targetOffset.top) {
        DomHandler.addClass(this.$refs.overlayRef, '--flipped');
      }
      //for alignRight prop:
      if (this.alignRight) {
        let targetWidth = this.target.getBoundingClientRect().right - this.target.getBoundingClientRect().left;
        let overlayWidth = this.$refs.overlayRef.getBoundingClientRect().right - this.$refs.overlayRef.getBoundingClientRect().left;
        this.$refs.overlayRef.style.left = `${targetOffset.left - (overlayWidth - targetWidth)}px`;
        this.$refs.overlayRef.style.setProperty('--overlay-arrow-pos', `calc(100% - 40px)`);
      }
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = event => {
          if (this.visible && !this.selfClick && !this.isTargetClicked(event)) {
            // this.visible = false;
            this.hide();
          }
          this.selfClick = false;
        };
        document.addEventListener('click', this.outsideClickListener);
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener);
        this.outsideClickListener = null;
        this.selfClick = false;
      }
    },

    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
          if (this.visible) {
            // this.visible = false;
            this.hide();
          }
        });
      }

      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = () => {
          if (this.visible) {
            // this.visible = false;
            this.hide();
          }
        };
        window.addEventListener('resize', this.resizeListener);
      }
    },
    unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    },
    isTargetClicked() {
      return this.target && (this.target === event.target || this.target.contains(event.target));
    },
    appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') document.body.appendChild(this.$refs.overlayRef);
        else document.getElementById(this.appendTo).appendChild(this.$refs.overlayRef);
      }
    },
    restoreAppend() {
      if (this.$refs.overlayRef && this.appendTo) {
        if (this.appendTo === 'body') document.body.removeChild(this.$refs.overlayRef);
        else document.getElementById(this.appendTo).removeChild(this.$refs.overlayRef);
      }
    },
    onBeforeUnmount() {
      this.restoreAppend();
      if (this.dismissable) {
        this.unbindOutsideClickListener();
      }

      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.unbindResizeListener();
      this.target = null;
      // this.$refs.overlayRef = null;
    },
    // containerRef(el) {
    //     this.$refs.overlayRef = el;
    // }
  },
};
</script>
<style lang="scss">
@import './OverlayPanel.scss';
@import './OverlayPanelTheme.scss';
</style>
