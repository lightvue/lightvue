<template>
  <div>
    <h3>Read-Only rating field [PROP: read-only]</h3>
    <lv-rating :rating="3.8" :read-only="true" :increment="0.01"></lv-rating>

    <h3>Show/Hide Rating Value [PROP: show-rating]</h3>
    <lv-rating :show-rating="true"></lv-rating>
    <lv-rating :show-rating="false"></lv-rating>

    <h3>Specifying preset value [PROP: rating]</h3>
    <h5>Rounded preset value</h5>
    <lv-rating :rating="4"></lv-rating>
    <h5>Non-rounded preset value [PROP: round-start-rating]</h5>
    <lv-rating :rating="4.67" :round-start-rating="false"></lv-rating>
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
