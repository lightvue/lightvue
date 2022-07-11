<template>
  <div><slot></slot></div>
</template>
<script>
import DocumentEventHelper from './DocumentEventHelper';
import { relativeMouseOffset } from './utils';

export default {
  mixins: [DocumentEventHelper],
  emits: ['drag', 'dragstart', 'dragend'],
  props: {
    disabled: Boolean,
  },

  data() {
    return {
      isDrag: false,
    };
  },

  events: {
    mousedown(event) {
      return this.dragStart(event, this.offsetByMouse);
    },

    mousemove(event) {
      return this.dragMove(event, this.offsetByMouse);
    },

    mouseup(event) {
      return this.dragEnd(event, this.offsetByMouse);
    },

    touchstart(event) {
      return this.dragStart(event, this.offsetByTouch);
    },

    touchmove(event) {
      return this.dragMove(event, this.offsetByTouch);
    },

    touchend(event) {
      return this.dragEnd(event, this.offsetByTouch);
    },

    touchcancel(event) {
      return this.dragEnd(event, this.offsetByTouch);
    },
  },

  methods: {
    isInTarget(el) {
      if (!el) return false;

      if (el === this.$el) {
        return true;
      } else {
        return this.isInTarget(el.parentElement);
      }
    },

    offsetByMouse(event) {
      return relativeMouseOffset(event, this.$el);
    },

    offsetByTouch(event) {
      const touch = event.touches.length === 0 ? event.changedTouches[0] : event.touches[0];
      return relativeMouseOffset(touch, this.$el);
    },

    dragStart(
      event,
      f = event => {
        left, top;
      }
    ) {
      if (this.disabled || (event.button !== undefined && event.button !== 0) || !this.isInTarget(event.target)) {
        return;
      }

      event.preventDefault();
      this.isDrag = true;
      this.$emit('dragstart', event, f(event), this.$el);
    },

    dragMove(
      event,
      f = event => {
        left, top;
      }
    ) {
      if (!this.isDrag) return;
      event.preventDefault();
      this.$emit('drag', event, f(event), this.$el);
    },

    dragEnd(
      event,
      f = event => {
        left, top;
      }
    ) {
      if (!this.isDrag) return;
      event.preventDefault();
      this.isDrag = false;
      this.$emit('dragend', event, f(event), this.$el);
    },
  },
};
</script>
