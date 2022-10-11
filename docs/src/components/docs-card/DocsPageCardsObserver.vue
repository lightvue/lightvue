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
      observed: false,
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
    initObserver() {
      let cardEl = document.getElementById(this.item.id);
      if (cardEl && !this.observed) {
        this.observer.observe(cardEl);
        this.observed = true;
      }
    },
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
    this.initObserver();
    setTimeout(() => {
      this.initObserver();
    }, 300);
    setTimeout(() => {
      this.initObserver();
    }, 500);
    setTimeout(() => {
      this.initObserver();
    }, 1000);
    setTimeout(() => {
      this.initObserver();
    }, 2000);
  },
  beforeDestroy() {
    if (this.observer) {
      this.unobserve();
      this.observer = null;
    }
  },
};
</script>
