<template>
  <div>
    <h3>Default (5 stars)</h3>
    <lv-rating></lv-rating>
    <h5>Using max-rating prop</h5>
    <lv-rating :max-rating="2"></lv-rating>
    <lv-rating :max-rating="3"></lv-rating>
    <lv-rating :max-rating="4"></lv-rating>
  </div>
</template>

<script>
import LvRating from "@/collections/rating/Rating.vue";
export default {
  components: {
    LvRating,
  },
  methods: {
    showCurrentRating(rating) {
      this.currentSelectedRating =
        rating === 0
          ? this.currentSelectedRating
          : "Click to select " + rating + " stars";
    },
    setCurrentSelectedRating(rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    },
  },
  computed: {
    currentRatingText() {
      return this.rating
        ? "You have selected " + this.rating + " stars"
        : "No rating selected";
    },
    mouseOverRatingText() {
      return this.mouseOverRating
        ? "Click to select " + this.mouseOverRating + " stars"
        : "No Rating";
    },
  },
  data() {
    return {
      rating: null,
      resetableRating: 2,
      currentRating: "No Rating",
      mouseOverRating: null,
    };
  },
};
</script>
