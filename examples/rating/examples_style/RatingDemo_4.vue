<template>
  <div>
    <h3>Adding glow to the stars [PROPS: glow, glow-color]</h3>
    <div style="background: #35495d; width: max-content; overflow: auto; padding: 24px; border-radius: 4px">
      <lv-rating :star-size="40" :glow="10" glow-color="#ffd055" active-color="#ffd055"></lv-rating>
      <br />
      <lv-rating :star-size="40" :glow="10" glow-color="#d4d4d4" active-color="#d4d4d4"></lv-rating>
      <br />
      <lv-rating :star-size="40" :glow="10" glow-color="#38b2ac"></lv-rating>
      <br />
      <lv-rating :star-size="40" :glow="10" glow-color="#ff5c5c" active-color="#ff3030"></lv-rating>
    </div>
  </div>
</template>

<script>
import LvRating from 'lightvue/rating';
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
