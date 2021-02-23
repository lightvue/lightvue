<template>
  <div>
    <h3>Modifying border width [PROP: border-width]</h3>
    <lv-rating :border-width="0"></lv-rating>
    <lv-rating :border-width="1"></lv-rating>
    <lv-rating :border-width="4"></lv-rating>

    <h3>Rounded Corners [PROP: rounded-corners]</h3>
    <lv-rating :rounded-corners="true" :border-width="4"></lv-rating>
  </div>
</template>

<script>
import LvRating from 'lightvue/rating/Rating.vue';
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
