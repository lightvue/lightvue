<template>
  <div>
    <h3>Modifying size [PROP: star-size]</h3>
    <lv-rating :star-size="30"></lv-rating>
    <lv-rating :star-size="40"></lv-rating>
    <lv-rating :star-size="50"></lv-rating>
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
