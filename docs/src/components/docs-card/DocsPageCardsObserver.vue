<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DocsPageCardsObserver',
  data() {
    return {
      observer: null,
    };
  },
  props: {
    root: {
      type: [Object],
      default: null,
    },
    rootMargin: {
      type: [String, Number],
      default: '-250px 0px',
    },

    threshold: {
      type: [Array, Number],
      default: 0.1,
    },
    item: {
      type: [Object, String],
      default: 0,
    },
  },
  methods: {
    unobserve() {
      this.observer.unobserve(this.$el);
    },
  },
  mounted() {
    const options = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target.id === this.item.id) {
          this.$el.children[0].classList.toggle('active', entry.isIntersecting);
        }
      });
    }, options);
    setTimeout(() => {
      let cardEl = document.getElementById(this.item.id);
      if (cardEl) {
        this.observer.observe(cardEl);
      }
    }, 500);
  },
  beforeDestroy() {
    if (this.observer) {
      this.unobserve();
      this.observer = null;
    }
  },
};
</script>
