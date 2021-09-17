<template>
  <transition :name="name" @before-appear="beforeAppear" @appear="appear" @after-appear="afterAppear" @appear-cancelled="appearCancelled" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled">
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: 'LvCollapsible',
  // inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: false,
      default: 'collapsible',
    },
    orientation: {
      type: String,
      required: false,
      default: 'vertical',
      validator: value => {
        return ['vertical', 'horizontal'].includes(value);
      },
    },
    duration: {
      type: Number,
      required: false,
      default: 350,
    },
  },

  watch: {
    orientation() {
      this.clearCachedOrientations();
    },
  },

  data() {
    return {
      cachedStyles: null,
      comp_orientation: '',
    };
  },

  computed: {
    transition() {
      let transitions = [];

      Object.keys(this.cachedStyles).forEach(key => {
        transitions.push(`${this.convertToCssProperty(key)} ${this.duration}ms `);
      });

      return transitions.join(', ');
    },
    computedOrientation() {
      if (this.orientation == 'horizontal') {
        return (this.comp_orientation = 'width');
      } else {
        return (this.comp_orientation = 'height');
      }
    },
  },

  methods: {
    beforeAppear(el) {
      // Emit the event to the parent
      this.$emit('before-appear', el);
    },

    appear(el) {
      this.$emit('appear', el);
    },

    afterAppear(el) {
      this.$emit('after-appear', el);
    },

    appearCancelled(el) {
      this.$emit('appear-cancelled', el);
    },

    beforeEnter(el) {
      // Emit the event to the parent
      this.$emit('before-enter', el);
    },

    enter(el, done) {
      this.detectAndCacheOrientations(el);

      this.setClosedOrientations(el);
      this.hideOverflow(el);
      this.forceRepaint(el);
      this.setTransition(el);
      this.setOpenedOrientations(el);

      // Emit the event to the parent
      this.$emit('enter', el, done);

      setTimeout(done, this.duration);
    },

    afterEnter(el) {
      // Clean up inline styles
      this.unsetOverflow(el);
      this.unsetTransition(el);
      this.unsetOrientations(el);
      this.clearCachedOrientations();

      // Emit the event to the parent
      this.$emit('after-enter', el);
    },

    enterCancelled(el) {
      // Emit the event to the parent
      this.$emit('enter-cancelled', el);
    },

    beforeLeave(el) {
      // Emit the event to the parent
      this.$emit('before-leave', el);
    },

    leave(el, done) {
      // For some reason, @leave triggered when starting
      // from open state on page load. So for safety,
      // check if the Orientations have been cached.
      this.detectAndCacheOrientations(el);

      // The order of applying styles is less important

      this.setOpenedOrientations(el);
      this.hideOverflow(el);
      this.forceRepaint(el);
      this.setTransition(el);
      this.setClosedOrientations(el);

      // Emit the event to the parent
      this.$emit('leave', el, done);

      // Call done() when the transition ends
      // to trigger the @after-leave event.
      // This will also cause v-show
      // to reapply 'display: none'.
      setTimeout(done, this.duration);
    },

    afterLeave(el) {
      // Clean up inline styles
      this.unsetOverflow(el);
      this.unsetTransition(el);
      this.unsetOrientations(el);
      this.clearCachedOrientations();

      // Emit the event to the parent
      this.$emit('after-leave', el);
    },

    leaveCancelled(el) {
      // Emit the event to the parent
      this.$emit('leave-cancelled', el);
    },

    detectAndCacheOrientations(el) {
      // Cache actual Orientations
      // only once to void invalid values when
      // triggering during a transition
      if (this.cachedStyles) return;

      const visibility = el.style.visibility;
      const display = el.style.display;

      // Trick to get the width and
      // height of a hidden element
      el.style.visibility = 'hidden';
      el.style.display = '';
      el.style['backface-visibility'] = 'hidden';

      this.cachedStyles = this.detectRelevantOrientations(el);

      // Restore any original styling
      el.style.visibility = visibility;
      el.style.display = display;
    },

    clearCachedOrientations() {
      this.cachedStyles = null;
    },

    detectRelevantOrientations(el) {
      // These properties will be transitioned
      if (this.computedOrientation === 'height') {
        return {
          height: el.offsetHeight + 'px',
          paddingTop: el.style.paddingTop || this.getCssValue(el, 'padding-top'),
          paddingBottom: el.style.paddingBottom || this.getCssValue(el, 'padding-bottom'),
        };
      }

      if (this.computedOrientation === 'width') {
        return {
          width: el.offsetWidth + 'px',
          paddingLeft: el.style.paddingLeft || this.getCssValue(el, 'padding-left'),
          paddingRight: el.style.paddingRight || this.getCssValue(el, 'padding-right'),
        };
      }

      return {};
    },

    setTransition(el) {
      el.style.transition = this.transition;
    },

    unsetTransition(el) {
      el.style.transition = '';
    },

    hideOverflow(el) {
      el.style.overflow = 'hidden';
    },

    unsetOverflow(el) {
      el.style.overflow = '';
    },

    setClosedOrientations(el) {
      Object.keys(this.cachedStyles).forEach(key => {
        el.style[key] = '0';
      });
    },

    setOpenedOrientations(el) {
      Object.keys(this.cachedStyles).forEach(key => {
        el.style[key] = this.cachedStyles[key];
      });
    },

    unsetOrientations(el) {
      Object.keys(this.cachedStyles).forEach(key => {
        el.style[key] = '';
      });
    },

    forceRepaint(el) {
      // Force repaint to make sure the animation is triggered correctly.

      getComputedStyle(el)[this.computedOrientation];
    },

    getCssValue(el, style) {
      return getComputedStyle(el, null).getPropertyValue(style);
    },

    convertToCssProperty(style) {
      const upperChars = style.match(/([A-Z])/g);

      if (!upperChars) {
        return style;
      }

      for (let i = 0, n = upperChars.length; i < n; i++) {
        style = style.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
      }

      if (style.slice(0, 1) === '-') {
        style = style.slice(1);
      }

      return style;
    },
  },
};
</script>
<style lang="sass">
@import './collapsible.scss'
</style>
