<template>
  <div>
    <h3>Default</h3>
    <lv-rating></lv-rating>
    <h5>Changing active color [PROP: active-color]</h5>
    <lv-rating></lv-rating>
    <lv-rating active-color="#607C8A"></lv-rating>
    <lv-rating active-color="#03FC53"></lv-rating>
    <lv-rating active-color="#FF3E3E"></lv-rating>
    <h5>Changing inactive color [PROP: inactive-color]</h5>
    <lv-rating></lv-rating>
    <lv-rating inactive-color="#BCD7E2"></lv-rating>
    <lv-rating inactive-color="#B6FFD0"></lv-rating>
    <lv-rating inactive-color="#FAC4C4"></lv-rating>
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
