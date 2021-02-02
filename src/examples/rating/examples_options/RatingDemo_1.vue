<template>
  <div>
    <h3>Default</h3>
    <lv-rating></lv-rating>

    <h5>Increment: 0.5 (half-stars)</h5>
    <lv-rating :increment="0.5"></lv-rating>
    <h5>Increment: 0.25 (quarter-stars)</h5>
    <lv-rating :increment="0.25"></lv-rating>
    <h5>Increment: 0.01 (fluid-rating)</h5>
    <lv-rating :increment="0.01"></lv-rating>
  </div>
</template>

<script>
import LvRating from '@/collections/rating/Rating.vue';
export default {
  components: {
    LvRating,
  },
  methods: {
    showCurrentRating(rating) {
      this.currentSelectedRating = rating === 0 ? this.currentSelectedRating : 'Click to select ' + rating + ' stars';
    },
    setCurrentSelectedRating(rating) {
      this.currentSelectedRating = 'You have Selected: ' + rating + ' stars';
    },
  },
  computed: {
    currentRatingText() {
      return this.rating ? 'You have selected ' + this.rating + ' stars' : 'No rating selected';
    },
    mouseOverRatingText() {
      return this.mouseOverRating ? 'Click to select ' + this.mouseOverRating + ' stars' : 'No Rating';
    },
  },
  data() {
    return {
      rating: null,
      resetableRating: 2,
      currentRating: 'No Rating',
      mouseOverRating: null,
    };
  },
};
</script>
